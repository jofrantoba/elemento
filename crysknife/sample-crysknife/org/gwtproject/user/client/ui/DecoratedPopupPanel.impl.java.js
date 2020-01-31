goog.module('org.gwtproject.user.client.ui.DecoratedPopupPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopupPanel = goog.require('org.gwtproject.user.client.ui.PopupPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let DecoratorPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DecoratorPanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DecoratedPopupPanel extends PopupPanel {
 /** @protected */
 constructor() {
  super();
  /**@type {DecoratorPanel}*/
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_;
 }
 //Factory method corresponding to constructor 'DecoratedPopupPanel()'.
 /** @return {!DecoratedPopupPanel} */
 static $create__() {
  DecoratedPopupPanel.$clinit();
  let $instance = new DecoratedPopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__();
  return $instance;
 }
 //Initialization from constructor 'DecoratedPopupPanel()'.
 
 $ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean(false);
 }
 //Factory method corresponding to constructor 'DecoratedPopupPanel(boolean)'.
 /** @return {!DecoratedPopupPanel} */
 static $create__boolean(/** boolean */ autoHide) {
  DecoratedPopupPanel.$clinit();
  let $instance = new DecoratedPopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean(autoHide);
  return $instance;
 }
 //Initialization from constructor 'DecoratedPopupPanel(boolean)'.
 
 $ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean(/** boolean */ autoHide) {
  this.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean(autoHide, false);
 }
 //Factory method corresponding to constructor 'DecoratedPopupPanel(boolean, boolean)'.
 /** @return {!DecoratedPopupPanel} */
 static $create__boolean__boolean(/** boolean */ autoHide, /** boolean */ modal) {
  DecoratedPopupPanel.$clinit();
  let $instance = new DecoratedPopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean(autoHide, modal);
  return $instance;
 }
 //Initialization from constructor 'DecoratedPopupPanel(boolean, boolean)'.
 
 $ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean(/** boolean */ autoHide, /** boolean */ modal) {
  this.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean__java_lang_String(autoHide, modal, "popup");
 }
 //Factory method corresponding to constructor 'DecoratedPopupPanel(boolean, boolean, String)'.
 /** @return {!DecoratedPopupPanel} */
 static $create__boolean__boolean__java_lang_String(/** boolean */ autoHide, /** boolean */ modal, /** ?string */ prefix) {
  DecoratedPopupPanel.$clinit();
  let $instance = new DecoratedPopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean__java_lang_String(autoHide, modal, prefix);
  return $instance;
 }
 //Initialization from constructor 'DecoratedPopupPanel(boolean, boolean, String)'.
 
 $ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean__java_lang_String(/** boolean */ autoHide, /** boolean */ modal, /** ?string */ prefix) {
  this.$ctor__org_gwtproject_user_client_ui_PopupPanel__boolean__boolean(autoHide, modal);
  let rowStyles = /**@type {!Array<?string>}*/ ($Arrays.$init([j_l_String.m_valueOf__java_lang_Object(prefix) + "Top", j_l_String.m_valueOf__java_lang_Object(prefix) + "Middle", j_l_String.m_valueOf__java_lang_Object(prefix) + "Bottom"], j_l_String));
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_ = DecoratorPanel.$create__arrayOf_java_lang_String__int(rowStyles, 1);
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_setStyleName__java_lang_String("");
  this.m_setStylePrimaryName__java_lang_String(DecoratedPopupPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratedPopupPanel_);
  super.m_setWidget__org_gwtproject_user_client_ui_Widget(this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_getContainerElement__(), "popupContent", false);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_getContainerElement__(), j_l_String.m_valueOf__java_lang_Object(prefix) + "Content", true);
 }
 /** @override */
 m_clear__() {
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_clear__();
 }
 /** @override @return {Widget} */
 m_getWidget__() {
  return this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_getWidget__();
 }
 /** @override @return {Iterator<Widget>} */
 m_iterator__() {
  return this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_iterator__();
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  return this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_remove__org_gwtproject_user_client_ui_Widget(w);
 }
 /** @override */
 m_setWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_setWidget__org_gwtproject_user_client_ui_Widget(w);
  this.m_maybeUpdateSize___$pp_org_gwtproject_user_client_ui();
 }
 /** @override */
 m_doAttachChildren__() {
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_onAttach__();
 }
 /** @override */
 m_doDetachChildren__() {
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_onDetach__();
 }
 /** @return {Object} */
 m_getCellElement__int__int(/** number */ row, /** number */ cell) {
  return this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_getCellElement__int__int(row, cell);
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Widget>} */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 
 static $clinit() {
  DecoratedPopupPanel.$clinit = () =>{};
  DecoratedPopupPanel.$loadModules();
  PopupPanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DecoratedPopupPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  DecoratorPanel = goog.module.get('org.gwtproject.user.client.ui.DecoratorPanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DecoratedPopupPanel, 'org.gwtproject.user.client.ui.DecoratedPopupPanel');

/**@const {?string}*/
DecoratedPopupPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratedPopupPanel_ = "gwt-DecoratedPopupPanel";

exports = DecoratedPopupPanel; 
//# sourceMappingURL=DecoratedPopupPanel.js.map