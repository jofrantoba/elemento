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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellGridImpl<V>} */
  this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell;
  /** @public {boolean} */
  this.f_enabled__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = false;
  /** @public {V} */
  this.f_value__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_;
  /** @public {number} */
  this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = 0;
 }
 /**
  * Initialization from constructor 'Cell(CellGridImpl, Object)'.
  * @param {CellGridImpl<V>} $outer_this
  * @param {V} value
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl__java_lang_Object($outer_this, value) {
  this.$ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl__org_gwtproject_dom_client_Element__java_lang_Object($outer_this, $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), value);
 }
 /**
  * Initialization from constructor 'Cell(CellGridImpl, Element, Object)'.
  * @param {CellGridImpl<V>} $outer_this
  * @param {Object} elem
  * @param {V} value
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl__org_gwtproject_dom_client_Element__java_lang_Object($outer_this, elem, value) {
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
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(/**@type {!$1<V>} */ ($1.$create__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this)), KeyDownEvent.m_getType__());
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(/**@type {!$2<V>} */ ($2.$create__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this)), ClickEvent.m_getType__());
 }
 /**
  * @return {V}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {
  return this.f_enabled__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isHighlighted__() {
  return $Equality.$same(this, this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_highlightedCell__org_gwtproject_user_datepicker_client_CellGridImpl_);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isSelected__() {
  return $Equality.$same(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_selectedCell__org_gwtproject_user_datepicker_client_CellGridImpl_, this);
 }
 /**
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  this.f_enabled__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = enabled;
  this.m_onEnabled__boolean(enabled);
 }
 /**
  * @param {number} keyCode
  * @public
  */
 m_verticalNavigation__int(keyCode) {
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
 /**
  * @return {Cell<V>}
  * @public
  */
 m_nextItem__() {
  if (this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ == this.m_getLastIndex___$p_org_gwtproject_user_datepicker_client_CellGridImpl_Cell()) {
   return /**@type {Cell<V>} */ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.getAtIndex(0), Cell));
  } else {
   return /**@type {Cell<V>} */ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.getAtIndex(this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ + 1), Cell));
  }
 }
 /**
  * @param {boolean} enabled
  * @public
  */
 m_onEnabled__boolean(enabled) {
  this.m_updateStyle__();
 }
 /**
  * @param {boolean} highlighted
  * @public
  */
 m_onHighlighted__boolean(highlighted) {
  this.m_updateStyle__();
 }
 /**
  * @param {boolean} selected
  * @public
  */
 m_onSelected__boolean(selected) {
  this.m_updateStyle__();
 }
 /**
  * @return {Cell<V>}
  * @public
  */
 m_previousItem__() {
  if (this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ != 0) {
   return /**@type {Cell<V>} */ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.getAtIndex(this.f_index__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ - 1), Cell));
  } else {
   return /**@type {Cell<V>} */ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.getAtIndex(this.m_getLastIndex___$p_org_gwtproject_user_datepicker_client_CellGridImpl_Cell()), Cell));
  }
 }
 /**
  * @abstract
  * @public
  */
 m_updateStyle__() {}
 /**
  * @return {number}
  * @public
  */
 m_getLastIndex___$p_org_gwtproject_user_datepicker_client_CellGridImpl_Cell() {
  return this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.f_cellList__org_gwtproject_user_datepicker_client_CellGridImpl_.size() - 1;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_datepicker_client_CellGridImpl_Cell() {
  this.f_enabled__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_ = true;
 }
 /**
  * @public
  */
 static $clinit() {
  Cell.$clinit = () =>{};
  Cell.$loadModules();
  Widget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Cell;
 }
 /**
  * @public
  */
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