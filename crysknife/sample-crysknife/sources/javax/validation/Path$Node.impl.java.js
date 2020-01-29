goog.module('javax.validation.Path.Node$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');

/**
 * @interface
 */
class Node {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getName__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isInIterable__() {}
 /**
  * @abstract
  * @return {Integer}
  * @public
  */
 m_getIndex__() {}
 /**
  * @abstract
  * @return {*}
  * @public
  */
 m_getKey__() {}
 /**
  * @public
  */
 static $clinit() {
  Node.$clinit = () =>{};
  Node.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_validation_Path_Node = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_validation_Path_Node;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Node, 'javax.validation.Path$Node');

Node.$markImplementor(/** @type {Function} */ (Node));

exports = Node; 
//# sourceMappingURL=Path$Node.js.map