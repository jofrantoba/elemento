goog.module('org.gwtproject.event.logical.shared.OpenHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const OpenHandler = goog.require('org.gwtproject.event.logical.shared.OpenHandler$impl');

let OpenEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenEvent$impl');

/**
 * @template T
 * @implements {OpenHandler<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(OpenEvent<T>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(OpenEvent<T>):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_OpenHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_OpenHandler_$JsFunction(/** ?function(OpenEvent<T>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor = fn;
 }
 
 m_onOpen__org_gwtproject_event_logical_shared_OpenEvent(/** OpenEvent<T> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.OpenHandler$$LambdaAdaptor');

OpenHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=OpenHandler$$LambdaAdaptor.js.map