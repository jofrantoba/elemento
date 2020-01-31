goog.module('org.gwtproject.i18n.shared.AlternateMessageSelector.AlternateForm$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {Comparable<AlternateForm>}
  */
class AlternateForm extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
  /**@type {?string}*/
  this.f_description__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
  /**@type {boolean}*/
  this.f_warnIfMissing__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_ = false;
 }
 //Factory method corresponding to constructor 'AlternateForm(String, String)'.
 /** @return {!AlternateForm} */
 static $create__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ description) {
  AlternateForm.$clinit();
  let $instance = new AlternateForm();
  $instance.$ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String(name, description);
  return $instance;
 }
 //Initialization from constructor 'AlternateForm(String, String)'.
 
 $ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ description) {
  this.$ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String__boolean(name, description, true);
 }
 //Factory method corresponding to constructor 'AlternateForm(String, String, boolean)'.
 /** @return {!AlternateForm} */
 static $create__java_lang_String__java_lang_String__boolean(/** ?string */ name, /** ?string */ description, /** boolean */ warnIfMissing) {
  AlternateForm.$clinit();
  let $instance = new AlternateForm();
  $instance.$ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String__boolean(name, description, warnIfMissing);
  return $instance;
 }
 //Initialization from constructor 'AlternateForm(String, String, boolean)'.
 
 $ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String__boolean(/** ?string */ name, /** ?string */ description, /** boolean */ warnIfMissing) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_ = name;
  this.f_description__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_ = description;
  this.f_warnIfMissing__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_ = warnIfMissing;
 }
 /** @return {number} */
 m_compareTo__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm(/** AlternateForm */ o) {
  return j_l_String.m_compareTo__java_lang_String__java_lang_String(this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_, o.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_);
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  }
  if ($Equality.$same(obj, null) || !$Equality.$same($Objects.m_getClass__java_lang_Object(obj), this.m_getClass__())) {
   return false;
  }
  return this.m_compareTo__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm(/**@type {AlternateForm}*/ ($Casts.$to(obj, AlternateForm))) == 0;
 }
 /** @return {?string} */
 m_getDescription__() {
  return this.f_description__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
 }
 /** @return {?string} */
 m_getName__() {
  return this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
 }
 /** @return {boolean} */
 m_getWarnIfMissing__() {
  return this.f_warnIfMissing__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
 }
 /** @override @return {number} */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String(this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_);
 }
 /** @override @return {?string} */
 toString() {
  return this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return this.m_compareTo__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm(/**@type {AlternateForm}*/ ($Casts.$to(arg0, AlternateForm)));
 }
 
 static $clinit() {
  AlternateForm.$clinit = () =>{};
  AlternateForm.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlternateForm;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(AlternateForm, 'org.gwtproject.i18n.shared.AlternateMessageSelector$AlternateForm');

Comparable.$markImplementor(AlternateForm);

exports = AlternateForm; 
//# sourceMappingURL=AlternateMessageSelector$AlternateForm.js.map