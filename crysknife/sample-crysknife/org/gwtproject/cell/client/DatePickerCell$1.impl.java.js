goog.module('org.gwtproject.cell.client.DatePickerCell.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopupPanel = goog.require('org.gwtproject.user.client.ui.PopupPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DatePickerCell = goog.forwardDeclare('org.gwtproject.cell.client.DatePickerCell$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

class $1 extends PopupPanel {
 /** @protected */
 constructor() {
  super();
  /**@type {DatePickerCell}*/
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_cell_client_DatePickerCell__boolean__boolean(/** DatePickerCell */ $outer_this, /** boolean */ $_0, /** boolean */ $_1) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_cell_client_DatePickerCell_1__org_gwtproject_cell_client_DatePickerCell__boolean__boolean($outer_this, $_0, $_1);
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_DatePickerCell_1__org_gwtproject_cell_client_DatePickerCell__boolean__boolean(/** DatePickerCell */ $outer_this, /** boolean */ $_0, /** boolean */ $_1) {
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_1 = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_PopupPanel__boolean__boolean($_0, $_1);
 }
 /** @override */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(/** NativePreviewEvent */ event) {
  if (Event.f_ONKEYUP__org_gwtproject_user_client_Event == event.m_getTypeInt__()) {
   if ($Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__()) == DatePickerCell.f_ESCAPE__org_gwtproject_cell_client_DatePickerCell_) {
    this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_1.f_panel__org_gwtproject_cell_client_DatePickerCell_.m_hide__();
   }
  }
 }
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
  $1.$clinit = () =>{};
  $1.$loadModules();
  PopupPanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  DatePickerCell = goog.module.get('org.gwtproject.cell.client.DatePickerCell$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.cell.client.DatePickerCell$1');

exports = $1; 
//# sourceMappingURL=DatePickerCell$1.js.map