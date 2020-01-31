goog.module('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler$impl');

let ColumnSortEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ColumnSortEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ColumnSortEvent):void}*/
  this.f_$$fn__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$JsFunction(/** ?function(ColumnSortEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor = fn;
 }
 
 m_onColumnSort__org_gwtproject_user_cellview_client_ColumnSortEvent(/** ColumnSortEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.ColumnSortEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ColumnSortEvent$Handler$$LambdaAdaptor.js.map