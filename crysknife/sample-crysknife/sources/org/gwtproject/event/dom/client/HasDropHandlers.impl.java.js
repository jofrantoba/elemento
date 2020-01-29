goog.module('org.gwtproject.event.dom.client.HasDropHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DropHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DropHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDropHandlers {
 /**
  * @abstract
  * @param {DropHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDropHandler__org_gwtproject_event_dom_client_DropHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasDropHandlers.$clinit = () =>{};
  HasDropHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasDropHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDropHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDropHandlers, 'org.gwtproject.event.dom.client.HasDropHandlers');

HasDropHandlers.$markImplementor(/** @type {Function} */ (HasDropHandlers));

exports = HasDropHandlers; 
//# sourceMappingURL=HasDropHandlers.js.map