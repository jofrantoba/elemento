goog.module('org.gwtproject.event.dom.client.MouseUpHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseUpHandler = goog.require('org.gwtproject.event.dom.client.MouseUpHandler$impl');

let MouseUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpEvent$impl');

/**
 * @implements {MouseUpHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(MouseUpEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(MouseUpEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseUpHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(MouseUpEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseUpHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {MouseUpEvent} arg0
  * @public
  */
 m_onMouseUp__org_gwtproject_event_dom_client_MouseUpEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseUpHandler$$LambdaAdaptor');

MouseUpHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseUpHandler$$LambdaAdaptor.js.map