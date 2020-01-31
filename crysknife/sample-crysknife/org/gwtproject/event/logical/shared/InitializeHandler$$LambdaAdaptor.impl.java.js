goog.module('org.gwtproject.event.logical.shared.InitializeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const InitializeHandler = goog.require('org.gwtproject.event.logical.shared.InitializeHandler$impl');

let InitializeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeEvent$impl');

/**
 * @implements {InitializeHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(InitializeEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(InitializeEvent):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_InitializeHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_InitializeHandler_$JsFunction(/** ?function(InitializeEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor = fn;
 }
 
 m_onInitialize__org_gwtproject_event_logical_shared_InitializeEvent(/** InitializeEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.InitializeHandler$$LambdaAdaptor');

InitializeHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=InitializeHandler$$LambdaAdaptor.js.map