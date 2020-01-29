goog.module('org.gwtproject.user.cellview.client.RowHoverEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.user.cellview.client.RowHoverEvent.Handler$impl');

let RowHoverEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(RowHoverEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(RowHoverEvent):void} */
  this.f_$$fn__org_gwtproject_user_cellview_client_RowHoverEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_RowHoverEvent_Handler_$JsFunction(fn);
 }
 /**
  * @param {?function(RowHoverEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_RowHoverEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_RowHoverEvent_Handler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_RowHoverEvent_Handler_$LambdaAdaptor = fn;
 }
 /**
  * @param {RowHoverEvent} arg0
  * @public
  */
 m_onRowHover__org_gwtproject_user_cellview_client_RowHoverEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_cellview_client_RowHoverEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.RowHoverEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=RowHoverEvent$Handler$$LambdaAdaptor.js.map