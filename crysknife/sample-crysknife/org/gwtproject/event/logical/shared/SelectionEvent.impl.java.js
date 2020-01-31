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
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_selectedItem__org_gwtproject_event_logical_shared_SelectionEvent_;
 }
 /** @template T_1 */
 static m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(/** HasSelectionHandlers<T_1> */ source, /** T_1 */ selectedItem) {
  SelectionEvent.$clinit();
  if (!$Equality.$same(SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_, null)) {
   let event = /**@type {!SelectionEvent<T_1>}*/ (SelectionEvent.$create__java_lang_Object(selectedItem));
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /** @return {Type<SelectionHandler<?>>} */
 static m_getType__() {
  SelectionEvent.$clinit();
  if ($Equality.$same(SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_, null)) {
   SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_ = /**@type {!Type<SelectionHandler<?>>}*/ (Type.$create__());
  }
  return SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_;
 }
 /** @template T @return {!SelectionEvent<T>} */
 static $create__java_lang_Object(/** T */ selectedItem) {
  SelectionEvent.$clinit();
  let $instance = new SelectionEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_SelectionEvent__java_lang_Object(selectedItem);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_logical_shared_SelectionEvent__java_lang_Object(/** T */ selectedItem) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_selectedItem__org_gwtproject_event_logical_shared_SelectionEvent_ = selectedItem;
 }
 /** @override @return {Type<SelectionHandler<T>>} */
 m_getAssociatedType__() {
  return /**@type {Type}*/ (SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_);
 }
 /** @return {T} */
 m_getSelectedItem__() {
  return this.f_selectedItem__org_gwtproject_event_logical_shared_SelectionEvent_;
 }
 
 m_dispatch__org_gwtproject_event_logical_shared_SelectionHandler(/** SelectionHandler<T> */ handler) {
  handler.m_onSelection__org_gwtproject_event_logical_shared_SelectionEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_SelectionHandler(/**@type {SelectionHandler<T>}*/ ($Casts.$to(arg0, SelectionHandler)));
 }
 
 static $clinit() {
  SelectionEvent.$clinit = () =>{};
  SelectionEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectionHandler = goog.module.get('org.gwtproject.event.logical.shared.SelectionHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SelectionEvent, 'org.gwtproject.event.logical.shared.SelectionEvent');

/**@type {Type<SelectionHandler<?>>}*/
SelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_SelectionEvent_;

exports = SelectionEvent; 
//# sourceMappingURL=SelectionEvent.js.map