goog.module('org.gwtproject.dom.builder.shared.TableCaptionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableCaptionBuilder>}
 */
class TableCaptionBuilder {
 /**
  * @public
  */
 static $clinit() {
  TableCaptionBuilder.$clinit = () =>{};
  TableCaptionBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_TableCaptionBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableCaptionBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableCaptionBuilder, 'org.gwtproject.dom.builder.shared.TableCaptionBuilder');

TableCaptionBuilder.$markImplementor(/** @type {Function} */ (TableCaptionBuilder));

exports = TableCaptionBuilder; 
//# sourceMappingURL=TableCaptionBuilder.js.map