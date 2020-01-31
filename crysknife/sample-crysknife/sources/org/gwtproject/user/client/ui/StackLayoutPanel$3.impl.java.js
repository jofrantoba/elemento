goog.module('org.gwtproject.user.client.ui.StackLayoutPanel.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseOutHandler = goog.require('org.gwtproject.event.dom.client.MouseOutHandler$impl');

let MouseOutEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutEvent$impl');
let StackLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel$impl');
let Header = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.Header$impl');

/**
 * @implements {MouseOutHandler}
  */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {StackLayoutPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_3;
  /**@type {Header}*/
  this.$c_header;
 }
 /** @return {!$3} */
 static $create__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_Header(/** StackLayoutPanel */ $outer_this, /** Header */ $c_header) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_user_client_ui_StackLayoutPanel_3__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_Header($outer_this, $c_header);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_StackLayoutPanel_3__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_Header(/** StackLayoutPanel */ $outer_this, /** Header */ $c_header) {
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_3 = $outer_this;
  this.$c_header = $c_header;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onMouseOut__org_gwtproject_event_dom_client_MouseOutEvent(/** MouseOutEvent */ event) {
  this.$c_header.m_removeStyleName__java_lang_String(StackLayoutPanel.f_HEADER_STYLE_HOVERING__org_gwtproject_user_client_ui_StackLayoutPanel_);
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  StackLayoutPanel = goog.module.get('org.gwtproject.user.client.ui.StackLayoutPanel$impl');
 }
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.user.client.ui.StackLayoutPanel$3');

MouseOutHandler.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=StackLayoutPanel$3.js.map