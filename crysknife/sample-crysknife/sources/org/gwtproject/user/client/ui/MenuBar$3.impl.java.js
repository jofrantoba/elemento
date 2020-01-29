goog.module('org.gwtproject.user.client.ui.MenuBar.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PositionCallback = goog.require('org.gwtproject.user.client.ui.PopupPanel.PositionCallback$impl');

let MenuBar = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar$impl');
let MenuItem = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuItem$impl');

/**
 * @implements {PositionCallback}
  */
class $3 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {MenuBar} */
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_3;
  /** @public {MenuItem} */
  this.$c_item;
 }
 /**
  * @param {MenuBar} $outer_this
  * @param {MenuItem} $c_item
  * @return {!$3}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_user_client_ui_MenuItem($outer_this, $c_item) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar_3__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_user_client_ui_MenuItem($outer_this, $c_item);
  return $instance;
 }
 /**
  * @param {MenuBar} $outer_this
  * @param {MenuItem} $c_item
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuBar_3__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_user_client_ui_MenuItem($outer_this, $c_item) {
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_3 = $outer_this;
  this.$c_item = $c_item;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {number} offsetWidth
  * @param {number} offsetHeight
  * @public
  */
 m_setPosition__int__int(offsetWidth, offsetHeight) {
  if (this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_3.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_3.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_positionNextTo__org_gwtproject_user_client_ui_MenuItem(this.$c_item);
  } else {
   this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_3.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_positionBelow__org_gwtproject_user_client_ui_MenuItem(this.$c_item);
  }
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
$Util.$setClassMetadata($3, 'org.gwtproject.user.client.ui.MenuBar$3');

PositionCallback.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=MenuBar$3.js.map