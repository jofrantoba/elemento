goog.module('org.gwtproject.user.datepicker.client.CellGridImpl.Cell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let CellGridImpl = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CellGridImpl$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CellGridImpl.Cell.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CellGridImpl.Cell.$2$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template V
  */
class Cell extends Widget {
 /** @protected */
 constructor() {
  super();
  /**@type {CellGridImpl<V>}*/
  this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell;
  /**@type {boolean}*/
  this.f_enabled__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = false;
  /**@type {V}*/
  this.f_value__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_;
  /**@type {number}*/
  this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = 0;
 }
 //Initialization from constructor 'Cell(CellGridImpl, Object)'.
 
 $ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl__java_lang_Object(/** CellGridImpl<V> */ $outer_this, /** V */ value) {
  this.$ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl__org_gwtproject_dom_client_Element__java_lang_Object($outer_this, $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), value);
 }
 //Initialization from constructor 'Cell(CellGridImpl, Element, Object)'.
 
 $ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl__org_gwtproject_dom_client_Element__java_lang_Object(/** CellGridImpl<V> */ $outer_this, /** Object */ elem, /** V */ value) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.$init___$p_org_gwtproject_user_datepicker_client_CellGridImpl_Cell();
  this.f_value__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = value;
  this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = $outer_this.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.size();
  $outer_this.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.add(this);
  if (!$Equality.$same(elem, null)) {
   this.m_setElement__org_gwtproject_dom_client_Element(elem);
  }
  $outer_this.f_elementToCell__org_gwtproject_user_datepicker_client_CellGridImpl_.m_put__org_gwtproject_user_client_ui_UIObject(this);
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(/**@type {!$1<V>}*/ ($1.$create__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this)), KeyDownEvent.m_getType__());
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(/**@type {!$2<V>}*/ ($2.$create__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this)), ClickEvent.m_getType__());
 }
 /** @return {V} */
 m_getValue__() {
  return this.f_value__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_;
 }
 /** @return {boolean} */
 m_isEnabled__() {
  return this.f_enabled__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_;
 }
 /** @return {boolean} */
 m_isHighlighted__() {
  return $Equality.$same(this, this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_);
 }
 /** @return {boolean} */
 m_isSelected__() {
  return $Equality.$same(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_selectedCell__org_gwtproject_user_datepicker_client_CellGridImpl_, this);
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.f_enabled__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = enabled;
  this.m_onEnabled__boolean(enabled);
 }
 
 m_verticalNavigation__int(/** number */ keyCode) {
  switch (keyCode) {
   case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
    this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.m_setHighlighted__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this.m_previousItem__());
    break;
   case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
    this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.m_setHighlighted__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this.m_nextItem__());
    break;
   case KeyCodes.f_KEY_ESCAPE__org_gwtproject_event_dom_client_KeyCodes: 
    break;
   case KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes: 
    this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.m_setSelected__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this);
    break;
  }
 }
 /** @return {Cell<V>} */
 m_nextItem__() {
  if (this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ == this.m_getLastIndex___$p_org_gwtproject_user_datepicker_client_CellGridImpl_Cell()) {
   return /**@type {Cell<V>}*/ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.getAtIndex(0), Cell));
  } else {
   return /**@type {Cell<V>}*/ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.getAtIndex(this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ + 1), Cell));
  }
 }
 
 m_onEnabled__boolean(/** boolean */ enabled) {
  this.m_updateStyle__();
 }
 
 m_onHighlighted__boolean(/** boolean */ highlighted) {
  this.m_updateStyle__();
 }
 
 m_onSelected__boolean(/** boolean */ selected) {
  this.m_updateStyle__();
 }
 /** @return {Cell<V>} */
 m_previousItem__() {
  if (this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ != 0) {
   return /**@type {Cell<V>}*/ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.getAtIndex(this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ - 1), Cell));
  } else {
   return /**@type {Cell<V>}*/ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.getAtIndex(this.m_getLastIndex___$p_org_gwtproject_user_datepicker_client_CellGridImpl_Cell()), Cell));
  }
 }
 /** @abstract */
 m_updateStyle__() {}
 /** @return {number} */
 m_getLastIndex___$p_org_gwtproject_user_datepicker_client_CellGridImpl_Cell() {
  return this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.size() - 1;
 }
 /** @private */
 $init___$p_org_gwtproject_user_datepicker_client_CellGridImpl_Cell() {
  this.f_enabled__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = true;
 }
 
 static $clinit() {
  Cell.$clinit = () =>{};
  Cell.$loadModules();
  Widget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Cell;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  ClickEvent = goog.module.get('org.gwtproject.event.dom.client.ClickEvent$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  KeyDownEvent = goog.module.get('org.gwtproject.event.dom.client.KeyDownEvent$impl');
  $1 = goog.module.get('org.gwtproject.user.datepicker.client.CellGridImpl.Cell.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.datepicker.client.CellGridImpl.Cell.$2$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Cell, 'org.gwtproject.user.datepicker.client.CellGridImpl$Cell');

exports = Cell; 
//# sourceMappingURL=CellGridImpl$Cell.js.map