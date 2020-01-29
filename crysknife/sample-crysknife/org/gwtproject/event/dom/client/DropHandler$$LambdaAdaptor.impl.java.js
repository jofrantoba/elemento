goog.module('org.gwtproject.event.dom.client.DropHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DropHandler = goog.require('org.gwtproject.event.dom.client.DropHandler$impl');

let DropEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DropEvent$impl');

/**
 * @implements {DropHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(DropEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(DropEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DropHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(DropEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DropHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {DropEvent} arg0
  * @public
  */
 m_onDrop__org_gwtproject_event_dom_client_DropEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DropHandler$$LambdaAdaptor');

DropHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DropHandler$$LambdaAdaptor.js.map