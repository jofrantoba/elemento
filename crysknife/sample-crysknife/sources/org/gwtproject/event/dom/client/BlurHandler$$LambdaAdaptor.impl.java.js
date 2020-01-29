goog.module('org.gwtproject.event.dom.client.BlurHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BlurHandler = goog.require('org.gwtproject.event.dom.client.BlurHandler$impl');

let BlurEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurEvent$impl');

/**
 * @implements {BlurHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(BlurEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(BlurEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_BlurHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(BlurEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_BlurHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {BlurEvent} arg0
  * @public
  */
 m_onBlur__org_gwtproject_event_dom_client_BlurEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.BlurHandler$$LambdaAdaptor');

BlurHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=BlurHandler$$LambdaAdaptor.js.map