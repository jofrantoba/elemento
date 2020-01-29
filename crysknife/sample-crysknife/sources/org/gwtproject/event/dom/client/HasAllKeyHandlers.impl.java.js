goog.module('org.gwtproject.event.dom.client.HasAllKeyHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasKeyDownHandlers = goog.require('org.gwtproject.event.dom.client.HasKeyDownHandlers$impl');
const HasKeyPressHandlers = goog.require('org.gwtproject.event.dom.client.HasKeyPressHandlers$impl');
const HasKeyUpHandlers = goog.require('org.gwtproject.event.dom.client.HasKeyUpHandlers$impl');

/**
 * @interface
 * @extends {HasKeyUpHandlers}
 * @extends {HasKeyDownHandlers}
 * @extends {HasKeyPressHandlers}
 */
class HasAllKeyHandlers {
 /**
  * @public
  */
 static $clinit() {
  HasAllKeyHandlers.$clinit = () =>{};
  HasAllKeyHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasKeyUpHandlers.$markImplementor(classConstructor);
  HasKeyDownHandlers.$markImplementor(classConstructor);
  HasKeyPressHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasAllKeyHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllKeyHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllKeyHandlers, 'org.gwtproject.event.dom.client.HasAllKeyHandlers');

HasAllKeyHandlers.$markImplementor(/** @type {Function} */ (HasAllKeyHandlers));

exports = HasAllKeyHandlers; 
//# sourceMappingURL=HasAllKeyHandlers.js.map