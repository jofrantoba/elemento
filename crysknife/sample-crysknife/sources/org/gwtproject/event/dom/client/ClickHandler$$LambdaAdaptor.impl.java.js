goog.module('org.gwtproject.event.dom.client.ClickHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');

/**
 * @implements {ClickHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ClickEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ClickEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ClickHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(ClickEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ClickHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ClickEvent} arg0
  * @public
  */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ClickHandler$$LambdaAdaptor');

ClickHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ClickHandler$$LambdaAdaptor.js.map