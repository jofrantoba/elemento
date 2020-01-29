goog.module('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableSectionBuilder>}
 */
class TableSectionBuilder {
 /**
  * @abstract
  * @param {?string} align
  * @return {TableSectionBuilder}
  * @public
  */
 m_align__java_lang_String(align) {}
 /**
  * @abstract
  * @param {?string} ch
  * @return {TableSectionBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {}
 /**
  * @abstract
  * @param {?string} chOff
  * @return {TableSectionBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {}
 /**
  * @abstract
  * @param {?string} vAlign
  * @return {TableSectionBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {}
 /**
  * @public
  */
 static $clinit() {
  TableSectionBuilder.$clinit = () =>{};
  TableSectionBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_TableSectionBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableSectionBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableSectionBuilder, 'org.gwtproject.dom.builder.shared.TableSectionBuilder');

TableSectionBuilder.$markImplementor(/** @type {Function} */ (TableSectionBuilder));

/** @public {?string} @const */
TableSectionBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableSectionBuilder = "Table section elements do not support setting inner html or text. Use startTR() instead to append a table row to the section.";

exports = TableSectionBuilder; 
//# sourceMappingURL=TableSectionBuilder.js.map