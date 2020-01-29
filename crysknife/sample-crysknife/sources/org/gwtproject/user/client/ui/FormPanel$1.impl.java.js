goog.module('org.gwtproject.user.client.ui.FormPanel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let FormPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel$impl');
let SubmitCompleteEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteEvent$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {FormPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_FormPanel_1;
 }
 /**
  * @param {FormPanel} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_FormPanel($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_FormPanel_1__org_gwtproject_user_client_ui_FormPanel($outer_this);
  return $instance;
 }
 /**
  * @param {FormPanel} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormPanel_1__org_gwtproject_user_client_ui_FormPanel($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_FormPanel_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_FormPanel_1.m_fireEvent__org_gwtproject_event_shared_Event(SubmitCompleteEvent.$create__java_lang_String(FormPanel.f_impl__org_gwtproject_user_client_ui_FormPanel_.m_getContents__org_gwtproject_dom_client_Element(this.f_$outer_this__org_gwtproject_user_client_ui_FormPanel_1.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_)));
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
  FormPanel = goog.module.get('org.gwtproject.user.client.ui.FormPanel$impl');
  SubmitCompleteEvent = goog.module.get('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteEvent$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.FormPanel$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=FormPanel$1.js.map