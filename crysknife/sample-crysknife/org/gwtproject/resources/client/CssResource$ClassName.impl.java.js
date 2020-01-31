goog.module('org.gwtproject.resources.client.CssResource.ClassName$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ClassName {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  ClassName.$clinit = () =>{};
  ClassName.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CssResource_ClassName = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_ClassName;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ClassName, 'org.gwtproject.resources.client.CssResource$ClassName');

ClassName.$markImplementor(/** @type {Function} */ (ClassName));

exports = ClassName; 
//# sourceMappingURL=CssResource$ClassName.js.map