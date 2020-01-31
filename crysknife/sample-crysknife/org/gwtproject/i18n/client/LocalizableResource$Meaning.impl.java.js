goog.module('org.gwtproject.i18n.client.LocalizableResource.Meaning$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Meaning {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  Meaning.$clinit = () =>{};
  Meaning.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_Meaning = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_Meaning;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Meaning, 'org.gwtproject.i18n.client.LocalizableResource$Meaning');

Meaning.$markImplementor(/** @type {Function} */ (Meaning));

exports = Meaning; 
//# sourceMappingURL=LocalizableResource$Meaning.js.map