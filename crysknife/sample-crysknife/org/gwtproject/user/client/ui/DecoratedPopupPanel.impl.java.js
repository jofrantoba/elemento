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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DecoratorPanel} */
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_;
 }
 /**
  * Factory method corresponding to constructor 'DecoratedPopupPanel()'.
  * @return {!DecoratedPopupPanel}
  * @public
  */
 static $create__() {
  DecoratedPopupPanel.$clinit();
  let $instance = new DecoratedPopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DecoratedPopupPanel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean(false);
 }
 /**
  * Factory method corresponding to constructor 'DecoratedPopupPanel(boolean)'.
  * @param {boolean} autoHide
  * @return {!DecoratedPopupPanel}
  * @public
  */
 static $create__boolean(autoHide) {
  DecoratedPopupPanel.$clinit();
  let $instance = new DecoratedPopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean(autoHide);
  return $instance;
 }
 /**
  * Initialization from constructor 'DecoratedPopupPanel(boolean)'.
  * @param {boolean} autoHide
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean(autoHide) {
  this.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean(autoHide, false);
 }
 /**
  * Factory method corresponding to constructor 'DecoratedPopupPanel(boolean, boolean)'.
  * @param {boolean} autoHide
  * @param {boolean} modal
  * @return {!DecoratedPopupPanel}
  * @public
  */
 static $create__boolean__boolean(autoHide, modal) {
  DecoratedPopupPanel.$clinit();
  let $instance = new DecoratedPopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean(autoHide, modal);
  return $instance;
 }
 /**
  * Initialization from constructor 'DecoratedPopupPanel(boolean, boolean)'.
  * @param {boolean} autoHide
  * @param {boolean} modal
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean(autoHide, modal) {
  this.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean__java_lang_String(autoHide, modal, "popup");
 }
 /**
  * Factory method corresponding to constructor 'DecoratedPopupPanel(boolean, boolean, String)'.
  * @param {boolean} autoHide
  * @param {boolean} modal
  * @param {?string} prefix
  * @return {!DecoratedPopupPanel}
  * @public
  */
 static $create__boolean__boolean__java_lang_String(autoHide, modal, prefix) {
  DecoratedPopupPanel.$clinit();
  let $instance = new DecoratedPopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean__java_lang_String(autoHide, modal, prefix);
  return $instance;
 }
 /**
  * Initialization from constructor 'DecoratedPopupPanel(boolean, boolean, String)'.
  * @param {boolean} autoHide
  * @param {boolean} modal
  * @param {?string} prefix
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean__java_lang_String(autoHide, modal, prefix) {
  this.$ctor__org_gwtproject_user_client_ui_PopupPanel__boolean__boolean(autoHide, modal);
  let rowStyles = /**@type {!Array<?string>} */ ($Arrays.$init([j_l_String.m_valueOf__java_lang_Object(prefix) + "Top", j_l_String.m_valueOf__java_lang_Object(prefix) + "Middle", j_l_String.m_valueOf__java_lang_Object(prefix) + "Bottom"], j_l_String));
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_ = DecoratorPanel.$create__arrayOf_java_lang_String__int(rowStyles, 1);
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_setStyleName__java_lang_String("");
  this.m_setStylePrimaryName__java_lang_String(DecoratedPopupPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratedPopupPanel_);
  super.m_setWidget__org_gwtproject_user_client_ui_Widget(this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_getContainerElement__(), "popupContent", false);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_getContainerElement__(), j_l_String.m_valueOf__java_lang_Object(prefix) + "Content", true);
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_clear__();
 }
 /**
  * @override
  * @return {Widget}
  * @public
  */
 m_getWidget__() {
  return this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_getWidget__();
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_iterator__();
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  return this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_remove__org_gwtproject_user_client_ui_Widget(w);
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_setWidget__org_gwtproject_user_client_ui_Widget(w) {
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_setWidget__org_gwtproject_user_client_ui_Widget(w);
  this.m_maybeUpdateSize___$pp_org_gwtproject_user_client_ui();
 }
 /**
  * @override
  * @public
  */
 m_doAttachChildren__() {
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_onAttach__();
 }
 /**
  * @override
  * @public
  */
 m_doDetachChildren__() {
  this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_onDetach__();
 }
 /**
  * @param {number} row
  * @param {number} cell
  * @return {Object}
  * @public
  */
 m_getCellElement__int__int(row, cell) {
  return this.f_decPanel__org_gwtproject_user_client_ui_DecoratedPopupPanel_.m_getCellElement__int__int(row, cell);
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
  DecoratedPopupPanel.$clinit = () =>{};
  DecoratedPopupPanel.$loadModules();
  PopupPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DecoratedPopupPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  DecoratorPanel = goog.module.get('org.gwtproject.user.client.ui.DecoratorPanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DecoratedPopupPanel, 'org.gwtproject.user.client.ui.DecoratedPopupPanel');

/** @public {?string} @const */
DecoratedPopupPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratedPopupPanel_ = "gwt-DecoratedPopupPanel";

exports = DecoratedPopupPanel; 
//# sourceMappingURL=DecoratedPopupPanel.js.map