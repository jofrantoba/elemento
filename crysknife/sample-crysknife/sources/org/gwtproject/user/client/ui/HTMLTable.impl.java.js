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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_;
  /** @public {CellFormatter} */
  this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_;
  /** @public {ColumnFormatter} */
  this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_;
  /** @public {RowFormatter} */
  this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_;
  /** @public {Object} */
  this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_;
  /** @public {ElementMapperImpl<Widget>} */
  this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTMLTable__() {
  this.$ctor__org_gwtproject_user_client_ui_Panel__();
  this.$init___$p_org_gwtproject_user_client_ui_HTMLTable();
  this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_ = DOM.m_createTable__();
  this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_ = DOM.m_createTBody__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_);
  this.m_setElement__org_gwtproject_dom_client_Element(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_);
 }
 /**
  * @override
  * @param {ClickHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, ClickEvent.m_getType__());
 }
 /**
  * @override
  * @param {DoubleClickHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDoubleClickHandler__org_gwtproject_event_dom_client_DoubleClickHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DoubleClickEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragEndHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragEndHandler__org_gwtproject_event_dom_client_DragEndHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEndEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragEnterHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragEnterHandler__org_gwtproject_event_dom_client_DragEnterHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEnterEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragHandler__org_gwtproject_event_dom_client_DragHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragLeaveHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragLeaveHandler__org_gwtproject_event_dom_client_DragLeaveHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragLeaveEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragOverHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragOverHandler__org_gwtproject_event_dom_client_DragOverHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragOverEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragStartHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragStartHandler__org_gwtproject_event_dom_client_DragStartHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragStartEvent.m_getType__());
 }
 /**
  * @override
  * @param {DropHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDropHandler__org_gwtproject_event_dom_client_DropHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DropEvent.m_getType__());
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  this.m_clear__boolean(false);
 }
 /**
  * @param {boolean} clearInnerHTML
  * @public
  */
 m_clear__boolean(clearInnerHTML) {
  for (let row = 0; row < this.m_getRowCount__(); ++row) {
   for (let col = 0; col < this.m_getCellCount__int(row); ++col) {
    this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, col, clearInnerHTML);
   }
  }
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {boolean}
  * @public
  */
 m_clearCell__int__int(row, column) {
  let td = this.m_getCellFormatter__().m_getElement__int__int(row, column);
  return this.m_internalClearCell__org_gwtproject_dom_client_Element__boolean(td, true);
 }
 /**
  * @abstract
  * @param {number} row
  * @return {number}
  * @public
  */
 m_getCellCount__int(row) {}
 /**
  * @param {ClickEvent} event
  * @return {Cell}
  * @public
  */
 m_getCellForEvent__org_gwtproject_event_dom_client_ClickEvent(event) {
  let td = this.m_getEventTargetCell__org_gwtproject_user_client_Event(Event.m_as__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__()));
  if ($Equality.$same(td, null)) {
   return null;
  }
  let row = $Overlay.m_as__org_gwtproject_dom_client_Element(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(td)).sectionRowIndex;
  let column = TableCellElement_$Overlay.m_as__org_gwtproject_dom_client_Element(td).cellIndex;
  return Cell.$create__org_gwtproject_user_client_ui_HTMLTable__int__int(this, row, column);
 }
 /**
  * @return {CellFormatter}
  * @public
  */
 m_getCellFormatter__() {
  return this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getCellPadding__() {
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "cellPadding");
 }
 /**
  * @return {number}
  * @public
  */
 m_getCellSpacing__() {
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "cellSpacing");
 }
 /**
  * @return {ColumnFormatter}
  * @public
  */
 m_getColumnFormatter__() {
  return this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_;
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {?string}
  * @public
  */
 m_getHTML__int__int(row, column) {
  return Element_$Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getElement__int__int(row, column));
 }
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getRowCount__() {}
 /**
  * @return {RowFormatter}
  * @public
  */
 m_getRowFormatter__() {
  return this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_;
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {?string}
  * @public
  */
 m_getText__int__int(row, column) {
  this.m_checkCellBounds__int__int(row, column);
  let e = this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getElement__int__int(row, column);
  return Element_$Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(e);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {Widget}
  * @public
  */
 m_getWidget__int__int(row, column) {
  this.m_checkCellBounds__int__int(row, column);
  return this.m_getWidgetImpl__int__int_$p_org_gwtproject_user_client_ui_HTMLTable(row, column);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {boolean}
  * @public
  */
 m_isCellPresent__int__int(row, column) {
  if ((row >= this.m_getRowCount__()) || (row < 0)) {
   return false;
  }
  if ((column < 0) || (column >= this.m_getCellCount__int(row))) {
   return false;
  } else {
   return true;
  }
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return $1.$create__org_gwtproject_user_client_ui_HTMLTable(this);
 }
 /**
  * @override
  * @param {Widget} widget
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(widget) {
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
 /**
  * @param {number} width
  * @public
  */
 m_setBorderWidth__int(width) {
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "border", "" + width);
 }
 /**
  * @param {number} padding
  * @public
  */
 m_setCellPadding__int(padding) {
  Element_$Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "cellPadding", padding);
 }
 /**
  * @param {number} spacing
  * @public
  */
 m_setCellSpacing__int(spacing) {
  Element_$Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, "cellSpacing", spacing);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} html
  * @public
  */
 m_setHTML__int__int__java_lang_String(row, column, html) {
  this.m_prepareCell__int__int(row, column);
  let td = this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, $Equality.$same(html, null));
  if (!$Equality.$same(html, null)) {
   Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, html);
  }
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {SafeHtml} html
  * @public
  */
 m_setHTML__int__int__org_gwtproject_safehtml_shared_SafeHtml(row, column, html) {
  this.m_setHTML__int__int__java_lang_String(row, column, html.m_asString__());
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} text
  * @public
  */
 m_setText__int__int__java_lang_String(row, column, text) {
  this.m_prepareCell__int__int(row, column);
  let /** Object */ td;
  td = this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, $Equality.$same(text, null));
  if (!$Equality.$same(text, null)) {
   Element_$Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, text);
  }
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {Widget} widget
  * @public
  */
 m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(row, column, widget) {
  this.m_prepareCell__int__int(row, column);
  let td = this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, true);
  if (!$Equality.$same(widget, null)) {
   widget.m_removeFromParent__();
   this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_.m_put__org_gwtproject_user_client_ui_UIObject(widget);
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(td, widget.m_getElement__());
   this.m_adopt__org_gwtproject_user_client_ui_Widget(widget);
  }
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {IsWidget} widget
  * @public
  */
 m_setWidget__int__int__org_gwtproject_user_client_ui_IsWidget(row, column, widget) {
  this.m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(row, column, Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(widget));
 }
 /**
  * @param {number} row
  * @param {number} column
  * @public
  */
 m_checkCellBounds__int__int(row, column) {
  this.m_checkRowBounds__int(row);
  if (column < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Column " + column + " must be non-negative: " + column));
  }
  let cellSize = this.m_getCellCount__int(row);
  if (cellSize <= column) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Column index: " + column + ", Column size: " + this.m_getCellCount__int(row)));
  }
 }
 /**
  * @param {number} row
  * @public
  */
 m_checkRowBounds__int(row) {
  let rowSize = this.m_getRowCount__();
  if ((row >= rowSize) || (row < 0)) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Row index: " + row + ", Row size: " + rowSize));
  }
 }
 /**
  * @return {Object}
  * @public
  */
 m_createCell__() {
  return DOM.m_createTD__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getBodyElement__() {
  return this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_;
 }
 /**
  * @param {Object} tableBody
  * @param {number} row
  * @return {number}
  * @public
  */
 m_getDOMCellCount__org_gwtproject_dom_client_Element__int(tableBody, row) {
  let rowElement = /**@type {Object} */ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tableBody), row), Element_$Overlay));
  return this.m_getCells__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(rowElement).length;
 }
 /**
  * @param {number} row
  * @return {number}
  * @public
  */
 m_getDOMCellCount__int(row) {
  return this.m_getDOMCellCount__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
 }
 /**
  * @return {number}
  * @public
  */
 m_getDOMRowCount__() {
  return this.m_getDOMRowCount__org_gwtproject_dom_client_Element(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_);
 }
 /**
  * @param {Object} tbody
  * @return {number}
  * @public
  */
 m_getDOMRowCount__org_gwtproject_dom_client_Element(tbody) {
  return this.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tbody).length;
 }
 /**
  * @param {Event} event
  * @return {Object}
  * @public
  */
 m_getEventTargetCell__org_gwtproject_user_client_Event(event) {
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
 /**
  * @param {number} row
  * @param {number} column
  * @public
  */
 m_insertCell__int__int(row, column) {
  let tr = this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRow__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
  let td = this.m_createCell__();
  DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(tr, td, column);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {number} count
  * @public
  */
 m_insertCells__int__int__int(row, column, count) {
  let tr = this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRow__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
  for (let i = column; i < column + count; i++) {
   let td = this.m_createCell__();
   DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(tr, td, i);
  }
 }
 /**
  * @param {number} beforeRow
  * @return {number}
  * @public
  */
 m_insertRow__int(beforeRow) {
  if (beforeRow != this.m_getRowCount__()) {
   this.m_checkRowBounds__int(beforeRow);
  }
  let tr = DOM.m_createTR__();
  DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, tr, beforeRow);
  return beforeRow;
 }
 /**
  * @param {Object} td
  * @param {boolean} clearInnerHTML
  * @return {boolean}
  * @public
  */
 m_internalClearCell__org_gwtproject_dom_client_Element__boolean(td, clearInnerHTML) {
  let maybeChild = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(td);
  let widget = null;
  if (!$Equality.$same(maybeChild, null)) {
   widget = /**@type {Widget} */ ($Casts.$to(this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_.m_get__org_gwtproject_dom_client_Element(maybeChild), Widget));
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
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
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
 /**
  * @abstract
  * @param {number} row
  * @param {number} column
  * @public
  */
 m_prepareCell__int__int(row, column) {}
 /**
  * @param {number} column
  * @public
  */
 m_prepareColumn__int(column) {
  if (column < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Cannot access a column with a negative index: " + column));
  }
 }
 /**
  * @abstract
  * @param {number} row
  * @public
  */
 m_prepareRow__int(row) {}
 /**
  * @param {number} row
  * @param {number} column
  * @public
  */
 m_removeCell__int__int(row, column) {
  this.m_checkCellBounds__int__int(row, column);
  let td = this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, false);
  let tr = this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRow__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
  tr.removeChild(td);
 }
 /**
  * @param {number} row
  * @public
  */
 m_removeRow__int(row) {
  let columnCount = this.m_getCellCount__int(row);
  for (let column = 0; column < columnCount; ++column) {
   this.m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, false);
  }
  this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_.removeChild(this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRow__org_gwtproject_dom_client_Element__int(this.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row));
 }
 /**
  * @param {CellFormatter} cellFormatter
  * @public
  */
 m_setCellFormatter__org_gwtproject_user_client_ui_HTMLTable_CellFormatter(cellFormatter) {
  this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_ = cellFormatter;
 }
 /**
  * @param {ColumnFormatter} formatter
  * @public
  */
 m_setColumnFormatter__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(formatter) {
  if (!$Equality.$same(this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_, null)) {
   formatter.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter = this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter;
  }
  this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_ = formatter;
  this.f_columnFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_prepareColumnGroup___$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter();
 }
 /**
  * @param {RowFormatter} rowFormatter
  * @public
  */
 m_setRowFormatter__org_gwtproject_user_client_ui_HTMLTable_RowFormatter(rowFormatter) {
  this.f_rowFormatter__org_gwtproject_user_client_ui_HTMLTable_ = rowFormatter;
 }
 /**
  * @param {Object} tbody
  * @param {number} row
  * @param {number} num
  * @public
  */
 m_addCells__org_gwtproject_dom_client_Element__int__int_$pp_org_gwtproject_user_client_ui(tbody, row, num) {
  let rowElem = /**@type {Object} */ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tbody), row), Element_$Overlay));
  for (let i = 0; i < num; i++) {
   let tdElement = Document_$Overlay.m_createTDElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   rowElem.appendChild(tdElement);
  }
 }
 /**
  * @param {Object} tbody
  * @return {Array<Object>}
  * @public
  */
 m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tbody) {
  return /**@type {Array<Object>} */ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (tbody), "rows")));
 }
 /**
  * @param {Object} row
  * @return {Array<Object>}
  * @public
  */
 m_getCells__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(row) {
  return /**@type {Array<Object>} */ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (row), "cells")));
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {boolean} clearInnerHTML
  * @return {Object}
  * @public
  */
 m_cleanCell__int__int__boolean_$p_org_gwtproject_user_client_ui_HTMLTable(row, column, clearInnerHTML) {
  let td = this.m_getCellFormatter__().m_getRawElement__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(row, column);
  this.m_internalClearCell__org_gwtproject_dom_client_Element__boolean(td, clearInnerHTML);
  return td;
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {Widget}
  * @public
  */
 m_getWidgetImpl__int__int_$p_org_gwtproject_user_client_ui_HTMLTable(row, column) {
  let e = this.f_cellFormatter__org_gwtproject_user_client_ui_HTMLTable_.m_getRawElement__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(row, column);
  let child = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(e);
  if ($Equality.$same(child, null)) {
   return null;
  } else {
   return /**@type {Widget} */ ($Casts.$to(this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_.m_get__org_gwtproject_dom_client_Element(child), Widget));
  }
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
 $init___$p_org_gwtproject_user_client_ui_HTMLTable() {
  this.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_ = /**@type {!ElementMapperImpl<Widget>} */ (ElementMapperImpl.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLTable.$clinit = () =>{};
  HTMLTable.$loadModules();
  Panel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLTable;
 }
 /**
  * @public
  */
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