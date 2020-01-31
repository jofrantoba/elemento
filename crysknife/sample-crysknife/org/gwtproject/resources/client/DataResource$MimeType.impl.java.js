goog.module('org.gwtproject.resources.client.DataResource.MimeType$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class MimeType {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  MimeType.$clinit = () =>{};
  MimeType.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_DataResource_MimeType = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_DataResource_MimeType;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MimeType, 'org.gwtproject.resources.client.DataResource$MimeType');

MimeType.$markImplementor(/** @type {Function} */ (MimeType));

exports = MimeType; 
//# sourceMappingURL=DataResource$MimeType.js.map