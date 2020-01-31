goog.module('org.gwtproject.user.client.ui.DecoratorPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SimplePanel = goog.require('org.gwtproject.user.client.ui.SimplePanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DecoratorPanel extends SimplePanel {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_containerElem__org_gwtproject_user_client_ui_DecoratorPanel_;
  /**@type {Object}*/
  this.f_tbody__org_gwtproject_user_client_ui_DecoratorPanel_;
 }
 /** @return {Object} */
 static m_createTR__java_lang_String(/** ?string */ styleName) {
  DecoratorPanel.$clinit();
  let trElem = DOM.m_createTR__();
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(trElem, styleName);
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(trElem, DecoratorPanel.m_createTD__java_lang_String(j_l_String.m_valueOf__java_lang_Object(styleName) + "Right"));
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(trElem, DecoratorPanel.m_createTD__java_lang_String(j_l_String.m_valueOf__java_lang_Object(styleName) + "Center"));
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(trElem, DecoratorPanel.m_createTD__java_lang_String(j_l_String.m_valueOf__java_lang_Object(styleName) + "Left"));
  } else {
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(trElem, DecoratorPanel.m_createTD__java_lang_String(j_l_String.m_valueOf__java_lang_Object(styleName) + "Left"));
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(trElem, DecoratorPanel.m_createTD__java_lang_String(j_l_String.m_valueOf__java_lang_Object(styleName) + "Center"));
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(trElem, DecoratorPanel.m_createTD__java_lang_String(j_l_String.m_valueOf__java_lang_Object(styleName) + "Right"));
  }
  return trElem;
 }
 /** @return {Object} */
 static m_createTD__java_lang_String(/** ?string */ styleName) {
  let tdElem = DOM.m_createTD__();
  let inner = DOM.m_createDiv__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tdElem, inner);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(tdElem, styleName);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(inner, j_l_String.m_valueOf__java_lang_Object(styleName) + "Inner");
  return tdElem;
 }
 //Factory method corresponding to constructor 'DecoratorPanel()'.
 /** @return {!DecoratorPanel} */
 static $create__() {
  DecoratorPanel.$clinit();
  let $instance = new DecoratorPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratorPanel__();
  return $instance;
 }
 //Initialization from constructor 'DecoratorPanel()'.
 
 $ctor__org_gwtproject_user_client_ui_DecoratorPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_DecoratorPanel__arrayOf_java_lang_String__int(DecoratorPanel.f_DEFAULT_ROW_STYLENAMES__org_gwtproject_user_client_ui_DecoratorPanel_, 1);
 }
 //Factory method corresponding to constructor 'DecoratorPanel(String[], int)'.
 /** @return {!DecoratorPanel} */
 static $create__arrayOf_java_lang_String__int(/** Array<?string> */ rowStyles, /** number */ containerIndex) {
  DecoratorPanel.$clinit();
  let $instance = new DecoratorPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratorPanel__arrayOf_java_lang_String__int(rowStyles, containerIndex);
  return $instance;
 }
 //Initialization from constructor 'DecoratorPanel(String[], int)'.
 
 $ctor__org_gwtproject_user_client_ui_DecoratorPanel__arrayOf_java_lang_String__int(/** Array<?string> */ rowStyles, /** number */ containerIndex) {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(DOM.m_createTable__());
  let table = this.m_getElement__();
  this.f_tbody__org_gwtproject_user_client_ui_DecoratorPanel_ = DOM.m_createTBody__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(table, this.f_tbody__org_gwtproject_user_client_ui_DecoratorPanel_);
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(table, "cellSpacing", 0);
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(table, "cellPadding", 0);
  for (let i = 0; i < rowStyles.length; i++) {
   let row = DecoratorPanel.m_createTR__java_lang_String(rowStyles[i]);
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_tbody__org_gwtproject_user_client_ui_DecoratorPanel_, row);
   if (i == containerIndex) {
    this.f_containerElem__org_gwtproject_user_client_ui_DecoratorPanel_ = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(DOM.m_getChild__org_gwtproject_dom_client_Element__int(row, 1));
   }
  }
  this.m_setStyleName__java_lang_String(DecoratorPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratorPanel_);
 }
 /** @return {Object} */
 m_getCellElement__int__int(/** number */ row, /** number */ cell) {
  let tr = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_tbody__org_gwtproject_user_client_ui_DecoratorPanel_, row);
  let td = DOM.m_getChild__org_gwtproject_dom_client_Element__int(tr, cell);
  return DOM.m_getFirstChild__org_gwtproject_dom_client_Element(td);
 }
 /** @override @return {Object} */
 m_getContainerElement__() {
  return this.f_containerElem__org_gwtproject_user_client_ui_DecoratorPanel_;
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
  DecoratorPanel.$clinit = () =>{};
  DecoratorPanel.$loadModules();
  SimplePanel.$clinit();
  DecoratorPanel.f_DEFAULT_ROW_STYLENAMES__org_gwtproject_user_client_ui_DecoratorPanel_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["top", "middle", "bottom"], j_l_String));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DecoratorPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DecoratorPanel, 'org.gwtproject.user.client.ui.DecoratorPanel');

/**@const {?string}*/
DecoratorPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratorPanel_ = "gwt-DecoratorPanel";
/**@type {Array<?string>}*/
DecoratorPanel.f_DEFAULT_ROW_STYLENAMES__org_gwtproject_user_client_ui_DecoratorPanel_;

exports = DecoratorPanel; 
//# sourceMappingURL=DecoratorPanel.js.map