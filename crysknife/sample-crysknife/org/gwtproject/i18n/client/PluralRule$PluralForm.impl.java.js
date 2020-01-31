goog.module('org.gwtproject.i18n.client.PluralRule.PluralForm$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class PluralForm extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_name__org_gwtproject_i18n_client_PluralRule_PluralForm_;
  /**@type {?string}*/
  this.f_description__org_gwtproject_i18n_client_PluralRule_PluralForm_;
  /**@type {boolean}*/
  this.f_noWarn__org_gwtproject_i18n_client_PluralRule_PluralForm_ = false;
 }
 //Factory method corresponding to constructor 'PluralForm(String, String)'.
 /** @return {!PluralForm} */
 static $create__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ description) {
  PluralForm.$clinit();
  let $instance = new PluralForm();
  $instance.$ctor__org_gwtproject_i18n_client_PluralRule_PluralForm__java_lang_String__java_lang_String(name, description);
  return $instance;
 }
 //Initialization from constructor 'PluralForm(String, String)'.
 
 $ctor__org_gwtproject_i18n_client_PluralRule_PluralForm__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ description) {
  this.$ctor__org_gwtproject_i18n_client_PluralRule_PluralForm__java_lang_String__java_lang_String__boolean(name, description, false);
 }
 //Factory method corresponding to constructor 'PluralForm(String, String, boolean)'.
 /** @return {!PluralForm} */
 static $create__java_lang_String__java_lang_String__boolean(/** ?string */ name, /** ?string */ description, /** boolean */ noWarn) {
  PluralForm.$clinit();
  let $instance = new PluralForm();
  $instance.$ctor__org_gwtproject_i18n_client_PluralRule_PluralForm__java_lang_String__java_lang_String__boolean(name, description, noWarn);
  return $instance;
 }
 //Initialization from constructor 'PluralForm(String, String, boolean)'.
 
 $ctor__org_gwtproject_i18n_client_PluralRule_PluralForm__java_lang_String__java_lang_String__boolean(/** ?string */ name, /** ?string */ description, /** boolean */ noWarn) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_gwtproject_i18n_client_PluralRule_PluralForm_ = name;
  this.f_description__org_gwtproject_i18n_client_PluralRule_PluralForm_ = description;
  this.f_noWarn__org_gwtproject_i18n_client_PluralRule_PluralForm_ = noWarn;
 }
 /** @return {?string} */
 m_getDescription__() {
  return this.f_description__org_gwtproject_i18n_client_PluralRule_PluralForm_;
 }
 /** @return {?string} */
 m_getName__() {
  return this.f_name__org_gwtproject_i18n_client_PluralRule_PluralForm_;
 }
 /** @return {boolean} */
 m_getWarnIfMissing__() {
  return !this.f_noWarn__org_gwtproject_i18n_client_PluralRule_PluralForm_;
 }
 
 static $clinit() {
  PluralForm.$clinit = () =>{};
  PluralForm.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluralForm;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(PluralForm, 'org.gwtproject.i18n.client.PluralRule$PluralForm');

exports = PluralForm; 
//# sourceMappingURL=PluralRule$PluralForm.js.map