goog.module('org.gwtproject.event.dom.client.HasAllMouseHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasMouseDownHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseDownHandlers$impl');
const HasMouseMoveHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseMoveHandlers$impl');
const HasMouseOutHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseOutHandlers$impl');
const HasMouseOverHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseOverHandlers$impl');
const HasMouseUpHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseUpHandlers$impl');
const HasMouseWheelHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseWheelHandlers$impl');

/**
 * @interface
 * @extends {HasMouseDownHandlers}
 * @extends {HasMouseUpHandlers}
 * @extends {HasMouseOutHandlers}
 * @extends {HasMouseOverHandlers}
 * @extends {HasMouseMoveHandlers}
 * @extends {HasMouseWheelHandlers}
 */
class HasAllMouseHandlers {
 /**
  * @public
  */
 static $clinit() {
  HasAllMouseHandlers.$clinit = () =>{};
  HasAllMouseHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasMouseDownHandlers.$markImplementor(classConstructor);
  HasMouseUpHandlers.$markImplementor(classConstructor);
  HasMouseOutHandlers.$markImplementor(classConstructor);
  HasMouseOverHandlers.$markImplementor(classConstructor);
  HasMouseMoveHandlers.$markImplementor(classConstructor);
  HasMouseWheelHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasAllMouseHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllMouseHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllMouseHandlers, 'org.gwtproject.event.dom.client.HasAllMouseHandlers');

HasAllMouseHandlers.$markImplementor(/** @type {Function} */ (HasAllMouseHandlers));

exports = HasAllMouseHandlers; 
//# sourceMappingURL=HasAllMouseHandlers.js.map