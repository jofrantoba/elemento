goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');

/**
 * @template T
 * @implements {ScheduledCommand}
  */
class $2 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractCellTable<T>} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_2;
  /** @public {Object} */
  this.$c_focusable;
 }
 /**
  * @template T
  * @param {AbstractCellTable<T>} $outer_this
  * @param {Object} $c_focusable
  * @return {!$2<T>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_Element($outer_this, $c_focusable) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractCellTable_2__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_Element($outer_this, $c_focusable);
  return $instance;
 }
 /**
  * @param {AbstractCellTable<T>} $outer_this
  * @param {Object} $c_focusable
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTable_2__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_Element($outer_this, $c_focusable) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_2 = $outer_this;
  this.$c_focusable = $c_focusable;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  this.$c_focusable.focus();
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $2;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.cellview.client.AbstractCellTable$2');

ScheduledCommand.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=AbstractCellTable$2.js.map