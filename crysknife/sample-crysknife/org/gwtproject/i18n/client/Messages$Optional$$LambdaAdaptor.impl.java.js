goog.module('org.gwtproject.i18n.client.Messages.Optional.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Optional = goog.require('org.gwtproject.i18n.client.Messages.Optional$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Optional}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_i18n_client_Messages_Optional_$LambdaAdaptor;
  this.$ctor__org_gwtproject_i18n_client_Messages_Optional_$LambdaAdaptor__org_gwtproject_i18n_client_Messages_Optional_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_i18n_client_Messages_Optional_$LambdaAdaptor__org_gwtproject_i18n_client_Messages_Optional_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_i18n_client_Messages_Optional_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_i18n_client_Messages_Optional_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.i18n.client.Messages$Optional$$LambdaAdaptor');

Optional.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Messages$Optional$$LambdaAdaptor.js.map