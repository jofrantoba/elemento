goog.module('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasValueChangeHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasValueChangeHandlers$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @extends {Event<ValueChangeHandler<T>>}
  */
class ValueChangeEvent extends Event {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {T} */
  this.f_value__org_gwtproject_event_logical_shared_ValueChangeEvent_;
 }
 /**
  * @template T_1
  * @param {HasValueChangeHandlers<T_1>} source
  * @param {T_1} value
  * @public
  */
 static m_fire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object(source, value) {
  ValueChangeEvent.$clinit();
  if (!$Equality.$same(ValueChangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ValueChangeEvent_, null)) {
   let event = /**@type {!ValueChangeEvent<T_1>} */ (ValueChangeEvent.$create__java_lang_Object(value));
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @template T_1
  * @param {HasValueChangeHandlers<T_1>} source
  * @param {T_1} oldValue
  * @param {T_1} newValue
  * @public
  */
 static m_fireIfNotEqual__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object__java_lang_Object(source, oldValue, newValue) {
  ValueChangeEvent.$clinit();
  if (ValueChangeEvent.m_shouldFire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object__java_lang_Object(source, oldValue, newValue)) {
   let event = /**@type {!ValueChangeEvent<T_1>} */ (ValueChangeEvent.$create__java_lang_Object(newValue));
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @return {Type<ValueChangeHandler<?>>}
  * @public
  */
 static m_getType__() {
  ValueChangeEvent.$clinit();
  if ($Equality.$same(ValueChangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ValueChangeEvent_, null)) {
   ValueChangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ValueChangeEvent_ = /**@type {!Type<ValueChangeHandler<?>>} */ (Type.$create__());
  }
  return ValueChangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ValueChangeEvent_;
 }
 /**
  * @template T_1
  * @param {HasValueChangeHandlers<T_1>} source
  * @param {T_1} oldValue
  * @param {T_1} newValue
  * @return {boolean}
  * @public
  */
 static m_shouldFire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object__java_lang_Object(source, oldValue, newValue) {
  ValueChangeEvent.$clinit();
  return !$Equality.$same(ValueChangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ValueChangeEvent_, null) && !$Equality.$same(oldValue, newValue) && ($Equality.$same(oldValue, null) || !$Objects.m_equals__java_lang_Object__java_lang_Object(oldValue, newValue));
 }
 /**
  * @template T
  * @param {T} value
  * @return {!ValueChangeEvent<T>}
  * @public
  */
 static $create__java_lang_Object(value) {
  ValueChangeEvent.$clinit();
  let $instance = new ValueChangeEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_ValueChangeEvent__java_lang_Object(value);
  return $instance;
 }
 /**
  * @param {T} value
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_ValueChangeEvent__java_lang_Object(value) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_value__org_gwtproject_event_logical_shared_ValueChangeEvent_ = value;
 }
 /**
  * @override
  * @return {Type<ValueChangeHandler<T>>}
  * @public
  */
 m_getAssociatedType__() {
  return /**@type {Type} */ (ValueChangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ValueChangeEvent_);
 }
 /**
  * @return {T}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_event_logical_shared_ValueChangeEvent_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_toDebugString__() {
  return j_l_String.m_valueOf__java_lang_Object(super.m_toDebugString__()) + j_l_String.m_valueOf__java_lang_Object(this.m_getValue__());
 }
 /**
  * @param {ValueChangeHandler<T>} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {
  handler.m_onValueChange__org_gwtproject_event_logical_shared_ValueChangeEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_ValueChangeHandler(/**@type {ValueChangeHandler<T>} */ ($Casts.$to(arg0, ValueChangeHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  ValueChangeEvent.$clinit = () =>{};
  ValueChangeEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ValueChangeEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ValueChangeHandler = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ValueChangeEvent, 'org.gwtproject.event.logical.shared.ValueChangeEvent');

/** @public {Type<ValueChangeHandler<?>>} */
ValueChangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ValueChangeEvent_;

exports = ValueChangeEvent; 
//# sourceMappingURL=ValueChangeEvent.js.map