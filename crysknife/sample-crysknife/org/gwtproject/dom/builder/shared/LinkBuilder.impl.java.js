goog.module('org.gwtproject.dom.builder.shared.LinkBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<LinkBuilder>}
 */
class LinkBuilder {
 /**
  * @abstract
  * @return {LinkBuilder}
  * @public
  */
 m_disabled__() {}
 /**
  * @abstract
  * @param {?string} href
  * @return {LinkBuilder}
  * @public
  */
 m_href__java_lang_String(href) {}
 /**
  * @abstract
  * @param {?string} hreflang
  * @return {LinkBuilder}
  * @public
  */
 m_hreflang__java_lang_String(hreflang) {}
 /**
  * @abstract
  * @param {?string} media
  * @return {LinkBuilder}
  * @public
  */
 m_media__java_lang_String(media) {}
 /**
  * @abstract
  * @param {?string} rel
  * @return {LinkBuilder}
  * @public
  */
 m_rel__java_lang_String(rel) {}
 /**
  * @abstract
  * @param {?string} target
  * @return {LinkBuilder}
  * @public
  */
 m_target__java_lang_String(target) {}
 /**
  * @abstract
  * @param {?string} type
  * @return {LinkBuilder}
  * @public
  */
 m_type__java_lang_String(type) {}
 /**
  * @public
  */
 static $clinit() {
  LinkBuilder.$clinit = () =>{};
  LinkBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_LinkBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_LinkBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LinkBuilder, 'org.gwtproject.dom.builder.shared.LinkBuilder');

LinkBuilder.$markImplementor(/** @type {Function} */ (LinkBuilder));

exports = LinkBuilder; 
//# sourceMappingURL=LinkBuilder.js.map