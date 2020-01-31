goog.module('org.treblereel.gwt.crysknife.annotation.Templated$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Templated {
 /** @abstract @return {?string} */
 m_value__() {}
 /** @abstract @return {?string} */
 m_stylesheet__() {}
 
 static $clinit() {
  Templated.$clinit = () =>{};
  Templated.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_gwt_crysknife_annotation_Templated = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_annotation_Templated;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Templated, 'org.treblereel.gwt.crysknife.annotation.Templated');

Templated.$markImplementor(/** @type {Function} */ (Templated));

exports = Templated; 
//# sourceMappingURL=Templated.js.map