goog.module('org.gwtproject.user.client.ui.DecoratedTabBar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TabBar = goog.require('org.gwtproject.user.client.ui.TabBar$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let DecoratorPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DecoratorPanel$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DecoratedTabBar extends TabBar {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DecoratedTabBar}
  * @public
  */
 static $create__() {
  DecoratedTabBar.$clinit();
  let $instance = new DecoratedTabBar();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedTabBar__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DecoratedTabBar__() {
  this.$ctor__org_gwtproject_user_client_ui_TabBar__();
  this.m_setStylePrimaryName__java_lang_String(DecoratedTabBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_DecoratedTabBar);
 }
 /**
  * @override
  * @return {SimplePanel}
  * @public
  */
 m_createTabTextWrapper__() {
  return DecoratorPanel.$create__arrayOf_java_lang_String__int(DecoratedTabBar.$f_TAB_ROW_STYLES__org_gwtproject_user_client_ui_DecoratedTabBar, 1);
 }
 /**
  * @return {Array<?string>}
  * @public
  */
 static get f_TAB_ROW_STYLES__org_gwtproject_user_client_ui_DecoratedTabBar() {
  return (DecoratedTabBar.$clinit(), DecoratedTabBar.$f_TAB_ROW_STYLES__org_gwtproject_user_client_ui_DecoratedTabBar);
 }
 /**
  * @param {Array<?string>} value
  * @public
  */
 static set f_TAB_ROW_STYLES__org_gwtproject_user_client_ui_DecoratedTabBar(value) {
  (DecoratedTabBar.$clinit(), DecoratedTabBar.$f_TAB_ROW_STYLES__org_gwtproject_user_client_ui_DecoratedTabBar = value);
 }
 /**
  * @public
  */
 static $clinit() {
  DecoratedTabBar.$clinit = () =>{};
  DecoratedTabBar.$loadModules();
  TabBar.$clinit();
  DecoratedTabBar.$f_TAB_ROW_STYLES__org_gwtproject_user_client_ui_DecoratedTabBar = /**@type {!Array<?string>} */ ($Arrays.$init(["tabTop", "tabMiddle"], j_l_String));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DecoratedTabBar;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  DecoratorPanel = goog.module.get('org.gwtproject.user.client.ui.DecoratorPanel$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DecoratedTabBar, 'org.gwtproject.user.client.ui.DecoratedTabBar');

/** @private {Array<?string>} */
DecoratedTabBar.$f_TAB_ROW_STYLES__org_gwtproject_user_client_ui_DecoratedTabBar;
/** @public {?string} @const */
DecoratedTabBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_DecoratedTabBar = "gwt-DecoratedTabBar";

exports = DecoratedTabBar; 
//# sourceMappingURL=DecoratedTabBar.js.map