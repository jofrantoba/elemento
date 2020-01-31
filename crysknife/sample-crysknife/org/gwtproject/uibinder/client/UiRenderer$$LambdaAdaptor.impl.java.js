goog.module('org.gwtproject.uibinder.client.UiRenderer.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiRenderer = goog.require('org.gwtproject.uibinder.client.UiRenderer$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @implements {UiRenderer}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Object):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Object):boolean}*/
  this.f_$$fn__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor;
  this.$ctor__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor__org_gwtproject_uibinder_client_UiRenderer_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor__org_gwtproject_uibinder_client_UiRenderer_$JsFunction(/** ?function(Object):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor = fn;
 }
 /** @return {boolean} */
 m_isParentOrRenderer__org_gwtproject_dom_client_Element(/** Object */ arg0) {
  let /** ?function(Object):boolean */ $function;
  return ($function = this.f_$$fn__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.uibinder.client.UiRenderer$$LambdaAdaptor');

UiRenderer.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=UiRenderer$$LambdaAdaptor.js.map