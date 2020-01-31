goog.module('org.gwtproject.user.datepicker.client.DefaultCalendarView.CellGrid$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CellGridImpl = goog.require('org.gwtproject.user.datepicker.client.CellGridImpl$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let CalendarModel = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarModel$impl');
let Cell = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CellGridImpl.Cell$impl');
let DefaultCalendarView = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultCalendarView$impl');

/**
 * @extends {CellGridImpl<Date>}
  */
class CellGrid extends CellGridImpl {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultCalendarView}*/
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid;
 }
 /** @return {!CellGrid} */
 static $create__org_gwtproject_user_datepicker_client_DefaultCalendarView(/** DefaultCalendarView */ $outer_this) {
  CellGrid.$clinit();
  let $instance = new CellGrid();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid__org_gwtproject_user_datepicker_client_DefaultCalendarView($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid__org_gwtproject_user_datepicker_client_DefaultCalendarView(/** DefaultCalendarView */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid = $outer_this;
  this.$ctor__org_gwtproject_user_datepicker_client_CellGridImpl__();
  this.m_resize__int__int(CalendarModel.f_WEEKS_IN_MONTH__org_gwtproject_user_datepicker_client_CalendarModel + 1, CalendarModel.f_DAYS_IN_WEEK__org_gwtproject_user_datepicker_client_CalendarModel);
 }
 /** @override */
 m_onSelected__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(/** Cell<Date> */ lastSelected, /** Cell<Date> */ cell) {}
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Widget>} */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 
 static $clinit() {
  CellGrid.$clinit = () =>{};
  CellGrid.$loadModules();
  CellGridImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellGrid;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  CalendarModel = goog.module.get('org.gwtproject.user.datepicker.client.CalendarModel$impl');
 }
 
}
$Util.$setClassMetadata(CellGrid, 'org.gwtproject.user.datepicker.client.DefaultCalendarView$CellGrid');

exports = CellGrid; 
//# sourceMappingURL=DefaultCalendarView$CellGrid.js.map