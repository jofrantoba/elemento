goog.module('org.gwtproject.event.dom.client.GestureEndHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const GestureEndHandler = goog.require('org.gwtproject.event.dom.client.GestureEndHandler$impl');

let GestureEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndEvent$impl');

/**
 * @implements {GestureEndHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(GestureEndEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(GestureEndEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_GestureEndHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(GestureEndEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_GestureEndHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {GestureEndEvent} arg0
  * @public
  */
 m_onGestureEnd__org_gwtproject_event_dom_client_GestureEndEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.GestureEndHandler$$LambdaAdaptor');

GestureEndHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=GestureEndHandler$$LambdaAdaptor.js.map