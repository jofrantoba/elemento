goog.module('org.gwtproject.i18n.client.LocalizableResource.Key$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Key {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  Key.$clinit = () =>{};
  Key.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_Key = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_Key;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Key, 'org.gwtproject.i18n.client.LocalizableResource$Key');

Key.$markImplementor(/** @type {Function} */ (Key));

exports = Key; 
//# sourceMappingURL=LocalizableResource$Key.js.map