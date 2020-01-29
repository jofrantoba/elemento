goog.module('org.gwtproject.user.cellview.client.TextColumn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Column = goog.require('org.gwtproject.user.cellview.client.Column$impl');

let TextCell = goog.forwardDeclare('org.gwtproject.cell.client.TextCell$impl');

/**
 * @abstract
 * @template T
 * @extends {Column<T, ?string>}
  */
class TextColumn extends Column {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_TextColumn__() {
  this.$ctor__org_gwtproject_user_cellview_client_Column__org_gwtproject_cell_client_Cell(TextCell.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  TextColumn.$clinit = () =>{};
  TextColumn.$loadModules();
  Column.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TextColumn;
 }
 /**
  * @public
  */
 static $loadModules() {
  TextCell = goog.module.get('org.gwtproject.cell.client.TextCell$impl');
 }
 
}
$Util.$setClassMetadata(TextColumn, 'org.gwtproject.user.cellview.client.TextColumn');

exports = TextColumn; 
//# sourceMappingURL=TextColumn.js.map