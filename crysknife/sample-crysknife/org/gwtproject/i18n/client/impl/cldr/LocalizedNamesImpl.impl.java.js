goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImplBase = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImplBase$impl');

class LocalizedNamesImpl extends LocalizedNamesImplBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl} */
 static $create__() {
  LocalizedNamesImpl.$clinit();
  let $instance = new LocalizedNamesImpl();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImplBase__();
 }
 
 static $clinit() {
  LocalizedNamesImpl.$clinit = () =>{};
  LocalizedNamesImpl.$loadModules();
  LocalizedNamesImplBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(LocalizedNamesImpl, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl');

exports = LocalizedNamesImpl; 
//# sourceMappingURL=LocalizedNamesImpl.js.map