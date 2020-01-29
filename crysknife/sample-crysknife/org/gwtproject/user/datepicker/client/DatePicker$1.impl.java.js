goog.module('org.gwtproject.user.datepicker.client.DatePicker.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShowRangeEvent = goog.require('org.gwtproject.event.logical.shared.ShowRangeEvent$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let ShowRangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');
let DatePicker = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DatePicker$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ShowRangeEvent<Date>}
  */
class $1 extends ShowRangeEvent {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DatePicker} */
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DatePicker_1;
 }
 /**
  * @param {DatePicker} $outer_this
  * @param {Date} $_0
  * @param {Date} $_1
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_datepicker_client_DatePicker__java_util_Date__java_util_Date($outer_this, $_0, $_1) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DatePicker_1__org_gwtproject_user_datepicker_client_DatePicker__java_util_Date__java_util_Date($outer_this, $_0, $_1);
  return $instance;
 }
 /**
  * @param {DatePicker} $outer_this
  * @param {Date} $_0
  * @param {Date} $_1
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DatePicker_1__org_gwtproject_user_datepicker_client_DatePicker__java_util_Date__java_util_Date($outer_this, $_0, $_1) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DatePicker_1 = $outer_this;
  this.$ctor__org_gwtproject_event_logical_shared_ShowRangeEvent__java_lang_Object__java_lang_Object($_0, $_1);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  super.m_dispatch__org_gwtproject_event_logical_shared_ShowRangeHandler(/**@type {ShowRangeHandler<Date>} */ ($Casts.$to(arg0, ShowRangeHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  ShowRangeEvent.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  ShowRangeHandler = goog.module.get('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.datepicker.client.DatePicker$1');

exports = $1; 
//# sourceMappingURL=DatePicker$1.js.map