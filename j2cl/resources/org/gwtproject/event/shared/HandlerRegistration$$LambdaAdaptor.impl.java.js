goog.module('org.gwtproject.event.shared.HandlerRegistration.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HandlerRegistration = goog.require('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @implements {HandlerRegistration}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():void} */
  this.f_$$fn__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor__org_gwtproject_event_shared_HandlerRegistration_$JsFunction(fn);
 }
 /**
  * @param {?function():void} fn
  * @public
  */
 $ctor__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor__org_gwtproject_event_shared_HandlerRegistration_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor = fn;
 }
 /**
  * @public
  */
 m_removeHandler__() {
  {
   let $function = this.f_$$fn__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor;
   $function();
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.shared.HandlerRegistration$$LambdaAdaptor');

HandlerRegistration.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HandlerRegistration$$LambdaAdaptor.js.map