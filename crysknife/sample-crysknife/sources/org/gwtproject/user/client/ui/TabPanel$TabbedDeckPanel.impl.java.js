goog.module('org.gwtproject.user.client.ui.TabPanel.TabbedDeckPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DeckPanel = goog.require('org.gwtproject.user.client.ui.DeckPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let UnmodifiableTabBar = goog.forwardDeclare('org.gwtproject.user.client.ui.TabPanel.UnmodifiableTabBar$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class TabbedDeckPanel extends DeckPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {UnmodifiableTabBar} */
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_TabbedDeckPanel_;
 }
 /**
  * @param {UnmodifiableTabBar} tabBar
  * @return {!TabbedDeckPanel}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_TabPanel_UnmodifiableTabBar(tabBar) {
  TabbedDeckPanel.$clinit();
  let $instance = new TabbedDeckPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_TabPanel_TabbedDeckPanel__org_gwtproject_user_client_ui_TabPanel_UnmodifiableTabBar(tabBar);
  return $instance;
 }
 /**
  * @param {UnmodifiableTabBar} tabBar
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_TabPanel_TabbedDeckPanel__org_gwtproject_user_client_ui_TabPanel_UnmodifiableTabBar(tabBar) {
  this.$ctor__org_gwtproject_user_client_ui_DeckPanel__();
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_TabbedDeckPanel_ = tabBar;
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Use TabPanel.add() to alter the DeckPanel"));
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Use TabPanel.clear() to alter the DeckPanel"));
 }
 /**
  * @override
  * @param {Widget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Use TabPanel.insert() to alter the DeckPanel"));
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  let idx = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(w);
  if (idx != -1) {
   this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_TabbedDeckPanel_.m_removeTabProtected__int(idx);
   return super.m_remove__org_gwtproject_user_client_ui_Widget(w);
  }
  return false;
 }
 /**
  * @param {Widget} w
  * @param {?string} tabText
  * @param {boolean} asHTML
  * @param {number} beforeIndex
  * @public
  */
 m_insertProtected__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(w, tabText, asHTML, beforeIndex) {
  let idx = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(w);
  if (idx != -1) {
   this.m_remove__org_gwtproject_user_client_ui_Widget(w);
   if (idx < beforeIndex) {
    beforeIndex--;
   }
  }
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_TabbedDeckPanel_.m_insertTabProtected__java_lang_String__boolean__int(tabText, asHTML, beforeIndex);
  super.m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex);
 }
 /**
  * @param {Widget} w
  * @param {Widget} tabWidget
  * @param {number} beforeIndex
  * @public
  */
 m_insertProtected__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(w, tabWidget, beforeIndex) {
  let idx = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(w);
  if (idx != -1) {
   this.m_remove__org_gwtproject_user_client_ui_Widget(w);
   if (idx < beforeIndex) {
    beforeIndex--;
   }
  }
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_TabbedDeckPanel_.m_insertTabProtected__org_gwtproject_user_client_ui_Widget__int(tabWidget, beforeIndex);
  super.m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Widget>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @public
  */
 static $clinit() {
  TabbedDeckPanel.$clinit = () =>{};
  TabbedDeckPanel.$loadModules();
  DeckPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TabbedDeckPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(TabbedDeckPanel, 'org.gwtproject.user.client.ui.TabPanel$TabbedDeckPanel');

exports = TabbedDeckPanel; 
//# sourceMappingURL=TabPanel$TabbedDeckPanel.js.map