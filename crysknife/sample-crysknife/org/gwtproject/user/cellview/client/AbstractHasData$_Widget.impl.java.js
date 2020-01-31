goog.module('org.gwtproject.user.cellview.client.AbstractHasData._Widget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let AbstractHasData = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData$impl');

/**
 * @template T
  */
class __Widget extends Widget {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractHasData<T>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData__Widget;
 }
 /** @template T @return {!__Widget<T>} */
 static $create__org_gwtproject_user_cellview_client_AbstractHasData(/** AbstractHasData<T> */ $outer_this) {
  let $instance = new __Widget();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractHasData__Widget__org_gwtproject_user_cellview_client_AbstractHasData($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData__Widget__org_gwtproject_user_cellview_client_AbstractHasData(/** AbstractHasData<T> */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData__Widget = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
 }
 /** @override */
 m_setParent__org_gwtproject_user_client_ui_Widget(/** Widget */ parent) {
  super.m_setParent__org_gwtproject_user_client_ui_Widget(parent);
 }
 /** @override */
 m_onAttach__() {
  super.m_onAttach__();
 }
 /** @override */
 m_onDetach__() {
  super.m_onDetach__();
 }
 
 static $clinit() {
  __Widget.$clinit = () =>{};
  __Widget.$loadModules();
  Widget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof __Widget;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(__Widget, 'org.gwtproject.user.cellview.client.AbstractHasData$_Widget');

exports = __Widget; 
//# sourceMappingURL=AbstractHasData$_Widget.js.map