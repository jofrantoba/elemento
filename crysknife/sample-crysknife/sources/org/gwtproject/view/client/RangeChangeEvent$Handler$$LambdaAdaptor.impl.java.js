goog.module('org.gwtproject.view.client.RangeChangeEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');

let RangeChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(RangeChangeEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(RangeChangeEvent):void} */
  this.f_$$fn__org_gwtproject_view_client_RangeChangeEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_view_client_RangeChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_RangeChangeEvent_Handler_$JsFunction(fn);
 }
 /**
  * @param {?function(RangeChangeEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_view_client_RangeChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_RangeChangeEvent_Handler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_view_client_RangeChangeEvent_Handler_$LambdaAdaptor = fn;
 }
 /**
  * @param {RangeChangeEvent} arg0
  * @public
  */
 m_onRangeChange__org_gwtproject_view_client_RangeChangeEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_view_client_RangeChangeEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.view.client.RangeChangeEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=RangeChangeEvent$Handler$$LambdaAdaptor.js.map