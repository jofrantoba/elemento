goog.module('org.gwtproject.i18n.client.BidiPolicy$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BidiPolicyImpl = goog.forwardDeclare('org.gwtproject.i18n.client.BidiPolicy.BidiPolicyImpl$impl');

class BidiPolicy extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!BidiPolicy}
  * @public
  */
 static $create__() {
  BidiPolicy.$clinit();
  let $instance = new BidiPolicy();
  $instance.$ctor__org_gwtproject_i18n_client_BidiPolicy__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_BidiPolicy__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {boolean}
  * @public
  */
 static m_isBidiEnabled__() {
  BidiPolicy.$clinit();
  return false;
 }
 /**
  * @public
  */
 static $clinit() {
  BidiPolicy.$clinit = () =>{};
  BidiPolicy.$loadModules();
  j_l_Object.$clinit();
  BidiPolicy.f_impl__org_gwtproject_i18n_client_BidiPolicy_ = BidiPolicyImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BidiPolicy;
 }
 /**
  * @public
  */
 static $loadModules() {
  BidiPolicyImpl = goog.module.get('org.gwtproject.i18n.client.BidiPolicy.BidiPolicyImpl$impl');
 }
 
}
$Util.$setClassMetadata(BidiPolicy, 'org.gwtproject.i18n.client.BidiPolicy');

/** @public {BidiPolicyImpl} */
BidiPolicy.f_impl__org_gwtproject_i18n_client_BidiPolicy_;

exports = BidiPolicy; 
//# sourceMappingURL=BidiPolicy.js.map