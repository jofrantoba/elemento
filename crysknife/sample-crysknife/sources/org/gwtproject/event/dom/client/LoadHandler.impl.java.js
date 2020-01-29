goog.module('org.gwtproject.event.dom.client.LoadHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let LoadEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class LoadHandler {
 /**
  * @abstract
  * @param {LoadEvent} event
  * @public
  */
 m_onLoad__org_gwtproject_event_dom_client_LoadEvent(event) {}
 /**
  * @param {?function(LoadEvent):void} fn
  * @return {LoadHandler}
  * @public
  */
 static $adapt(fn) {
  LoadHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  LoadHandler.$clinit = () =>{};
  LoadHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_LoadHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_LoadHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.LoadHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(LoadHandler, 'org.gwtproject.event.dom.client.LoadHandler');

LoadHandler.$markImplementor(/** @type {Function} */ (LoadHandler));

exports = LoadHandler; 
//# sourceMappingURL=LoadHandler.js.map