goog.module('org.gwtproject.user.client.ui.WidgetIterators$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let HasWidgets = goog.forwardDeclare('org.gwtproject.user.client.ui.HasWidgets$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.WidgetIterators.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class WidgetIterators extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {Array<Widget>} */
 static m_copyWidgetArray__arrayOf_org_gwtproject_user_client_ui_Widget(/** Array<Widget> */ widgets) {
  WidgetIterators.$clinit();
  let clone = /**@type {!Array<Widget>}*/ ($Arrays.$create([widgets.length], Widget));
  for (let i = 0; i < widgets.length; i++) {
   $Arrays.$set(clone, i, widgets[i]);
  }
  return clone;
 }
 /** @return {Iterator<Widget>} */
 static m_createWidgetIterator__org_gwtproject_user_client_ui_HasWidgets__arrayOf_org_gwtproject_user_client_ui_Widget(/** HasWidgets */ container, /** Array<Widget> */ contained) {
  WidgetIterators.$clinit();
  return $1.$create__arrayOf_org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasWidgets(contained, container);
 }
 /** @return {!WidgetIterators} */
 static $create__() {
  let $instance = new WidgetIterators();
  $instance.$ctor__org_gwtproject_user_client_ui_WidgetIterators__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_WidgetIterators__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  WidgetIterators.$clinit = () =>{};
  WidgetIterators.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WidgetIterators;
 }
 
 static $loadModules() {
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.WidgetIterators.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(WidgetIterators, 'org.gwtproject.user.client.ui.WidgetIterators');

exports = WidgetIterators; 
//# sourceMappingURL=WidgetIterators.js.map