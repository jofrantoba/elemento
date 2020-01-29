goog.module('org.gwtproject.user.datepicker.client.DateBox.Format$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let DateBox = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateBox$impl');

/**
 * @interface
 */
class Format {
 /**
  * @abstract
  * @param {DateBox} dateBox
  * @param {Date} date
  * @return {?string}
  * @public
  */
 m_format__org_gwtproject_user_datepicker_client_DateBox__java_util_Date(dateBox, date) {}
 /**
  * @abstract
  * @param {DateBox} dateBox
  * @param {?string} text
  * @param {boolean} reportError
  * @return {Date}
  * @public
  */
 m_parse__org_gwtproject_user_datepicker_client_DateBox__java_lang_String__boolean(dateBox, text, reportError) {}
 /**
  * @abstract
  * @param {DateBox} dateBox
  * @param {boolean} abandon
  * @public
  */
 m_reset__org_gwtproject_user_datepicker_client_DateBox__boolean(dateBox, abandon) {}
 /**
  * @public
  */
 static $clinit() {
  Format.$clinit = () =>{};
  Format.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_datepicker_client_DateBox_Format = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_datepicker_client_DateBox_Format;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Format, 'org.gwtproject.user.datepicker.client.DateBox$Format');

Format.$markImplementor(/** @type {Function} */ (Format));

exports = Format; 
//# sourceMappingURL=DateBox$Format.js.map