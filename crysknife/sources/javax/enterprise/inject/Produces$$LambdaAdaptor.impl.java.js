goog.module('javax.enterprise.inject.Produces.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Produces = goog.require('javax.enterprise.inject.Produces$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Produces}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():Class<?>} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():Class<?>} */
  this.f_$$fn__javax_enterprise_inject_Produces_$LambdaAdaptor;
  this.$ctor__javax_enterprise_inject_Produces_$LambdaAdaptor__javax_enterprise_inject_Produces_$JsFunction(fn);
 }
 /**
  * @param {?function():Class<?>} fn
  * @public
  */
 $ctor__javax_enterprise_inject_Produces_$LambdaAdaptor__javax_enterprise_inject_Produces_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_enterprise_inject_Produces_$LambdaAdaptor = fn;
 }
 /**
  * @return {Class<?>}
  * @public
  */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__javax_enterprise_inject_Produces_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.enterprise.inject.Produces$$LambdaAdaptor');

Produces.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Produces$$LambdaAdaptor.js.map