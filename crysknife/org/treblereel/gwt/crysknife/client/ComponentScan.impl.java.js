goog.module('org.treblereel.gwt.crysknife.client.ComponentScan$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ComponentScan {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  ComponentScan.$clinit = () =>{};
  ComponentScan.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_treblereel_gwt_crysknife_client_ComponentScan = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_ComponentScan;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ComponentScan, 'org.treblereel.gwt.crysknife.client.ComponentScan');

ComponentScan.$markImplementor(/** @type {Function} */ (ComponentScan));

exports = ComponentScan; 
//# sourceMappingURL=ComponentScan.js.map