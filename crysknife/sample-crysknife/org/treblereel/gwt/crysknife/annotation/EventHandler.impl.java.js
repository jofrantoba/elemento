goog.module('org.treblereel.gwt.crysknife.annotation.EventHandler$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class EventHandler {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  EventHandler.$clinit = () =>{};
  EventHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_treblereel_gwt_crysknife_annotation_EventHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_annotation_EventHandler;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EventHandler, 'org.treblereel.gwt.crysknife.annotation.EventHandler');

EventHandler.$markImplementor(/** @type {Function} */ (EventHandler));

exports = EventHandler; 
//# sourceMappingURL=EventHandler.js.map