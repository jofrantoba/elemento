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
 /**
  * @param {?function(CellPreviewEvent<T>):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(CellPreviewEvent<T>):void} */
  this.f_$$fn__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_CellPreviewEvent_Handler_$JsFunction(fn);
 }
 /**
  * @param {?function(CellPreviewEvent<T>):void} fn
  * @public
  */
 $ctor__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_CellPreviewEvent_Handler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor = fn;
 }
 /**
  * @param {CellPreviewEvent<T>} arg0
  * @public
  */
 m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_view_client_CellPreviewEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.view.client.CellPreviewEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CellPreviewEvent$Handler$$LambdaAdaptor.js.map