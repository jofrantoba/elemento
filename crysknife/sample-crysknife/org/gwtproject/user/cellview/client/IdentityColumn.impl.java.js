goog.module('org.gwtproject.user.cellview.client.IdentityColumn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Column = goog.require('org.gwtproject.user.cellview.client.Column$impl');

let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');

/**
 * @template T
 * @extends {Column<T, T>}
  */
class IdentityColumn extends Column {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T @return {!IdentityColumn<T>} */
 static $create__org_gwtproject_cell_client_Cell(/** Cell<T> */ cell) {
  IdentityColumn.$clinit();
  let $instance = new IdentityColumn();
  $instance.$ctor__org_gwtproject_user_cellview_client_IdentityColumn__org_gwtproject_cell_client_Cell(cell);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_IdentityColumn__org_gwtproject_cell_client_Cell(/** Cell<T> */ cell) {
  this.$ctor__org_gwtproject_user_cellview_client_Column__org_gwtproject_cell_client_Cell(cell);
 }
 /** @override @return {T} */
 m_getValue__java_lang_Object(/** T */ object) {
  return object;
 }
 
 static $clinit() {
  IdentityColumn.$clinit = () =>{};
  IdentityColumn.$loadModules();
  Column.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IdentityColumn;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(IdentityColumn, 'org.gwtproject.user.cellview.client.IdentityColumn');

exports = IdentityColumn; 
//# sourceMappingURL=IdentityColumn.js.map