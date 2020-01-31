goog.module('org.gwtproject.user.client.ui.SimpleCheckBox.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let SimpleCheckBox = goog.forwardDeclare('org.gwtproject.user.client.ui.SimpleCheckBox$impl');

/**
 * @implements {ClickHandler}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {SimpleCheckBox}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_SimpleCheckBox_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_SimpleCheckBox(/** SimpleCheckBox */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_SimpleCheckBox_1__org_gwtproject_user_client_ui_SimpleCheckBox($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_SimpleCheckBox_1__org_gwtproject_user_client_ui_SimpleCheckBox(/** SimpleCheckBox */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SimpleCheckBox_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(/** ClickEvent */ event) {
  ValueChangeEvent.m_fire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object(this.f_$outer_this__org_gwtproject_user_client_ui_SimpleCheckBox_1, this.f_$outer_this__org_gwtproject_user_client_ui_SimpleCheckBox_1.m_getValue__());
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.SimpleCheckBox$1');

ClickHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=SimpleCheckBox$1.js.map