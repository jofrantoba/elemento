goog.module('org.treblereel.gwt.crysknife.client.Application.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Application = goog.require('org.treblereel.gwt.crysknife.client.Application$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Application}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_treblereel_gwt_crysknife_client_Application_$LambdaAdaptor;
  this.$ctor__org_treblereel_gwt_crysknife_client_Application_$LambdaAdaptor__org_treblereel_gwt_crysknife_client_Application_$JsFunction(fn);
 }
 
 $ctor__org_treblereel_gwt_crysknife_client_Application_$LambdaAdaptor__org_treblereel_gwt_crysknife_client_Application_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_treblereel_gwt_crysknife_client_Application_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_treblereel_gwt_crysknife_client_Application_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.treblereel.gwt.crysknife.client.Application$$LambdaAdaptor');

Application.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Application$$LambdaAdaptor.js.map