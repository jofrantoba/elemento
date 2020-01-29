goog.module('org.gwtproject.event.dom.client.ContextMenuHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ContextMenuEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ContextMenuEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ContextMenuHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ContextMenuHandler {
 /**
  * @abstract
  * @param {ContextMenuEvent} event
  * @public
  */
 m_onContextMenu__org_gwtproject_event_dom_client_ContextMenuEvent(event) {}
 /**
  * @param {?function(ContextMenuEvent):void} fn
  * @return {ContextMenuHandler}
  * @public
  */
 static $adapt(fn) {
  ContextMenuHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ContextMenuHandler.$clinit = () =>{};
  ContextMenuHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_ContextMenuHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ContextMenuHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ContextMenuHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ContextMenuHandler, 'org.gwtproject.event.dom.client.ContextMenuHandler');

ContextMenuHandler.$markImplementor(/** @type {Function} */ (ContextMenuHandler));

exports = ContextMenuHandler; 
//# sourceMappingURL=ContextMenuHandler.js.map