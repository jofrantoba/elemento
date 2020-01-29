goog.module('org.gwtproject.uibinder.client.UiRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.uibinder.client.UiRenderer.$LambdaAdaptor$impl');

/**
 * @interface
 */
class UiRenderer {
 /**
  * @abstract
  * @param {Object} parent
  * @return {boolean}
  * @public
  */
 m_isParentOrRenderer__org_gwtproject_dom_client_Element(parent) {}
 /**
  * @param {?function(Object):boolean} fn
  * @return {UiRenderer}
  * @public
  */
 static $adapt(fn) {
  UiRenderer.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  UiRenderer.$clinit = () =>{};
  UiRenderer.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_uibinder_client_UiRenderer = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.uibinder.client.UiRenderer.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(UiRenderer, 'org.gwtproject.uibinder.client.UiRenderer');

UiRenderer.$markImplementor(/** @type {Function} */ (UiRenderer));

exports = UiRenderer; 
//# sourceMappingURL=UiRenderer.js.map