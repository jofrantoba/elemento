goog.module('org.gwtproject.dom.builder.shared.FrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<FrameBuilder>}
 */
class FrameBuilder {
 /**
  * @abstract
  * @param {number} frameBorder
  * @return {FrameBuilder}
  * @public
  */
 m_frameBorder__int(frameBorder) {}
 /**
  * @abstract
  * @param {SafeUri} longDesc
  * @return {FrameBuilder}
  * @public
  */
 m_longDesc__org_gwtproject_safehtml_shared_SafeUri(longDesc) {}
 /**
  * @abstract
  * @param {?string} longDesc
  * @return {FrameBuilder}
  * @public
  */
 m_longDesc__java_lang_String(longDesc) {}
 /**
  * @abstract
  * @param {number} marginHeight
  * @return {FrameBuilder}
  * @public
  */
 m_marginHeight__int(marginHeight) {}
 /**
  * @abstract
  * @param {number} marginWidth
  * @return {FrameBuilder}
  * @public
  */
 m_marginWidth__int(marginWidth) {}
 /**
  * @abstract
  * @param {?string} name
  * @return {FrameBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @abstract
  * @return {FrameBuilder}
  * @public
  */
 m_noResize__() {}
 /**
  * @abstract
  * @param {?string} scrolling
  * @return {FrameBuilder}
  * @public
  */
 m_scrolling__java_lang_String(scrolling) {}
 /**
  * @abstract
  * @param {SafeUri} src
  * @return {FrameBuilder}
  * @public
  */
 m_src__org_gwtproject_safehtml_shared_SafeUri(src) {}
 /**
  * @abstract
  * @param {?string} src
  * @return {FrameBuilder}
  * @public
  */
 m_src__java_lang_String(src) {}
 /**
  * @public
  */
 static $clinit() {
  FrameBuilder.$clinit = () =>{};
  FrameBuilder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ElementBuilderBase.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_FrameBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_FrameBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FrameBuilder, 'org.gwtproject.dom.builder.shared.FrameBuilder');

FrameBuilder.$markImplementor(/** @type {Function} */ (FrameBuilder));

exports = FrameBuilder; 
//# sourceMappingURL=FrameBuilder.js.map