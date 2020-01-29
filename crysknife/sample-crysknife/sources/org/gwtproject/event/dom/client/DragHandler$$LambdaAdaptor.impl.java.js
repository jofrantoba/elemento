goog.module('org.gwtproject.event.dom.client.DragHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragHandler = goog.require('org.gwtproject.event.dom.client.DragHandler$impl');

let DragEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEvent$impl');

/**
 * @implements {DragHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(DragEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(DragEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(DragEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {DragEvent} arg0
  * @public
  */
 m_onDrag__org_gwtproject_event_dom_client_DragEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragHandler$$LambdaAdaptor');

DragHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragHandler$$LambdaAdaptor.js.map