goog.module('org.gwtproject.text.shared.Renderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Appendable = goog.forwardDeclare('java.lang.Appendable$impl');

/**
 * @interface
 * @template T
 */
class Renderer {
 /** @abstract @return {?string} */
 m_render__java_lang_Object(/** T */ var1) {}
 /** @abstract */
 m_render__java_lang_Object__java_lang_Appendable(/** T */ var1, /** Appendable */ var2) {}
 
 static $clinit() {
  Renderer.$clinit = () =>{};
  Renderer.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_text_shared_Renderer = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_text_shared_Renderer;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Renderer, 'org.gwtproject.text.shared.Renderer');

Renderer.$markImplementor(/** @type {Function} */ (Renderer));

exports = Renderer; 
//# sourceMappingURL=Renderer.js.map