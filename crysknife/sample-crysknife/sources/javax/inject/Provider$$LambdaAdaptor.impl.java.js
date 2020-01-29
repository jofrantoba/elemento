goog.module('javax.inject.Provider.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Provider = goog.require('javax.inject.Provider$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
 * @implements {Provider<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():T} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():T} */
  this.f_$$fn__javax_inject_Provider_$LambdaAdaptor;
  this.$ctor__javax_inject_Provider_$LambdaAdaptor__javax_inject_Provider_$JsFunction(fn);
 }
 /**
  * @param {?function():T} fn
  * @public
  */
 $ctor__javax_inject_Provider_$LambdaAdaptor__javax_inject_Provider_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_inject_Provider_$LambdaAdaptor = fn;
 }
 /**
  * @return {T}
  * @public
  */
 m_get__() {
  let /** ?function():T */ $function;
  return ($function = this.f_$$fn__javax_inject_Provider_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.inject.Provider$$LambdaAdaptor');

Provider.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Provider$$LambdaAdaptor.js.map