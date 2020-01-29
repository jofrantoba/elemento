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
 /**
  * @param {?function(OpenEvent<T>):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(OpenEvent<T>):void} */
  this.f_$$fn__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_OpenHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(OpenEvent<T>):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_OpenHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {OpenEvent<T>} arg0
  * @public
  */
 m_onOpen__org_gwtproject_event_logical_shared_OpenEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_OpenHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.OpenHandler$$LambdaAdaptor');

OpenHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=OpenHandler$$LambdaAdaptor.js.map