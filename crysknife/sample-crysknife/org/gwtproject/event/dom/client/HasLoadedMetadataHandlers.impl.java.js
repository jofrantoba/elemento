goog.module('org.gwtproject.event.dom.client.HasLoadedMetadataHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let LoadedMetadataHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasLoadedMetadataHandlers {
 /**
  * @abstract
  * @param {LoadedMetadataHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addLoadedMetadataHandler__org_gwtproject_event_dom_client_LoadedMetadataHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasLoadedMetadataHandlers.$clinit = () =>{};
  HasLoadedMetadataHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasLoadedMetadataHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasLoadedMetadataHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasLoadedMetadataHandlers, 'org.gwtproject.event.dom.client.HasLoadedMetadataHandlers');

HasLoadedMetadataHandlers.$markImplementor(/** @type {Function} */ (HasLoadedMetadataHandlers));

exports = HasLoadedMetadataHandlers; 
//# sourceMappingURL=HasLoadedMetadataHandlers.js.map