goog.module('org.gwtproject.view.client.ProvidesKey.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ProvidesKey = goog.require('org.gwtproject.view.client.ProvidesKey$impl');

/**
 * @template T
 * @implements {ProvidesKey<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(T):* */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):*}*/
  this.f_$$fn__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor;
  this.$ctor__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor__org_gwtproject_view_client_ProvidesKey_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor__org_gwtproject_view_client_ProvidesKey_$JsFunction(/** ?function(T):* */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor = fn;
 }
 /** @return {*} */
 m_getKey__java_lang_Object(/** T */ arg0) {
  let /** ?function(T):* */ $function;
  return ($function = this.f_$$fn__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.view.client.ProvidesKey$$LambdaAdaptor');

ProvidesKey.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ProvidesKey$$LambdaAdaptor.js.map