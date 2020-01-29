goog.module('org.gwtproject.user.client.ui.CheckBox.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let CheckBox = goog.forwardDeclare('org.gwtproject.user.client.ui.CheckBox$impl');

/**
 * @implements {ClickHandler}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CheckBox} */
  this.f_$outer_this__org_gwtproject_user_client_ui_CheckBox_1;
 }
 /**
  * @param {CheckBox} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_CheckBox($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox_1__org_gwtproject_user_client_ui_CheckBox($outer_this);
  return $instance;
 }
 /**
  * @param {CheckBox} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox_1__org_gwtproject_user_client_ui_CheckBox($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CheckBox_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ClickEvent} event
  * @public
  */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(event) {
  ValueChangeEvent.m_fire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object(this.f_$outer_this__org_gwtproject_user_client_ui_CheckBox_1, this.f_$outer_this__org_gwtproject_user_client_ui_CheckBox_1.m_getValue__());
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.CheckBox$1');

ClickHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CheckBox$1.js.map