goog.module('org.gwtproject.user.datepicker.client.DateChangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueChangeEvent = goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let HasValueChangeHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasValueChangeHandlers$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HasHandlers = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers$impl');
let CalendarUtil = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ValueChangeEvent<Date>}
  */
class DateChangeEvent extends ValueChangeEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template S
  * @param {S} source
  * @param {Date} oldValue
  * @param {Date} newValue
  * @public
  */
 static m_fireIfNotEqualDates__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_util_Date__java_util_Date(source, oldValue, newValue) {
  DateChangeEvent.$clinit();
  if (ValueChangeEvent.m_shouldFire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object__java_lang_Object(source, oldValue, newValue)) {
   /**@type {HasValueChangeHandlers} */ (source).m_fireEvent__org_gwtproject_event_shared_Event(DateChangeEvent.$create__java_util_Date(newValue));
  }
 }
 /**
  * @param {Date} value
  * @return {!DateChangeEvent}
  * @public
  */
 static $create__java_util_Date(value) {
  DateChangeEvent.$clinit();
  let $instance = new DateChangeEvent();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DateChangeEvent__java_util_Date(value);
  return $instance;
 }
 /**
  * @param {Date} value
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DateChangeEvent__java_util_Date(value) {
  this.$ctor__org_gwtproject_event_logical_shared_ValueChangeEvent__java_lang_Object(CalendarUtil.m_copyDate__java_util_Date(value));
 }
 /**
  * @override
  * @return {Date}
  * @public
  */
 m_getValue__() {
  return CalendarUtil.m_copyDate__java_util_Date(/**@type {Date} */ ($Casts.$to(super.m_getValue__(), Date)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  super.m_dispatch__org_gwtproject_event_logical_shared_ValueChangeHandler(/**@type {ValueChangeHandler<Date>} */ ($Casts.$to(arg0, ValueChangeHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  DateChangeEvent.$clinit = () =>{};
  DateChangeEvent.$loadModules();
  ValueChangeEvent.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateChangeEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  ValueChangeHandler = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
  CalendarUtil = goog.module.get('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DateChangeEvent, 'org.gwtproject.user.datepicker.client.DateChangeEvent');

exports = DateChangeEvent; 
//# sourceMappingURL=DateChangeEvent.js.map