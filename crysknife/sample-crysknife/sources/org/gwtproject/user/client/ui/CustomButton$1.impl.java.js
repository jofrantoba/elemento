goog.module('org.gwtproject.user.client.ui.CustomButton.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClickEvent = goog.require('org.gwtproject.event.dom.client.ClickEvent$impl');

let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let CustomButton = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomButton$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends ClickEvent {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CustomButton} */
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_1;
 }
 /**
  * @param {CustomButton} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_CustomButton($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomButton_1__org_gwtproject_user_client_ui_CustomButton($outer_this);
  return $instance;
 }
 /**
  * @param {CustomButton} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton_1__org_gwtproject_user_client_ui_CustomButton($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_1 = $outer_this;
  this.$ctor__org_gwtproject_event_dom_client_ClickEvent__();
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  super.m_dispatch__org_gwtproject_event_dom_client_ClickHandler(/**@type {ClickHandler} */ ($Casts.$to(arg0, ClickHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  ClickEvent.$clinit();
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
  ClickHandler = goog.module.get('org.gwtproject.event.dom.client.ClickHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.CustomButton$1');

exports = $1; 
//# sourceMappingURL=CustomButton$1.js.map