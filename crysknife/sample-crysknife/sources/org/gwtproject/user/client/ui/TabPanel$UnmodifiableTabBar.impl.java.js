goog.module('org.gwtproject.user.client.ui.TabPanel.UnmodifiableTabBar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TabBar = goog.require('org.gwtproject.user.client.ui.TabBar$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let TabPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.TabPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class UnmodifiableTabBar extends TabBar {
 /** @protected */
 constructor() {
  super();
  /**@type {TabPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_TabPanel_UnmodifiableTabBar;
 }
 /** @return {!UnmodifiableTabBar} */
 static $create__org_gwtproject_user_client_ui_TabPanel(/** TabPanel */ $outer_this) {
  UnmodifiableTabBar.$clinit();
  let $instance = new UnmodifiableTabBar();
  $instance.$ctor__org_gwtproject_user_client_ui_TabPanel_UnmodifiableTabBar__org_gwtproject_user_client_ui_TabPanel($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_TabPanel_UnmodifiableTabBar__org_gwtproject_user_client_ui_TabPanel(/** TabPanel */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_TabPanel_UnmodifiableTabBar = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_TabBar__();
 }
 /** @override */
 m_insertTab__java_lang_String__boolean__int(/** ?string */ text, /** boolean */ asHTML, /** number */ beforeIndex) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Use TabPanel.insert() to alter the TabBar"));
 }
 /** @override */
 m_insertTab__org_gwtproject_user_client_ui_Widget__int(/** Widget */ widget, /** number */ beforeIndex) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Use TabPanel.insert() to alter the TabBar"));
 }
 
 m_insertTabProtected__java_lang_String__boolean__int(/** ?string */ text, /** boolean */ asHTML, /** number */ beforeIndex) {
  super.m_insertTab__java_lang_String__boolean__int(text, asHTML, beforeIndex);
 }
 
 m_insertTabProtected__org_gwtproject_user_client_ui_Widget__int(/** Widget */ widget, /** number */ beforeIndex) {
  super.m_insertTab__org_gwtproject_user_client_ui_Widget__int(widget, beforeIndex);
 }
 /** @override */
 m_removeTab__int(/** number */ index) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Use TabPanel.remove() to alter the TabBar"));
 }
 
 m_removeTabProtected__int(/** number */ index) {
  super.m_removeTab__int(index);
 }
 /** @override @return {SimplePanel} */
 m_createTabTextWrapper__() {
  return this.f_$outer_this__org_gwtproject_user_client_ui_TabPanel_UnmodifiableTabBar.m_createTabTextWrapper__();
 }
 
 static $clinit() {
  UnmodifiableTabBar.$clinit = () =>{};
  UnmodifiableTabBar.$loadModules();
  TabBar.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableTabBar;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(UnmodifiableTabBar, 'org.gwtproject.user.client.ui.TabPanel$UnmodifiableTabBar');

exports = UnmodifiableTabBar; 
//# sourceMappingURL=TabPanel$UnmodifiableTabBar.js.map