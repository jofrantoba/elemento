goog.module('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableRowBuilder>}
 */
class TableRowBuilder {
 /**
  * @abstract
  * @param {?string} align
  * @return {TableRowBuilder}
  * @public
  */
 m_align__java_lang_String(align) {}
 /**
  * @abstract
  * @param {?string} ch
  * @return {TableRowBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {}
 /**
  * @abstract
  * @param {?string} chOff
  * @return {TableRowBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {}
 /**
  * @abstract
  * @param {?string} vAlign
  * @return {TableRowBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {}
 /**
  * @public
  */
 static $clinit() {
  TableRowBuilder.$clinit = () =>{};
  TableRowBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_TableRowBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableRowBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableRowBuilder, 'org.gwtproject.dom.builder.shared.TableRowBuilder');

TableRowBuilder.$markImplementor(/** @type {Function} */ (TableRowBuilder));

/** @public {?string} @const */
TableRowBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableRowBuilder = "Table row elements do not support setting inner html or text. Use startTD/startTH() instead to append a table cell to the section.";

exports = TableRowBuilder; 
//# sourceMappingURL=TableRowBuilder.js.map