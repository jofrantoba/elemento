goog.module('org.gwtproject.view.client.CellPreviewEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');

let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');

/**
 * @template T
 * @implements {Handler<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(CellPreviewEvent<T>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(CellPreviewEvent<T>):void}*/
  this.f_$$fn__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_CellPreviewEvent_Handler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_CellPreviewEvent_Handler_$JsFunction(/** ?function(CellPreviewEvent<T>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor = fn;
 }
 
 m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(/** CellPreviewEvent<T> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor;
   $function(arg0);
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.view.client.CellPreviewEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CellPreviewEvent$Handler$$LambdaAdaptor.js.map