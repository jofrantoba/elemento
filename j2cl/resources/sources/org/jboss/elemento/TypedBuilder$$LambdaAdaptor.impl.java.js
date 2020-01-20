goog.module('org.jboss.elemento.TypedBuilder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

/**
 * @template T, B
 * @implements {TypedBuilder<T, B>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():B} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():B} */
  this.f_$$fn__org_jboss_elemento_TypedBuilder_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_TypedBuilder_$LambdaAdaptor__org_jboss_elemento_TypedBuilder_$JsFunction(fn);
 }
 /**
  * @param {?function():B} fn
  * @public
  */
 $ctor__org_jboss_elemento_TypedBuilder_$LambdaAdaptor__org_jboss_elemento_TypedBuilder_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_TypedBuilder_$LambdaAdaptor = fn;
 }
 /**
  * @return {B}
  * @public
  */
 m_that__() {
  let /** ?function():B */ $function;
  return ($function = this.f_$$fn__org_jboss_elemento_TypedBuilder_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.TypedBuilder$$LambdaAdaptor');

TypedBuilder.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TypedBuilder$$LambdaAdaptor.js.map