goog.module('org.gwtproject.user.client.impl.DOMImplStandardBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DOMImplStandard = goog.require('org.gwtproject.user.client.impl.DOMImplStandard$impl');

class DOMImplStandardBase extends DOMImplStandard {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DOMImplStandardBase} */
 static $create__() {
  DOMImplStandardBase.$clinit();
  let $instance = new DOMImplStandardBase();
  $instance.$ctor__org_gwtproject_user_client_impl_DOMImplStandardBase__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_impl_DOMImplStandardBase__() {
  this.$ctor__org_gwtproject_user_client_impl_DOMImplStandard__();
 }
 
 static $clinit() {
  DOMImplStandardBase.$clinit = () =>{};
  DOMImplStandardBase.$loadModules();
  DOMImplStandard.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DOMImplStandardBase;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DOMImplStandardBase, 'org.gwtproject.user.client.impl.DOMImplStandardBase');

exports = DOMImplStandardBase; 
//# sourceMappingURL=DOMImplStandardBase.js.map