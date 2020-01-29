goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImplBase = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImplBase$impl');

class LocalizedNamesImpl extends LocalizedNamesImplBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl.$clinit();
  let $instance = new LocalizedNamesImpl();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImplBase__();
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl.$clinit = () =>{};
  LocalizedNamesImpl.$loadModules();
  LocalizedNamesImplBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(LocalizedNamesImpl, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl');

exports = LocalizedNamesImpl; 
//# sourceMappingURL=LocalizedNamesImpl.js.map