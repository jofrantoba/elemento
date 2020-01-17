goog.module('org.gwtproject.event.shared.SimpleEventBus.Command.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Command = goog.require('org.gwtproject.event.shared.SimpleEventBus.Command$impl');

/**
 * @implements {Command}
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
  this.f_$$fn__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor__org_gwtproject_event_shared_SimpleEventBus_Command_$JsFunction(fn);
 }
 /**
  * @param {?function():void} fn
  * @public
  */
 $ctor__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor__org_gwtproject_event_shared_SimpleEventBus_Command_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor = fn;
 }
 /**
  * @public
  */
 m_execute__() {
  {
   let $function = this.f_$$fn__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.shared.SimpleEventBus$Command$$LambdaAdaptor');

Command.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SimpleEventBus$Command$$LambdaAdaptor.js.map