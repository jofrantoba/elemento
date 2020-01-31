goog.module('javax.annotation.Generated$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Generated {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 /** @abstract @return {?string} */
 m_date__() {}
 /** @abstract @return {?string} */
 m_comments__() {}
 
 static $clinit() {
  Generated.$clinit = () =>{};
  Generated.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_annotation_Generated = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_annotation_Generated;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Generated, 'javax.annotation.Generated');

Generated.$markImplementor(/** @type {Function} */ (Generated));

exports = Generated; 
//# sourceMappingURL=Generated.js.map