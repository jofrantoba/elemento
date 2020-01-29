goog.module('org.gwtproject.user.client.ui.PopupPanel.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueChangeHandler = goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');

let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');

/**
 * @implements {ValueChangeHandler<?string>}
  */
class $4 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {PopupPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_4;
 }
 /**
  * @param {PopupPanel} $outer_this
  * @return {!$4}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_PopupPanel($outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel_4__org_gwtproject_user_client_ui_PopupPanel($outer_this);
  return $instance;
 }
 /**
  * @param {PopupPanel} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PopupPanel_4__org_gwtproject_user_client_ui_PopupPanel($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ValueChangeEvent<?string>} event
  * @public
  */
 m_onValueChange__org_gwtproject_event_logical_shared_ValueChangeEvent(event) {
  if (this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_4.f_autoHideOnHistoryEvents__org_gwtproject_user_client_ui_PopupPanel_) {
   this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_4.m_hide__();
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $4;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.user.client.ui.PopupPanel$4');

ValueChangeHandler.$markImplementor($4);

exports = $4; 
//# sourceMappingURL=PopupPanel$4.js.map