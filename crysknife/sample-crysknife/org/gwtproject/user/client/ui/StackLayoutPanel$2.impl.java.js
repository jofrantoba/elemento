goog.module('org.gwtproject.user.client.ui.StackLayoutPanel.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let StackLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {ClickHandler}
  */
class $2 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {StackLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_2;
  /** @public {Widget} */
  this.$c_child;
 }
 /**
  * @param {StackLayoutPanel} $outer_this
  * @param {Widget} $c_child
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, $c_child) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_StackLayoutPanel_2__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, $c_child);
  return $instance;
 }
 /**
  * @param {StackLayoutPanel} $outer_this
  * @param {Widget} $c_child
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_StackLayoutPanel_2__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, $c_child) {
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_2 = $outer_this;
  this.$c_child = $c_child;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ClickEvent} event
  * @public
  */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_2.m_showWidget__org_gwtproject_user_client_ui_Widget(this.$c_child);
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
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.StackLayoutPanel$2');

ClickHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=StackLayoutPanel$2.js.map