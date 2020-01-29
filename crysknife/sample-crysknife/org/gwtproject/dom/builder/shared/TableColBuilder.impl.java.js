goog.module('org.gwtproject.dom.builder.shared.TableColBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableColBuilder>}
 */
class TableColBuilder {
 /**
  * @abstract
  * @param {?string} align
  * @return {TableColBuilder}
  * @public
  */
 m_align__java_lang_String(align) {}
 /**
  * @abstract
  * @param {?string} ch
  * @return {TableColBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {}
 /**
  * @abstract
  * @param {?string} chOff
  * @return {TableColBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {}
 /**
  * @abstract
  * @param {number} span
  * @return {TableColBuilder}
  * @public
  */
 m_span__int(span) {}
 /**
  * @abstract
  * @param {?string} vAlign
  * @return {TableColBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {}
 /**
  * @abstract
  * @param {?string} width
  * @return {TableColBuilder}
  * @public
  */
 m_width__java_lang_String(width) {}
 /**
  * @public
  */
 static $clinit() {
  TableColBuilder.$clinit = () =>{};
  TableColBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_TableColBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableColBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableColBuilder, 'org.gwtproject.dom.builder.shared.TableColBuilder');

TableColBuilder.$markImplementor(/** @type {Function} */ (TableColBuilder));

exports = TableColBuilder; 
//# sourceMappingURL=TableColBuilder.js.map