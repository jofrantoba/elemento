goog.module('org.elemento.By.ById$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.elemento.By$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class ById extends By {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_id__org_elemento_By_ById_;
 }
 /**
  * @param {?string} id
  * @return {!ById}
  * @public
  */
 static $create__java_lang_String(id) {
  ById.$clinit();
  let $instance = new ById();
  $instance.$ctor__org_elemento_By_ById__java_lang_String(id);
  return $instance;
 }
 /**
  * @param {?string} id
  * @public
  */
 $ctor__org_elemento_By_ById__java_lang_String(id) {
  this.$ctor__org_elemento_By__();
  this.f_id__org_elemento_By_ById_ = id;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_selector___$pp_org_elemento() {
  return "#" + j_l_String.m_valueOf__java_lang_Object(this.f_id__org_elemento_By_ById_);
 }
 /**
  * @public
  */
 static $clinit() {
  ById.$clinit = () =>{};
  ById.$loadModules();
  By.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ById;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(ById, 'org.elemento.By$ById');

exports = ById; 
//# sourceMappingURL=By$ById.js.map