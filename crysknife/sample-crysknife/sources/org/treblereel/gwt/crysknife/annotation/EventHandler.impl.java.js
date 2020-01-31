goog.module('org.treblereel.gwt.crysknife.annotation.EventHandler$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class EventHandler {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  EventHandler.$clinit = () =>{};
  EventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_gwt_crysknife_annotation_EventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_annotation_EventHandler;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EventHandler, 'org.treblereel.gwt.crysknife.annotation.EventHandler');

EventHandler.$markImplementor(/** @type {Function} */ (EventHandler));

exports = EventHandler; 
//# sourceMappingURL=EventHandler.js.map