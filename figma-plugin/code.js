// =============================================================
//  HTML → Figma Builder  |  code.js  v7
//  General-Purpose UX Audit Design Builder
//
//  Supported section types (15 total):
//  EXISTING: pageHeader, accordion, divider, textSection, principle
//  NEW:  hero, stats, alert, table, cardGrid, list,
//        heading, infoBox, cta, keyValue, image, badgeRow, twoColumn
//
//  Layouts:
//    "sidebar" — header + left nav + main content  (default)
//    "full"    — header + full-width main (no sidebar)
//
//  Rendering fix (v6→v7 retained):
//    Text in vertical auto-layout frames uses hRow() — a horizontal
//    wrapper whose counter:'AUTO' axis reliably exposes text height.
// =============================================================

figma.showUI(__html__, { width: 480, height: 520, title: 'HTML → Figma Builder' });

// ── Utilities ────────────────────────────────────────────────
function progress(pct, label) {
  figma.ui.postMessage({ type:'progress', pct:pct, label:label });
}
function errStr(e) {
  if (typeof e === 'string') return e;
  if (e && e.message)        return e.message;
  return String(e);
}

// ── Colour ───────────────────────────────────────────────────
function rgb(hex) {
  var n = parseInt(hex.replace('#',''), 16);
  return { r:((n>>16)&255)/255, g:((n>>8)&255)/255, b:(n&255)/255 };
}
function solidFill(hex) { return [{ type:'SOLID', color:rgb(hex) }]; }
function noFill()        { return []; }

// ── Font loading ─────────────────────────────────────────────
var _loaded = {};
async function loadFonts() {
  var all = ['Thin','ExtraLight','Light','Regular','Medium',
             'SemiBold','Semi Bold','Bold','ExtraBold','Black'];
  for (var i=0; i<all.length; i++) {
    try {
      await figma.loadFontAsync({ family:'Inter', style:all[i] });
      _loaded[all[i]] = true;
    } catch(_) {}
  }
  if (!_loaded['Regular']) {
    await figma.loadFontAsync({ family:'Inter', style:'Regular' });
    _loaded['Regular'] = true;
  }
}
function fs(w) {
  var p = {
    300:['Light','ExtraLight','Regular'],
    400:['Regular'],
    500:['Medium','Regular'],
    600:['SemiBold','Semi Bold','Bold','Regular'],
    700:['Bold','SemiBold','Semi Bold','Regular'],
    800:['ExtraBold','Bold','Regular'],
    900:['Black','ExtraBold','Bold','Regular']
  };
  var list = p[w] || ['Regular'];
  for (var i=0; i<list.length; i++) { if (_loaded[list[i]]) return list[i]; }
  return 'Regular';
}

// ── Per-side stroke ──────────────────────────────────────────
function stroke(node, hex, sides) {
  node.strokes     = solidFill(hex);
  node.strokeAlign = 'INSIDE';
  try {
    node.strokeTopWeight    = sides.t||0;
    node.strokeRightWeight  = sides.r||0;
    node.strokeBottomWeight = sides.b||0;
    node.strokeLeftWeight   = sides.l||0;
  } catch(_) {
    node.strokeWeight = Math.max(sides.t||0,sides.r||0,sides.b||0,sides.l||0)||1;
  }
}

// ── Frame factory ────────────────────────────────────────────
function F(name, opts) {
  var f = figma.createFrame();
  f.name  = name;
  f.fills = opts.bg ? solidFill(opts.bg) : noFill();
  if (opts.radius) f.cornerRadius = opts.radius;
  if (opts.clip)   f.clipsContent = true;

  if (opts.dir) {
    f.layoutMode            = opts.dir==='h' ? 'HORIZONTAL' : 'VERTICAL';
    f.primaryAxisSizingMode = opts.primary || 'AUTO';
    f.counterAxisSizingMode = opts.counter || 'AUTO';
    f.itemSpacing           = opts.gap     || 0;
    var p = opts.pad || [0,0,0,0];
    f.paddingTop=p[0]||0; f.paddingRight=p[1]||0;
    f.paddingBottom=p[2]||0; f.paddingLeft=p[3]||0;
    if (opts.align) f.primaryAxisAlignItems  = opts.align;
    if (opts.cross) f.counterAxisAlignItems  = opts.cross;
  }
  if (opts.w && opts.h) f.resize(opts.w, opts.h);
  else if (opts.w)      f.resize(opts.w, 100);

  if (opts.shadow) {
    f.effects = [{
      type:'DROP_SHADOW',
      color:{r:0,g:0,b:0,a:opts.shadowA||0.07},
      offset:{x:0,y:opts.shadowY||1},
      radius:opts.shadowR||4, spread:0,
      visible:true, blendMode:'NORMAL'
    }];
  }
  if (opts.border) {
    f.strokes      = solidFill(opts.border);
    f.strokeWeight = opts.borderW||1;
    f.strokeAlign  = 'INSIDE';
  }
  return f;
}

// ── Text factory ─────────────────────────────────────────────
function T(content, opts, w) {
  var t = figma.createText();
  t.name     = opts.name || String(content).slice(0,40);
  t.fontName = { family:'Inter', style:fs(opts.w||400) };
  t.fontSize = opts.s || 14;
  t.fills    = solidFill(opts.c || '#0A0A0A');
  if (opts.lh)    t.lineHeight    = { value:opts.lh, unit:'PIXELS' };
  if (opts.ls)    t.letterSpacing = { value:opts.ls, unit:'PERCENT' };
  if (opts.upper) t.textCase      = 'UPPER';
  t.characters = String(content || '');
  if (w && w > 0) {
    t.resize(w, 50);
    try { t.textAutoResize = 'HEIGHT'; } catch(_) {}
  }
  return t;
}

// ── hRow — horizontal wrapper for text in vertical frames ────
//  Proven pattern: horizontal counter:'AUTO' height adapts to text.
function hRow(content, opts, w) {
  var wrap = figma.createFrame();
  wrap.name  = 'TR';
  wrap.fills = noFill();
  wrap.layoutMode            = 'HORIZONTAL';
  wrap.primaryAxisSizingMode = 'FIXED';
  wrap.counterAxisSizingMode = 'AUTO';
  wrap.paddingTop = wrap.paddingRight = wrap.paddingBottom = wrap.paddingLeft = 0;
  wrap.itemSpacing = 0;
  wrap.resize(w, 50);
  wrap.appendChild(T(content, opts, w));
  return wrap;
}

