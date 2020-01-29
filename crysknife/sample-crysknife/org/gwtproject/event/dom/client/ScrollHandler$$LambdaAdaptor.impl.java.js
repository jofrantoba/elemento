goog.module('org.gwtproject.event.dom.client.ScrollHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScrollHandler = goog.require('org.gwtproject.event.dom.client.ScrollHandler$impl');

let ScrollEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollEvent$impl');

/**
 * @implements {ScrollHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ScrollEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ScrollEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_ScrollHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ScrollHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ScrollHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(ScrollEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_ScrollHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ScrollHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ScrollHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ScrollEvent} arg0
  * @public
  */
 m_onScroll__org_gwtproject_event_dom_client_ScrollEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ScrollHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ScrollHandler$$LambdaAdaptor');

ScrollHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ScrollHandler$$LambdaAdaptor.js.map