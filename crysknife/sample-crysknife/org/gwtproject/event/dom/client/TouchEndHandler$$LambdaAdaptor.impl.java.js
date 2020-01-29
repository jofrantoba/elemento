goog.module('org.gwtproject.event.dom.client.TouchEndHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchEndHandler = goog.require('org.gwtproject.event.dom.client.TouchEndHandler$impl');

let TouchEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndEvent$impl');

/**
 * @implements {TouchEndHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(TouchEndEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(TouchEndEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchEndHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(TouchEndEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchEndHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {TouchEndEvent} arg0
  * @public
  */
 m_onTouchEnd__org_gwtproject_event_dom_client_TouchEndEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.TouchEndHandler$$LambdaAdaptor');

TouchEndHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TouchEndHandler$$LambdaAdaptor.js.map