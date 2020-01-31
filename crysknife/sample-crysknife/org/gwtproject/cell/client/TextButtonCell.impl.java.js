goog.module('org.gwtproject.cell.client.TextButtonCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ButtonCellBase = goog.require('org.gwtproject.cell.client.ButtonCellBase$impl');

let Appearance = goog.forwardDeclare('org.gwtproject.cell.client.TextButtonCell.Appearance$impl');
let DefaultAppearance = goog.forwardDeclare('org.gwtproject.cell.client.TextButtonCell.DefaultAppearance$impl');

/**
 * @extends {ButtonCellBase<?string>}
  */
class TextButtonCell extends ButtonCellBase {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TextButtonCell()'.
 /** @return {!TextButtonCell} */
 static $create__() {
  TextButtonCell.$clinit();
  let $instance = new TextButtonCell();
  $instance.$ctor__org_gwtproject_cell_client_TextButtonCell__();
  return $instance;
 }
 //Initialization from constructor 'TextButtonCell()'.
 
 $ctor__org_gwtproject_cell_client_TextButtonCell__() {
  this.$ctor__org_gwtproject_cell_client_TextButtonCell__org_gwtproject_cell_client_TextButtonCell_Appearance(DefaultAppearance.$create__());
 }
 //Factory method corresponding to constructor 'TextButtonCell(Appearance)'.
 /** @return {!TextButtonCell} */
 static $create__org_gwtproject_cell_client_TextButtonCell_Appearance(/** Appearance */ appearance) {
  TextButtonCell.$clinit();
  let $instance = new TextButtonCell();
  $instance.$ctor__org_gwtproject_cell_client_TextButtonCell__org_gwtproject_cell_client_TextButtonCell_Appearance(appearance);
  return $instance;
 }
 //Initialization from constructor 'TextButtonCell(Appearance)'.
 
 $ctor__org_gwtproject_cell_client_TextButtonCell__org_gwtproject_cell_client_TextButtonCell_Appearance(/** Appearance */ appearance) {
  this.$ctor__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_cell_client_ButtonCellBase_Appearance(appearance);
 }
 
 static $clinit() {
  TextButtonCell.$clinit = () =>{};
  TextButtonCell.$loadModules();
  ButtonCellBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextButtonCell;
 }
 
 static $loadModules() {
  DefaultAppearance = goog.module.get('org.gwtproject.cell.client.TextButtonCell.DefaultAppearance$impl');
 }
 
}
$Util.$setClassMetadata(TextButtonCell, 'org.gwtproject.cell.client.TextButtonCell');

exports = TextButtonCell; 
//# sourceMappingURL=TextButtonCell.js.map