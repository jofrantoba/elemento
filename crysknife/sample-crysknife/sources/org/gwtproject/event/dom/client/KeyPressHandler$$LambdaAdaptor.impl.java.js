goog.module('org.gwtproject.event.dom.client.KeyPressHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyPressHandler = goog.require('org.gwtproject.event.dom.client.KeyPressHandler$impl');

let KeyPressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressEvent$impl');

/**
 * @implements {KeyPressHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(KeyPressEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(KeyPressEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyPressHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(KeyPressEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyPressHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {KeyPressEvent} arg0
  * @public
  */
 m_onKeyPress__org_gwtproject_event_dom_client_KeyPressEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.KeyPressHandler$$LambdaAdaptor');

KeyPressHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=KeyPressHandler$$LambdaAdaptor.js.map