goog.module('org.gwtproject.uibinder.client.UiBinder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');

/**
 * @template U, O
 * @implements {UiBinder<U, O>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(O):U} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(O):U} */
  this.f_$$fn__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor;
  this.$ctor__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor__org_gwtproject_uibinder_client_UiBinder_$JsFunction(fn);
 }
 /**
  * @param {?function(O):U} fn
  * @public
  */
 $ctor__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor__org_gwtproject_uibinder_client_UiBinder_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor = fn;
 }
 /**
  * @param {O} arg0
  * @return {U}
  * @public
  */
 m_createAndBindUi__java_lang_Object(arg0) {
  let /** ?function(O):U */ $function;
  return ($function = this.f_$$fn__org_gwtproject_uibinder_client_UiBinder_$LambdaAdaptor, $function(arg0));
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.uibinder.client.UiBinder$$LambdaAdaptor');

UiBinder.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=UiBinder$$LambdaAdaptor.js.map