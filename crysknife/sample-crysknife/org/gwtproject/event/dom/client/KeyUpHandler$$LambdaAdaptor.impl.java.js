goog.module('org.gwtproject.event.dom.client.KeyUpHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyUpHandler = goog.require('org.gwtproject.event.dom.client.KeyUpHandler$impl');

let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');

/**
 * @implements {KeyUpHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(KeyUpEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(KeyUpEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyUpHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(KeyUpEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyUpHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {KeyUpEvent} arg0
  * @public
  */
 m_onKeyUp__org_gwtproject_event_dom_client_KeyUpEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.KeyUpHandler$$LambdaAdaptor');

KeyUpHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=KeyUpHandler$$LambdaAdaptor.js.map