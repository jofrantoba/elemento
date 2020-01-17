goog.module('org.elemento.By.ByClassname$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.elemento.By$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class ByClassname extends By {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Array<?string>} */
  this.f_classnames__org_elemento_By_ByClassname_;
 }
 /**
  * @param {Array<?string>} classnames
  * @return {!ByClassname}
  * @public
  */
 static $create__arrayOf_java_lang_String(classnames) {
  ByClassname.$clinit();
  let $instance = new ByClassname();
  $instance.$ctor__org_elemento_By_ByClassname__arrayOf_java_lang_String(classnames);
  return $instance;
 }
 /**
  * @param {Array<?string>} classnames
  * @public
  */
 $ctor__org_elemento_By_ByClassname__arrayOf_java_lang_String(classnames) {
  this.$ctor__org_elemento_By__();
  this.f_classnames__org_elemento_By_ByClassname_ = classnames;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_selector___$pp_org_elemento() {
  return "." + j_l_String.m_valueOf__java_lang_Object(j_l_String.m_join__java_lang_CharSequence__arrayOf_java_lang_CharSequence(".", this.f_classnames__org_elemento_By_ByClassname_));
 }
 /**
  * @public
  */
 static $clinit() {
  ByClassname.$clinit = () =>{};
  ByClassname.$loadModules();
  By.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ByClassname;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(ByClassname, 'org.elemento.By$ByClassname');

exports = ByClassname; 
//# sourceMappingURL=By$ByClassname.js.map