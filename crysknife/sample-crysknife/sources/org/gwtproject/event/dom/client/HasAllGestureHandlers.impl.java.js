goog.module('org.gwtproject.event.dom.client.HasAllGestureHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasGestureChangeHandlers = goog.require('org.gwtproject.event.dom.client.HasGestureChangeHandlers$impl');
const HasGestureEndHandlers = goog.require('org.gwtproject.event.dom.client.HasGestureEndHandlers$impl');
const HasGestureStartHandlers = goog.require('org.gwtproject.event.dom.client.HasGestureStartHandlers$impl');

/**
 * @interface
 * @extends {HasGestureStartHandlers}
 * @extends {HasGestureChangeHandlers}
 * @extends {HasGestureEndHandlers}
 */
class HasAllGestureHandlers {
 /**
  * @public
  */
 static $clinit() {
  HasAllGestureHandlers.$clinit = () =>{};
  HasAllGestureHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasGestureStartHandlers.$markImplementor(classConstructor);
  HasGestureChangeHandlers.$markImplementor(classConstructor);
  HasGestureEndHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasAllGestureHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllGestureHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllGestureHandlers, 'org.gwtproject.event.dom.client.HasAllGestureHandlers');

HasAllGestureHandlers.$markImplementor(/** @type {Function} */ (HasAllGestureHandlers));

exports = HasAllGestureHandlers; 
//# sourceMappingURL=HasAllGestureHandlers.js.map