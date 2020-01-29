goog.module('org.gwtproject.view.client.SelectionChangeEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');

let SelectionChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(SelectionChangeEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(SelectionChangeEvent):void} */
  this.f_$$fn__org_gwtproject_view_client_SelectionChangeEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_view_client_SelectionChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_SelectionChangeEvent_Handler_$JsFunction(fn);
 }
 /**
  * @param {?function(SelectionChangeEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_view_client_SelectionChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_view_client_SelectionChangeEvent_Handler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_view_client_SelectionChangeEvent_Handler_$LambdaAdaptor = fn;
 }
 /**
  * @param {SelectionChangeEvent} arg0
  * @public
  */
 m_onSelectionChange__org_gwtproject_view_client_SelectionChangeEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_view_client_SelectionChangeEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.view.client.SelectionChangeEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SelectionChangeEvent$Handler$$LambdaAdaptor.js.map