goog.module('javax.enterprise.event.Event.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Event = goog.require('javax.enterprise.event.Event$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
 * @implements {Event<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(T):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(T):void} */
  this.f_$$fn__javax_enterprise_event_Event_$LambdaAdaptor;
  this.$ctor__javax_enterprise_event_Event_$LambdaAdaptor__javax_enterprise_event_Event_$JsFunction(fn);
 }
 /**
  * @param {?function(T):void} fn
  * @public
  */
 $ctor__javax_enterprise_event_Event_$LambdaAdaptor__javax_enterprise_event_Event_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_enterprise_event_Event_$LambdaAdaptor = fn;
 }
 /**
  * @param {T} arg0
  * @public
  */
 m_fire__java_lang_Object(arg0) {
  {
   let $function = this.f_$$fn__javax_enterprise_event_Event_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.enterprise.event.Event$$LambdaAdaptor');

Event.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Event$$LambdaAdaptor.js.map