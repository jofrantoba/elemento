goog.module('org.gwtproject.event.dom.client.DragEndHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragEndHandler = goog.require('org.gwtproject.event.dom.client.DragEndHandler$impl');

let DragEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndEvent$impl');

/**
 * @implements {DragEndHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(DragEndEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(DragEndEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEndHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(DragEndEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEndHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {DragEndEvent} arg0
  * @public
  */
 m_onDragEnd__org_gwtproject_event_dom_client_DragEndEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragEndHandler$$LambdaAdaptor');

DragEndHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragEndHandler$$LambdaAdaptor.js.map