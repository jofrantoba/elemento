goog.module('org.gwtproject.view.client.RowCountChangeEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');

let RowCountChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(RowCountChangeEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(RowCountChangeEvent):void}*/
  this.f_$$fn__org_gwtproject_view_client_RowCountChangeEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_view_client_RowCountChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_RowCountChangeEvent_Handler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_view_client_RowCountChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_RowCountChangeEvent_Handler_$JsFunction(/** ?function(RowCountChangeEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_view_client_RowCountChangeEvent_Handler_$LambdaAdaptor = fn;
 }
 
 m_onRowCountChange__org_gwtproject_view_client_RowCountChangeEvent(/** RowCountChangeEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_view_client_RowCountChangeEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.view.client.RowCountChangeEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=RowCountChangeEvent$Handler$$LambdaAdaptor.js.map