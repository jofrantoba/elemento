goog.module('org.gwtproject.user.client.ui.HTMLTable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAllDragAndDropHandlers = goog.require('org.gwtproject.event.dom.client.HasAllDragAndDropHandlers$impl');
const HasClickHandlers = goog.require('org.gwtproject.event.dom.client.HasClickHandlers$impl');
const HasDoubleClickHandlers = goog.require('org.gwtproject.event.dom.client.HasDoubleClickHandlers$impl');
const Panel = goog.require('org.gwtproject.user.client.ui.Panel$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let TableCellElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let DoubleClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickEvent$impl');
let DoubleClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickHandler$impl');
let DragEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndEvent$impl');
let DragEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndHandler$impl');
let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');
let DragEnterHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterHandler$impl');
let DragEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEvent$impl');
let DragHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragHandler$impl');
let DragLeaveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveEvent$impl');
let DragLeaveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveHandler$impl');
let DragOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverEvent$impl');
let DragOverHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverHandler$impl');
let DragStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartEvent$impl');
let DragStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartHandler$impl');
let DropEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DropEvent$impl');
let DropHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DropHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let ElementMapperImpl = goog.forwardDeclare('org.gwtproject.user.client.impl.ElementMapperImpl$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.$1$impl');
let Cell = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.Cell$impl');
let CellFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.CellFormatter$impl');
let ColumnFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.ColumnFormatter$impl');
let RowFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.RowFormatter$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @implements {HasAllDragAndDropHandlers}
 * @implements {HasClickHandlers}
 * @implements {HasDoubleClickHandlers}
  */
class HTMLTable extends Panel {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_;
  /**@type {CellFormatter}*/
  this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_;
  /**@type {ColumnFormatter}*/
  this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_;
  /**@type {RowFormatter}*/
  this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_;
  /**@type {Object}*/
  this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_;
  /**@type {ElementMapperImpl<Widget>}*/
  this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_;
 }
 
 $ctor__org_gwtproject_user_client_ui_HTMLTable__() {
  this.$ctor__org_gwtproject_user_client_ui_Panel__();
  this.$init___$p_org_gwtproject_user_client_ui_HTMLTable();
  this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_ = DOM.m_createTable__();
  this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_ = DOM.m_createTBody__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_);
  this.m_setElement__org_gwtproject_dom_client_Element(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_);
 }
 /** @override @return {HandlerRegistration} */
 m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(/** ClickHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, ClickEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDoubleClickHandler__org_gwtproject_event_dom_client_DoubleClickHandler(/** DoubleClickHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DoubleClickEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragEndHandler__org_gwtproject_event_dom_client_DragEndHandler(/** DragEndHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEndEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragEnterHandler__org_gwtproject_event_dom_client_DragEnterHandler(/** DragEnterHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEnterEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragHandler__org_gwtproject_event_dom_client_DragHandler(/** DragHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragLeaveHandler__org_gwtproject_event_dom_client_DragLeaveHandler(/** DragLeaveHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragLeaveEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragOverHandler__org_gwtproject_event_dom_client_DragOverHandler(/** DragOverHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragOverEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragStartHandler__org_gwtproject_event_dom_client_DragStartHandler(/** DragStartHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragStartEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDropHandler__org_gwtproject_event_dom_client_DropHandler(/** DropHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DropEvent.m_getType__());
 }
 /** @override */
 m_clear__() {
  this.m_clear__boolean(false);
 }
 
 m_clear__boolean(/** boolean */ clearInnerHTML) {
  for (let row = 0; row < this.m_getRowCount__(); ++row) {
   for (let col = 0; col < this.m_getCellCount__int(row); ++col) {
    this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, col, clearInnerHTML);
   }
  }
 }
 /** @return {boolean} */
 m_clearCell__int__int(/** number */ row, /** number */ column) {
  let td = this.m_getCellFormatter__().m_getElement__int__int(row, column);
  return this.m_internalClearCell__org_gwtproject_dom_client_Element__boolean(td, true);
 }
 /** @abstract @return {number} */
 m_getCellCount__int(/** number */ row) {}
 /** @return {Cell} */
 m_getCellForEvent__org_gwtproject_event_dom_client_ClickEvent(/** ClickEvent */ event) {
  let td = this.m_getEventTargetCell__org_gwtproject_user_client_Event(Event.m_as__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__()));
  if ($Equality.$same(td, null)) {
   return null;
  }
  let row = $Overlay.m_as__org_gwtproject_dom_client_Element(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(td)).sectionRowIndex;
  let column = TableCellElement_$Overlay.m_as__org_gwtproject_dom_client_Element(td).cellIndex;
  return Cell.$create__org_gwtproject_user_client_ui_HTMLTable__int__int(this, row, column);
 }
 /** @return {CellFormatter} */
 m_getCellFormatter__() {
  return this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_;
 }
 /** @return {number} */
 m_getCellPadding__() {
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "cellPadding");
 }
 /** @return {number} */
 m_getCellSpacing__() {
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "cellSpacing");
 }
 /** @return {ColumnFormatter} */
 m_getColumnFormatter__() {
  return this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_;
 }
 /** @return {?string} */
 m_getHTML__int__int(/** number */ row, /** number */ column) {
  return Element_$Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getElement__int__int(row, column));
 }
 /** @abstract @return {number} */
 m_getRowCount__() {}
 /** @return {RowFormatter} */
 m_getRowFormatter__() {
  return this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_;
 }
 /** @return {?string} */
 m_getText__int__int(/** number */ row, /** number */ column) {
  this.m_checkCellBounds__int__int(row, column);
  let e = this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getElement__int__int(row, column);
  return Element_$Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(e);
 }
 /** @return {Widget} */
 m_getWidget__int__int(/** number */ row, /** number */ column) {
  this.m_checkCellBounds__int__int(row, column);
  return this.m_getWidgetImpl__int__int_$p_org_gwtproject_user_client_ui_HTMLTable(row, column);
 }
 /** @return {boolean} */
 m_isCellPresent__int__int(/** number */ row, /** number */ column) {
  if ((row >= this.m_getRowCount__()) || (row < 0)) {
   return false;
  }
  if ((column < 0) || (column >= this.m_getCellCount__int(row))) {
   return false;
  } else {
   return true;
  }
 }
 /** @override @return {Iterator<Widget>} */
 m_iterator__() {
  return $1.$create__org_gwtproject_user_client_ui_HTMLTable(this);
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  if (!$Equality.$same(widget.m_getParent__(), this)) {
   return false;
  }
  try {
   this.m_orphan__org_gwtproject_user_client_ui_Widget(widget);
  } finally {
   let elem = widget.m_getElement__();
   DOM.m_getParent__org_gwtproject_dom_client_Element(elem).removeChild(elem);
   this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_.m_removeByElement__org_gwtproject_dom_client_Element(elem);
  }
  return true;
 }
 
 m_setBorderWidth__int(/** number */ width) {
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "border", "" + width);
 }
 
 m_setCellPadding__int(/** number */ padding) {
  Element_$Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "cellPadding", padding);
 }
 
 m_setCellSpacing__int(/** number */ spacing) {
  Element_$Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "cellSpacing", spacing);
 }
 
 m_setHTML__int__int__java_lang_String(/** number */ row, /** number */ column, /** ?string */ html) {
  this.m_prepareCell__int__int(row, column);
  let td = this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, $Equality.$same(html, null));
  if (!$Equality.$same(html, null)) {
   Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, html);
  }
 }
 
 m_setHTML__int__int__org_gwtproject_safehtml_shared_SafeHtml(/** number */ row, /** number */ column, /** SafeHtml */ html) {
  this.m_setHTML__int__int__java_lang_String(row, column, html.m_asString__());
 }
 
 m_setText__int__int__java_lang_String(/** number */ row, /** number */ column, /** ?string */ text) {
  this.m_prepareCell__int__int(row, column);
  let /** Object */ td;
  td = this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, $Equality.$same(text, null));
  if (!$Equality.$same(text, null)) {
   Element_$Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, text);
  }
 }
 
 m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(/** number */ row, /** number */ column, /** Widget */ widget) {
  this.m_prepareCell__int__int(row, column);
  let td = this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, true);
  if (!$Equality.$same(widget, null)) {
   widget.m_removeFromParent__();
   this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_.m_put__org_gwtproject_user_client_ui_UIObject(widget);
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(td, widget.m_getElement__());
   this.m_adopt__org_gwtproject_user_client_ui_Widget(widget);
  }
 }
 
 m_setWidget__int__int__org_gwtproject_user_client_ui_IsWidget(/** number */ row, /** number */ column, /** IsWidget */ widget) {
  this.m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(row, column, Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(widget));
 }
 
 m_checkCellBounds__int__int(/** number */ row, /** number */ column) {
  this.m_checkRowBounds__int(row);
  if (column < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Column " + column + " must be non-negative: " + column));
  }
  let cellSize = this.m_getCellCount__int(row);
  if (cellSize <= column) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Column index: " + column + ", Column size: " + this.m_getCellCount__int(row)));
  }
 }
 
 m_checkRowBounds__int(/** number */ row) {
  let rowSize = this.m_getRowCount__();
  if ((row >= rowSize) || (row < 0)) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Row index: " + row + ", Row size: " + rowSize));
  }
 }
 /** @return {Object} */
 m_createCell__() {
  return DOM.m_createTD__();
 }
 /** @return {Object} */
 m_getBodyElement__() {
  return this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_;
 }
 /** @return {number} */
 m_getDOMCellCount__org_gwtproject_dom_client_Element__int(/** Object */ tableBody, /** number */ row) {
  let rowElement = /**@type {Object}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tableBody), row), Element_$Overlay));
  return this.m_getCells__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(rowElement).length;
 }
 /** @return {number} */
 m_getDOMCellCount__int(/** number */ row) {
  return this.m_getDOMCellCount__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
 }
 /** @return {number} */
 m_getDOMRowCount__() {
  return this.m_getDOMRowCount__org_gwtproject_dom_client_Element(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_);
 }
 /** @return {number} */
 m_getDOMRowCount__org_gwtproject_dom_client_Element(/** Object */ tbody) {
  return this.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tbody).length;
 }
 /** @return {Object} */
 m_getEventTargetCell__org_gwtproject_user_client_Event(/** Event */ event) {
  let td = DOM.m_eventGetTarget__org_gwtproject_user_client_Event(event);
  for (; !$Equality.$same(td, null); td = DOM.m_getParent__org_gwtproject_dom_client_Element(td)) {
   if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(Element_$Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, "tagName"), "td")) {
    let tr = DOM.m_getParent__org_gwtproject_dom_client_Element(td);
    let body = DOM.m_getParent__org_gwtproject_dom_client_Element(tr);
    if ($Equality.$same(body, this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_)) {
     return td;
    }
   }
   if ($Equality.$same(td, this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_)) {
    return null;
   }
  }
  return null;
 }
 
 m_insertCell__int__int(/** number */ row, /** number */ column) {
  let tr = this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRow__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
  let td = this.m_createCell__();
  DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(tr, td, column);
 }
 
 m_insertCells__int__int__int(/** number */ row, /** number */ column, /** number */ count) {
  let tr = this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRow__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
  for (let i = column; i < column + count; i++) {
   let td = this.m_createCell__();
   DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(tr, td, i);
  }
 }
 /** @return {number} */
 m_insertRow__int(/** number */ beforeRow) {
  if (beforeRow != this.m_getRowCount__()) {
   this.m_checkRowBounds__int(beforeRow);
  }
  let tr = DOM.m_createTR__();
  DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, tr, beforeRow);
  return beforeRow;
 }
 /** @return {boolean} */
 m_internalClearCell__org_gwtproject_dom_client_Element__boolean(/** Object */ td, /** boolean */ clearInnerHTML) {
  let maybeChild = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(td);
  let widget = null;
  if (!$Equality.$same(maybeChild, null)) {
   widget = /**@type {Widget}*/ ($Casts.$to(this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_.m_get__org_gwtproject_dom_client_Element(maybeChild), Widget));
  }
  if (!$Equality.$same(widget, null)) {
   this.m_remove__org_gwtproject_user_client_ui_Widget(widget);
   return true;
  } else {
   if (clearInnerHTML) {
    Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, "");
   }
   return false;
  }
 }
 /** @override */
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  let rowCount = this.m_getRowCount__();
  for (let row = 0; row < rowCount; row++) {
   let cellCount = this.m_getCellCount__int(row);
   for (let cell = 0; cell < cellCount; cell++) {
    let cellElem = this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRawElement__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(row, cell);
    UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(cellElem, baseID, row + "-" + cell);
   }
  }
 }
 /** @abstract */
 m_prepareCell__int__int(/** number */ row, /** number */ column) {}
 
 m_prepareColumn__int(/** number */ column) {
  if (column < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Cannot access a column with a negative index: " + column));
  }
 }
 /** @abstract */
 m_prepareRow__int(/** number */ row) {}
 
 m_removeCell__int__int(/** number */ row, /** number */ column) {
  this.m_checkCellBounds__int__int(row, column);
  let td = this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, false);
  let tr = this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRow__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
  tr.removeChild(td);
 }
 
 m_removeRow__int(/** number */ row) {
  let columnCount = this.m_getCellCount__int(row);
  for (let column = 0; column < columnCount; ++column) {
   this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, false);
  }
  this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_.removeChild(this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRow__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row));
 }
 
 m_setCellFormatter__org_gwtproject_user_client_ui_HTMLTable_CellFormatter(/** CellFormatter */ cellFormatter) {
  this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_ = cellFormatter;
 }
 
 m_setColumnFormatter__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(/** ColumnFormatter */ formatter) {
  if (!$Equality.$same(this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_, null)) {
   formatter.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter = this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter;
  }
  this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_ = formatter;
  this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_prepareColumnGroup___$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter();
 }
 
 m_setRowFormatter__org_gwtproject_user_client_ui_HTMLTable_RowFormatter(/** RowFormatter */ rowFormatter) {
  this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_ = rowFormatter;
 }
 
 m_addCells__org_gwtproject_dom_client_Element__int__int_$pp_org_gwtproject_user_client_ui(/** Object */ tbody, /** number */ row, /** number */ num) {
  let rowElem = /**@type {Object}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tbody), row), Element_$Overlay));
  for (let i = 0; i < num; i++) {
   let tdElement = Document_$Overlay.m_createTDElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   rowElem.appendChild(tdElement);
  }
 }
 /** @return {Array<Object>} */
 m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(/** Object */ tbody) {
  return /**@type {Array<Object>}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (tbody), "rows")));
 }
 /** @return {Array<Object>} */
 m_getCells__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(/** Object */ row) {
  return /**@type {Array<Object>}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (row), "cells")));
 }
 /** @return {Object} */
 m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(/** number */ row, /** number */ column, /** boolean */ clearInnerHTML) {
  let td = this.m_getCellFormatter__().m_getRawElement__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(row, column);
  this.m_internalClearCell__org_gwtproject_dom_client_Element__boolean(td, clearInnerHTML);
  return td;
 }
 /** @return {Widget} */
 m_getWidgetImpl__int__int_$p_org_gwtproject_user_client_ui_HTMLTable(/** number */ row, /** number */ column) {
  let e = this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRawElement__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(row, column);
  let child = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(e);
  if ($Equality.$same(child, null)) {
   return null;
  } else {
   return /**@type {Widget}*/ ($Casts.$to(this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_.m_get__org_gwtproject_dom_client_Element(child), Widget));
  }
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Widget>} */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_HTMLTable() {
  this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_ = /**@type {!ElementMapperImpl<Widget>}*/ (ElementMapperImpl.$create__());
 }
 
 static $clinit() {
  HTMLTable.$clinit = () =>{};
  HTMLTable.$loadModules();
  Panel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLTable;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  TableCellElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
  ClickEvent = goog.module.get('org.gwtproject.event.dom.client.ClickEvent$impl');
  DoubleClickEvent = goog.module.get('org.gwtproject.event.dom.client.DoubleClickEvent$impl');
  DragEndEvent = goog.module.get('org.gwtproject.event.dom.client.DragEndEvent$impl');
  DragEnterEvent = goog.module.get('org.gwtproject.event.dom.client.DragEnterEvent$impl');
  DragEvent = goog.module.get('org.gwtproject.event.dom.client.DragEvent$impl');
  DragLeaveEvent = goog.module.get('org.gwtproject.event.dom.client.DragLeaveEvent$impl');
  DragOverEvent = goog.module.get('org.gwtproject.event.dom.client.DragOverEvent$impl');
  DragStartEvent = goog.module.get('org.gwtproject.event.dom.client.DragStartEvent$impl');
  DropEvent = goog.module.get('org.gwtproject.event.dom.client.DropEvent$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  ElementMapperImpl = goog.module.get('org.gwtproject.user.client.impl.ElementMapperImpl$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.HTMLTable.$1$impl');
  Cell = goog.module.get('org.gwtproject.user.client.ui.HTMLTable.Cell$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(HTMLTable, 'org.gwtproject.user.client.ui.HTMLTable');

HasAllDragAndDropHandlers.$markImplementor(HTMLTable);
HasClickHandlers.$markImplementor(HTMLTable);
HasDoubleClickHandlers.$markImplementor(HTMLTable);

exports = HTMLTable; 
//# sourceMappingURL=HTMLTable.js.map