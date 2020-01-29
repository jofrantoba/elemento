goog.module('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler$impl');

let ColumnSortEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ColumnSortEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ColumnSortEvent):void} */
  this.f_$$fn__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$JsFunction(fn);
 }
 /**
  * @param {?function(ColumnSortEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ColumnSortEvent} arg0
  * @public
  */
 m_onColumnSort__org_gwtproject_user_cellview_client_ColumnSortEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler_$LambdaAdaptor;
   $function(arg0);
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.ColumnSortEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ColumnSortEvent$Handler$$LambdaAdaptor.js.map