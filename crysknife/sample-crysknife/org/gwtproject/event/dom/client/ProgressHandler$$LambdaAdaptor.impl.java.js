goog.module('org.gwtproject.event.dom.client.ProgressHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ProgressHandler = goog.require('org.gwtproject.event.dom.client.ProgressHandler$impl');

let ProgressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressEvent$impl');

/**
 * @implements {ProgressHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ProgressEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ProgressEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ProgressHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(ProgressEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ProgressHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ProgressEvent} arg0
  * @public
  */
 m_onProgress__org_gwtproject_event_dom_client_ProgressEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ProgressHandler$$LambdaAdaptor');

ProgressHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ProgressHandler$$LambdaAdaptor.js.map