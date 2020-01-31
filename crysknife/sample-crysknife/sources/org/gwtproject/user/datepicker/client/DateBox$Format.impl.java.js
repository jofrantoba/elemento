goog.module('org.gwtproject.user.datepicker.client.DateBox.Format$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let DateBox = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateBox$impl');

/**
 * @interface
 */
class Format {
 /** @abstract @return {?string} */
 m_format__org_gwtproject_user_datepicker_client_DateBox__java_util_Date(/** DateBox */ dateBox, /** Date */ date) {}
 /** @abstract @return {Date} */
 m_parse__org_gwtproject_user_datepicker_client_DateBox__java_lang_String__boolean(/** DateBox */ dateBox, /** ?string */ text, /** boolean */ reportError) {}
 /** @abstract */
 m_reset__org_gwtproject_user_datepicker_client_DateBox__boolean(/** DateBox */ dateBox, /** boolean */ abandon) {}
 
 static $clinit() {
  Format.$clinit = () =>{};
  Format.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_datepicker_client_DateBox_Format = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_datepicker_client_DateBox_Format;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Format, 'org.gwtproject.user.datepicker.client.DateBox$Format');

Format.$markImplementor(/** @type {Function} */ (Format));

exports = Format; 
//# sourceMappingURL=DateBox$Format.js.map