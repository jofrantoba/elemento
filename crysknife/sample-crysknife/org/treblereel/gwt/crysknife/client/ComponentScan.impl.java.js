goog.module('org.treblereel.gwt.crysknife.client.ComponentScan$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ComponentScan {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  ComponentScan.$clinit = () =>{};
  ComponentScan.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_gwt_crysknife_client_ComponentScan = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_ComponentScan;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ComponentScan, 'org.treblereel.gwt.crysknife.client.ComponentScan');

ComponentScan.$markImplementor(/** @type {Function} */ (ComponentScan));

exports = ComponentScan; 
//# sourceMappingURL=ComponentScan.js.map