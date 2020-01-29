goog.module('javax.enterprise.inject.Instance$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const Provider = goog.require('javax.inject.Provider$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Annotation = goog.forwardDeclare('java.lang.annotation.Annotation$impl');

/**
 * @interface
 * @template T
 * @extends {Iterable<T>}
 * @extends {Provider<T>}
 */
class Instance {
 /**
  * @abstract
  * @param {Array<Annotation>} var1
  * @return {Instance<T>}
  * @public
  */
 m_select__arrayOf_java_lang_annotation_Annotation(var1) {}
 /**
  * @abstract
  * @template U
  * @param {Class<U>} var1
  * @param {Array<Annotation>} var2
  * @return {Instance<U>}
  * @public
  */
 m_select__java_lang_Class__arrayOf_java_lang_annotation_Annotation(var1, var2) {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isUnsatisfied__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isAmbiguous__() {}
 /**
  * @abstract
  * @param {T} var1
  * @public
  */
 m_destroy__java_lang_Object(var1) {}
 /**
  * @public
  */
 static $clinit() {
  Instance.$clinit = () =>{};
  Instance.$loadModules();
  Iterable.$clinit();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Iterable.$markImplementor(classConstructor);
  Provider.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_enterprise_inject_Instance = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_enterprise_inject_Instance;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Instance, 'javax.enterprise.inject.Instance');

Instance.$markImplementor(/** @type {Function} */ (Instance));

exports = Instance; 
//# sourceMappingURL=Instance.js.map