goog.module('org.gwtproject.user.client.ui.MenuItemSeparator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const UIObject = goog.require('org.gwtproject.user.client.ui.UIObject$impl');

let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let MenuBar = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar$impl');

class MenuItemSeparator extends UIObject {
 /** @protected */
 constructor() {
  super();
  /**@type {MenuBar}*/
  this.f_parentMenu__org_gwtproject_user_client_ui_MenuItemSeparator_;
 }
 /** @return {!MenuItemSeparator} */
 static $create__() {
  MenuItemSeparator.$clinit();
  let $instance = new MenuItemSeparator();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItemSeparator__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_MenuItemSeparator__() {
  this.$ctor__org_gwtproject_user_client_ui_UIObject__();
  this.m_setElement__org_gwtproject_dom_client_Element(DOM.m_createTD__());
  this.m_setStyleName__java_lang_String(MenuItemSeparator.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_MenuItemSeparator_);
  let div = DOM.m_createDiv__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getElement__(), div);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(div, "menuSeparatorInner");
 }
 /** @return {MenuBar} */
 m_getParentMenu__() {
  return this.f_parentMenu__org_gwtproject_user_client_ui_MenuItemSeparator_;
 }
 
 m_setParentMenu__org_gwtproject_user_client_ui_MenuBar_$pp_org_gwtproject_user_client_ui(/** MenuBar */ parentMenu) {
  this.f_parentMenu__org_gwtproject_user_client_ui_MenuItemSeparator_ = parentMenu;
 }
 
 static $clinit() {
  MenuItemSeparator.$clinit = () =>{};
  MenuItemSeparator.$loadModules();
  UIObject.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuItemSeparator;
 }
 
 static $loadModules() {
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
 }
 
}
$Util.$setClassMetadata(MenuItemSeparator, 'org.gwtproject.user.client.ui.MenuItemSeparator');

/**@const {?string}*/
MenuItemSeparator.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_MenuItemSeparator_ = "gwt-MenuItemSeparator";

exports = MenuItemSeparator; 
//# sourceMappingURL=MenuItemSeparator.js.map