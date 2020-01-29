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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CompositeCell<C>} */
  this.f_$outer_this__org_gwtproject_cell_client_CompositeCell_1;
  /** @public {FieldUpdater<C, X>} */
  this.$c_fieldUpdater;
  /** @public {Context} */
  this.$c_context;
  /** @public {C} */
  this.$c_object;
  /** @public {ValueUpdater<C>} */
  this.$c_valueUpdater;
 }
 /**
  * @template X, C
  * @param {CompositeCell<C>} $outer_this
  * @param {FieldUpdater<C, X>} $c_fieldUpdater
  * @param {Context} $c_context
  * @param {C} $c_object
  * @param {ValueUpdater<C>} $c_valueUpdater
  * @return {!$1<X, C>}
  * @public
  */
 static $create__org_gwtproject_cell_client_CompositeCell__org_gwtproject_cell_client_FieldUpdater__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_cell_client_ValueUpdater($outer_this, $c_fieldUpdater, $c_context, $c_object, $c_valueUpdater) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_cell_client_CompositeCell_1__org_gwtproject_cell_client_CompositeCell__org_gwtproject_cell_client_FieldUpdater__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_cell_client_ValueUpdater($outer_this, $c_fieldUpdater, $c_context, $c_object, $c_valueUpdater);
  return $instance;
 }
 /**
  * @param {CompositeCell<C>} $outer_this
  * @param {FieldUpdater<C, X>} $c_fieldUpdater
  * @param {Context} $c_context
  * @param {C} $c_object
  * @param {ValueUpdater<C>} $c_valueUpdater
  * @public
  */
 $ctor__org_gwtproject_cell_client_CompositeCell_1__org_gwtproject_cell_client_CompositeCell__org_gwtproject_cell_client_FieldUpdater__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_cell_client_ValueUpdater($outer_this, $c_fieldUpdater, $c_context, $c_object, $c_valueUpdater) {
  this.f_$outer_this__org_gwtproject_cell_client_CompositeCell_1 = $outer_this;
  this.$c_fieldUpdater = $c_fieldUpdater;
  this.$c_context = $c_context;
  this.$c_object = $c_object;
  this.$c_valueUpdater = $c_valueUpdater;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {X} value
  * @public
  */
 m_update__java_lang_Object(value) {
  this.$c_fieldUpdater.m_update__int__java_lang_Object__java_lang_Object(this.$c_context.m_getIndex__(), this.$c_object, value);
  if (!$Equality.$same(this.$c_valueUpdater, null)) {
   this.$c_valueUpdater.m_update__java_lang_Object(this.$c_object);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.cell.client.CompositeCell$1');

ValueUpdater.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CompositeCell$1.js.map