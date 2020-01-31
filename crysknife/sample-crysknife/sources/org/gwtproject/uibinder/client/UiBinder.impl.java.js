goog.module('org.gwtproject.uibinder.client.UiBinder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.uibinder.client.UiBinder.$LambdaAdaptor$impl');

/**
 * @interface
 * @template U, O
 */
class UiBinder {
 /** @abstract @return {U} */
 m_createAndBindUi__java_lang_Object(/** O */ owner) {}
 /** @template U, O @return {UiBinder<U, O>} */
 static $adapt(/** ?function(O):U */ fn) {
  UiBinder.$clinit();
  return /**@type {!$LambdaAdaptor<U, O>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  UiBinder.$clinit = () =>{};
  UiBinder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_uibinder_client_UiBinder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiBinder;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.uibinder.client.UiBinder.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(UiBinder, 'org.gwtproject.uibinder.client.UiBinder');

UiBinder.$markImplementor(/** @type {Function} */ (UiBinder));

exports = UiBinder; 
//# sourceMappingURL=UiBinder.js.map