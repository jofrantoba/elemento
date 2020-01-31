goog.module('org.gwtproject.event.logical.shared.BeforeSelectionHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BeforeSelectionHandler = goog.require('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');

let BeforeSelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');

/**
 * @template T
 * @implements {BeforeSelectionHandler<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(BeforeSelectionEvent<T>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(BeforeSelectionEvent<T>):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_BeforeSelectionHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_BeforeSelectionHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_BeforeSelectionHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_BeforeSelectionHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_BeforeSelectionHandler_$JsFunction(/** ?function(BeforeSelectionEvent<T>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_BeforeSelectionHandler_$LambdaAdaptor = fn;
 }
 
 m_onBeforeSelection__org_gwtproject_event_logical_shared_BeforeSelectionEvent(/** BeforeSelectionEvent<T> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_BeforeSelectionHandler_$LambdaAdaptor;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.BeforeSelectionHandler$$LambdaAdaptor');

BeforeSelectionHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=BeforeSelectionHandler$$LambdaAdaptor.js.map