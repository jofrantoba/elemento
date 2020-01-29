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
 /**
  * @param {?function():ProvidesKey<T>} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():ProvidesKey<T>} */
  this.f_$$fn__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor;
  this.$ctor__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor__org_gwtproject_view_client_HasKeyProvider_$JsFunction(fn);
 }
 /**
  * @param {?function():ProvidesKey<T>} fn
  * @public
  */
 $ctor__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor__org_gwtproject_view_client_HasKeyProvider_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor = fn;
 }
 /**
  * @return {ProvidesKey<T>}
  * @public
  */
 m_getKeyProvider__() {
  let /** ?function():ProvidesKey<T> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_view_client_HasKeyProvider_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.view.client.HasKeyProvider$$LambdaAdaptor');

HasKeyProvider.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasKeyProvider$$LambdaAdaptor.js.map