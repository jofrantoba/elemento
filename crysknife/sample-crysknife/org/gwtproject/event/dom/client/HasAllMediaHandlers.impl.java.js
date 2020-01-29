goog.module('org.gwtproject.event.dom.client.HasAllMediaHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCanPlayThroughHandlers = goog.require('org.gwtproject.event.dom.client.HasCanPlayThroughHandlers$impl');
const HasEndedHandlers = goog.require('org.gwtproject.event.dom.client.HasEndedHandlers$impl');
const HasLoadedMetadataHandlers = goog.require('org.gwtproject.event.dom.client.HasLoadedMetadataHandlers$impl');
const HasProgressHandlers = goog.require('org.gwtproject.event.dom.client.HasProgressHandlers$impl');

/**
 * @interface
 * @extends {HasEndedHandlers}
 * @extends {HasProgressHandlers}
 * @extends {HasCanPlayThroughHandlers}
 * @extends {HasLoadedMetadataHandlers}
 */
class HasAllMediaHandlers {
 /**
  * @public
  */
 static $clinit() {
  HasAllMediaHandlers.$clinit = () =>{};
  HasAllMediaHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasEndedHandlers.$markImplementor(classConstructor);
  HasProgressHandlers.$markImplementor(classConstructor);
  HasCanPlayThroughHandlers.$markImplementor(classConstructor);
  HasLoadedMetadataHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasAllMediaHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllMediaHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllMediaHandlers, 'org.gwtproject.event.dom.client.HasAllMediaHandlers');

HasAllMediaHandlers.$markImplementor(/** @type {Function} */ (HasAllMediaHandlers));

exports = HasAllMediaHandlers; 
//# sourceMappingURL=HasAllMediaHandlers.js.map