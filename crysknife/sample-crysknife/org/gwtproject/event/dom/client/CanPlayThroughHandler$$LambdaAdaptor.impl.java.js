goog.module('org.gwtproject.event.dom.client.CanPlayThroughHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CanPlayThroughHandler = goog.require('org.gwtproject.event.dom.client.CanPlayThroughHandler$impl');

let CanPlayThroughEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughEvent$impl');

/**
 * @implements {CanPlayThroughHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(CanPlayThroughEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(CanPlayThroughEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_CanPlayThroughHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(CanPlayThroughEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_CanPlayThroughHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {CanPlayThroughEvent} arg0
  * @public
  */
 m_onCanPlayThrough__org_gwtproject_event_dom_client_CanPlayThroughEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.CanPlayThroughHandler$$LambdaAdaptor');

CanPlayThroughHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CanPlayThroughHandler$$LambdaAdaptor.js.map