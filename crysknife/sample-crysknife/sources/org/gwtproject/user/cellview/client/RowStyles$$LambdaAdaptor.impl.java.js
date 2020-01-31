goog.module('org.gwtproject.user.cellview.client.RowStyles.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RowStyles = goog.require('org.gwtproject.user.cellview.client.RowStyles$impl');

/**
 * @template T
 * @implements {RowStyles<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(T, number):?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, number):?string}*/
  this.f_$$fn__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor__org_gwtproject_user_cellview_client_RowStyles_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor__org_gwtproject_user_cellview_client_RowStyles_$JsFunction(/** ?function(T, number):?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor = fn;
 }
 /** @return {?string} */
 m_getStyleNames__java_lang_Object__int(/** T */ arg0, /** number */ arg1) {
  let /** ?function(T, number):?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor, $function(arg0, arg1));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.RowStyles$$LambdaAdaptor');

RowStyles.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=RowStyles$$LambdaAdaptor.js.map