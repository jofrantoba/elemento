goog.module('org.treblereel.gwt.crysknife.annotation.ForEvent$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ForEvent {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  ForEvent.$clinit = () =>{};
  ForEvent.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_gwt_crysknife_annotation_ForEvent = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_annotation_ForEvent;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ForEvent, 'org.treblereel.gwt.crysknife.annotation.ForEvent');

ForEvent.$markImplementor(/** @type {Function} */ (ForEvent));

exports = ForEvent; 
//# sourceMappingURL=ForEvent.js.map