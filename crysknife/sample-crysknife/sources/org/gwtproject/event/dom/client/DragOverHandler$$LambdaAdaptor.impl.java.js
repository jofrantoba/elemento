goog.module('org.gwtproject.event.dom.client.DragOverHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragOverHandler = goog.require('org.gwtproject.event.dom.client.DragOverHandler$impl');

let DragOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverEvent$impl');

/**
 * @implements {DragOverHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(DragOverEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(DragOverEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragOverHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(DragOverEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragOverHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {DragOverEvent} arg0
  * @public
  */
 m_onDragOver__org_gwtproject_event_dom_client_DragOverEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragOverHandler$$LambdaAdaptor');

DragOverHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragOverHandler$$LambdaAdaptor.js.map