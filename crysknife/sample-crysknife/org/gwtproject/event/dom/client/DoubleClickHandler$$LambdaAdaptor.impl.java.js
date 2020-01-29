goog.module('org.gwtproject.event.dom.client.DoubleClickHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DoubleClickHandler = goog.require('org.gwtproject.event.dom.client.DoubleClickHandler$impl');

let DoubleClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickEvent$impl');

/**
 * @implements {DoubleClickHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(DoubleClickEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(DoubleClickEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_DoubleClickHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DoubleClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DoubleClickHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(DoubleClickEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DoubleClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DoubleClickHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DoubleClickHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {DoubleClickEvent} arg0
  * @public
  */
 m_onDoubleClick__org_gwtproject_event_dom_client_DoubleClickEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DoubleClickHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DoubleClickHandler$$LambdaAdaptor');

DoubleClickHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DoubleClickHandler$$LambdaAdaptor.js.map