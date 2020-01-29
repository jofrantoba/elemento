goog.module('org.gwtproject.dom.builder.shared.IFrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<IFrameBuilder>}
 */
class IFrameBuilder {
 /**
  * @abstract
  * @param {number} frameBorder
  * @return {IFrameBuilder}
  * @public
  */
 m_frameBorder__int(frameBorder) {}
 /**
  * @abstract
  * @override
  * @param {SafeHtml} html
  * @return {IFrameBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {}
 /**
  * @abstract
  * @param {number} marginHeight
  * @return {IFrameBuilder}
  * @public
  */
 m_marginHeight__int(marginHeight) {}
 /**
  * @abstract
  * @param {number} marginWidth
  * @return {IFrameBuilder}
  * @public
  */
 m_marginWidth__int(marginWidth) {}
 /**
  * @abstract
  * @param {?string} name
  * @return {IFrameBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @abstract
  * @return {IFrameBuilder}
  * @public
  */
 m_noResize__() {}
 /**
  * @abstract
  * @param {?string} scrolling
  * @return {IFrameBuilder}
  * @public
  */
 m_scrolling__java_lang_String(scrolling) {}
 /**
  * @abstract
  * @param {SafeUri} src
  * @return {IFrameBuilder}
  * @public
  */
 m_src__org_gwtproject_safehtml_shared_SafeUri(src) {}
 /**
  * @abstract
  * @param {?string} src
  * @return {IFrameBuilder}
  * @public
  */
 m_src__java_lang_String(src) {}
 /**
  * @abstract
  * @override
  * @param {?string} html
  * @return {IFrameBuilder}
  * @public
  */
 m_text__java_lang_String(html) {}
 /**
  * @public
  */
 static $clinit() {
  IFrameBuilder.$clinit = () =>{};
  IFrameBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_IFrameBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_IFrameBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(IFrameBuilder, 'org.gwtproject.dom.builder.shared.IFrameBuilder');

IFrameBuilder.$markImplementor(/** @type {Function} */ (IFrameBuilder));

exports = IFrameBuilder; 
//# sourceMappingURL=IFrameBuilder.js.map