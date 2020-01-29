goog.module('org.treblereel.gwt.crysknife.annotation.Templated$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Templated {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_value__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_stylesheet__() {}
 /**
  * @public
  */
 static $clinit() {
  Templated.$clinit = () =>{};
  Templated.$loadModules();
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
  classConstructor.prototype.$implements__org_treblereel_gwt_crysknife_annotation_Templated = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_annotation_Templated;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Templated, 'org.treblereel.gwt.crysknife.annotation.Templated');

Templated.$markImplementor(/** @type {Function} */ (Templated));

exports = Templated; 
//# sourceMappingURL=Templated.js.map