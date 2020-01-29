goog.module('org.gwtproject.event.dom.client.ErrorHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ErrorHandler = goog.require('org.gwtproject.event.dom.client.ErrorHandler$impl');

let ErrorEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorEvent$impl');

/**
 * @implements {ErrorHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ErrorEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ErrorEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ErrorHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(ErrorEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ErrorHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ErrorEvent} arg0
  * @public
  */
 m_onError__org_gwtproject_event_dom_client_ErrorEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ErrorHandler$$LambdaAdaptor');

ErrorHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ErrorHandler$$LambdaAdaptor.js.map