goog.module('javax.enterprise.context.NormalScope$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class NormalScope {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_passivating__() {}
 /**
  * @public
  */
 static $clinit() {
  NormalScope.$clinit = () =>{};
  NormalScope.$loadModules();
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
  classConstructor.prototype.$implements__javax_enterprise_context_NormalScope = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_enterprise_context_NormalScope;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NormalScope, 'javax.enterprise.context.NormalScope');

NormalScope.$markImplementor(/** @type {Function} */ (NormalScope));

exports = NormalScope; 
//# sourceMappingURL=NormalScope.js.map