goog.module('org.gwtproject.cell.client.TextButtonCell.Appearance$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Appearance = goog.require('org.gwtproject.cell.client.ButtonCellBase.Appearance$impl');

/**
 * @interface
 * @extends {Appearance<?string>}
 */
class TextButtonCell_Appearance {
 /**
  * @public
  */
 static $clinit() {
  TextButtonCell_Appearance.$clinit = () =>{};
  TextButtonCell_Appearance.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Appearance.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_TextButtonCell_Appearance = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_TextButtonCell_Appearance;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TextButtonCell_Appearance, 'org.gwtproject.cell.client.TextButtonCell$Appearance');

TextButtonCell_Appearance.$markImplementor(/** @type {Function} */ (TextButtonCell_Appearance));

exports = TextButtonCell_Appearance; 
//# sourceMappingURL=TextButtonCell$Appearance.js.map