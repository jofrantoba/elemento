goog.module('org.gwtproject.user.cellview.client.CellList.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let CellList = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList$impl');

/**
 * @template T
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellList<T>} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellList_1;
 }
 /**
  * @template T
  * @param {CellList<T>} $outer_this
  * @return {!$1<T>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellList($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellList_1__org_gwtproject_user_cellview_client_CellList($outer_this);
  return $instance;
 }
 /**
  * @param {CellList<T>} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellList_1__org_gwtproject_user_cellview_client_CellList($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellList_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellList_1.m_setFocus__boolean(true);
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellList$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellList$1.js.map