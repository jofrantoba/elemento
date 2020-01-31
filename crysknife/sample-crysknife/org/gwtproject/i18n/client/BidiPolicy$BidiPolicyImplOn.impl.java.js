goog.module('org.gwtproject.i18n.client.BidiPolicy.BidiPolicyImplOn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BidiPolicyImpl = goog.require('org.gwtproject.i18n.client.BidiPolicy.BidiPolicyImpl$impl');

class BidiPolicyImplOn extends BidiPolicyImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BidiPolicyImplOn} */
 static $create__() {
  BidiPolicyImplOn.$clinit();
  let $instance = new BidiPolicyImplOn();
  $instance.$ctor__org_gwtproject_i18n_client_BidiPolicy_BidiPolicyImplOn__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_BidiPolicy_BidiPolicyImplOn__() {
  this.$ctor__org_gwtproject_i18n_client_BidiPolicy_BidiPolicyImpl__();
 }
 /** @override @return {boolean} */
 m_isBidiEnabled__() {
  return true;
 }
 
 static $clinit() {
  BidiPolicyImplOn.$clinit = () =>{};
  BidiPolicyImplOn.$loadModules();
  BidiPolicyImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BidiPolicyImplOn;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(BidiPolicyImplOn, 'org.gwtproject.i18n.client.BidiPolicy$BidiPolicyImplOn');

exports = BidiPolicyImplOn; 
//# sourceMappingURL=BidiPolicy$BidiPolicyImplOn.js.map