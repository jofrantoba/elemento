goog.module('javax.annotation.Generated$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Generated {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_value__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_date__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_comments__() {}
 /**
  * @public
  */
 static $clinit() {
  Generated.$clinit = () =>{};
  Generated.$loadModules();
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
  classConstructor.prototype.$implements__javax_annotation_Generated = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_annotation_Generated;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Generated, 'javax.annotation.Generated');

Generated.$markImplementor(/** @type {Function} */ (Generated));

exports = Generated; 
//# sourceMappingURL=Generated.js.map