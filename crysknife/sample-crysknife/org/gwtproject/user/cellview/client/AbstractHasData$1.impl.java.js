goog.module('org.gwtproject.user.cellview.client.AbstractHasData.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let AbstractHasData = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData$impl');

/**
 * @template T
  */
class $1 extends Widget {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractHasData<T>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData_1;
  /**@type {Object}*/
  this.$c_elem;
 }
 /** @template T @return {!$1<T>} */
 static $create__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_dom_client_Element(/** AbstractHasData<T> */ $outer_this, /** Object */ $c_elem) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractHasData_1__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_dom_client_Element($outer_this, $c_elem);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData_1__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_dom_client_Element(/** AbstractHasData<T> */ $outer_this, /** Object */ $c_elem) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData_1 = $outer_this;
  this.$c_elem = $c_elem;
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractHasData_1();
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_AbstractHasData_1() {
  this.m_setElement__org_gwtproject_dom_client_Element(this.$c_elem);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  Widget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.AbstractHasData$1');

exports = $1; 
//# sourceMappingURL=AbstractHasData$1.js.map