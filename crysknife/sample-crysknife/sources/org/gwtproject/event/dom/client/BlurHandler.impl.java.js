goog.module('org.gwtproject.event.dom.client.BlurHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let BlurEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class BlurHandler {
 /**
  * @abstract
  * @param {BlurEvent} event
  * @public
  */
 m_onBlur__org_gwtproject_event_dom_client_BlurEvent(event) {}
 /**
  * @param {?function(BlurEvent):void} fn
  * @return {BlurHandler}
  * @public
  */
 static $adapt(fn) {
  BlurHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  BlurHandler.$clinit = () =>{};
  BlurHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_BlurHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_BlurHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.BlurHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(BlurHandler, 'org.gwtproject.event.dom.client.BlurHandler');

BlurHandler.$markImplementor(/** @type {Function} */ (BlurHandler));

exports = BlurHandler; 
//# sourceMappingURL=BlurHandler.js.map