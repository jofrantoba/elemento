goog.module('org.gwtproject.user.cellview.client.CellBasedWidgetImplStandardBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CellBasedWidgetImplStandard = goog.require('org.gwtproject.user.cellview.client.CellBasedWidgetImplStandard$impl');

let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

class CellBasedWidgetImplStandardBase extends CellBasedWidgetImplStandard {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!CellBasedWidgetImplStandardBase}
  * @public
  */
 static $create__() {
  CellBasedWidgetImplStandardBase.$clinit();
  let $instance = new CellBasedWidgetImplStandardBase();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandardBase__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandardBase__() {
  this.$ctor__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard__();
 }
 /**
  * @override
  * @param {ScheduledCommand} command
  * @public
  */
 m_resetFocus__org_gwtproject_core_client_Scheduler_ScheduledCommand(command) {
  Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand(command);
 }
 /**
  * @public
  */
 static $clinit() {
  CellBasedWidgetImplStandardBase.$clinit = () =>{};
  CellBasedWidgetImplStandardBase.$loadModules();
  CellBasedWidgetImplStandard.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellBasedWidgetImplStandardBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
 }
 
}
$Util.$setClassMetadata(CellBasedWidgetImplStandardBase, 'org.gwtproject.user.cellview.client.CellBasedWidgetImplStandardBase');

exports = CellBasedWidgetImplStandardBase; 
//# sourceMappingURL=CellBasedWidgetImplStandardBase.js.map