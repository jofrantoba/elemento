goog.module('org.gwtproject.event.dom.client.KeyDownHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyDownHandler = goog.require('org.gwtproject.event.dom.client.KeyDownHandler$impl');

let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');

/**
 * @implements {KeyDownHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(KeyDownEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(KeyDownEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_KeyDownHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_KeyDownHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyDownHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(KeyDownEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_KeyDownHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyDownHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_KeyDownHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {KeyDownEvent} arg0
  * @public
  */
 m_onKeyDown__org_gwtproject_event_dom_client_KeyDownEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_KeyDownHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.KeyDownHandler$$LambdaAdaptor');

KeyDownHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=KeyDownHandler$$LambdaAdaptor.js.map