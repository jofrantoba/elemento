goog.module('org.gwtproject.user.datepicker.client.DatePicker.DateHighlightEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HighlightEvent = goog.require('org.gwtproject.event.logical.shared.HighlightEvent$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let HighlightHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightHandler$impl');
let CalendarUtil = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HighlightEvent<Date>}
  */
class DateHighlightEvent extends HighlightEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Date} highlighted
  * @return {!DateHighlightEvent}
  * @public
  */
 static $create__java_util_Date(highlighted) {
  DateHighlightEvent.$clinit();
  let $instance = new DateHighlightEvent();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DatePicker_DateHighlightEvent__java_util_Date(highlighted);
  return $instance;
 }
 /**
  * @param {Date} highlighted
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DatePicker_DateHighlightEvent__java_util_Date(highlighted) {
  this.$ctor__org_gwtproject_event_logical_shared_HighlightEvent__java_lang_Object(highlighted);
 }
 /**
  * @override
  * @return {Date}
  * @public
  */
 m_getHighlighted__() {
  return CalendarUtil.m_copyDate__java_util_Date(/**@type {Date} */ ($Casts.$to(super.m_getHighlighted__(), Date)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  super.m_dispatch__org_gwtproject_event_logical_shared_HighlightHandler(/**@type {HighlightHandler<Date>} */ ($Casts.$to(arg0, HighlightHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  DateHighlightEvent.$clinit = () =>{};
  DateHighlightEvent.$loadModules();
  HighlightEvent.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateHighlightEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  HighlightHandler = goog.module.get('org.gwtproject.event.logical.shared.HighlightHandler$impl');
  CalendarUtil = goog.module.get('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DateHighlightEvent, 'org.gwtproject.user.datepicker.client.DatePicker$DateHighlightEvent');

exports = DateHighlightEvent; 
//# sourceMappingURL=DatePicker$DateHighlightEvent.js.map