// =============================================================
//  SHARED COMPONENT HELPERS
// =============================================================

// Badge pill
function badge(label, bg, fg, opts) {
  opts = opts || {};
  var b = F('Badge', {
    bg:bg, dir:'h', primary:'AUTO', counter:'AUTO',
    pad:[opts.py||4, opts.px||10, opts.py||4, opts.px||10],
    cross:'CENTER', radius:opts.radius!==undefined?opts.radius:999
  });
  b.appendChild(T(label, {s:opts.s||11,w:opts.fw||600,c:fg}));
  return b;
}

// A/AA/AAA level badge
function lvlBadge(level) {
  var m = {A:{bg:'#DCFCE7',fg:'#15803D'},AA:{bg:'#EEF2FF',fg:'#4338CA'},AAA:{bg:'#FEF3C7',fg:'#92400E'}};
  var c = m[level]||m.A;
  return badge(level, c.bg, c.fg, {px:8,py:3,s:11,fw:700,radius:4});
}

// W3C circle mark
function w3c(size) {
  size = size||36;
  var c = F('W3C', {
    bg:'#FFFFFF', radius:size/2,
    dir:'h', primary:'FIXED', counter:'FIXED',
    align:'CENTER', cross:'CENTER', w:size, h:size,
    border:'#D1D5DB', borderW:2
  });
  c.resize(size, size);
  c.appendChild(T('W3C', {s:size>50?13:9,w:900,c:'#003366'}));
  return c;
}

// Button component
function buildButton(label, variant) {
  variant = variant || 'primary';
  var bg  = variant==='primary' ? '#0066FF' : (variant==='ghost' ? 'transparent' : '#F3F4F6');
  var fg  = variant==='primary' ? '#FFFFFF' : '#525252';
  var btn = F('Btn: '+label, {
    bg:bg, dir:'h', primary:'AUTO', counter:'AUTO',
    pad:[9,20,9,20], cross:'CENTER', radius:6
  });
  if (variant==='secondary') { btn.strokes = solidFill('#E5E7EB'); btn.strokeWeight=1; btn.strokeAlign='INSIDE'; }
  if (variant==='outline')   { btn.strokes = solidFill('#0066FF'); btn.strokeWeight=1; btn.strokeAlign='INSIDE'; btn.fills=noFill(); }
  btn.appendChild(T(label, {s:13,w:600,c:fg}));
  return btn;
}

// Section H2 heading (used internally in several builders)
function sectionH2(text, w, opts) {
  opts = opts || {};
  var h2 = F('H2', {
    dir:'h', primary:'FIXED', counter:'AUTO',
    pad:[0,0,opts.pb||10,0], w:w
  });
  if (!opts.noBorder) stroke(h2, '#E8F0F8', {b:2});
  h2.appendChild(T(text, {s:opts.s||20,w:700,c:opts.c||'#003366',lh:28}, w));
  return h2;
}

// Stat change pill
function changePill(text, trend) {
  var bg = trend==='up' ? '#DCFCE7' : (trend==='down' ? '#FEE2E2' : '#F3F4F6');
  var fg = trend==='up' ? '#15803D' : (trend==='down' ? '#B91C1C' : '#525252');
  return badge(text, bg, fg, {px:8,py:3,s:11,fw:600,radius:4});
}

// =============================================================
//  HEADER
// =============================================================
function buildHeader(spec, W, sw) {
  var hh  = (spec.header&&spec.header.height)||56;
  var hBg = (spec.header&&spec.header.background)||'#FFFFFF';

  var header = F('Header', {
    bg:hBg, dir:'h', primary:'FIXED', counter:'FIXED',
    cross:'CENTER', gap:0, w:W, h:hh, shadow:true
  });
  stroke(header, '#E5E7EB', {b:1});

  var logoW = sw > 0 ? sw : 240;
  var logo = F('Logo', {
    bg:hBg, dir:'h', primary:'FIXED', counter:'FIXED',
    cross:'CENTER', gap:10, pad:[0,20,0,20], w:logoW, h:hh
  });
  if (sw > 0) stroke(logo, '#E5E7EB', {r:1});

  var mark = F('Mark', {
    bg:'#0066FF', radius:8,
    dir:'h', primary:'FIXED', counter:'FIXED',
    align:'CENTER', cross:'CENTER', w:32, h:32
  });
  mark.appendChild(T('W3C', {s:10,w:800,c:'#FFFFFF'}));
  logo.appendChild(mark);

  var words = F('Words', {dir:'v',primary:'AUTO',counter:'AUTO',gap:2});
  words.appendChild(T('W3C',                {s:13,w:700,c:'#0A0A0A'}));
  words.appendChild(T('Web Accessibility',  {s:10,w:500,c:'#737373'}));
  logo.appendChild(words);
  header.appendChild(logo);

  var stripW = W - logoW;
  var strip  = F('Title Strip', {
    dir:'h', primary:'FIXED', counter:'FIXED',
    cross:'CENTER', gap:12, pad:[0,20,0,24], w:stripW, h:hh
  });
  var titleW = stripW - 44 - 12 - 36;
  strip.appendChild(T((spec.header&&spec.header.title)||'',
    {s:14,w:600,c:'#3D3D3D',name:'Header Title'}, titleW));
  strip.appendChild(w3c(36));
  header.appendChild(strip);

  return header;
}

