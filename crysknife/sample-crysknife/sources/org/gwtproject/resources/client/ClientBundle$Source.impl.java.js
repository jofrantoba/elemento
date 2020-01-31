goog.module('org.gwtproject.resources.client.ClientBundle.Source$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Source {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  Source.$clinit = () =>{};
  Source.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_ClientBundle_Source = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ClientBundle_Source;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Source, 'org.gwtproject.resources.client.ClientBundle$Source');

Source.$markImplementor(/** @type {Function} */ (Source));

exports = Source; 
//# sourceMappingURL=ClientBundle$Source.js.map