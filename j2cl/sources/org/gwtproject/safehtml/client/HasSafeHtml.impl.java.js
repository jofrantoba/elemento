goog.module('org.gwtproject.safehtml.client.HasSafeHtml$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.client.HasSafeHtml.$LambdaAdaptor$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 */
class HasSafeHtml {
 /**
  * @abstract
  * @param {SafeHtml} html
  * @public
  */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html) {}
 /**
  * @param {?function(SafeHtml):void} fn
  * @return {HasSafeHtml}
  * @public
  */
 static $adapt(fn) {
  HasSafeHtml.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  HasSafeHtml.$clinit = () =>{};
  HasSafeHtml.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_safehtml_client_HasSafeHtml = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_client_HasSafeHtml;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.client.HasSafeHtml.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasSafeHtml, 'org.gwtproject.safehtml.client.HasSafeHtml');

HasSafeHtml.$markImplementor(/** @type {Function} */ (HasSafeHtml));

exports = HasSafeHtml; 
//# sourceMappingURL=HasSafeHtml.js.map