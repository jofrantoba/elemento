goog.module('org.gwtproject.event.dom.client.FocusHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FocusHandler = goog.require('org.gwtproject.event.dom.client.FocusHandler$impl');

let FocusEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusEvent$impl');

/**
 * @implements {FocusHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(FocusEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(FocusEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_FocusHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(FocusEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_FocusHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {FocusEvent} arg0
  * @public
  */
 m_onFocus__org_gwtproject_event_dom_client_FocusEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.FocusHandler$$LambdaAdaptor');

FocusHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FocusHandler$$LambdaAdaptor.js.map