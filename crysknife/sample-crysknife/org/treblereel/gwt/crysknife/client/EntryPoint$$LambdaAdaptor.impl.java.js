goog.module('org.treblereel.gwt.crysknife.client.EntryPoint.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EntryPoint = goog.require('org.treblereel.gwt.crysknife.client.EntryPoint$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {EntryPoint}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor;
  this.$ctor__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor__org_treblereel_gwt_crysknife_client_EntryPoint_$JsFunction(fn);
 }
 
 $ctor__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor__org_treblereel_gwt_crysknife_client_EntryPoint_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.treblereel.gwt.crysknife.client.EntryPoint$$LambdaAdaptor');

EntryPoint.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=EntryPoint$$LambdaAdaptor.js.map