// =============================================================
//  SIDEBAR
// =============================================================
function buildSidebar(spec) {
  var sSpec = spec.sidebar||{};
  var sw    = sSpec.width||288;
  var sbg   = sSpec.background||'#F5F7FA';
  var tw    = sw - 32;

  var sidebar = F('Sidebar', {
    bg:sbg, dir:'v', primary:'AUTO', counter:'FIXED', gap:0, w:sw
  });
  stroke(sidebar, '#E5E7EB', {r:1});

  var lbl = F('TOC Label', {
    bg:sbg, dir:'h', primary:'FIXED', counter:'FIXED',
    pad:[12,16,10,16], w:sw, h:38
  });
  stroke(lbl, '#E5E7EB', {b:1});
  lbl.appendChild(T(sSpec.tocLabel||'TABLE OF CONTENTS',
    {s:10,w:700,c:'#737373',upper:true,ls:8}, tw));
  sidebar.appendChild(lbl);

  var groups = sSpec.groups||[];
  for (var i=0; i<groups.length; i++) {
    sidebar.appendChild(buildTocGroup(groups[i], sw));
  }
  return sidebar;
}

function buildTocGroup(group, sw) {
  var isOpen = group.open !== false;
  var grp = F('Group: '+group.label, {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:0, w:sw
  });
  stroke(grp, '#E5E7EB', {b:1});

  var btn = F('Btn', {
    bg:isOpen?'#ECF0F7':undefined,
    dir:'h', primary:'FIXED', counter:'FIXED',
    cross:'CENTER', pad:[9,16,9,16], gap:8,
    align:'SPACE_BETWEEN', w:sw, h:36
  });
  btn.appendChild(T(group.label, {s:12,w:600,c:'#3D3D3D'}));
  btn.appendChild(T(isOpen?'▴':'▾', {s:9,w:400,c:'#A3A3A3'}));
  grp.appendChild(btn);

  if (isOpen) {
    var wrap = F('Items', {
      dir:'v', primary:'AUTO', counter:'FIXED',
      pad:[4,0,4,0], gap:0, w:sw
    });
    var items = group.items||[];
    for (var j=0; j<items.length; j++) {
      wrap.appendChild(buildTocItem(items[j], sw));
    }
    grp.appendChild(wrap);
  }
  return grp;
}

function buildTocItem(item, sw) {
  var lvl    = item.level||1;
  var indent = {1:16,2:28,3:42};
  var sizes  = {1:12.5,2:12,3:11.5};
  var colors = {1:'#525252',2:'#525252',3:'#737373'};
  var active = item.active===true;
  var pl     = indent[lvl]||16;
  var tw     = sw - pl - 16;

  var row = F('Item', {
    bg:active?'#F0F6FF':undefined,
    dir:'h', primary:'FIXED', counter:'AUTO',
    cross:'CENTER', pad:[5,16,5,pl], gap:6, w:sw
  });
  if (active) stroke(row, '#0066FF', {l:2});

  if (item.num && lvl>=2) {
    row.appendChild(T(item.num, {s:11,w:400,c:'#A3A3A3'}));
    tw -= 30;
  }
  row.appendChild(T(item.text, {
    s:sizes[lvl]||12,
    w:active?600:(lvl===1?500:400),
    c:active?'#0052CC':(colors[lvl]||'#525252')
  }, tw));
  return row;
}

// =============================================================
//  MAIN ROUTER
// =============================================================
function buildMain(spec, mainW) {
  var mSpec = spec.main||{};
  var pad   = mSpec.padding||[40,48,80,48];
  var main  = F('Main', {
    dir:'v', primary:'AUTO', counter:'FIXED',
    pad:pad, gap:32, w:mainW
  });
  var cw = mainW - (pad[1]||0) - (pad[3]||0);
  var sections = mSpec.sections||[];
  for (var i=0; i<sections.length; i++) {
    var node = buildSection(sections[i], cw);
    if (node) main.appendChild(node);
  }
  return main;
}

function buildSection(s, cw) {
  switch (s.type) {
    // ── Existing ──
    case 'pageHeader':  return buildPageHeader(s, cw);
    case 'accordion':   return buildAccordion(s, cw);
    case 'divider':     return buildDivSection(cw);
    case 'textSection': return buildTextSection(s, cw);
    case 'principle':   return buildPrinciple(s, cw);
    // ── New general-purpose ──
    case 'hero':        return buildHero(s, cw);
    case 'stats':       return buildStats(s, cw);
    case 'alert':       return buildAlert(s, cw);
    case 'table':       return buildTable(s, cw);
    case 'cardGrid':    return buildCardGrid(s, cw);
    case 'list':        return buildList(s, cw);
    case 'heading':     return buildHeading(s, cw);
    case 'infoBox':     return buildInfoBox(s, cw);
    case 'cta':         return buildCta(s, cw);
    case 'keyValue':    return buildKeyValue(s, cw);
    case 'image':       return buildImagePlaceholder(s, cw);
    case 'badgeRow':    return buildBadgeRow(s, cw);
    case 'twoColumn':   return buildTwoColumn(s, cw);
    default:            return null;
  }
}

// =============================================================
//  EXISTING SECTION BUILDERS  (v6, retained as-is)
// =============================================================

// ── pageHeader ───────────────────────────────────────────────
function buildPageHeader(s, cw) {
  var wrap = F('Page Header', {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:16, w:cw
  });
  var circleSize = 72;
  var titleW = cw - circleSize - 24;
  var titleRow = F('Title Row', {
    dir:'h', primary:'FIXED', counter:'AUTO',
    cross:'MIN', gap:24, w:cw
  });
  titleRow.appendChild(T(s.title||'',
    {s:28,w:700,c:'#003366',lh:38,name:'H1'}, titleW));
  titleRow.appendChild(w3c(circleSize));
  wrap.appendChild(titleRow);

  var row = F('Badge Row', {
    dir:'h', primary:'AUTO', counter:'AUTO', cross:'CENTER', gap:10
  });
  row.appendChild(badge(s.badge||'W3C Recommendation',
    '#005A9C','#FFFFFF',{px:12,py:4,s:12,fw:700,radius:999}));
  row.appendChild(T(s.date||'', {s:14,w:400,c:'#555555'}));
  wrap.appendChild(row);

  return wrap;
}

