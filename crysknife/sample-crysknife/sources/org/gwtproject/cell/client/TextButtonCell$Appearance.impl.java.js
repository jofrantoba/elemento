goog.module('org.gwtproject.cell.client.TextButtonCell.Appearance$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Appearance = goog.require('org.gwtproject.cell.client.ButtonCellBase.Appearance$impl');

/**
 * @interface
 * @extends {Appearance<?string>}
 */
class TextButtonCell_Appearance {
 
 static $clinit() {
  TextButtonCell_Appearance.$clinit = () =>{};
  TextButtonCell_Appearance.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Appearance.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_cell_client_TextButtonCell_Appearance = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_TextButtonCell_Appearance;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TextButtonCell_Appearance, 'org.gwtproject.cell.client.TextButtonCell$Appearance');

TextButtonCell_Appearance.$markImplementor(/** @type {Function} */ (TextButtonCell_Appearance));

exports = TextButtonCell_Appearance; 
//# sourceMappingURL=TextButtonCell$Appearance.js.map