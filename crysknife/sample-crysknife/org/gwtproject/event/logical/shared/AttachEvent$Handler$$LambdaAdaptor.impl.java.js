goog.module('org.gwtproject.event.logical.shared.AttachEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.event.logical.shared.AttachEvent.Handler$impl');

let AttachEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(AttachEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(AttachEvent):void} */
  this.f_$$fn__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor__org_gwtproject_event_logical_shared_AttachEvent_Handler_$JsFunction(fn);
 }
 /**
  * @param {?function(AttachEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor__org_gwtproject_event_logical_shared_AttachEvent_Handler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor = fn;
 }
 /**
  * @param {AttachEvent} arg0
  * @public
  */
 m_onAttachOrDetach__org_gwtproject_event_logical_shared_AttachEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_AttachEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.AttachEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AttachEvent$Handler$$LambdaAdaptor.js.map