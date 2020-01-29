goog.module('org.gwtproject.user.client.ui.DialogBox.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResizeHandler = goog.require('org.gwtproject.event.logical.shared.ResizeHandler$impl');

let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');
let DialogBox = goog.forwardDeclare('org.gwtproject.user.client.ui.DialogBox$impl');

/**
 * @implements {ResizeHandler}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DialogBox} */
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_1;
 }
 /**
  * @param {DialogBox} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DialogBox($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_DialogBox_1__org_gwtproject_user_client_ui_DialogBox($outer_this);
  return $instance;
 }
 /**
  * @param {DialogBox} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DialogBox_1__org_gwtproject_user_client_ui_DialogBox($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ResizeEvent} event
  * @public
  */
 m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_1.f_windowWidth__org_gwtproject_user_client_ui_DialogBox_ = event.m_getWidth__();
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
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.DialogBox$1');

ResizeHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=DialogBox$1.js.map