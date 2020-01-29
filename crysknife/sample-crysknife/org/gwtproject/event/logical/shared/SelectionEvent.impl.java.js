goog.module('org.gwtproject.event.logical.shared.SelectionEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasSelectionHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasSelectionHandlers$impl');
let SelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {Event<SelectionHandler<T>>}
  */
class SelectionEvent extends Event {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {T} */
  this.f_selectedItem__org_gwtproject_event_logical_shared_SelectionEvent_;
 }
 /**
  * @template T_1
  * @param {HasSelectionHandlers<T_1>} source
  * @param {T_1} selectedItem
  * @public
  */
 static m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(source, selectedItem) {
  SelectionEvent.$clinit();
  if (!$Equality.$same(SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_, null)) {
   let event = /**@type {!SelectionEvent<T_1>} */ (SelectionEvent.$create__java_lang_Object(selectedItem));
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @return {Type<SelectionHandler<?>>}
  * @public
  */
 static m_getType__() {
  SelectionEvent.$clinit();
  if ($Equality.$same(SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_, null)) {
   SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_ = /**@type {!Type<SelectionHandler<?>>} */ (Type.$create__());
  }
  return SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_;
 }
 /**
  * @template T
  * @param {T} selectedItem
  * @return {!SelectionEvent<T>}
  * @public
  */
 static $create__java_lang_Object(selectedItem) {
  SelectionEvent.$clinit();
  let $instance = new SelectionEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_SelectionEvent__java_lang_Object(selectedItem);
  return $instance;
 }
 /**
  * @param {T} selectedItem
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_SelectionEvent__java_lang_Object(selectedItem) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_selectedItem__org_gwtproject_event_logical_shared_SelectionEvent_ = selectedItem;
 }
 /**
  * @override
  * @return {Type<SelectionHandler<T>>}
  * @public
  */
 m_getAssociatedType__() {
  return /**@type {Type} */ (SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_);
 }
 /**
  * @return {T}
  * @public
  */
 m_getSelectedItem__() {
  return this.f_selectedItem__org_gwtproject_event_logical_shared_SelectionEvent_;
 }
 /**
  * @param {SelectionHandler<T>} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_logical_shared_SelectionHandler(handler) {
  handler.m_onSelection__org_gwtproject_event_logical_shared_SelectionEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_SelectionHandler(/**@type {SelectionHandler<T>} */ ($Casts.$to(arg0, SelectionHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  SelectionEvent.$clinit = () =>{};
  SelectionEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SelectionEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectionHandler = goog.module.get('org.gwtproject.event.logical.shared.SelectionHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SelectionEvent, 'org.gwtproject.event.logical.shared.SelectionEvent');

/** @public {Type<SelectionHandler<?>>} */
SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_;

exports = SelectionEvent; 
//# sourceMappingURL=SelectionEvent.js.map