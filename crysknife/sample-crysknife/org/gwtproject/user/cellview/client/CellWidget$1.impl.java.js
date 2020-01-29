goog.module('org.gwtproject.user.cellview.client.CellWidget.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueUpdater = goog.require('org.gwtproject.cell.client.ValueUpdater$impl');

let CellWidget = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellWidget$impl');

/**
 * @template C
 * @implements {ValueUpdater<C>}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellWidget<C>} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellWidget_1;
 }
 /**
  * @template C
  * @param {CellWidget<C>} $outer_this
  * @return {!$1<C>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellWidget($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellWidget_1__org_gwtproject_user_cellview_client_CellWidget($outer_this);
  return $instance;
 }
 /**
  * @param {CellWidget<C>} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellWidget_1__org_gwtproject_user_cellview_client_CellWidget($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellWidget_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {C} value
  * @public
  */
 m_update__java_lang_Object(value) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellWidget_1.m_setValue__java_lang_Object__boolean__boolean(value, true, false);
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
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellWidget$1');

ValueUpdater.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellWidget$1.js.map