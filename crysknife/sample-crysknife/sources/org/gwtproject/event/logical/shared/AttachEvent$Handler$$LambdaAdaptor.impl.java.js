goog.module('org.gwtproject.event.logical.shared.AttachEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.event.logical.shared.AttachEvent.Handler$impl');

let AttachEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(AttachEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(AttachEvent):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor__org_gwtproject_event_logical_shared_AttachEvent_Handler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor__org_gwtproject_event_logical_shared_AttachEvent_Handler_$JsFunction(/** ?function(AttachEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor = fn;
 }
 
 m_onAttachOrDetach__org_gwtproject_event_logical_shared_AttachEvent(/** AttachEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.AttachEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AttachEvent$Handler$$LambdaAdaptor.js.map