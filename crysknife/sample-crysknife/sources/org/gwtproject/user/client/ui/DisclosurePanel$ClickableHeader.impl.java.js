goog.module('org.gwtproject.user.client.ui.DisclosurePanel.ClickableHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SimplePanel = goog.require('org.gwtproject.user.client.ui.SimplePanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let DisclosurePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

class ClickableHeader extends SimplePanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DisclosurePanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_ClickableHeader;
 }
 /**
  * @param {DisclosurePanel} $outer_this
  * @return {!ClickableHeader}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DisclosurePanel($outer_this) {
  ClickableHeader.$clinit();
  let $instance = new ClickableHeader();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_ClickableHeader__org_gwtproject_user_client_ui_DisclosurePanel($outer_this);
  return $instance;
 }
 /**
  * @param {DisclosurePanel} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_ClickableHeader__org_gwtproject_user_client_ui_DisclosurePanel($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_ClickableHeader = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(DOM.m_createAnchor__());
  let elem = this.m_getElement__();
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, "href", "javascript:void(0);");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "display", "block");
  this.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event);
  this.m_setStyleName__java_lang_String(DisclosurePanel.f_STYLENAME_HEADER__org_gwtproject_user_client_ui_DisclosurePanel_);
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONCLICK__org_gwtproject_user_client_Event: 
    DOM.m_eventPreventDefault__org_gwtproject_user_client_Event(event);
    this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_ClickableHeader.m_setOpen__boolean(!this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_ClickableHeader.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_);
  }
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
  ClickableHeader.$clinit = () =>{};
  ClickableHeader.$loadModules();
  SimplePanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ClickableHeader;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  DisclosurePanel = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel$impl');
 }
 
}
$Util.$setClassMetadata(ClickableHeader, 'org.gwtproject.user.client.ui.DisclosurePanel$ClickableHeader');

exports = ClickableHeader; 
//# sourceMappingURL=DisclosurePanel$ClickableHeader.js.map