// ── accordion ────────────────────────────────────────────────
function buildAccordion(s, cw) {
  var wrap = F('Accordion: '+s.label, {
    bg:'#FFFFFF', dir:'v', primary:'AUTO', counter:'FIXED', radius:6, w:cw
  });
  wrap.strokes = solidFill('#D1D5DB'); wrap.strokeWeight=1; wrap.strokeAlign='INSIDE';

  var hdr = F('Acc Header', {
    bg:'#F8F9FA', dir:'h', primary:'FIXED', counter:'FIXED',
    cross:'CENTER', pad:[0,16,0,16], align:'SPACE_BETWEEN', w:cw, h:44
  });
  stroke(hdr, '#D1D5DB', {b:1});
  hdr.appendChild(T(s.label, {s:14,w:600,c:'#1A1A1A'}));
  hdr.appendChild(T((s.open!==false)?'▴':'▾', {s:10,w:400,c:'#A3A3A3'}));
  wrap.appendChild(hdr);

  if (s.open!==false && s.meta) wrap.appendChild(buildMetaGrid(s.meta, cw));
  return wrap;
}

function buildMetaGrid(meta, cw) {
  var grid = F('Meta Grid', {
    bg:'#FFFFFF', dir:'v', primary:'AUTO', counter:'FIXED', gap:0, w:cw
  });
  for (var i=0; i<meta.length; i++) {
    var rowData  = meta[i];
    var rowFrame = F('Meta Row', { dir:'h', primary:'FIXED', counter:'AUTO', gap:0, w:cw });
    stroke(rowFrame, '#D1D5DB', {b:1});
    var isFull = rowData.length===1;
    for (var j=0; j<rowData.length; j++) {
      var cell  = rowData[j];
      var cellW = isFull ? cw : Math.floor(cw/2);
      var cf    = F('Cell: '+cell.label, {
        bg:'#FFFFFF', dir:'v', primary:'AUTO', counter:'FIXED',
        pad:[10,16,10,16], gap:4, w:cellW
      });
      if (!isFull && j<rowData.length-1) stroke(cf, '#D1D5DB', {r:1});
      var tw = cellW - 32;
      cf.appendChild(hRow(cell.label, {s:11,w:700,c:'#737373',upper:true,ls:6}, tw));
      cf.appendChild(hRow(cell.value, {s:12,w:400,c:'#0A0A0A',lh:18},           tw));
      rowFrame.appendChild(cf);
    }
    grid.appendChild(rowFrame);
  }
  var cp = F('Copyright', {
    bg:'#F8F9FA', dir:'h', primary:'FIXED', counter:'AUTO', pad:[10,18,10,18], w:cw
  });
  stroke(cp, '#D1D5DB', {t:1});
  cp.appendChild(T(
    'Copyright © 2024 World Wide Web Consortium. W3C® liability, trademark and permissive document license rules apply.',
    {s:11,w:400,c:'#555555',lh:17}, cw-36));
  grid.appendChild(cp);
  return grid;
}

// ── divider ──────────────────────────────────────────────────
function buildDivSection(cw) {
  var r = figma.createRectangle();
  r.name = 'Divider'; r.fills = solidFill('#E5E7EB');
  r.resize(cw, 1);
  return r;
}

// ── textSection ──────────────────────────────────────────────
function buildTextSection(s, cw) {
  var wrap = F('Section: '+s.heading, {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:14, w:cw
  });
  var h2 = F('H2', {dir:'h', primary:'FIXED', counter:'AUTO', pad:[0,0,10,0], w:cw});
  stroke(h2, '#E8F0F8', {b:2});
  h2.appendChild(T(s.heading, {s:20,w:700,c:'#003366',lh:28}, cw));
  wrap.appendChild(h2);
  var paras = s.paragraphs||[];
  for (var i=0; i<paras.length; i++) {
    wrap.appendChild(hRow(paras[i], {s:14,w:400,c:'#1A1A1A',lh:24}, cw));
  }
  return wrap;
}

// ── principle card ───────────────────────────────────────────
function buildPrinciple(s, cw) {
  var card = F('Principle '+s.number+': '+s.title, {
    bg:'#FFFFFF', dir:'v', primary:'AUTO', counter:'FIXED', radius:8, w:cw
  });
  card.strokes = solidFill('#E5E7EB'); card.strokeWeight=1; card.strokeAlign='INSIDE';
  card.effects = [{ type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.06}, offset:{x:0,y:2}, radius:6, spread:0, visible:true, blendMode:'NORMAL' }];

  var hdr = F('Card Header', {
    bg:'#FFFFFF', dir:'h', primary:'FIXED', counter:'AUTO',
    cross:'MIN', pad:[16,20,16,20], gap:16, w:cw
  });
  stroke(hdr, '#E5E7EB', {b:1});

  var numC = F('Num', {
    bg:'#0066FF', radius:999, dir:'h', primary:'FIXED', counter:'FIXED',
    align:'CENTER', cross:'CENTER', w:32, h:32
  });
  numC.appendChild(T(String(s.number), {s:14,w:700,c:'#FFFFFF'}));
  hdr.appendChild(numC);

  var titleTextW = cw - 20 - 32 - 16 - 20;
  var col = F('Title Col', {dir:'v',primary:'AUTO',counter:'FIXED',gap:4,w:titleTextW});
  col.appendChild(hRow(s.title, {s:18,w:700,c:'#003366'}, titleTextW));
  if (s.description) col.appendChild(hRow(s.description, {s:13,w:400,c:'#525252',lh:19}, titleTextW));
  hdr.appendChild(col);
  card.appendChild(hdr);

  var guidelines = s.guidelines||[];
  for (var i=0; i<guidelines.length; i++) card.appendChild(buildGuideline(guidelines[i], cw));
  return card;
}

function buildGuideline(g, cw) {
  var wrap = F('GL: '+g.id, {dir:'v',primary:'AUTO',counter:'FIXED',gap:0,w:cw});
  var glRow = F('GL Row', {
    bg:'#F5F7FA', dir:'h', primary:'FIXED', counter:'AUTO', pad:[9,20,9,20], w:cw
  });
  stroke(glRow, '#E5E7EB', {t:1,b:1});
  glRow.appendChild(T(g.id+' — '+g.title, {s:12,w:600,c:'#003366'}, cw-40));
  wrap.appendChild(glRow);
  var crit = g.criteria||[];
  for (var i=0; i<crit.length; i++) wrap.appendChild(buildCriterion(crit[i], cw));
  return wrap;
}

