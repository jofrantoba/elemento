goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');

/**
 * @template C, T
 * @implements {ScheduledCommand}
  */
class $4 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractCellTable<T>} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_4;
 }
 /**
  * @template C, T
  * @param {AbstractCellTable<T>} $outer_this
  * @return {!$4<C, T>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_AbstractCellTable($outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractCellTable_4__org_gwtproject_user_cellview_client_AbstractCellTable($outer_this);
  return $instance;
 }
 /**
  * @param {AbstractCellTable<T>} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTable_4__org_gwtproject_user_cellview_client_AbstractCellTable($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_4.m_setFocus__boolean(true);
 }
 /**
  * @public
  */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $4;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.user.cellview.client.AbstractCellTable$4');

ScheduledCommand.$markImplementor($4);

exports = $4; 
//# sourceMappingURL=AbstractCellTable$4.js.map