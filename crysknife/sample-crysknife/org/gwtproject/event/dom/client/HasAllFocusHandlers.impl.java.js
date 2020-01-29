goog.module('org.gwtproject.event.dom.client.HasAllFocusHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasBlurHandlers = goog.require('org.gwtproject.event.dom.client.HasBlurHandlers$impl');
const HasFocusHandlers = goog.require('org.gwtproject.event.dom.client.HasFocusHandlers$impl');

/**
 * @interface
 * @extends {HasFocusHandlers}
 * @extends {HasBlurHandlers}
 */
class HasAllFocusHandlers {
 /**
  * @public
  */
 static $clinit() {
  HasAllFocusHandlers.$clinit = () =>{};
  HasAllFocusHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasFocusHandlers.$markImplementor(classConstructor);
  HasBlurHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasAllFocusHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllFocusHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllFocusHandlers, 'org.gwtproject.event.dom.client.HasAllFocusHandlers');

HasAllFocusHandlers.$markImplementor(/** @type {Function} */ (HasAllFocusHandlers));

exports = HasAllFocusHandlers; 
//# sourceMappingURL=HasAllFocusHandlers.js.map