function buildCriterion(sc, cw) {
  var idW=40, badgeW=52, pad=40, gap=10;
  var tw = cw - pad - idW - gap - badgeW - gap;
  var row = F('SC: '+sc.id, {
    dir:'h', primary:'FIXED', counter:'AUTO',
    cross:'CENTER', pad:[9,20,9,20], gap:gap, w:cw
  });
  stroke(row, '#E5E7EB', {b:1});
  row.appendChild(T(sc.id, {s:11,w:500,c:'#A3A3A3'}));
  row.appendChild(T(sc.title, {s:12,w:400,c:'#0A0A0A',lh:18}, tw));
  row.appendChild(lvlBadge(sc.level||'A'));
  return row;
}

// =============================================================
//  NEW GENERAL-PURPOSE SECTION BUILDERS
// =============================================================

// ── hero ─────────────────────────────────────────────────────
// { type:'hero', badge:'...', heading:'...', subheading:'...', bg:'#F8FAFF',
//   buttons:[{label:'...', variant:'primary|secondary|outline'}] }
function buildHero(s, cw) {
  var wrap = F('Hero', {
    bg:s.bg||'#F0F6FF', dir:'v', primary:'AUTO', counter:'FIXED',
    pad:[40,40,40,40], gap:16, radius:8, w:cw
  });

  if (s.badge) {
    var br = F('Hero Badge Row', {dir:'h',primary:'AUTO',counter:'AUTO'});
    br.fills = noFill();
    br.appendChild(badge(s.badge, '#E0EDFF', '#0052CC', {px:12,py:4,s:12,fw:600,radius:999}));
    wrap.appendChild(br);
  }

  var innerW = cw - 80;
  wrap.appendChild(hRow(s.heading||'', {s:36,w:700,c:'#0A0A0A',lh:44,name:'Hero H1'}, innerW));
  if (s.subheading) {
    wrap.appendChild(hRow(s.subheading, {s:16,w:400,c:'#525252',lh:26}, innerW));
  }

  var buttons = s.buttons||[];
  if (buttons.length > 0) {
    var btnRow = F('Hero Buttons', {dir:'h',primary:'AUTO',counter:'AUTO',gap:12});
    btnRow.fills = noFill();
    for (var i=0; i<buttons.length; i++) {
      btnRow.appendChild(buildButton(buttons[i].label, buttons[i].variant||'primary'));
    }
    wrap.appendChild(btnRow);
  }
  return wrap;
}

// ── stats / metrics row ──────────────────────────────────────
// { type:'stats', items:[{value:'2.4M', label:'Users', change:'+12%', trend:'up|down|neutral'}] }
function buildStats(s, cw) {
  var items = s.items||[];
  if (items.length === 0) return null;
  var n    = items.length;
  var gap  = 16;
  var cardW = Math.floor((cw - (n-1)*gap) / n);

  var row = F('Stats Row', {
    dir:'h', primary:'FIXED', counter:'AUTO', gap:gap, w:cw
  });
  row.fills = noFill();

  for (var i=0; i<items.length; i++) {
    var item = items[i];
    var card = F('Stat: '+item.label, {
      bg:'#FFFFFF', dir:'v', primary:'AUTO', counter:'FIXED',
      pad:[16,20,16,20], gap:6, radius:8, w:cardW,
      shadow:true, shadowA:0.05, shadowY:1, shadowR:3
    });
    card.strokes = solidFill('#E5E7EB'); card.strokeWeight=1; card.strokeAlign='INSIDE';

    var innerW = cardW - 40;
    card.appendChild(hRow(item.value||'—', {s:28,w:700,c:'#0A0A0A',lh:34}, innerW));

    var bottomRow = F('Stat Bottom', {dir:'h',primary:'AUTO',counter:'AUTO',cross:'CENTER',gap:8});
    bottomRow.fills = noFill();
    bottomRow.appendChild(T(item.label||'', {s:12,w:400,c:'#737373'}));
    if (item.change) bottomRow.appendChild(changePill(item.change, item.trend||'neutral'));
    card.appendChild(bottomRow);

    row.appendChild(card);
  }
  return row;
}

// ── alert ────────────────────────────────────────────────────
// { type:'alert', variant:'info|success|warning|error', title:'...', body:'...' }
function buildAlert(s, cw) {
  var variants = {
    info:    {bg:'#EFF6FF', border:'#3B82F6', fg:'#1E40AF', icon:'ℹ'},
    success: {bg:'#F0FDF4', border:'#22C55E', fg:'#15803D', icon:'✓'},
    warning: {bg:'#FFFBEB', border:'#F59E0B', fg:'#92400E', icon:'⚠'},
    error:   {bg:'#FEF2F2', border:'#EF4444', fg:'#B91C1C', icon:'✕'}
  };
  var v = variants[s.variant||'info'] || variants.info;

  var wrap = F('Alert: '+(s.variant||'info'), {
    bg:v.bg, dir:'h', primary:'FIXED', counter:'AUTO',
    pad:[14,16,14,16], gap:12, radius:6, w:cw
  });
  stroke(wrap, v.border, {l:4});

  var iconCircle = F('Icon', {
    bg:v.border, radius:999, dir:'h', primary:'FIXED', counter:'FIXED',
    align:'CENTER', cross:'CENTER', w:22, h:22
  });
  iconCircle.appendChild(T(v.icon, {s:11,w:700,c:'#FFFFFF'}));
  wrap.appendChild(iconCircle);

  var contentW = cw - 16 - 22 - 12 - 4;  // pad×2, icon, gap, left-border
  var content = F('Alert Content', {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:4, w:contentW
  });
  if (s.title) content.appendChild(hRow(s.title, {s:13,w:600,c:v.fg}, contentW));
  if (s.body)  content.appendChild(hRow(s.body,  {s:13,w:400,c:v.fg,lh:20}, contentW));
  wrap.appendChild(content);

  return wrap;
}

