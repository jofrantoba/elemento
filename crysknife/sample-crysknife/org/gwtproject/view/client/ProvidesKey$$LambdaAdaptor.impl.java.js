goog.module('org.gwtproject.view.client.ProvidesKey.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ProvidesKey = goog.require('org.gwtproject.view.client.ProvidesKey$impl');

/**
 * @template T
 * @implements {ProvidesKey<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(T):*} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(T):*} */
  this.f_$$fn__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor;
  this.$ctor__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor__org_gwtproject_view_client_ProvidesKey_$JsFunction(fn);
 }
 /**
  * @param {?function(T):*} fn
  * @public
  */
 $ctor__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor__org_gwtproject_view_client_ProvidesKey_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor = fn;
 }
 /**
  * @param {T} arg0
  * @return {*}
  * @public
  */
 m_getKey__java_lang_Object(arg0) {
  let /** ?function(T):* */ $function;
  return ($function = this.f_$$fn__org_gwtproject_view_client_ProvidesKey_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.view.client.ProvidesKey$$LambdaAdaptor');

ProvidesKey.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ProvidesKey$$LambdaAdaptor.js.map