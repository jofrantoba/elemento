goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SuppressIsSafeUriCastCheck = goog.require('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {SuppressIsSafeUriCastCheck}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck_$LambdaAdaptor__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck_$LambdaAdaptor__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck$$LambdaAdaptor');

SuppressIsSafeUriCastCheck.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SuppressIsSafeUriCastCheck$$LambdaAdaptor.js.map