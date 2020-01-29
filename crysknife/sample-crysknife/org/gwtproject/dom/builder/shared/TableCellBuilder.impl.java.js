goog.module('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableCellBuilder>}
 */
class TableCellBuilder {
 /**
  * @abstract
  * @param {?string} align
  * @return {TableCellBuilder}
  * @public
  */
 m_align__java_lang_String(align) {}
 /**
  * @abstract
  * @param {?string} ch
  * @return {TableCellBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {}
 /**
  * @abstract
  * @param {?string} chOff
  * @return {TableCellBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {}
 /**
  * @abstract
  * @param {number} colSpan
  * @return {TableCellBuilder}
  * @public
  */
 m_colSpan__int(colSpan) {}
 /**
  * @abstract
  * @param {?string} headers
  * @return {TableCellBuilder}
  * @public
  */
 m_headers__java_lang_String(headers) {}
 /**
  * @abstract
  * @param {number} rowSpan
  * @return {TableCellBuilder}
  * @public
  */
 m_rowSpan__int(rowSpan) {}
 /**
  * @abstract
  * @param {?string} vAlign
  * @return {TableCellBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {}
 /**
  * @public
  */
 static $clinit() {
  TableCellBuilder.$clinit = () =>{};
  TableCellBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_TableCellBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableCellBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableCellBuilder, 'org.gwtproject.dom.builder.shared.TableCellBuilder');

TableCellBuilder.$markImplementor(/** @type {Function} */ (TableCellBuilder));

exports = TableCellBuilder; 
//# sourceMappingURL=TableCellBuilder.js.map