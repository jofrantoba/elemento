goog.module('org.gwtproject.view.client.DefaultSelectionEventManager.EventTranslator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let SelectAction = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');

/**
 * @interface
 * @template T
 */
class EventTranslator {
 /** @abstract @return {boolean} */
 m_clearCurrentSelection__org_gwtproject_view_client_CellPreviewEvent(/** CellPreviewEvent<T> */ event) {}
 /** @abstract @return {SelectAction} */
 m_translateSelectionEvent__org_gwtproject_view_client_CellPreviewEvent(/** CellPreviewEvent<T> */ event) {}
 
 static $clinit() {
  EventTranslator.$clinit = () =>{};
  EventTranslator.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EventTranslator, 'org.gwtproject.view.client.DefaultSelectionEventManager$EventTranslator');

EventTranslator.$markImplementor(/** @type {Function} */ (EventTranslator));

exports = EventTranslator; 
//# sourceMappingURL=DefaultSelectionEventManager$EventTranslator.js.map