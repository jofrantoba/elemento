goog.module('org.gwtproject.text.shared.Renderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Appendable = goog.forwardDeclare('java.lang.Appendable$impl');

/**
 * @interface
 * @template T
 */
class Renderer {
 /**
  * @abstract
  * @param {T} var1
  * @return {?string}
  * @public
  */
 m_render__java_lang_Object(var1) {}
 /**
  * @abstract
  * @param {T} var1
  * @param {Appendable} var2
  * @public
  */
 m_render__java_lang_Object__java_lang_Appendable(var1, var2) {}
 /**
  * @public
  */
 static $clinit() {
  Renderer.$clinit = () =>{};
  Renderer.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_text_shared_Renderer = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_text_shared_Renderer;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Renderer, 'org.gwtproject.text.shared.Renderer');

Renderer.$markImplementor(/** @type {Function} */ (Renderer));

exports = Renderer; 
//# sourceMappingURL=Renderer.js.map