goog.module('org.gwtproject.user.client.ui.DecoratedTabPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TabPanel = goog.require('org.gwtproject.user.client.ui.TabPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DecoratedTabBar = goog.forwardDeclare('org.gwtproject.user.client.ui.DecoratedTabBar$impl');
let DecoratorPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DecoratorPanel$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

class DecoratedTabPanel extends TabPanel {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DecoratedTabPanel}
  * @public
  */
 static $create__() {
  DecoratedTabPanel.$clinit();
  let $instance = new DecoratedTabPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedTabPanel__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DecoratedTabPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_TabPanel__();
  this.m_setStylePrimaryName__java_lang_String(DecoratedTabPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratedTabPanel_);
  this.m_getTabBar__().m_setStylePrimaryName__java_lang_String(DecoratedTabBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_DecoratedTabBar);
 }
 /**
  * @override
  * @return {SimplePanel}
  * @public
  */
 m_createTabTextWrapper__() {
  return DecoratorPanel.$create__arrayOf_java_lang_String__int(DecoratedTabBar.f_TAB_ROW_STYLES__org_gwtproject_user_client_ui_DecoratedTabBar, 1);
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
  DecoratedTabPanel.$clinit = () =>{};
  DecoratedTabPanel.$loadModules();
  TabPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DecoratedTabPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  DecoratedTabBar = goog.module.get('org.gwtproject.user.client.ui.DecoratedTabBar$impl');
  DecoratorPanel = goog.module.get('org.gwtproject.user.client.ui.DecoratorPanel$impl');
 }
 
}
$Util.$setClassMetadata(DecoratedTabPanel, 'org.gwtproject.user.client.ui.DecoratedTabPanel');

/** @public {?string} @const */
DecoratedTabPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratedTabPanel_ = "gwt-DecoratedTabPanel";

exports = DecoratedTabPanel; 
//# sourceMappingURL=DecoratedTabPanel.js.map