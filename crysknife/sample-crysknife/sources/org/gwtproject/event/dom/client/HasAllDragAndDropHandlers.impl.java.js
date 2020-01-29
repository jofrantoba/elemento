goog.module('org.gwtproject.event.dom.client.HasAllDragAndDropHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDragEndHandlers = goog.require('org.gwtproject.event.dom.client.HasDragEndHandlers$impl');
const HasDragEnterHandlers = goog.require('org.gwtproject.event.dom.client.HasDragEnterHandlers$impl');
const HasDragHandlers = goog.require('org.gwtproject.event.dom.client.HasDragHandlers$impl');
const HasDragLeaveHandlers = goog.require('org.gwtproject.event.dom.client.HasDragLeaveHandlers$impl');
const HasDragOverHandlers = goog.require('org.gwtproject.event.dom.client.HasDragOverHandlers$impl');
const HasDragStartHandlers = goog.require('org.gwtproject.event.dom.client.HasDragStartHandlers$impl');
const HasDropHandlers = goog.require('org.gwtproject.event.dom.client.HasDropHandlers$impl');

/**
 * @interface
 * @extends {HasDragEndHandlers}
 * @extends {HasDragEnterHandlers}
 * @extends {HasDragLeaveHandlers}
 * @extends {HasDragHandlers}
 * @extends {HasDragOverHandlers}
 * @extends {HasDragStartHandlers}
 * @extends {HasDropHandlers}
 */
class HasAllDragAndDropHandlers {
 /**
  * @public
  */
 static $clinit() {
  HasAllDragAndDropHandlers.$clinit = () =>{};
  HasAllDragAndDropHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasDragEndHandlers.$markImplementor(classConstructor);
  HasDragEnterHandlers.$markImplementor(classConstructor);
  HasDragLeaveHandlers.$markImplementor(classConstructor);
  HasDragHandlers.$markImplementor(classConstructor);
  HasDragOverHandlers.$markImplementor(classConstructor);
  HasDragStartHandlers.$markImplementor(classConstructor);
  HasDropHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasAllDragAndDropHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllDragAndDropHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllDragAndDropHandlers, 'org.gwtproject.event.dom.client.HasAllDragAndDropHandlers');

HasAllDragAndDropHandlers.$markImplementor(/** @type {Function} */ (HasAllDragAndDropHandlers));

exports = HasAllDragAndDropHandlers; 
//# sourceMappingURL=HasAllDragAndDropHandlers.js.map