// ── table ────────────────────────────────────────────────────
// { type:'table', heading:'...', columns:['Col1','Col2'], rows:[['v1','v2']] }
function buildTable(s, cw) {
  var wrap = F('Table: '+(s.heading||''), {
    dir:'v', primary:'AUTO', counter:'FIXED', radius:8, w:cw
  });
  wrap.strokes = solidFill('#E5E7EB'); wrap.strokeWeight=1; wrap.strokeAlign='INSIDE';

  if (s.heading) {
    var th = F('Table Heading', {
      bg:'#FFFFFF', dir:'h', primary:'FIXED', counter:'AUTO',
      pad:[14,16,14,16], w:cw
    });
    stroke(th, '#E5E7EB', {b:1});
    th.appendChild(T(s.heading, {s:14,w:600,c:'#0A0A0A'}, cw-32));
    wrap.appendChild(th);
  }

  var cols    = s.columns||[];
  var numCols = cols.length || 1;
  var colW    = Math.floor(cw / numCols);
  var lastColW = cw - colW*(numCols-1);

  // Header row
  var headerRow = F('Header Row', {
    bg:'#F9FAFB', dir:'h', primary:'FIXED', counter:'FIXED', h:40, w:cw
  });
  stroke(headerRow, '#E5E7EB', {b:1});
  for (var c=0; c<cols.length; c++) {
    var w = (c===cols.length-1) ? lastColW : colW;
    var cell = F('H: '+cols[c], {
      bg:'#F9FAFB', dir:'h', primary:'FIXED', counter:'FIXED', pad:[0,16,0,16], h:40, w:w
    });
    cell.counterAxisAlignItems = 'CENTER';
    if (c < cols.length-1) stroke(cell, '#E5E7EB', {r:1});
    cell.appendChild(T(cols[c], {s:12,w:600,c:'#525252'}, w-32));
    headerRow.appendChild(cell);
  }
  wrap.appendChild(headerRow);

  // Data rows
  var rows = s.rows||[];
  for (var r=0; r<rows.length; r++) {
    var rowData  = rows[r];
    var rowBg    = r%2===1 ? '#FAFAFA' : '#FFFFFF';
    var dataRow  = F('Row '+r, {
      bg:rowBg, dir:'h', primary:'FIXED', counter:'AUTO', w:cw
    });
    if (r < rows.length-1) stroke(dataRow, '#E5E7EB', {b:1});
    for (var dc=0; dc<numCols; dc++) {
      var dw = (dc===numCols-1) ? lastColW : colW;
      var dcell = F('Cell', {
        bg:rowBg, dir:'h', primary:'FIXED', counter:'AUTO', pad:[10,16,10,16], w:dw
      });
      if (dc < numCols-1) stroke(dcell, '#E5E7EB', {r:1});
      var val = (rowData&&rowData[dc]) ? String(rowData[dc]) : '—';
      dcell.appendChild(T(val, {s:13,w:400,c:'#0A0A0A',lh:20}, dw-32));
      dataRow.appendChild(dcell);
    }
    wrap.appendChild(dataRow);
  }
  return wrap;
}

// ── cardGrid ─────────────────────────────────────────────────
// { type:'cardGrid', heading:'...', columns:3,
//   cards:[{title:'...', body:'...', badge:'...', badgeBg:'#EEF2FF', badgeFg:'#4338CA'}] }
function buildCardGrid(s, cw) {
  var wrap = F('Card Grid: '+(s.heading||''), {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:16, w:cw
  });
  wrap.fills = noFill();

  if (s.heading) wrap.appendChild(sectionH2(s.heading, cw));

  var cols  = s.columns||3;
  var gap   = 16;
  var cardW = Math.floor((cw - (cols-1)*gap) / cols);
  var cards = s.cards||[];

  for (var i=0; i<cards.length; i+=cols) {
    var rowCards = cards.slice(i, i+cols);
    var rowF = F('Card Row', {
      dir:'h', primary:'FIXED', counter:'AUTO', gap:gap, w:cw
    });
    rowF.fills = noFill();
    for (var j=0; j<rowCards.length; j++) {
      rowF.appendChild(buildCard(rowCards[j], cardW));
    }
    // Fill empty slots in last row so row is always cols-wide
    for (var k=rowCards.length; k<cols; k++) {
      var ghost = F('Empty', {dir:'h',primary:'FIXED',counter:'FIXED',w:cardW,h:1});
      ghost.fills = noFill();
      rowF.appendChild(ghost);
    }
    wrap.appendChild(rowF);
  }
  return wrap;
}

function buildCard(card, cardW) {
  var c = F('Card: '+(card.title||''), {
    bg:'#FFFFFF', dir:'v', primary:'AUTO', counter:'FIXED',
    pad:[20,20,20,20], gap:10, radius:8, w:cardW,
    shadow:true, shadowA:0.05, shadowY:1, shadowR:4
  });
  c.strokes = solidFill('#E5E7EB'); c.strokeWeight=1; c.strokeAlign='INSIDE';
  var innerW = cardW - 40;

  if (card.badge) {
    var br = F('Badge Row', {dir:'h',primary:'AUTO',counter:'AUTO'});
    br.fills = noFill();
    br.appendChild(badge(card.badge, card.badgeBg||'#EEF2FF', card.badgeFg||'#4338CA',
      {px:8,py:3,s:11,fw:600,radius:4}));
    c.appendChild(br);
  }
  if (card.title)  c.appendChild(hRow(card.title, {s:15,w:600,c:'#0A0A0A'}, innerW));
  if (card.body)   c.appendChild(hRow(card.body,  {s:13,w:400,c:'#525252',lh:20}, innerW));
  if (card.footer) {
    var ft = F('Card Footer', {dir:'h',primary:'AUTO',counter:'AUTO'});
    ft.fills = noFill();
    ft.appendChild(T(card.footer, {s:12,w:400,c:'#A3A3A3'}));
    c.appendChild(ft);
  }
  return c;
}

