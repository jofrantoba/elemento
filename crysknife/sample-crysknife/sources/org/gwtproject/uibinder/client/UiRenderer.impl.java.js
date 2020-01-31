goog.module('org.gwtproject.uibinder.client.UiRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.uibinder.client.UiRenderer.$LambdaAdaptor$impl');

/**
 * @interface
 */
class UiRenderer {
 /** @abstract @return {boolean} */
 m_isParentOrRenderer__org_gwtproject_dom_client_Element(/** Object */ parent) {}
 /** @return {UiRenderer} */
 static $adapt(/** ?function(Object):boolean */ fn) {
  UiRenderer.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  UiRenderer.$clinit = () =>{};
  UiRenderer.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_uibinder_client_UiRenderer = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiRenderer;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.uibinder.client.UiRenderer.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(UiRenderer, 'org.gwtproject.uibinder.client.UiRenderer');

UiRenderer.$markImplementor(/** @type {Function} */ (UiRenderer));

exports = UiRenderer; 
//# sourceMappingURL=UiRenderer.js.map