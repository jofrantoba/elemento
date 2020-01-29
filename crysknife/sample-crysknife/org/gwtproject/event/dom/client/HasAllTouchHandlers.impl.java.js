goog.module('org.gwtproject.event.dom.client.HasAllTouchHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasTouchCancelHandlers = goog.require('org.gwtproject.event.dom.client.HasTouchCancelHandlers$impl');
const HasTouchEndHandlers = goog.require('org.gwtproject.event.dom.client.HasTouchEndHandlers$impl');
const HasTouchMoveHandlers = goog.require('org.gwtproject.event.dom.client.HasTouchMoveHandlers$impl');
const HasTouchStartHandlers = goog.require('org.gwtproject.event.dom.client.HasTouchStartHandlers$impl');

/**
 * @interface
 * @extends {HasTouchStartHandlers}
 * @extends {HasTouchMoveHandlers}
 * @extends {HasTouchEndHandlers}
 * @extends {HasTouchCancelHandlers}
 */
class HasAllTouchHandlers {
 /**
  * @public
  */
 static $clinit() {
  HasAllTouchHandlers.$clinit = () =>{};
  HasAllTouchHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasTouchStartHandlers.$markImplementor(classConstructor);
  HasTouchMoveHandlers.$markImplementor(classConstructor);
  HasTouchEndHandlers.$markImplementor(classConstructor);
  HasTouchCancelHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasAllTouchHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllTouchHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllTouchHandlers, 'org.gwtproject.event.dom.client.HasAllTouchHandlers');

HasAllTouchHandlers.$markImplementor(/** @type {Function} */ (HasAllTouchHandlers));

exports = HasAllTouchHandlers; 
//# sourceMappingURL=HasAllTouchHandlers.js.map