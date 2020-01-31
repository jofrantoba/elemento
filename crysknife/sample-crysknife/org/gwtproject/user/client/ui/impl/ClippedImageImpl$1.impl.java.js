goog.module('org.gwtproject.user.client.ui.impl.ClippedImageImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const $JavaScriptFunction = goog.require('vmbootstrap.JavaScriptFunction$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {function():void} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_1__();
  return $Util.$makeLambdaFunction($1.prototype.m_onInvoke__, $instance, $1.$copy);
 }
 /** @suppress {invalidCasts} */
 $ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_1__() {
  this.$ctor__java_lang_Object__();
 }
 /** @this {?function():void} */
 m_onInvoke__() {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this), "__gwtLastUnhandledEvent", "load");
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$is__org_gwtproject_user_client_ui_impl_ClippedImageImpl_1;
  
 }
 static $copy(/**$1*/ from, /** ? */ to) 
 {
  // Marks the object is an instance of this class.
  to.$is__org_gwtproject_user_client_ui_impl_ClippedImageImpl_1 = true;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.impl.ClippedImageImpl$1');

$JavaScriptFunction.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ClippedImageImpl$1.js.map