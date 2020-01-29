goog.module('org.gwtproject.uibinder.client.UiRenderer.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiRenderer = goog.require('org.gwtproject.uibinder.client.UiRenderer$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @implements {UiRenderer}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(Object):boolean} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(Object):boolean} */
  this.f_$$fn__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor;
  this.$ctor__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor__org_gwtproject_uibinder_client_UiRenderer_$JsFunction(fn);
 }
 /**
  * @param {?function(Object):boolean} fn
  * @public
  */
 $ctor__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor__org_gwtproject_uibinder_client_UiRenderer_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor = fn;
 }
 /**
  * @param {Object} arg0
  * @return {boolean}
  * @public
  */
 m_isParentOrRenderer__org_gwtproject_dom_client_Element(arg0) {
  let /** ?function(Object):boolean */ $function;
  return ($function = this.f_$$fn__org_gwtproject_uibinder_client_UiRenderer_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.uibinder.client.UiRenderer$$LambdaAdaptor');

UiRenderer.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=UiRenderer$$LambdaAdaptor.js.map