// ── list ─────────────────────────────────────────────────────
// { type:'list', heading:'...', style:'bullet|numbered|check',
//   items:[{text:'...', subtext:'...'}] }
function buildList(s, cw) {
  var wrap = F('List: '+(s.heading||''), {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:2, w:cw
  });
  wrap.fills = noFill();

  if (s.heading) {
    wrap.appendChild(sectionH2(s.heading, cw, {pb:12}));
    wrap.itemSpacing = 8;
  }

  var items = s.items||[];
  var style = s.style||'bullet';

  for (var i=0; i<items.length; i++) {
    var item   = items[i];
    var bullet = style==='numbered' ? (i+1)+'.'
               : style==='check'    ? '✓'
               : '•';
    var bFg    = style==='check' ? '#16A34A' : '#0066FF';

    var row = F('Item '+i, {
      dir:'h', primary:'FIXED', counter:'AUTO', cross:'MIN',
      pad:[5,0,5,0], gap:10, w:cw
    });
    row.fills = noFill();

    var bulletFrame = F('Bullet', {dir:'h',primary:'FIXED',counter:'FIXED',w:18,h:20,align:'CENTER',cross:'CENTER'});
    bulletFrame.fills = noFill();
    bulletFrame.appendChild(T(bullet, {s:12,w:700,c:bFg}));
    row.appendChild(bulletFrame);

    var textW = cw - 18 - 10;
    var textCol = F('Text', {dir:'v',primary:'AUTO',counter:'FIXED',gap:2,w:textW});
    textCol.fills = noFill();
    textCol.appendChild(hRow(item.text||'', {s:14,w:400,c:'#0A0A0A',lh:22}, textW));
    if (item.subtext) textCol.appendChild(hRow(item.subtext, {s:12,w:400,c:'#737373',lh:18}, textW));
    row.appendChild(textCol);

    wrap.appendChild(row);
  }
  return wrap;
}

// ── heading (standalone H2) ──────────────────────────────────
// { type:'heading', text:'...', subtitle:'...' }
function buildHeading(s, cw) {
  var wrap = F('Heading: '+s.text, {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:6, w:cw
  });
  wrap.fills = noFill();
  wrap.paddingBottom = 10;
  stroke(wrap, '#E8F0F8', {b:2});
  wrap.appendChild(hRow(s.text||'', {s:22,w:700,c:'#003366',lh:30}, cw));
  if (s.subtitle) wrap.appendChild(hRow(s.subtitle, {s:14,w:400,c:'#737373',lh:22}, cw));
  return wrap;
}

// ── infoBox / callout ────────────────────────────────────────
// { type:'infoBox', variant:'info|tip|warning', heading:'...', body:'...' }
function buildInfoBox(s, cw) {
  var variants = {
    info:    {bg:'#EFF6FF', border:'#3B82F6', fg:'#1E40AF'},
    tip:     {bg:'#F0FDF4', border:'#22C55E', fg:'#15803D'},
    warning: {bg:'#FFFBEB', border:'#F59E0B', fg:'#92400E'},
    neutral: {bg:'#F5F7FA', border:'#0066FF', fg:'#0A0A0A'}
  };
  var v = variants[s.variant||'neutral'] || variants.neutral;

  var wrap = F('InfoBox', {
    bg:v.bg, dir:'h', primary:'FIXED', counter:'AUTO',
    pad:[14,16,14,16], gap:12, radius:6, w:cw
  });
  stroke(wrap, v.border, {l:3});

  var contentW = cw - 32 - 3;
  var content = F('IB Content', {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:4, w:contentW
  });
  if (s.heading) content.appendChild(hRow(s.heading, {s:13,w:600,c:v.fg}, contentW));
  content.appendChild(hRow(s.body||'', {s:13,w:400,c:v.fg,lh:20}, contentW));
  wrap.appendChild(content);

  return wrap;
}

// ── cta (call to action) ─────────────────────────────────────
// { type:'cta', heading:'...', body:'...', button:'Action', buttonVariant:'primary', bg:'#F0F6FF' }
function buildCta(s, cw) {
  var wrap = F('CTA', {
    bg:s.bg||'#F0F6FF', dir:'v', primary:'AUTO', counter:'FIXED',
    pad:[32,32,32,32], gap:14, radius:8, w:cw
  });
  var innerW = cw - 64;
  wrap.appendChild(hRow(s.heading||'', {s:22,w:700,c:'#003366',lh:30,name:'CTA H'}, innerW));
  if (s.body) wrap.appendChild(hRow(s.body, {s:14,w:400,c:'#525252',lh:22}, innerW));

  if (s.button) {
    var btnRow = F('CTA Btn Row', {dir:'h',primary:'AUTO',counter:'AUTO',gap:12});
    btnRow.fills = noFill();
    btnRow.appendChild(buildButton(s.button, s.buttonVariant||'primary'));
    if (s.buttonSecondary) btnRow.appendChild(buildButton(s.buttonSecondary, 'secondary'));
    wrap.appendChild(btnRow);
  }
  return wrap;
}

// ── keyValue (settings, properties) ─────────────────────────
// { type:'keyValue', heading:'...', items:[{key:'...', value:'...'}] }
function buildKeyValue(s, cw) {
  var wrap = F('KV: '+(s.heading||''), {
    dir:'v', primary:'AUTO', counter:'FIXED', radius:8, w:cw
  });
  wrap.strokes = solidFill('#E5E7EB'); wrap.strokeWeight=1; wrap.strokeAlign='INSIDE';

  if (s.heading) {
    var h = F('KV Heading', {
      bg:'#F9FAFB', dir:'h', primary:'FIXED', counter:'AUTO', pad:[12,16,12,16], w:cw
    });
    stroke(h, '#E5E7EB', {b:1});
    h.appendChild(T(s.heading, {s:13,w:600,c:'#0A0A0A'}, cw-32));
    wrap.appendChild(h);
  }

  var items  = s.items||[];
  var keyW   = Math.floor(cw*0.35);
  var valW   = cw - keyW;

  for (var i=0; i<items.length; i++) {
    var rowBg  = i%2===1 ? '#FAFAFA' : '#FFFFFF';
    var row    = F('KV Row', {
      bg:rowBg, dir:'h', primary:'FIXED', counter:'AUTO', w:cw
    });
    if (i < items.length-1) stroke(row, '#E5E7EB', {b:1});

    var keyCell = F('Key', {
      bg:rowBg, dir:'h', primary:'FIXED', counter:'AUTO', pad:[10,16,10,16], w:keyW
    });
    stroke(keyCell, '#E5E7EB', {r:1});
    keyCell.appendChild(T(items[i].key||'', {s:12,w:600,c:'#525252'}, keyW-32));

    var valCell = F('Val', {
      bg:rowBg, dir:'h', primary:'FIXED', counter:'AUTO', pad:[10,16,10,16], w:valW
    });
    valCell.appendChild(T(items[i].value||'', {s:13,w:400,c:'#0A0A0A',lh:20}, valW-32));

    row.appendChild(keyCell);
    row.appendChild(valCell);
    wrap.appendChild(row);
  }
  return wrap;
}

