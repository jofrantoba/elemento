goog.module('org.gwtproject.event.dom.client.GestureChangeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const GestureChangeHandler = goog.require('org.gwtproject.event.dom.client.GestureChangeHandler$impl');

let GestureChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeEvent$impl');

/**
 * @implements {GestureChangeHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(GestureChangeEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(GestureChangeEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_GestureChangeHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_GestureChangeHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_GestureChangeHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(GestureChangeEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_GestureChangeHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_GestureChangeHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_GestureChangeHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {GestureChangeEvent} arg0
  * @public
  */
 m_onGestureChange__org_gwtproject_event_dom_client_GestureChangeEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_GestureChangeHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.GestureChangeHandler$$LambdaAdaptor');

GestureChangeHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=GestureChangeHandler$$LambdaAdaptor.js.map