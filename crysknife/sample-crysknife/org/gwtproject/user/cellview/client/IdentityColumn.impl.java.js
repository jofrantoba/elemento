goog.module('org.gwtproject.user.cellview.client.IdentityColumn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Column = goog.require('org.gwtproject.user.cellview.client.Column$impl');

let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');

/**
 * @template T
 * @extends {Column<T, T>}
  */
class IdentityColumn extends Column {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template T
  * @param {Cell<T>} cell
  * @return {!IdentityColumn<T>}
  * @public
  */
 static $create__org_gwtproject_cell_client_Cell(cell) {
  IdentityColumn.$clinit();
  let $instance = new IdentityColumn();
  $instance.$ctor__org_gwtproject_user_cellview_client_IdentityColumn__org_gwtproject_cell_client_Cell(cell);
  return $instance;
 }
 /**
  * @param {Cell<T>} cell
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_IdentityColumn__org_gwtproject_cell_client_Cell(cell) {
  this.$ctor__org_gwtproject_user_cellview_client_Column__org_gwtproject_cell_client_Cell(cell);
 }
 /**
  * @override
  * @param {T} object
  * @return {T}
  * @public
  */
 m_getValue__java_lang_Object(object) {
  return object;
 }
 /**
  * @public
  */
 static $clinit() {
  IdentityColumn.$clinit = () =>{};
  IdentityColumn.$loadModules();
  Column.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof IdentityColumn;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(IdentityColumn, 'org.gwtproject.user.cellview.client.IdentityColumn');

exports = IdentityColumn; 
//# sourceMappingURL=IdentityColumn.js.map