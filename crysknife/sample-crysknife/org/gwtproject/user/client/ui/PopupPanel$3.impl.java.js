goog.module('org.gwtproject.user.client.ui.PopupPanel.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativePreviewHandler = goog.require('org.gwtproject.user.client.Event.NativePreviewHandler$impl');

let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');

/**
 * @implements {NativePreviewHandler}
  */
class $3 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {PopupPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_3;
 }
 /**
  * @param {PopupPanel} $outer_this
  * @return {!$3}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_PopupPanel($outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel_3__org_gwtproject_user_client_ui_PopupPanel($outer_this);
  return $instance;
 }
 /**
  * @param {PopupPanel} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PopupPanel_3__org_gwtproject_user_client_ui_PopupPanel($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {NativePreviewEvent} event
  * @public
  */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_3.m_previewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent_$p_org_gwtproject_user_client_ui_PopupPanel(event);
 }
 /**
  * @public
  */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $3;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.user.client.ui.PopupPanel$3');

NativePreviewHandler.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=PopupPanel$3.js.map