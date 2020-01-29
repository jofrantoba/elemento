goog.module('org.gwtproject.user.client.ui.DateLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueLabel = goog.require('org.gwtproject.user.client.ui.ValueLabel$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let DateTimeFormat = goog.forwardDeclare('org.gwtproject.i18n.shared.DateTimeFormat$impl');
let TimeZone = goog.forwardDeclare('org.gwtproject.i18n.shared.TimeZone$impl');
let DateTimeFormatRenderer = goog.forwardDeclare('org.gwtproject.text.client.DateTimeFormatRenderer$impl');

/**
 * @extends {ValueLabel<Date>}
  */
class DateLabel extends ValueLabel {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'DateLabel()'.
  * @return {!DateLabel}
  * @public
  */
 static $create__() {
  DateLabel.$clinit();
  let $instance = new DateLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_DateLabel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DateLabel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DateLabel__() {
  this.$ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_text_shared_Renderer(DateTimeFormatRenderer.$create__());
 }
 /**
  * Factory method corresponding to constructor 'DateLabel(DateTimeFormat)'.
  * @param {DateTimeFormat} format
  * @return {!DateLabel}
  * @public
  */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat(format) {
  DateLabel.$clinit();
  let $instance = new DateLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_DateLabel__org_gwtproject_i18n_shared_DateTimeFormat(format);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateLabel(DateTimeFormat)'.
  * @param {DateTimeFormat} format
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DateLabel__org_gwtproject_i18n_shared_DateTimeFormat(format) {
  this.$ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_text_shared_Renderer(DateTimeFormatRenderer.$create__org_gwtproject_i18n_shared_DateTimeFormat(format));
 }
 /**
  * Factory method corresponding to constructor 'DateLabel(DateTimeFormat, TimeZone)'.
  * @param {DateTimeFormat} format
  * @param {TimeZone} timeZone
  * @return {!DateLabel}
  * @public
  */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone) {
  DateLabel.$clinit();
  let $instance = new DateLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_DateLabel__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateLabel(DateTimeFormat, TimeZone)'.
  * @param {DateTimeFormat} format
  * @param {TimeZone} timeZone
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DateLabel__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone) {
  this.$ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_text_shared_Renderer(DateTimeFormatRenderer.$create__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone));
 }
 /**
  * @public
  */
 static $clinit() {
  DateLabel.$clinit = () =>{};
  DateLabel.$loadModules();
  ValueLabel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateLabel;
 }
 /**
  * @public
  */
 static $loadModules() {
  DateTimeFormatRenderer = goog.module.get('org.gwtproject.text.client.DateTimeFormatRenderer$impl');
 }
 
}
$Util.$setClassMetadata(DateLabel, 'org.gwtproject.user.client.ui.DateLabel');

exports = DateLabel; 
//# sourceMappingURL=DateLabel.js.map