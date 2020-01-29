goog.module('org.gwtproject.dom.client.Style.HasCssName$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.dom.client.Style.HasCssName.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {HasCssName}
 * @deprecated
 */
class Style_HasCssName {
 /**
  * @param {?function():?string} fn
  * @return {Style_HasCssName}
  * @public
  */
 static $adapt(fn) {
  Style_HasCssName.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Style_HasCssName.$clinit = () =>{};
  Style_HasCssName.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasCssName.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_dom_client_Style_HasCssName = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_client_Style_HasCssName;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.dom.client.Style.HasCssName.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Style_HasCssName, 'org.gwtproject.dom.client.Style$HasCssName');

Style_HasCssName.$markImplementor(/** @type {Function} */ (Style_HasCssName));

exports = Style_HasCssName; 
//# sourceMappingURL=Style$HasCssName.js.map