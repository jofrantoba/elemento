goog.module('org.gwtproject.view.client.HasKeyProvider.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasKeyProvider = goog.require('org.gwtproject.view.client.HasKeyProvider$impl');

let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');

/**
 * @template T
 * @implements {HasKeyProvider<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():ProvidesKey<T> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():ProvidesKey<T>}*/
  this.f_$$fn__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor;
  this.$ctor__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor__org_gwtproject_view_client_HasKeyProvider_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor__org_gwtproject_view_client_HasKeyProvider_$JsFunction(/** ?function():ProvidesKey<T> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor = fn;
 }
 /** @return {ProvidesKey<T>} */
 m_getKeyProvider__() {
  let /** ?function():ProvidesKey<T> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.view.client.HasKeyProvider$$LambdaAdaptor');

HasKeyProvider.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasKeyProvider$$LambdaAdaptor.js.map