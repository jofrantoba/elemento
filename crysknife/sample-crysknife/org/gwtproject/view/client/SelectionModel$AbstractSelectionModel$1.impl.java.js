goog.module('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let AbstractSelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel$impl');

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
  /** @public {AbstractSelectionModel<T>} */
  this.f_$outer_this__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_1;
 }
 /**
  * @template T
  * @param {AbstractSelectionModel<T>} $outer_this
  * @return {!$1<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_1__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel($outer_this);
  return $instance;
 }
 /**
  * @param {AbstractSelectionModel<T>} $outer_this
  * @public
  */
 $ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_1__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel($outer_this) {
  this.f_$outer_this__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  this.f_$outer_this__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_1.m_setEventScheduled__boolean(false);
  if (this.f_$outer_this__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_1.m_isEventCancelled__()) {
   this.f_$outer_this__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_1.m_setEventCancelled__boolean(false);
   return;
  }
  this.f_$outer_this__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_1.m_fireSelectionChangeEvent__();
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
$Util.$setClassMetadata($1, 'org.gwtproject.view.client.SelectionModel$AbstractSelectionModel$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=SelectionModel$AbstractSelectionModel$1.js.map