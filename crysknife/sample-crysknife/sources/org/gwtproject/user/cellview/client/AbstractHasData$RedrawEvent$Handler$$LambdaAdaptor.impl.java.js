goog.module('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent.Handler$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void}*/
  this.f_$$fn__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler_$JsFunction(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler_$LambdaAdaptor = fn;
 }
 
 m_onRedraw__() {
  {
   let $function = this.f_$$fn__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler_$LambdaAdaptor;
   $function();
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.AbstractHasData$RedrawEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AbstractHasData$RedrawEvent$Handler$$LambdaAdaptor.js.map