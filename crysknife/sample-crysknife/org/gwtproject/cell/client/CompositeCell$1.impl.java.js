goog.module('org.gwtproject.cell.client.CompositeCell.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueUpdater = goog.require('org.gwtproject.cell.client.ValueUpdater$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let CompositeCell = goog.forwardDeclare('org.gwtproject.cell.client.CompositeCell$impl');
let FieldUpdater = goog.forwardDeclare('org.gwtproject.cell.client.FieldUpdater$impl');

/**
 * @template X, C
 * @implements {ValueUpdater<X>}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CompositeCell<C>}*/
  this.f_$outer_this__org_gwtproject_cell_client_CompositeCell_1;
  /**@type {FieldUpdater<C, X>}*/
  this.$c_fieldUpdater;
  /**@type {Context}*/
  this.$c_context;
  /**@type {C}*/
  this.$c_object;
  /**@type {ValueUpdater<C>}*/
  this.$c_valueUpdater;
 }
 /** @template X, C @return {!$1<X, C>} */
 static $create__org_gwtproject_cell_client_CompositeCell__org_gwtproject_cell_client_FieldUpdater__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(/** CompositeCell<C> */ $outer_this, /** FieldUpdater<C, X> */ $c_fieldUpdater, /** Context */ $c_context, /** C */ $c_object, /** ValueUpdater<C> */ $c_valueUpdater) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_cell_client_CompositeCell_1__org_gwtproject_cell_client_CompositeCell__org_gwtproject_cell_client_FieldUpdater__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_cell_client_ValueUpdater($outer_this, $c_fieldUpdater, $c_context, $c_object, $c_valueUpdater);
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_CompositeCell_1__org_gwtproject_cell_client_CompositeCell__org_gwtproject_cell_client_FieldUpdater__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(/** CompositeCell<C> */ $outer_this, /** FieldUpdater<C, X> */ $c_fieldUpdater, /** Context */ $c_context, /** C */ $c_object, /** ValueUpdater<C> */ $c_valueUpdater) {
  this.f_$outer_this__org_gwtproject_cell_client_CompositeCell_1 = $outer_this;
  this.$c_fieldUpdater = $c_fieldUpdater;
  this.$c_context = $c_context;
  this.$c_object = $c_object;
  this.$c_valueUpdater = $c_valueUpdater;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_update__java_lang_Object(/** X */ value) {
  this.$c_fieldUpdater.m_update__int__java_lang_Object__java_lang_Object(this.$c_context.m_getIndex__(), this.$c_object, value);
  if (!$Equality.$same(this.$c_valueUpdater, null)) {
   this.$c_valueUpdater.m_update__java_lang_Object(this.$c_object);
  }
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.cell.client.CompositeCell$1');

ValueUpdater.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CompositeCell$1.js.map