// ── image placeholder ────────────────────────────────────────
// { type:'image', label:'...', height:240, bg:'#E5E7EB' }
function buildImagePlaceholder(s, cw) {
  var h   = s.height || Math.floor(cw * 0.45);
  var bg  = s.bg || '#E5E7EB';
  var img = F('Image: '+(s.label||''), {
    bg:bg, dir:'h', primary:'FIXED', counter:'FIXED',
    align:'CENTER', cross:'CENTER', w:cw, h:h, radius:s.radius||8
  });
  img.resize(cw, h);
  img.appendChild(T(s.label||'Image', {s:14,w:500,c:'#737373'}));
  return img;
}

// ── badgeRow ─────────────────────────────────────────────────
// { type:'badgeRow', heading:'...', items:[{label:'...', bg:'...', fg:'...'}] }
function buildBadgeRow(s, cw) {
  var wrap = F('Badge Row: '+(s.heading||''), {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:10, w:cw
  });
  wrap.fills = noFill();

  if (s.heading) wrap.appendChild(hRow(s.heading, {s:13,w:600,c:'#525252'}, cw));

  var row = F('Badges', {dir:'h',primary:'AUTO',counter:'AUTO',gap:8});
  row.fills = noFill();
  var items = s.items||[];
  for (var i=0; i<items.length; i++) {
    row.appendChild(badge(
      items[i].label||'',
      items[i].bg||'#F3F4F6',
      items[i].fg||'#525252',
      {px:10,py:4,s:12,fw:500,radius:4}
    ));
  }
  wrap.appendChild(row);
  return wrap;
}

// ── twoColumn layout ─────────────────────────────────────────
// { type:'twoColumn', gap:24, ratio:'1:1|2:1|1:2',
//   left:{ sections:[...] }, right:{ sections:[...] } }
function buildTwoColumn(s, cw) {
  var gap   = s.gap || 24;
  var ratio = s.ratio || '1:1';
  var parts = ratio.split(':').map(Number);
  var total = parts[0] + parts[1];
  var leftW = Math.floor((cw - gap) * parts[0] / total);
  var rightW = cw - gap - leftW;

  var row = F('Two Col', {
    dir:'h', primary:'FIXED', counter:'AUTO', gap:gap, w:cw
  });
  row.fills = noFill();

  // Build left column
  var leftCol = F('Left', {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:24, w:leftW
  });
  leftCol.fills = noFill();
  var lSections = (s.left&&s.left.sections)||[];
  for (var i=0; i<lSections.length; i++) {
    var node = buildSection(lSections[i], leftW);
    if (node) leftCol.appendChild(node);
  }

  // Build right column
  var rightCol = F('Right', {
    dir:'v', primary:'AUTO', counter:'FIXED', gap:24, w:rightW
  });
  rightCol.fills = noFill();
  var rSections = (s.right&&s.right.sections)||[];
  for (var j=0; j<rSections.length; j++) {
    var rnode = buildSection(rSections[j], rightW);
    if (rnode) rightCol.appendChild(rnode);
  }

  row.appendChild(leftCol);
  row.appendChild(rightCol);
  return row;
}

// =============================================================
//  GENERATOR
// =============================================================
async function generateDesign(spec) {
  progress(8, 'Loading fonts…');
  await loadFonts();

  var totalW  = (spec.canvas  && spec.canvas.width)  || 1440;
  var layout  = spec.layout || (spec.sidebar ? 'sidebar' : 'full');
  var sidebarW = (spec.sidebar && spec.sidebar.width) || 288;

  progress(15, 'Setting up page…');
  figma.currentPage.name = (spec.meta && spec.meta.name) || 'Generated Design';

  var root = F('Design: '+(spec.meta&&spec.meta.name||''), {
    bg:'#FAFAFA', dir:'v', primary:'AUTO', counter:'FIXED', gap:0, w:totalW
  });

  // Header
  if (spec.header) {
    progress(25, 'Building header…');
    var sw = layout==='sidebar' ? sidebarW : 0;
    root.appendChild(buildHeader(spec, totalW, sw));
  }

  // Body
  if (layout === 'sidebar') {
    progress(38, 'Building sidebar…');
    var mainW  = totalW - sidebarW;
    var body   = F('Body', {
      dir:'h', primary:'FIXED', counter:'AUTO', gap:0, w:totalW
    });
    body.fills = noFill();
    body.appendChild(buildSidebar(spec));
    progress(55, 'Building main content…');
    body.appendChild(buildMain(spec, mainW));
    root.appendChild(body);
  } else {
    // full layout — main takes entire canvas width
    progress(45, 'Building content…');
    root.appendChild(buildMain(spec, totalW));
  }

  figma.currentPage.appendChild(root);
  progress(95, 'Rendering…');
  figma.viewport.scrollAndZoomIntoView([root]);
  figma.currentPage.selection = [root];
}

// =============================================================
//  MESSAGE HANDLER
// =============================================================
figma.ui.onmessage = async function (msg) {
  if (msg.type === 'generate') {
    try {
      await generateDesign(msg.spec);
      figma.ui.postMessage({ type:'done' });
    } catch (e) {
      figma.ui.postMessage({ type:'error', message:errStr(e) });
    }
  }
  if (msg.type === 'cancel') { figma.closePlugin(); }
};
