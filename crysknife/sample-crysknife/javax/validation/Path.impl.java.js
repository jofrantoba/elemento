goog.module('javax.validation.Path$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.validation.Path.$LambdaAdaptor$impl');
let Node = goog.forwardDeclare('javax.validation.Path.Node$impl');

/**
 * @interface
 * @extends {Iterable<Node>}
 */
class Path {
 /**
  * @param {?function():Iterator<Node>} fn
  * @return {Path}
  * @public
  */
 static $adapt(fn) {
  Path.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Path.$clinit = () =>{};
  Path.$loadModules();
  Iterable.$clinit();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Iterable.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_validation_Path = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_validation_Path;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.validation.Path.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Path, 'javax.validation.Path');

Path.$markImplementor(/** @type {Function} */ (Path));

exports = Path; 
//# sourceMappingURL=Path.js.map