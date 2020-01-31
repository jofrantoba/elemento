goog.module('org.gwtproject.user.client.ui.DecoratedStackPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const StackPanel = goog.require('org.gwtproject.user.client.ui.StackPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let DecoratorPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DecoratorPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DecoratedStackPanel extends StackPanel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DecoratedStackPanel} */
 static $create__() {
  DecoratedStackPanel.$clinit();
  let $instance = new DecoratedStackPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DecoratedStackPanel__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DecoratedStackPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_StackPanel__();
  this.m_setStylePrimaryName__java_lang_String(DecoratedStackPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratedStackPanel);
 }
 /** @override @return {Object} */
 m_createHeaderElem___$pp_org_gwtproject_user_client_ui() {
  let table = DOM.m_createTable__();
  let tbody = DOM.m_createTBody__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(table, tbody);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(table.style, "width", "100%");
  Element_$Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(table, "cellSpacing", 0);
  Element_$Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(table, "cellPadding", 0);
  for (let i = 0; i < DecoratedStackPanel.f_DEFAULT_ROW_STYLENAMES__org_gwtproject_user_client_ui_DecoratedStackPanel_.length; i++) {
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tbody, DecoratorPanel.m_createTR__java_lang_String(DecoratedStackPanel.f_DEFAULT_ROW_STYLENAMES__org_gwtproject_user_client_ui_DecoratedStackPanel_[i]));
  }
  return table;
 }
 /** @override @return {Object} */
 m_getHeaderTextElem__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui(/** Object */ headerElem) {
  let tbody = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(headerElem);
  let tr = DOM.m_getChild__org_gwtproject_dom_client_Element__int(tbody, 1);
  let td = DOM.m_getChild__org_gwtproject_dom_client_Element__int(tr, 1);
  return DOM.m_getFirstChild__org_gwtproject_dom_client_Element(td);
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
  DecoratedStackPanel.$clinit = () =>{};
  DecoratedStackPanel.$loadModules();
  StackPanel.$clinit();
  DecoratedStackPanel.f_DEFAULT_ROW_STYLENAMES__org_gwtproject_user_client_ui_DecoratedStackPanel_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["stackItemTop", "stackItemMiddle"], j_l_String));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DecoratedStackPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  DecoratorPanel = goog.module.get('org.gwtproject.user.client.ui.DecoratorPanel$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DecoratedStackPanel, 'org.gwtproject.user.client.ui.DecoratedStackPanel');

/**@const {?string}*/
DecoratedStackPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DecoratedStackPanel = "gwt-DecoratedStackPanel";
/**@type {Array<?string>}*/
DecoratedStackPanel.f_DEFAULT_ROW_STYLENAMES__org_gwtproject_user_client_ui_DecoratedStackPanel_;

exports = DecoratedStackPanel; 
//# sourceMappingURL=DecoratedStackPanel.js.map