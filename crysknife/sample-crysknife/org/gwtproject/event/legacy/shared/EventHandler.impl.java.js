goog.module('org.gwtproject.event.legacy.shared.EventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @deprecated
 */
class EventHandler {
 /**
  * @public
  */
 static $clinit() {
  EventHandler.$clinit = () =>{};
  EventHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_legacy_shared_EventHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_legacy_shared_EventHandler;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EventHandler, 'org.gwtproject.event.legacy.shared.EventHandler');

EventHandler.$markImplementor(/** @type {Function} */ (EventHandler));

exports = EventHandler; 
//# sourceMappingURL=EventHandler.js.map