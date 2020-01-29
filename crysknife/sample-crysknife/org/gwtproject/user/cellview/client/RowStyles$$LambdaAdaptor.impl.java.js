goog.module('org.gwtproject.user.cellview.client.RowStyles.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RowStyles = goog.require('org.gwtproject.user.cellview.client.RowStyles$impl');

/**
 * @template T
 * @implements {RowStyles<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(T, number):?string} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(T, number):?string} */
  this.f_$$fn__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor__org_gwtproject_user_cellview_client_RowStyles_$JsFunction(fn);
 }
 /**
  * @param {?function(T, number):?string} fn
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor__org_gwtproject_user_cellview_client_RowStyles_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor = fn;
 }
 /**
  * @param {T} arg0
  * @param {number} arg1
  * @return {?string}
  * @public
  */
 m_getStyleNames__java_lang_Object__int(arg0, arg1) {
  let /** ?function(T, number):?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_cellview_client_RowStyles_$LambdaAdaptor, $function(arg0, arg1));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.RowStyles$$LambdaAdaptor');

RowStyles.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=RowStyles$$LambdaAdaptor.js.map