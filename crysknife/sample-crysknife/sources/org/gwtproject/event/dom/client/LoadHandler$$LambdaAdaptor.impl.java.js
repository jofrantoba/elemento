goog.module('org.gwtproject.event.dom.client.LoadHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LoadHandler = goog.require('org.gwtproject.event.dom.client.LoadHandler$impl');

let LoadEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadEvent$impl');

/**
 * @implements {LoadHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(LoadEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(LoadEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoadHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(LoadEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoadHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {LoadEvent} arg0
  * @public
  */
 m_onLoad__org_gwtproject_event_dom_client_LoadEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.LoadHandler$$LambdaAdaptor');

LoadHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=LoadHandler$$LambdaAdaptor.js.map