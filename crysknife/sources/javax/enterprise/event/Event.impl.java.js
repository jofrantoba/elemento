goog.module('javax.enterprise.event.Event$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.event.Event.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Event {
 /**
  * @abstract
  * @param {T} var1
  * @public
  */
 m_fire__java_lang_Object(var1) {}
 /**
  * @template T
  * @param {?function(T):void} fn
  * @return {Event<T>}
  * @public
  */
 static $adapt(fn) {
  Event.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  Event.$clinit = () =>{};
  Event.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_enterprise_event_Event = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_enterprise_event_Event;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.event.Event.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Event, 'javax.enterprise.event.Event');

Event.$markImplementor(/** @type {Function} */ (Event));

exports = Event; 
//# sourceMappingURL=Event.js.map