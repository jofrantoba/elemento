goog.module('org.gwtproject.event.dom.client.HasBlurHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let BlurHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasBlurHandlers {
 /**
  * @abstract
  * @param {BlurHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addBlurHandler__org_gwtproject_event_dom_client_BlurHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasBlurHandlers.$clinit = () =>{};
  HasBlurHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasBlurHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasBlurHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasBlurHandlers, 'org.gwtproject.event.dom.client.HasBlurHandlers');

HasBlurHandlers.$markImplementor(/** @type {Function} */ (HasBlurHandlers));

exports = HasBlurHandlers; 
//# sourceMappingURL=HasBlurHandlers.js.map