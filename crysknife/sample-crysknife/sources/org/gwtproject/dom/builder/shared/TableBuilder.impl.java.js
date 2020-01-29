goog.module('org.gwtproject.dom.builder.shared.TableBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableBuilder>}
 */
class TableBuilder {
 /**
  * @abstract
  * @param {number} border
  * @return {TableBuilder}
  * @public
  */
 m_border__int(border) {}
 /**
  * @abstract
  * @param {number} cellPadding
  * @return {TableBuilder}
  * @public
  */
 m_cellPadding__int(cellPadding) {}
 /**
  * @abstract
  * @param {number} cellSpacing
  * @return {TableBuilder}
  * @public
  */
 m_cellSpacing__int(cellSpacing) {}
 /**
  * @abstract
  * @param {?string} frame
  * @return {TableBuilder}
  * @public
  */
 m_frame__java_lang_String(frame) {}
 /**
  * @abstract
  * @param {?string} rules
  * @return {TableBuilder}
  * @public
  */
 m_rules__java_lang_String(rules) {}
 /**
  * @abstract
  * @param {?string} width
  * @return {TableBuilder}
  * @public
  */
 m_width__java_lang_String(width) {}
 /**
  * @public
  */
 static $clinit() {
  TableBuilder.$clinit = () =>{};
  TableBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_TableBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableBuilder, 'org.gwtproject.dom.builder.shared.TableBuilder');

TableBuilder.$markImplementor(/** @type {Function} */ (TableBuilder));

/** @public {?string} @const */
TableBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableBuilder = "Table elements do not support setting inner html. Use startTBody/startTFoot/startTHead() instead to append a table section to the table.";

exports = TableBuilder; 
//# sourceMappingURL=TableBuilder.js.map