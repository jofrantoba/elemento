goog.module('org.gwtproject.event.dom.client.LoadedMetadataHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let LoadedMetadataEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class LoadedMetadataHandler {
 /**
  * @abstract
  * @param {LoadedMetadataEvent} event
  * @public
  */
 m_onLoadedMetadata__org_gwtproject_event_dom_client_LoadedMetadataEvent(event) {}
 /**
  * @param {?function(LoadedMetadataEvent):void} fn
  * @return {LoadedMetadataHandler}
  * @public
  */
 static $adapt(fn) {
  LoadedMetadataHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  LoadedMetadataHandler.$clinit = () =>{};
  LoadedMetadataHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  EventHandler.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_LoadedMetadataHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_LoadedMetadataHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.LoadedMetadataHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(LoadedMetadataHandler, 'org.gwtproject.event.dom.client.LoadedMetadataHandler');

LoadedMetadataHandler.$markImplementor(/** @type {Function} */ (LoadedMetadataHandler));

exports = LoadedMetadataHandler; 
//# sourceMappingURL=LoadedMetadataHandler.js.map