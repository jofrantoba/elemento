goog.module('org.gwtproject.safehtml.shared.SafeHtml.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtml = goog.require('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {SafeHtml}
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
  this.f_$$fn__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_shared_SafeHtml_$JsFunction(fn);
 }
 /**
  * @param {?function():?string} fn
  * @public
  */
 $ctor__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_shared_SafeHtml_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor = fn;
 }
 /**
  * @return {?string}
  * @public
  */
 m_asString__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safehtml.shared.SafeHtml$$LambdaAdaptor');

SafeHtml.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SafeHtml$$LambdaAdaptor.js.map