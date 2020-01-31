goog.module('org.gwtproject.event.logical.shared.CloseHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CloseHandler = goog.require('org.gwtproject.event.logical.shared.CloseHandler$impl');

let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');

/**
 * @template T
 * @implements {CloseHandler<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(CloseEvent<T>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(CloseEvent<T>):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_CloseHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_CloseHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_CloseHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_CloseHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_CloseHandler_$JsFunction(/** ?function(CloseEvent<T>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_CloseHandler_$LambdaAdaptor = fn;
 }
 
 m_onClose__org_gwtproject_event_logical_shared_CloseEvent(/** CloseEvent<T> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_CloseHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.CloseHandler$$LambdaAdaptor');

CloseHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CloseHandler$$LambdaAdaptor.js.map