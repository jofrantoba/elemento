goog.module('org.gwtproject.user.client.ui.DockPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CellPanel = goog.require('org.gwtproject.user.client.ui.CellPanel$impl');
const HasAlignment = goog.require('org.gwtproject.user.client.ui.HasAlignment$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let DockLayoutConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.DockPanel.DockLayoutConstant$impl');
let LayoutData = goog.forwardDeclare('org.gwtproject.user.client.ui.DockPanel.LayoutData$impl');
let TmpRow = goog.forwardDeclare('org.gwtproject.user.client.ui.DockPanel.TmpRow$impl');
let HasHorizontalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
let HorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');
let HasVerticalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
let VerticalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasAlignment}
  */
class DockPanel extends CellPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HorizontalAlignmentConstant} */
  this.f_horzAlign__org_gwtproject_user_client_ui_DockPanel_;
  /** @public {VerticalAlignmentConstant} */
  this.f_vertAlign__org_gwtproject_user_client_ui_DockPanel_;
  /** @public {Widget} */
  this.f_center__org_gwtproject_user_client_ui_DockPanel_;
 }
 /**
  * @param {DockLayoutConstant} direction
  * @param {number} count
  * @return {?string}
  * @public
  */
 static m_generateDebugId__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant__int(direction, count) {
  if ($Equality.$same(direction, DockPanel.$f_NORTH__org_gwtproject_user_client_ui_DockPanel)) {
   return "north" + count;
  } else if ($Equality.$same(direction, DockPanel.$f_SOUTH__org_gwtproject_user_client_ui_DockPanel)) {
   return "south" + count;
  } else if ($Equality.$same(direction, DockPanel.$f_WEST__org_gwtproject_user_client_ui_DockPanel)) {
   return "west" + count;
  } else if ($Equality.$same(direction, DockPanel.$f_EAST__org_gwtproject_user_client_ui_DockPanel)) {
   return "east" + count;
  } else if ($Equality.$same(direction, DockPanel.$f_LINE_START__org_gwtproject_user_client_ui_DockPanel)) {
   return "linestart" + count;
  } else if ($Equality.$same(direction, DockPanel.$f_LINE_END__org_gwtproject_user_client_ui_DockPanel)) {
   return "lineend" + count;
  } else {
   return "center";
  }
 }
 /**
  * @return {!DockPanel}
  * @public
  */
 static $create__() {
  DockPanel.$clinit();
  let $instance = new DockPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DockPanel__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DockPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_CellPanel__();
  this.$init___$p_org_gwtproject_user_client_ui_DockPanel();
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.m_getTable__(), "cellSpacing", 0);
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.m_getTable__(), "cellPadding", 0);
 }
 /**
  * @param {Widget} widget
  * @param {DockLayoutConstant} direction
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant(widget, direction) {
  if ($Equality.$same(direction, DockPanel.$f_CENTER__org_gwtproject_user_client_ui_DockPanel)) {
   if ($Equality.$same(widget, this.f_center__org_gwtproject_user_client_ui_DockPanel_)) {
    return;
   } else if (!$Equality.$same(this.f_center__org_gwtproject_user_client_ui_DockPanel_, null)) {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Only one CENTER widget may be added"));
   }
  }
  widget.m_removeFromParent__();
  this.m_getChildren__().m_add__org_gwtproject_user_client_ui_Widget(widget);
  if ($Equality.$same(direction, DockPanel.$f_CENTER__org_gwtproject_user_client_ui_DockPanel)) {
   this.f_center__org_gwtproject_user_client_ui_DockPanel_ = widget;
  }
  let layout = LayoutData.$create__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant(direction);
  widget.m_setLayoutData__java_lang_Object(layout);
  this.m_setCellHorizontalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(widget, this.f_horzAlign__org_gwtproject_user_client_ui_DockPanel_);
  this.m_setCellVerticalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(widget, this.f_vertAlign__org_gwtproject_user_client_ui_DockPanel_);
  this.m_realizeTable___$p_org_gwtproject_user_client_ui_DockPanel();
  this.m_adopt__org_gwtproject_user_client_ui_Widget(widget);
 }
 /**
  * @param {IsWidget} widget
  * @param {DockLayoutConstant} direction
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant(widget, direction) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant(widget.m_asWidget__(), direction);
 }
 /**
  * @override
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 m_getHorizontalAlignment__() {
  return this.f_horzAlign__org_gwtproject_user_client_ui_DockPanel_;
 }
 /**
  * @override
  * @return {VerticalAlignmentConstant}
  * @public
  */
 m_getVerticalAlignment__() {
  return this.f_vertAlign__org_gwtproject_user_client_ui_DockPanel_;
 }
 /**
  * @param {Widget} w
  * @return {DockLayoutConstant}
  * @public
  */
 m_getWidgetDirection__org_gwtproject_user_client_ui_Widget(w) {
  if (!$Equality.$same(w.m_getParent__(), this)) {
   return null;
  }
  return /**@type {LayoutData} */ ($Casts.$to(w.m_getLayoutData__(), LayoutData)).f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData;
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  let removed = super.m_remove__org_gwtproject_user_client_ui_Widget(w);
  if (removed) {
   if ($Equality.$same(w, this.f_center__org_gwtproject_user_client_ui_DockPanel_)) {
    this.f_center__org_gwtproject_user_client_ui_DockPanel_ = null;
   }
   this.m_realizeTable___$p_org_gwtproject_user_client_ui_DockPanel();
  }
  return removed;
 }
 /**
  * @override
  * @param {Widget} w
  * @param {?string} height
  * @public
  */
 m_setCellHeight__org_gwtproject_user_client_ui_Widget__java_lang_String(w, height) {
  let data = /**@type {LayoutData} */ ($Casts.$to(w.m_getLayoutData__(), LayoutData));
  data.f_height__org_gwtproject_user_client_ui_DockPanel_LayoutData = height;
  if (!$Equality.$same(data.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData, null)) {
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(data.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData.style, "height", data.f_height__org_gwtproject_user_client_ui_DockPanel_LayoutData);
  }
 }
 /**
  * @override
  * @param {Widget} w
  * @param {HorizontalAlignmentConstant} align
  * @public
  */
 m_setCellHorizontalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(w, align) {
  let data = /**@type {LayoutData} */ ($Casts.$to(w.m_getLayoutData__(), LayoutData));
  data.f_hAlign__org_gwtproject_user_client_ui_DockPanel_LayoutData = align.m_getTextAlignString__();
  if (!$Equality.$same(data.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData, null)) {
   this.m_setCellHorizontalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(data.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData, align);
  }
 }
 /**
  * @override
  * @param {Widget} w
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setCellVerticalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(w, align) {
  let data = /**@type {LayoutData} */ ($Casts.$to(w.m_getLayoutData__(), LayoutData));
  data.f_vAlign__org_gwtproject_user_client_ui_DockPanel_LayoutData = align.m_getVerticalAlignString__();
  if (!$Equality.$same(data.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData, null)) {
   this.m_setCellVerticalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(data.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData, align);
  }
 }
 /**
  * @override
  * @param {Widget} w
  * @param {?string} width
  * @public
  */
 m_setCellWidth__org_gwtproject_user_client_ui_Widget__java_lang_String(w, width) {
  let data = /**@type {LayoutData} */ ($Casts.$to(w.m_getLayoutData__(), LayoutData));
  data.f_width__org_gwtproject_user_client_ui_DockPanel_LayoutData = width;
  if (!$Equality.$same(data.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData, null)) {
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(data.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData.style, "width", data.f_width__org_gwtproject_user_client_ui_DockPanel_LayoutData);
  }
 }
 /**
  * @override
  * @param {HorizontalAlignmentConstant} align
  * @public
  */
 m_setHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(align) {
  this.f_horzAlign__org_gwtproject_user_client_ui_DockPanel_ = align;
 }
 /**
  * @override
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setVerticalAlignment__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(align) {
  this.f_vertAlign__org_gwtproject_user_client_ui_DockPanel_ = align;
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  let dirCount = /**@type {!HashMap<DockLayoutConstant, Integer>} */ (HashMap.$create__());
  let it = this.m_getChildren__().m_iterator__();
  while (it.m_hasNext__()) {
   let child = /**@type {Widget} */ ($Casts.$to(it.m_next__(), Widget));
   let dir = /**@type {LayoutData} */ ($Casts.$to(child.m_getLayoutData__(), LayoutData)).f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData;
   let countObj = /**@type {Integer} */ ($Casts.$to(dirCount.get(dir), Integer));
   let count = $Equality.$same(countObj, null) ? 1 : countObj.m_intValue__();
   let debugID = DockPanel.m_generateDebugId__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant__int(dir, count);
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(DOM.m_getParent__org_gwtproject_dom_client_Element(child.m_getElement__()), baseID, debugID);
   dirCount.put(dir, Integer.m_valueOf__int(count + 1));
  }
 }
 /**
  * @public
  */
 m_realizeTable___$p_org_gwtproject_user_client_ui_DockPanel() {
  let bodyElem = this.m_getBody__();
  while (DOM.m_getChildCount__org_gwtproject_dom_client_Element(bodyElem) > 0) {
   bodyElem.removeChild(DOM.m_getChild__org_gwtproject_dom_client_Element__int(bodyElem, 0));
  }
  let rowCount = 1, colCount = 1;
  for (let it = this.m_getChildren__().m_iterator__(); it.m_hasNext__(); ) {
   let child = /**@type {Widget} */ ($Casts.$to(it.m_next__(), Widget));
   let dir = /**@type {LayoutData} */ ($Casts.$to(child.m_getLayoutData__(), LayoutData)).f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData;
   if ($Equality.$same(dir, DockPanel.$f_NORTH__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(dir, DockPanel.$f_SOUTH__org_gwtproject_user_client_ui_DockPanel)) {
    ++rowCount;
   } else if ($Equality.$same(dir, DockPanel.$f_EAST__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(dir, DockPanel.$f_WEST__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(dir, DockPanel.$f_LINE_START__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(dir, DockPanel.$f_LINE_END__org_gwtproject_user_client_ui_DockPanel)) {
    ++colCount;
   }
  }
  let rows = /**@type {!Array<TmpRow>} */ ($Arrays.$create([rowCount], TmpRow));
  for (let i = 0; i < rowCount; ++i) {
   $Arrays.$set(rows, i, TmpRow.$create__());
   rows[i].f_tr__org_gwtproject_user_client_ui_DockPanel_TmpRow = DOM.m_createTR__();
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(bodyElem, rows[i].f_tr__org_gwtproject_user_client_ui_DockPanel_TmpRow);
  }
  let logicalLeftCol = 0, logicalRightCol = colCount - 1;
  let northRow = 0, southRow = rowCount - 1;
  let centerTd = null;
  for (let it_1 = this.m_getChildren__().m_iterator__(); it_1.m_hasNext__(); ) {
   let child_1 = /**@type {Widget} */ ($Casts.$to(it_1.m_next__(), Widget));
   let layout = /**@type {LayoutData} */ ($Casts.$to(child_1.m_getLayoutData__(), LayoutData));
   let td = DOM.m_createTD__();
   layout.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData = td;
   $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(layout.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData, "align", layout.f_hAlign__org_gwtproject_user_client_ui_DockPanel_LayoutData);
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(layout.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData.style, "verticalAlign", layout.f_vAlign__org_gwtproject_user_client_ui_DockPanel_LayoutData);
   $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(layout.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData, "width", layout.f_width__org_gwtproject_user_client_ui_DockPanel_LayoutData);
   $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(layout.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData, "height", layout.f_height__org_gwtproject_user_client_ui_DockPanel_LayoutData);
   if ($Equality.$same(layout.f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData, DockPanel.$f_NORTH__org_gwtproject_user_client_ui_DockPanel)) {
    DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(rows[northRow].f_tr__org_gwtproject_user_client_ui_DockPanel_TmpRow, td, rows[northRow].f_center__org_gwtproject_user_client_ui_DockPanel_TmpRow);
    DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(td, child_1.m_getElement__());
    $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(td, "colSpan", logicalRightCol - logicalLeftCol + 1);
    ++northRow;
   } else if ($Equality.$same(layout.f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData, DockPanel.$f_SOUTH__org_gwtproject_user_client_ui_DockPanel)) {
    DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(rows[southRow].f_tr__org_gwtproject_user_client_ui_DockPanel_TmpRow, td, rows[southRow].f_center__org_gwtproject_user_client_ui_DockPanel_TmpRow);
    DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(td, child_1.m_getElement__());
    $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(td, "colSpan", logicalRightCol - logicalLeftCol + 1);
    --southRow;
   } else if ($Equality.$same(layout.f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData, DockPanel.$f_CENTER__org_gwtproject_user_client_ui_DockPanel)) {
    centerTd = td;
   } else if (this.m_shouldAddToLogicalLeftOfTable__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant_$p_org_gwtproject_user_client_ui_DockPanel(layout.f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData)) {
    let row = rows[northRow];
    DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(row.f_tr__org_gwtproject_user_client_ui_DockPanel_TmpRow, td, row.f_center__org_gwtproject_user_client_ui_DockPanel_TmpRow++);
    DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(td, child_1.m_getElement__());
    $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(td, "rowSpan", southRow - northRow + 1);
    ++logicalLeftCol;
   } else if (this.m_shouldAddToLogicalRightOfTable__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant_$p_org_gwtproject_user_client_ui_DockPanel(layout.f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData)) {
    let row_1 = rows[northRow];
    DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(row_1.f_tr__org_gwtproject_user_client_ui_DockPanel_TmpRow, td, row_1.f_center__org_gwtproject_user_client_ui_DockPanel_TmpRow);
    DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(td, child_1.m_getElement__());
    $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(td, "rowSpan", southRow - northRow + 1);
    --logicalRightCol;
   }
  }
  if (!$Equality.$same(this.f_center__org_gwtproject_user_client_ui_DockPanel_, null)) {
   let row_2 = rows[northRow];
   DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(row_2.f_tr__org_gwtproject_user_client_ui_DockPanel_TmpRow, centerTd, row_2.f_center__org_gwtproject_user_client_ui_DockPanel_TmpRow);
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(centerTd, this.f_center__org_gwtproject_user_client_ui_DockPanel_.m_getElement__());
  }
 }
 /**
  * @param {DockLayoutConstant} widgetDirection
  * @return {boolean}
  * @public
  */
 m_shouldAddToLogicalLeftOfTable__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant_$p_org_gwtproject_user_client_ui_DockPanel(widgetDirection) {
  $Asserts.$assert(($Equality.$same(widgetDirection, DockPanel.$f_LINE_START__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(widgetDirection, DockPanel.$f_LINE_END__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(widgetDirection, DockPanel.$f_EAST__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(widgetDirection, DockPanel.$f_WEST__org_gwtproject_user_client_ui_DockPanel)));
  if ($Equality.$same(widgetDirection, DockPanel.$f_LINE_START__org_gwtproject_user_client_ui_DockPanel)) {
   return true;
  }
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   return $Equality.$same(widgetDirection, DockPanel.$f_EAST__org_gwtproject_user_client_ui_DockPanel);
  }
  return $Equality.$same(widgetDirection, DockPanel.$f_WEST__org_gwtproject_user_client_ui_DockPanel);
 }
 /**
  * @param {DockLayoutConstant} widgetDirection
  * @return {boolean}
  * @public
  */
 m_shouldAddToLogicalRightOfTable__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant_$p_org_gwtproject_user_client_ui_DockPanel(widgetDirection) {
  $Asserts.$assert(($Equality.$same(widgetDirection, DockPanel.$f_LINE_START__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(widgetDirection, DockPanel.$f_LINE_END__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(widgetDirection, DockPanel.$f_EAST__org_gwtproject_user_client_ui_DockPanel) || $Equality.$same(widgetDirection, DockPanel.$f_WEST__org_gwtproject_user_client_ui_DockPanel)));
  if ($Equality.$same(widgetDirection, DockPanel.$f_LINE_END__org_gwtproject_user_client_ui_DockPanel)) {
   return true;
  }
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   return $Equality.$same(widgetDirection, DockPanel.$f_WEST__org_gwtproject_user_client_ui_DockPanel);
  }
  return $Equality.$same(widgetDirection, DockPanel.$f_EAST__org_gwtproject_user_client_ui_DockPanel);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Widget>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_DockPanel() {
  this.f_horzAlign__org_gwtproject_user_client_ui_DockPanel_ = HasHorizontalAlignment.f_ALIGN_DEFAULT__org_gwtproject_user_client_ui_HasHorizontalAlignment;
  this.f_vertAlign__org_gwtproject_user_client_ui_DockPanel_ = HasVerticalAlignment.f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment;
 }
 /**
  * @return {DockLayoutConstant}
  * @public
  */
 static get f_CENTER__org_gwtproject_user_client_ui_DockPanel() {
  return (DockPanel.$clinit(), DockPanel.$f_CENTER__org_gwtproject_user_client_ui_DockPanel);
 }
 /**
  * @return {DockLayoutConstant}
  * @public
  */
 static get f_LINE_START__org_gwtproject_user_client_ui_DockPanel() {
  return (DockPanel.$clinit(), DockPanel.$f_LINE_START__org_gwtproject_user_client_ui_DockPanel);
 }
 /**
  * @return {DockLayoutConstant}
  * @public
  */
 static get f_LINE_END__org_gwtproject_user_client_ui_DockPanel() {
  return (DockPanel.$clinit(), DockPanel.$f_LINE_END__org_gwtproject_user_client_ui_DockPanel);
 }
 /**
  * @return {DockLayoutConstant}
  * @public
  */
 static get f_EAST__org_gwtproject_user_client_ui_DockPanel() {
  return (DockPanel.$clinit(), DockPanel.$f_EAST__org_gwtproject_user_client_ui_DockPanel);
 }
 /**
  * @return {DockLayoutConstant}
  * @public
  */
 static get f_NORTH__org_gwtproject_user_client_ui_DockPanel() {
  return (DockPanel.$clinit(), DockPanel.$f_NORTH__org_gwtproject_user_client_ui_DockPanel);
 }
 /**
  * @return {DockLayoutConstant}
  * @public
  */
 static get f_SOUTH__org_gwtproject_user_client_ui_DockPanel() {
  return (DockPanel.$clinit(), DockPanel.$f_SOUTH__org_gwtproject_user_client_ui_DockPanel);
 }
 /**
  * @return {DockLayoutConstant}
  * @public
  */
 static get f_WEST__org_gwtproject_user_client_ui_DockPanel() {
  return (DockPanel.$clinit(), DockPanel.$f_WEST__org_gwtproject_user_client_ui_DockPanel);
 }
 /**
  * @public
  */
 static $clinit() {
  DockPanel.$clinit = () =>{};
  DockPanel.$loadModules();
  CellPanel.$clinit();
  DockPanel.$f_CENTER__org_gwtproject_user_client_ui_DockPanel = DockLayoutConstant.$create__();
  DockPanel.$f_LINE_START__org_gwtproject_user_client_ui_DockPanel = DockLayoutConstant.$create__();
  DockPanel.$f_LINE_END__org_gwtproject_user_client_ui_DockPanel = DockLayoutConstant.$create__();
  DockPanel.$f_EAST__org_gwtproject_user_client_ui_DockPanel = DockLayoutConstant.$create__();
  DockPanel.$f_NORTH__org_gwtproject_user_client_ui_DockPanel = DockLayoutConstant.$create__();
  DockPanel.$f_SOUTH__org_gwtproject_user_client_ui_DockPanel = DockLayoutConstant.$create__();
  DockPanel.$f_WEST__org_gwtproject_user_client_ui_DockPanel = DockLayoutConstant.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DockPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  DockLayoutConstant = goog.module.get('org.gwtproject.user.client.ui.DockPanel.DockLayoutConstant$impl');
  LayoutData = goog.module.get('org.gwtproject.user.client.ui.DockPanel.LayoutData$impl');
  TmpRow = goog.module.get('org.gwtproject.user.client.ui.DockPanel.TmpRow$impl');
  HasHorizontalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
  HasVerticalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DockPanel, 'org.gwtproject.user.client.ui.DockPanel');

HasAlignment.$markImplementor(DockPanel);

/** @private {DockLayoutConstant} */
DockPanel.$f_CENTER__org_gwtproject_user_client_ui_DockPanel;
/** @private {DockLayoutConstant} */
DockPanel.$f_LINE_START__org_gwtproject_user_client_ui_DockPanel;
/** @private {DockLayoutConstant} */
DockPanel.$f_LINE_END__org_gwtproject_user_client_ui_DockPanel;
/** @private {DockLayoutConstant} */
DockPanel.$f_EAST__org_gwtproject_user_client_ui_DockPanel;
/** @private {DockLayoutConstant} */
DockPanel.$f_NORTH__org_gwtproject_user_client_ui_DockPanel;
/** @private {DockLayoutConstant} */
DockPanel.$f_SOUTH__org_gwtproject_user_client_ui_DockPanel;
/** @private {DockLayoutConstant} */
DockPanel.$f_WEST__org_gwtproject_user_client_ui_DockPanel;

exports = DockPanel; 
//# sourceMappingURL=DockPanel.js.map