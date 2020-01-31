goog.module('org.gwtproject.uibinder.client.UiBinder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');

/**
 * @template U, O
 * @implements {UiBinder<U, O>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(O):U */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(O):U}*/
  this.f_$$fn__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor;
  this.$ctor__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor__org_gwtproject_uibinder_client_UiBinder_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor__org_gwtproject_uibinder_client_UiBinder_$JsFunction(/** ?function(O):U */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor = fn;
 }
 /** @return {U} */
 m_createAndBindUi__java_lang_Object(/** O */ arg0) {
  let /** ?function(O):U */ $function;
  return ($function = this.f_$$fn__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor, $function(arg0));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.uibinder.client.UiBinder$$LambdaAdaptor');

UiBinder.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=UiBinder$$LambdaAdaptor.js.map