goog.module('org.treblereel.gwt.crysknife.client.EntryPoint.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EntryPoint = goog.require('org.treblereel.gwt.crysknife.client.EntryPoint$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {EntryPoint}
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
  this.f_$$fn__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor;
  this.$ctor__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor__org_treblereel_gwt_crysknife_client_EntryPoint_$JsFunction(fn);
 }
 /**
  * @param {?function():Class<?>} fn
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor__org_treblereel_gwt_crysknife_client_EntryPoint_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor = fn;
 }
 /**
  * @return {Class<?>}
  * @public
  */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_treblereel_gwt_crysknife_client_EntryPoint_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.treblereel.gwt.crysknife.client.EntryPoint$$LambdaAdaptor');

EntryPoint.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=EntryPoint$$LambdaAdaptor.js.map