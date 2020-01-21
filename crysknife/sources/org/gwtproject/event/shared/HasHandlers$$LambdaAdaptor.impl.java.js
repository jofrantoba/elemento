goog.module('org.gwtproject.event.shared.HasHandlers.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');

/**
 * @implements {HasHandlers}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(Event<?>):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(Event<?>):void} */
  this.f_$$fn__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor__org_gwtproject_event_shared_HasHandlers_$JsFunction(fn);
 }
 /**
  * @param {?function(Event<?>):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor__org_gwtproject_event_shared_HasHandlers_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor = fn;
 }
 /**
  * @param {Event<?>} arg0
  * @public
  */
 m_fireEvent__org_gwtproject_event_shared_Event(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.shared.HasHandlers$$LambdaAdaptor');

HasHandlers.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasHandlers$$LambdaAdaptor.js.map