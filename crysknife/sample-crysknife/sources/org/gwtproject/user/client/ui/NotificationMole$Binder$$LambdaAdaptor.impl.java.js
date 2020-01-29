goog.module('org.gwtproject.user.client.ui.NotificationMole.Binder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Binder = goog.require('org.gwtproject.user.client.ui.NotificationMole.Binder$impl');

let HTMLPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLPanel$impl');
let NotificationMole = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Binder}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(NotificationMole):HTMLPanel} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(NotificationMole):HTMLPanel} */
  this.f_$$fn__org_gwtproject_user_client_ui_NotificationMole_Binder_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_NotificationMole_Binder_$LambdaAdaptor__org_gwtproject_user_client_ui_NotificationMole_Binder_$JsFunction(fn);
 }
 /**
  * @param {?function(NotificationMole):HTMLPanel} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NotificationMole_Binder_$LambdaAdaptor__org_gwtproject_user_client_ui_NotificationMole_Binder_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_NotificationMole_Binder_$LambdaAdaptor = fn;
 }
 /**
  * @param {NotificationMole} arg0
  * @return {HTMLPanel}
  * @public
  */
 m_createAndBindUi__org_gwtproject_user_client_ui_NotificationMole(arg0) {
  let /** ?function(NotificationMole):HTMLPanel */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_NotificationMole_Binder_$LambdaAdaptor, $function(arg0));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {HTMLPanel}
  * @public
  */
 m_createAndBindUi__java_lang_Object(arg0) {
  return this.m_createAndBindUi__org_gwtproject_user_client_ui_NotificationMole(/**@type {NotificationMole} */ ($Casts.$to(arg0, NotificationMole)));
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {
  NotificationMole = goog.module.get('org.gwtproject.user.client.ui.NotificationMole$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.NotificationMole$Binder$$LambdaAdaptor');

Binder.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=NotificationMole$Binder$$LambdaAdaptor.js.map