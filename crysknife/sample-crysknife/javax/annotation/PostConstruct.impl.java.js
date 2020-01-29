goog.module('javax.annotation.PostConstruct$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.annotation.PostConstruct.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class PostConstruct {
 /**
  * @param {?function():Class<?>} fn
  * @return {PostConstruct}
  * @public
  */
 static $adapt(fn) {
  PostConstruct.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  PostConstruct.$clinit = () =>{};
  PostConstruct.$loadModules();
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
  classConstructor.prototype.$implements__javax_annotation_PostConstruct = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_annotation_PostConstruct;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.annotation.PostConstruct.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(PostConstruct, 'javax.annotation.PostConstruct');

PostConstruct.$markImplementor(/** @type {Function} */ (PostConstruct));

exports = PostConstruct; 
//# sourceMappingURL=PostConstruct.js.map