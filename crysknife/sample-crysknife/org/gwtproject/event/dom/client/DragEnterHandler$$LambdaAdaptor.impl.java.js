goog.module('org.gwtproject.event.dom.client.DragEnterHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragEnterHandler = goog.require('org.gwtproject.event.dom.client.DragEnterHandler$impl');

let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');

/**
 * @implements {DragEnterHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(DragEnterEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(DragEnterEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEnterHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(DragEnterEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEnterHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {DragEnterEvent} arg0
  * @public
  */
 m_onDragEnter__org_gwtproject_event_dom_client_DragEnterEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragEnterHandler$$LambdaAdaptor');

DragEnterHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragEnterHandler$$LambdaAdaptor.js.map