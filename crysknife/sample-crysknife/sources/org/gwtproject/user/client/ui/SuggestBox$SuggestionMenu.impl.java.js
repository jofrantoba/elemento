goog.module('org.gwtproject.user.client.ui.SuggestBox.SuggestionMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuBar = goog.require('org.gwtproject.user.client.ui.MenuBar$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let MenuItem = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SuggestionMenu extends MenuBar {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SuggestionMenu} */
 static $create__boolean(/** boolean */ vertical) {
  SuggestionMenu.$clinit();
  let $instance = new SuggestionMenu();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox_SuggestionMenu__boolean(vertical);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox_SuggestionMenu__boolean(/** boolean */ vertical) {
  this.$ctor__org_gwtproject_user_client_ui_MenuBar__boolean(vertical);
  this.m_setStyleName__java_lang_String("");
  this.m_setFocusOnHoverEnabled__boolean(false);
 }
 /** @return {number} */
 m_getNumItems__() {
  return this.m_getItems__().size();
 }
 /** @return {number} */
 m_getSelectedItemIndex__() {
  let selectedItem = this.m_getSelectedItem__();
  if (!$Equality.$same(selectedItem, null)) {
   return this.m_getItems__().indexOf(selectedItem);
  }
  return -1;
 }
 
 m_selectItem__int(/** number */ index) {
  let items = this.m_getItems__();
  if (index > -1 && index < items.size()) {
   this.m_itemOver__org_gwtproject_user_client_ui_MenuItem__boolean_$pp_org_gwtproject_user_client_ui(/**@type {MenuItem}*/ ($Casts.$to(items.getAtIndex(index), MenuItem)), false);
  }
 }
 
 static $clinit() {
  SuggestionMenu.$clinit = () =>{};
  SuggestionMenu.$loadModules();
  MenuBar.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SuggestionMenu;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  MenuItem = goog.module.get('org.gwtproject.user.client.ui.MenuItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SuggestionMenu, 'org.gwtproject.user.client.ui.SuggestBox$SuggestionMenu');

exports = SuggestionMenu; 
//# sourceMappingURL=SuggestBox$SuggestionMenu.js.map