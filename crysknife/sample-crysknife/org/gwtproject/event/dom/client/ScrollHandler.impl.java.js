goog.module('org.gwtproject.event.dom.client.ScrollHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ScrollEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ScrollHandler {
 /**
  * @abstract
  * @param {ScrollEvent} event
  * @public
  */
 m_onScroll__org_gwtproject_event_dom_client_ScrollEvent(event) {}
 /**
  * @param {?function(ScrollEvent):void} fn
  * @return {ScrollHandler}
  * @public
  */
 static $adapt(fn) {
  ScrollHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ScrollHandler.$clinit = () =>{};
  ScrollHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_ScrollHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ScrollHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ScrollHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ScrollHandler, 'org.gwtproject.event.dom.client.ScrollHandler');

ScrollHandler.$markImplementor(/** @type {Function} */ (ScrollHandler));

exports = ScrollHandler; 
//# sourceMappingURL=ScrollHandler.js.map