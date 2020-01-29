goog.module('org.gwtproject.dom.style.shared.HasCssName$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.dom.style.shared.HasCssName.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HasCssName {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getCssName__() {}
 /**
  * @param {?function():?string} fn
  * @return {HasCssName}
  * @public
  */
 static $adapt(fn) {
  HasCssName.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  HasCssName.$clinit = () =>{};
  HasCssName.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_dom_style_shared_HasCssName = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_style_shared_HasCssName;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.dom.style.shared.HasCssName.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasCssName, 'org.gwtproject.dom.style.shared.HasCssName');

HasCssName.$markImplementor(/** @type {Function} */ (HasCssName));

exports = HasCssName; 
//# sourceMappingURL=HasCssName.js.map