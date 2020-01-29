goog.module('org.gwtproject.event.dom.client.TouchMoveHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchMoveHandler = goog.require('org.gwtproject.event.dom.client.TouchMoveHandler$impl');

let TouchMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveEvent$impl');

/**
 * @implements {TouchMoveHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(TouchMoveEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(TouchMoveEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchMoveHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(TouchMoveEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchMoveHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {TouchMoveEvent} arg0
  * @public
  */
 m_onTouchMove__org_gwtproject_event_dom_client_TouchMoveEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.TouchMoveHandler$$LambdaAdaptor');

TouchMoveHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TouchMoveHandler$$LambdaAdaptor.js.map