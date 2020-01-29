goog.module('org.gwtproject.event.logical.shared.InitializeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const InitializeHandler = goog.require('org.gwtproject.event.logical.shared.InitializeHandler$impl');

let InitializeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeEvent$impl');

/**
 * @implements {InitializeHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(InitializeEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(InitializeEvent):void} */
  this.f_$$fn__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_InitializeHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(InitializeEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_InitializeHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {InitializeEvent} arg0
  * @public
  */
 m_onInitialize__org_gwtproject_event_logical_shared_InitializeEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_InitializeHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.InitializeHandler$$LambdaAdaptor');

InitializeHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=InitializeHandler$$LambdaAdaptor.js.map