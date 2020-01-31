goog.module('org.gwtproject.i18n.client.LocalizableResource.Description$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Description {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  Description.$clinit = () =>{};
  Description.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_Description = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_Description;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Description, 'org.gwtproject.i18n.client.LocalizableResource$Description');

Description.$markImplementor(/** @type {Function} */ (Description));

exports = Description; 
//# sourceMappingURL=LocalizableResource$Description.js.map