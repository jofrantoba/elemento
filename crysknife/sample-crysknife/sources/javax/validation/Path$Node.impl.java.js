goog.module('javax.validation.Path.Node$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');

/**
 * @interface
 */
class Node {
 /** @abstract @return {?string} */
 m_getName__() {}
 /** @abstract @return {boolean} */
 m_isInIterable__() {}
 /** @abstract @return {Integer} */
 m_getIndex__() {}
 /** @abstract @return {*} */
 m_getKey__() {}
 
 static $clinit() {
  Node.$clinit = () =>{};
  Node.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__javax_validation_Path_Node = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_validation_Path_Node;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Node, 'javax.validation.Path$Node');

Node.$markImplementor(/** @type {Function} */ (Node));

exports = Node; 
//# sourceMappingURL=Path$Node.js.map