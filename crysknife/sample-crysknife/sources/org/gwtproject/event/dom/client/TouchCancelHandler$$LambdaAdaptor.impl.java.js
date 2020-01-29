goog.module('org.gwtproject.event.dom.client.TouchCancelHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchCancelHandler = goog.require('org.gwtproject.event.dom.client.TouchCancelHandler$impl');

let TouchCancelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelEvent$impl');

/**
 * @implements {TouchCancelHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(TouchCancelEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(TouchCancelEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchCancelHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(TouchCancelEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchCancelHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {TouchCancelEvent} arg0
  * @public
  */
 m_onTouchCancel__org_gwtproject_event_dom_client_TouchCancelEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.TouchCancelHandler$$LambdaAdaptor');

TouchCancelHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TouchCancelHandler$$LambdaAdaptor.js.map