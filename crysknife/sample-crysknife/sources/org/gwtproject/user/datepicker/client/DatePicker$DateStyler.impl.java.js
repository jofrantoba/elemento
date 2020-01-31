goog.module('org.gwtproject.user.datepicker.client.DatePicker.DateStyler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DateStyler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, ?string>}*/
  this.f_info__org_gwtproject_user_datepicker_client_DatePicker_DateStyler_;
 }
 /** @return {!DateStyler} */
 static $create__() {
  DateStyler.$clinit();
  let $instance = new DateStyler();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DatePicker_DateStyler__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_DatePicker_DateStyler__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_datepicker_client_DatePicker_DateStyler();
 }
 /** @return {?string} */
 m_getStyleName__java_util_Date(/** Date */ d) {
  return /**@type {?string}*/ ($Casts.$to(this.f_info__org_gwtproject_user_datepicker_client_DatePicker_DateStyler_.get(this.m_genKey__java_util_Date_$p_org_gwtproject_user_datepicker_client_DatePicker_DateStyler(d)), j_l_String));
 }
 
 m_setStyleName__java_util_Date__java_lang_String__boolean(/** Date */ d, /** ?string */ styleName, /** boolean */ add) {
  styleName = " " + j_l_String.m_valueOf__java_lang_Object(styleName) + " ";
  let key = this.m_genKey__java_util_Date_$p_org_gwtproject_user_datepicker_client_DatePicker_DateStyler(d);
  let current = /**@type {?string}*/ ($Casts.$to(this.f_info__org_gwtproject_user_datepicker_client_DatePicker_DateStyler_.get(key), j_l_String));
  if (add) {
   if ($Equality.$same(current, null)) {
    this.f_info__org_gwtproject_user_datepicker_client_DatePicker_DateStyler_.put(key, styleName);
   } else if (j_l_String.m_indexOf__java_lang_String__java_lang_String(current, styleName) == -1) {
    this.f_info__org_gwtproject_user_datepicker_client_DatePicker_DateStyler_.put(key, j_l_String.m_valueOf__java_lang_Object(current) + j_l_String.m_valueOf__java_lang_Object(styleName));
   }
  } else {
   if (!$Equality.$same(current, null)) {
    let newValue = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(current, styleName, "");
    if (j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(newValue)) == 0) {
     this.f_info__org_gwtproject_user_datepicker_client_DatePicker_DateStyler_.remove(key);
    } else {
     this.f_info__org_gwtproject_user_datepicker_client_DatePicker_DateStyler_.put(key, newValue);
    }
   }
  }
 }
 /** @return {?string} */
 m_genKey__java_util_Date_$p_org_gwtproject_user_datepicker_client_DatePicker_DateStyler(/** Date */ d) {
  return d.m_getYear__() + "/" + d.m_getMonth__() + "/" + d.m_getDate__();
 }
 /** @private */
 $init___$p_org_gwtproject_user_datepicker_client_DatePicker_DateStyler() {
  this.f_info__org_gwtproject_user_datepicker_client_DatePicker_DateStyler_ = /**@type {!HashMap<?string, ?string>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  DateStyler.$clinit = () =>{};
  DateStyler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateStyler;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DateStyler, 'org.gwtproject.user.datepicker.client.DatePicker$DateStyler');

exports = DateStyler; 
//# sourceMappingURL=DatePicker$DateStyler.js.map