goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueUpdater = goog.require('org.gwtproject.cell.client.ValueUpdater$impl');

let FieldUpdater = goog.forwardDeclare('org.gwtproject.cell.client.FieldUpdater$impl');
let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');

/**
 * @template C, T
 * @implements {ValueUpdater<C>}
  */
class $3 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractCellTable<T>} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_3;
  /** @public {FieldUpdater<T, C>} */
  this.$c_fieldUpdater;
  /** @public {number} */
  this.$c_index = 0;
  /** @public {T} */
  this.$c_rowValue;
 }
 /**
  * @template C, T
  * @param {AbstractCellTable<T>} $outer_this
  * @param {FieldUpdater<T, C>} $c_fieldUpdater
  * @param {number} $c_index
  * @param {T} $c_rowValue
  * @return {!$3<C, T>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_cell_client_FieldUpdater__int__java_lang_Object($outer_this, $c_fieldUpdater, $c_index, $c_rowValue) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractCellTable_3__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_cell_client_FieldUpdater__int__java_lang_Object($outer_this, $c_fieldUpdater, $c_index, $c_rowValue);
  return $instance;
 }
 /**
  * @param {AbstractCellTable<T>} $outer_this
  * @param {FieldUpdater<T, C>} $c_fieldUpdater
  * @param {number} $c_index
  * @param {T} $c_rowValue
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTable_3__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_cell_client_FieldUpdater__int__java_lang_Object($outer_this, $c_fieldUpdater, $c_index, $c_rowValue) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_3 = $outer_this;
  this.$c_fieldUpdater = $c_fieldUpdater;
  this.$c_index = $c_index;
  this.$c_rowValue = $c_rowValue;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {C} value
  * @public
  */
 m_update__java_lang_Object(value) {
  this.$c_fieldUpdater.m_update__int__java_lang_Object__java_lang_Object(this.$c_index, this.$c_rowValue, value);
 }
 /**
  * @public
  */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $3;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.user.cellview.client.AbstractCellTable$3');

ValueUpdater.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=AbstractCellTable$3.js.map