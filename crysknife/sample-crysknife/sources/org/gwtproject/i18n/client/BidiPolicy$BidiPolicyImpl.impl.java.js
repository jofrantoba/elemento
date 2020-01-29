goog.module('org.gwtproject.i18n.client.BidiPolicy.BidiPolicyImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class BidiPolicyImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!BidiPolicyImpl}
  * @public
  */
 static $create__() {
  BidiPolicyImpl.$clinit();
  let $instance = new BidiPolicyImpl();
  $instance.$ctor__org_gwtproject_i18n_client_BidiPolicy_BidiPolicyImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_BidiPolicy_BidiPolicyImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isBidiEnabled__() {
  return false;
 }
 /**
  * @public
  */
 static $clinit() {
  BidiPolicyImpl.$clinit = () =>{};
  BidiPolicyImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BidiPolicyImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(BidiPolicyImpl, 'org.gwtproject.i18n.client.BidiPolicy$BidiPolicyImpl');

exports = BidiPolicyImpl; 
//# sourceMappingURL=BidiPolicy$BidiPolicyImpl.js.map