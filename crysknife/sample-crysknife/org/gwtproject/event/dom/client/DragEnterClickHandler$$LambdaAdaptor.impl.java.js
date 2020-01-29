goog.module('org.gwtproject.event.dom.client.DragEnterClickHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragEnterClickHandler = goog.require('org.gwtproject.event.dom.client.DragEnterClickHandler$impl');

let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');

/**
 * @implements {DragEnterClickHandler}
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
  this.f_$$fn__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEnterClickHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(DragEnterEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEnterClickHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {DragEnterEvent} arg0
  * @public
  */
 m_onDoubleClick__org_gwtproject_event_dom_client_DragEnterEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragEnterClickHandler$$LambdaAdaptor');

DragEnterClickHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragEnterClickHandler$$LambdaAdaptor.js.map