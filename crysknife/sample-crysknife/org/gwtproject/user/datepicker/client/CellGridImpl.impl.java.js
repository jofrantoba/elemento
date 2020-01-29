goog.module('org.gwtproject.user.datepicker.client.CellGridImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Grid = goog.require('org.gwtproject.user.client.ui.Grid$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let ElementMapperImpl = goog.forwardDeclare('org.gwtproject.user.client.impl.ElementMapperImpl$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let Cell = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CellGridImpl.Cell$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template V
  */
class CellGridImpl extends Grid {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Cell<V>} */
  this.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_;
  /** @public {Cell<V>} */
  this.f_selectedCell__org_gwtproject_user_datepicker_client_CellGridImpl_;
  /** @public {ElementMapperImpl<Cell<V>>} */
  this.f_elementToCell__org_gwtproject_user_datepicker_client_CellGridImpl_;
  /** @public {ArrayList<Cell<V>>} */
  this.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_CellGridImpl__() {
  this.$ctor__org_gwtproject_user_client_ui_Grid__();
  this.$init___$p_org_gwtproject_user_datepicker_client_CellGridImpl();
  this.m_setCellPadding__int(0);
  this.m_setCellSpacing__int(0);
  this.m_setBorderWidth__int(0);
  this.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_ONMOUSEOVER__org_gwtproject_user_client_Event | Event.f_ONMOUSEOUT__org_gwtproject_user_client_Event);
 }
 /**
  * @param {Object} element
  * @return {Cell<V>}
  * @public
  */
 m_getCell__org_gwtproject_dom_client_Element(element) {
  return /**@type {Cell<V>} */ ($Casts.$to(this.f_elementToCell__org_gwtproject_user_datepicker_client_CellGridImpl_.m_get__org_gwtproject_dom_client_Element(element), Cell));
 }
 /**
  * @param {Event} e
  * @return {Cell<V>}
  * @public
  */
 m_getCell__org_gwtproject_user_client_Event(e) {
  let td = this.m_getEventTargetCell__org_gwtproject_user_client_Event(e);
  return !$Equality.$same(td, null) ? /**@type {Cell<V>} */ ($Casts.$to(this.f_elementToCell__org_gwtproject_user_datepicker_client_CellGridImpl_.m_get__org_gwtproject_dom_client_Element(td), Cell)) : null;
 }
 /**
  * @param {number} i
  * @return {Cell<V>}
  * @public
  */
 m_getCell__int(i) {
  return /**@type {Cell<V>} */ ($Casts.$to(this.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.getAtIndex(i), Cell));
 }
 /**
  * @return {Iterator}
  * @public
  */
 m_getCells__() {
  return this.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.m_iterator__();
 }
 /**
  * @return {Cell<V>}
  * @public
  */
 m_getHighlightedCell__() {
  return this.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getNumCells__() {
  return this.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.size();
 }
 /**
  * @return {Cell<V>}
  * @public
  */
 m_getSelectedCell__() {
  return this.f_selectedCell__org_gwtproject_user_datepicker_client_CellGridImpl_;
 }
 /**
  * @return {V}
  * @public
  */
 m_getSelectedValue__() {
  return this.m_getValue__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this.f_selectedCell__org_gwtproject_user_datepicker_client_CellGridImpl_);
 }
 /**
  * @param {Cell<V>} cell
  * @return {V}
  * @public
  */
 m_getValue__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(cell) {
  return ($Equality.$same(cell, null) ? null : cell.m_getValue__());
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONCLICK__org_gwtproject_user_client_Event: 
    {
     let cell = this.m_getCell__org_gwtproject_user_client_Event(event);
     if (this.m_isActive__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_$p_org_gwtproject_user_datepicker_client_CellGridImpl(cell)) {
      this.m_setSelected__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(cell);
     }
     break;
    }
   case Event.f_ONMOUSEOUT__org_gwtproject_user_client_Event: 
    {
     let e = DOM.m_eventGetFromElement__org_gwtproject_user_client_Event(event);
     if (!$Equality.$same(e, null)) {
      let cell_1 = /**@type {Cell<V>} */ ($Casts.$to(this.f_elementToCell__org_gwtproject_user_datepicker_client_CellGridImpl_.m_get__org_gwtproject_dom_client_Element(e), Cell));
      if ($Equality.$same(cell_1, this.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_)) {
       this.m_setHighlighted__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(null);
      }
     }
     break;
    }
   case Event.f_ONMOUSEOVER__org_gwtproject_user_client_Event: 
    {
     let e_1 = DOM.m_eventGetToElement__org_gwtproject_user_client_Event(event);
     if (!$Equality.$same(e_1, null)) {
      let cell_2 = /**@type {Cell<V>} */ ($Casts.$to(this.f_elementToCell__org_gwtproject_user_datepicker_client_CellGridImpl_.m_get__org_gwtproject_dom_client_Element(e_1), Cell));
      if (this.m_isActive__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_$p_org_gwtproject_user_datepicker_client_CellGridImpl(cell_2)) {
       this.m_setHighlighted__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(cell_2);
      }
     }
     break;
    }
  }
 }
 /**
  * @override
  * @public
  */
 m_onUnload__() {
  this.m_setHighlighted__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(null);
 }
 /**
  * @param {Cell<V>} nextHighlighted
  * @public
  */
 m_setHighlighted__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(nextHighlighted) {
  if ($Equality.$same(nextHighlighted, this.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_)) {
   return;
  }
  let oldHighlighted = this.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_;
  this.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_ = nextHighlighted;
  if (!$Equality.$same(oldHighlighted, null)) {
   oldHighlighted.m_onHighlighted__boolean(false);
  }
  if (!$Equality.$same(this.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_, null)) {
   this.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_.m_onHighlighted__boolean(true);
  }
 }
 /**
  * @param {Cell<V>} cell
  * @public
  */
 m_setSelected__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(cell) {
  let last = this.m_getSelectedCell__();
  this.f_selectedCell__org_gwtproject_user_datepicker_client_CellGridImpl_ = cell;
  if (!$Equality.$same(last, null)) {
   last.m_onSelected__boolean(false);
  }
  if (!$Equality.$same(this.f_selectedCell__org_gwtproject_user_datepicker_client_CellGridImpl_, null)) {
   this.f_selectedCell__org_gwtproject_user_datepicker_client_CellGridImpl_.m_onSelected__boolean(true);
  }
  this.m_onSelected__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(last, this.f_selectedCell__org_gwtproject_user_datepicker_client_CellGridImpl_);
 }
 /**
  * @abstract
  * @param {Cell<V>} lastSelected
  * @param {Cell<V>} cell
  * @public
  */
 m_onSelected__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(lastSelected, cell) {}
 /**
  * @param {Cell<V>} cell
  * @return {boolean}
  * @public
  */
 m_isActive__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_$p_org_gwtproject_user_datepicker_client_CellGridImpl(cell) {
  return !$Equality.$same(cell, null) && cell.m_isEnabled__();
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
 $init___$p_org_gwtproject_user_datepicker_client_CellGridImpl() {
  this.f_elementToCell__org_gwtproject_user_datepicker_client_CellGridImpl_ = /**@type {!ElementMapperImpl<Cell<V>>} */ (ElementMapperImpl.$create__());
  this.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_ = /**@type {!ArrayList<Cell<V>>} */ (ArrayList.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  CellGridImpl.$clinit = () =>{};
  CellGridImpl.$loadModules();
  Grid.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellGridImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  ElementMapperImpl = goog.module.get('org.gwtproject.user.client.impl.ElementMapperImpl$impl');
  Cell = goog.module.get('org.gwtproject.user.datepicker.client.CellGridImpl.Cell$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CellGridImpl, 'org.gwtproject.user.datepicker.client.CellGridImpl');

exports = CellGridImpl; 
//# sourceMappingURL=CellGridImpl.js.map