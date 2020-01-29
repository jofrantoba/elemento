goog.module('org.gwtproject.safecss.shared.SafeStyles.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeStyles = goog.require('org.gwtproject.safecss.shared.SafeStyles$impl');

/**
 * @implements {SafeStyles}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():?string} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():?string} */
  this.f_$$fn__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor__org_gwtproject_safecss_shared_SafeStyles_$JsFunction(fn);
 }
 /**
  * @param {?function():?string} fn
  * @public
  */
 $ctor__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor__org_gwtproject_safecss_shared_SafeStyles_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor = fn;
 }
 /**
  * @return {?string}
  * @public
  */
 m_asString__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safecss.shared.SafeStyles$$LambdaAdaptor');

SafeStyles.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SafeStyles$$LambdaAdaptor.js.map