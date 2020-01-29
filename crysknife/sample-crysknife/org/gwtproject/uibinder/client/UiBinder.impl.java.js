goog.module('org.gwtproject.uibinder.client.UiBinder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.uibinder.client.UiBinder.$LambdaAdaptor$impl');

/**
 * @interface
 * @template U, O
 */
class UiBinder {
 /**
  * @abstract
  * @param {O} owner
  * @return {U}
  * @public
  */
 m_createAndBindUi__java_lang_Object(owner) {}
 /**
  * @template U, O
  * @param {?function(O):U} fn
  * @return {UiBinder<U, O>}
  * @public
  */
 static $adapt(fn) {
  UiBinder.$clinit();
  return /**@type {!$LambdaAdaptor<U, O>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  UiBinder.$clinit = () =>{};
  UiBinder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_uibinder_client_UiBinder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiBinder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.uibinder.client.UiBinder.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(UiBinder, 'org.gwtproject.uibinder.client.UiBinder');

UiBinder.$markImplementor(/** @type {Function} */ (UiBinder));

exports = UiBinder; 
//# sourceMappingURL=UiBinder.js.map