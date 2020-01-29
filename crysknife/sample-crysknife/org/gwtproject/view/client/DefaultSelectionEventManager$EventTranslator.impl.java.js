goog.module('org.gwtproject.view.client.DefaultSelectionEventManager.EventTranslator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let SelectAction = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');

/**
 * @interface
 * @template T
 */
class EventTranslator {
 /**
  * @abstract
  * @param {CellPreviewEvent<T>} event
  * @return {boolean}
  * @public
  */
 m_clearCurrentSelection__org_gwtproject_view_client_CellPreviewEvent(event) {}
 /**
  * @abstract
  * @param {CellPreviewEvent<T>} event
  * @return {SelectAction}
  * @public
  */
 m_translateSelectionEvent__org_gwtproject_view_client_CellPreviewEvent(event) {}
 /**
  * @public
  */
 static $clinit() {
  EventTranslator.$clinit = () =>{};
  EventTranslator.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EventTranslator, 'org.gwtproject.view.client.DefaultSelectionEventManager$EventTranslator');

EventTranslator.$markImplementor(/** @type {Function} */ (EventTranslator));

exports = EventTranslator; 
//# sourceMappingURL=DefaultSelectionEventManager$EventTranslator.js.map