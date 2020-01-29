goog.module('org.gwtproject.event.dom.client.DragLeaveHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragLeaveHandler = goog.require('org.gwtproject.event.dom.client.DragLeaveHandler$impl');

let DragLeaveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveEvent$impl');

/**
 * @implements {DragLeaveHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(DragLeaveEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(DragLeaveEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_DragLeaveHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragLeaveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragLeaveHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(DragLeaveEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DragLeaveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragLeaveHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragLeaveHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {DragLeaveEvent} arg0
  * @public
  */
 m_onDragLeave__org_gwtproject_event_dom_client_DragLeaveEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragLeaveHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragLeaveHandler$$LambdaAdaptor');

DragLeaveHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragLeaveHandler$$LambdaAdaptor.js.map