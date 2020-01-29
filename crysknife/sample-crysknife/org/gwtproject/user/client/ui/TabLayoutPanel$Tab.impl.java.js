goog.module('org.gwtproject.user.client.ui.TabLayoutPanel.Tab$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SimplePanel = goog.require('org.gwtproject.user.client.ui.SimplePanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let CommonResources = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources$impl');
let TabLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.TabLayoutPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Tab extends SimplePanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TabLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_Tab;
  /** @public {Object} */
  this.f_inner__org_gwtproject_user_client_ui_TabLayoutPanel_Tab_;
  /** @public {boolean} */
  this.f_replacingWidget__org_gwtproject_user_client_ui_TabLayoutPanel_Tab_ = false;
 }
 /**
  * @param {TabLayoutPanel} $outer_this
  * @param {Widget} child
  * @return {!Tab}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_TabLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, child) {
  Tab.$clinit();
  let $instance = new Tab();
  $instance.$ctor__org_gwtproject_user_client_ui_TabLayoutPanel_Tab__org_gwtproject_user_client_ui_TabLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, child);
  return $instance;
 }
 /**
  * @param {TabLayoutPanel} $outer_this
  * @param {Widget} child
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_TabLayoutPanel_Tab__org_gwtproject_user_client_ui_TabLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, child) {
  this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_Tab = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element($Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  this.m_getElement__().appendChild(this.f_inner__org_gwtproject_user_client_ui_TabLayoutPanel_Tab_ = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(child);
  this.m_setStyleName__java_lang_String(TabLayoutPanel.f_TAB_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_);
  Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_inner__org_gwtproject_user_client_ui_TabLayoutPanel_Tab_, TabLayoutPanel.f_TAB_INNER_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_);
  Element_$Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), CommonResources.m_getInlineBlockStyle__());
 }
 /**
  * @param {ClickHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, ClickEvent.m_getType__());
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  let index = this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_Tab.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.indexOf(this);
  if (this.f_replacingWidget__org_gwtproject_user_client_ui_TabLayoutPanel_Tab_ || index < 0) {
   return super.m_remove__org_gwtproject_user_client_ui_Widget(w);
  } else {
   return this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_Tab.m_remove__int(index);
  }
 }
 /**
  * @param {boolean} selected
  * @public
  */
 m_setSelected__boolean(selected) {
  if (selected) {
   this.m_addStyleDependentName__java_lang_String("selected");
  } else {
   this.m_removeStyleDependentName__java_lang_String("selected");
  }
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_setWidget__org_gwtproject_user_client_ui_Widget(w) {
  this.f_replacingWidget__org_gwtproject_user_client_ui_TabLayoutPanel_Tab_ = true;
  super.m_setWidget__org_gwtproject_user_client_ui_Widget(w);
  this.f_replacingWidget__org_gwtproject_user_client_ui_TabLayoutPanel_Tab_ = false;
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_getContainerElement__() {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.f_inner__org_gwtproject_user_client_ui_TabLayoutPanel_Tab_), Element_$Overlay));
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
  Tab.$clinit = () =>{};
  Tab.$loadModules();
  SimplePanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Tab;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  ClickEvent = goog.module.get('org.gwtproject.event.dom.client.ClickEvent$impl');
  CommonResources = goog.module.get('org.gwtproject.resources.client.CommonResources$impl');
  TabLayoutPanel = goog.module.get('org.gwtproject.user.client.ui.TabLayoutPanel$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Tab, 'org.gwtproject.user.client.ui.TabLayoutPanel$Tab');

exports = Tab; 
//# sourceMappingURL=TabLayoutPanel$Tab.js.map