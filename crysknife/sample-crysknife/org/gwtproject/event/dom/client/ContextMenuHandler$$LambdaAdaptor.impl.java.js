goog.module('org.gwtproject.event.dom.client.ContextMenuHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ContextMenuHandler = goog.require('org.gwtproject.event.dom.client.ContextMenuHandler$impl');

let ContextMenuEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ContextMenuEvent$impl');

/**
 * @implements {ContextMenuHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ContextMenuEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ContextMenuEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ContextMenuHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(ContextMenuEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ContextMenuHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ContextMenuEvent} arg0
  * @public
  */
 m_onContextMenu__org_gwtproject_event_dom_client_ContextMenuEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ContextMenuHandler$$LambdaAdaptor');

ContextMenuHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ContextMenuHandler$$LambdaAdaptor.js.map