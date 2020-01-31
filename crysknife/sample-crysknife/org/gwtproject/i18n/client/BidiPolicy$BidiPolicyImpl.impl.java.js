goog.module('org.gwtproject.i18n.client.BidiPolicy.BidiPolicyImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class BidiPolicyImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BidiPolicyImpl} */
 static $create__() {
  BidiPolicyImpl.$clinit();
  let $instance = new BidiPolicyImpl();
  $instance.$ctor__org_gwtproject_i18n_client_BidiPolicy_BidiPolicyImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_BidiPolicy_BidiPolicyImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 m_isBidiEnabled__() {
  return false;
 }
 
 static $clinit() {
  BidiPolicyImpl.$clinit = () =>{};
  BidiPolicyImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BidiPolicyImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(BidiPolicyImpl, 'org.gwtproject.i18n.client.BidiPolicy$BidiPolicyImpl');

exports = BidiPolicyImpl; 
//# sourceMappingURL=BidiPolicy$BidiPolicyImpl.js.map