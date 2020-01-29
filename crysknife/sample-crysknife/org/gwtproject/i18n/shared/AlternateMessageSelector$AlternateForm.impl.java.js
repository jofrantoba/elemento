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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
  /** @public {?string} */
  this.f_description__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
  /** @public {boolean} */
  this.f_warnIfMissing__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_ = false;
 }
 /**
  * Factory method corresponding to constructor 'AlternateForm(String, String)'.
  * @param {?string} name
  * @param {?string} description
  * @return {!AlternateForm}
  * @public
  */
 static $create__java_lang_String__java_lang_String(name, description) {
  AlternateForm.$clinit();
  let $instance = new AlternateForm();
  $instance.$ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String(name, description);
  return $instance;
 }
 /**
  * Initialization from constructor 'AlternateForm(String, String)'.
  * @param {?string} name
  * @param {?string} description
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String(name, description) {
  this.$ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String__boolean(name, description, true);
 }
 /**
  * Factory method corresponding to constructor 'AlternateForm(String, String, boolean)'.
  * @param {?string} name
  * @param {?string} description
  * @param {boolean} warnIfMissing
  * @return {!AlternateForm}
  * @public
  */
 static $create__java_lang_String__java_lang_String__boolean(name, description, warnIfMissing) {
  AlternateForm.$clinit();
  let $instance = new AlternateForm();
  $instance.$ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String__boolean(name, description, warnIfMissing);
  return $instance;
 }
 /**
  * Initialization from constructor 'AlternateForm(String, String, boolean)'.
  * @param {?string} name
  * @param {?string} description
  * @param {boolean} warnIfMissing
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm__java_lang_String__java_lang_String__boolean(name, description, warnIfMissing) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_ = name;
  this.f_description__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_ = description;
  this.f_warnIfMissing__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_ = warnIfMissing;
 }
 /**
  * @param {AlternateForm} o
  * @return {number}
  * @public
  */
 m_compareTo__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm(o) {
  return j_l_String.m_compareTo__java_lang_String__java_lang_String(this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_, o.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_);
 }
 /**
  * @override
  * @param {*} obj
  * @return {boolean}
  * @public
  */
 equals(obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  }
  if ($Equality.$same(obj, null) || !$Equality.$same($Objects.m_getClass__java_lang_Object(obj), this.m_getClass__())) {
   return false;
  }
  return this.m_compareTo__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm(/**@type {AlternateForm} */ ($Casts.$to(obj, AlternateForm))) == 0;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getDescription__() {
  return this.f_description__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_getWarnIfMissing__() {
  return this.f_warnIfMissing__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String(this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return this.f_name__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm_;
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return this.m_compareTo__org_gwtproject_i18n_shared_AlternateMessageSelector_AlternateForm(/**@type {AlternateForm} */ ($Casts.$to(arg0, AlternateForm)));
 }
 /**
  * @public
  */
 static $clinit() {
  AlternateForm.$clinit = () =>{};
  AlternateForm.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AlternateForm;
 }
 /**
  * @public
  */
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