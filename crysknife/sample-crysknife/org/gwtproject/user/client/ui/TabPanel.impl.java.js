goog.module('org.gwtproject.user.client.ui.TabPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BeforeSelectionHandler = goog.require('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');
const HasBeforeSelectionHandlers = goog.require('org.gwtproject.event.logical.shared.HasBeforeSelectionHandlers$impl');
const HasSelectionHandlers = goog.require('org.gwtproject.event.logical.shared.HasSelectionHandlers$impl');
const SelectionHandler = goog.require('org.gwtproject.event.logical.shared.SelectionHandler$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');
const HasWidgets = goog.require('org.gwtproject.user.client.ui.HasWidgets$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.IndexedPanel.ForIsWidget$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let BeforeSelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
let SelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionEvent$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let DeckPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckPanel$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let TabBar = goog.forwardDeclare('org.gwtproject.user.client.ui.TabBar$impl');
let TabbedDeckPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.TabPanel.TabbedDeckPanel$impl');
let UnmodifiableTabBar = goog.forwardDeclare('org.gwtproject.user.client.ui.TabPanel.UnmodifiableTabBar$impl');
let VerticalPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.VerticalPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasWidgets}
 * @implements {HasAnimation}
 * @implements {ForIsWidget}
 * @implements {HasBeforeSelectionHandlers<Integer>}
 * @implements {HasSelectionHandlers<Integer>}
 * @implements {BeforeSelectionHandler<Integer>}
 * @implements {SelectionHandler<Integer>}
  */
class TabPanel extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {UnmodifiableTabBar} */
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_;
  /** @public {TabbedDeckPanel} */
  this.f_deck__org_gwtproject_user_client_ui_TabPanel_;
 }
 /**
  * @return {!TabPanel}
  * @public
  */
 static $create__() {
  TabPanel.$clinit();
  let $instance = new TabPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_TabPanel__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_TabPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_client_ui_TabPanel();
  let panel = VerticalPanel.$create__();
  panel.m_add__org_gwtproject_user_client_ui_Widget(this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_);
  panel.m_add__org_gwtproject_user_client_ui_Widget(this.f_deck__org_gwtproject_user_client_ui_TabPanel_);
  panel.m_setCellHeight__org_gwtproject_user_client_ui_Widget__java_lang_String(this.f_deck__org_gwtproject_user_client_ui_TabPanel_, "100%");
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_.m_setWidth__java_lang_String("100%");
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_.m_addBeforeSelectionHandler__org_gwtproject_event_logical_shared_BeforeSelectionHandler(this);
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_.m_addSelectionHandler__org_gwtproject_event_logical_shared_SelectionHandler(this);
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(panel);
  this.m_setStyleName__java_lang_String("gwt-TabPanel");
  this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_setStyleName__java_lang_String("gwt-TabPanelBottom");
  Roles.m_getTabpanelRole__().m_set__org_gwtproject_dom_client_Element(this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_getElement__());
 }
 /**
  * @param {IsWidget} w
  * @param {IsWidget} tabWidget
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget(w, tabWidget) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(tabWidget));
 }
 /**
  * @param {IsWidget} w
  * @param {?string} tabText
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__java_lang_String(w, tabText) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), tabText);
 }
 /**
  * @param {IsWidget} w
  * @param {?string} tabText
  * @param {boolean} asHTML
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__java_lang_String__boolean(w, tabText, asHTML) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), tabText, asHTML);
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("A tabText parameter must be specified with add()."));
 }
 /**
  * @param {Widget} w
  * @param {?string} tabText
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String(w, tabText) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(w, tabText, this.m_getWidgetCount__());
 }
 /**
  * @param {Widget} w
  * @param {?string} tabText
  * @param {boolean} asHTML
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(w, tabText, asHTML) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(w, tabText, asHTML, this.m_getWidgetCount__());
 }
 /**
  * @param {Widget} w
  * @param {Widget} tabWidget
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget(w, tabWidget) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(w, tabWidget, this.m_getWidgetCount__());
 }
 /**
  * @override
  * @param {BeforeSelectionHandler<Integer>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addBeforeSelectionHandler__org_gwtproject_event_logical_shared_BeforeSelectionHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, BeforeSelectionEvent.m_getType__());
 }
 /**
  * @override
  * @param {SelectionHandler<Integer>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addSelectionHandler__org_gwtproject_event_logical_shared_SelectionHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, SelectionEvent.m_getType__());
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  while (this.m_getWidgetCount__() > 0) {
   this.m_remove__org_gwtproject_user_client_ui_Widget(this.m_getWidget__int(0));
  }
 }
 /**
  * @return {DeckPanel}
  * @public
  */
 m_getDeckPanel__() {
  return this.f_deck__org_gwtproject_user_client_ui_TabPanel_;
 }
 /**
  * @return {TabBar}
  * @public
  */
 m_getTabBar__() {
  return this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_;
 }
 /**
  * @override
  * @param {number} index
  * @return {Widget}
  * @public
  */
 m_getWidget__int(index) {
  return this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_getWidget__int(index);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getWidgetCount__() {
  return this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_getWidgetCount__();
 }
 /**
  * @override
  * @param {IsWidget} child
  * @return {number}
  * @public
  */
 m_getWidgetIndex__org_gwtproject_user_client_ui_IsWidget(child) {
  return this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /**
  * @override
  * @param {Widget} widget
  * @return {number}
  * @public
  */
 m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(widget) {
  return this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(widget);
 }
 /**
  * @param {IsWidget} widget
  * @param {IsWidget} tabWidget
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget__int(widget, tabWidget, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(widget), Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(tabWidget), beforeIndex);
 }
 /**
  * @param {IsWidget} widget
  * @param {?string} tabText
  * @param {boolean} asHTML
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__java_lang_String__boolean__int(widget, tabText, asHTML, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(widget), tabText, asHTML, beforeIndex);
 }
 /**
  * @param {IsWidget} widget
  * @param {?string} tabText
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__java_lang_String__int(widget, tabText, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(widget), tabText, beforeIndex);
 }
 /**
  * @param {Widget} widget
  * @param {?string} tabText
  * @param {boolean} asHTML
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(widget, tabText, asHTML, beforeIndex) {
  this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_insertProtected__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(widget, tabText, asHTML, beforeIndex);
 }
 /**
  * @param {Widget} widget
  * @param {?string} tabText
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(widget, tabText, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(widget, tabText, false, beforeIndex);
 }
 /**
  * @param {Widget} widget
  * @param {Widget} tabWidget
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(widget, tabWidget, beforeIndex) {
  this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_insertProtected__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(widget, tabWidget, beforeIndex);
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isAnimationEnabled__() {
  return this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_isAnimationEnabled__();
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_iterator__();
 }
 /**
  * @override
  * @param {BeforeSelectionEvent<Integer>} event
  * @public
  */
 m_onBeforeSelection__org_gwtproject_event_logical_shared_BeforeSelectionEvent(event) {
  let tabIndex = /**@type {Integer} */ ($Casts.$to(event.m_getItem__(), Integer)).m_intValue__();
  BeforeSelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(tabIndex));
 }
 /**
  * @override
  * @param {SelectionEvent<Integer>} event
  * @public
  * @deprecated
  */
 m_onSelection__org_gwtproject_event_logical_shared_SelectionEvent(event) {
  let tabIndex = /**@type {Integer} */ ($Casts.$to(event.m_getSelectedItem__(), Integer)).m_intValue__();
  this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_showWidget__int(tabIndex);
  SelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(tabIndex));
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_remove__int(index) {
  return this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_remove__int(index);
 }
 /**
  * @override
  * @param {Widget} widget
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(widget) {
  return this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_remove__org_gwtproject_user_client_ui_Widget(widget);
 }
 /**
  * @param {number} index
  * @public
  */
 m_selectTab__int(index) {
  this.m_selectTab__int__boolean(index, true);
 }
 /**
  * @param {number} index
  * @param {boolean} fireEvents
  * @public
  */
 m_selectTab__int__boolean(index, fireEvents) {
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_.m_selectTab__int__boolean(index, fireEvents);
 }
 /**
  * @override
  * @param {boolean} enable
  * @public
  */
 m_setAnimationEnabled__boolean(enable) {
  this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_setAnimationEnabled__boolean(enable);
 }
 /**
  * @return {SimplePanel}
  * @public
  */
 m_createTabTextWrapper__() {
  return null;
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_.m_ensureDebugId__java_lang_String(j_l_String.m_valueOf__java_lang_Object(baseID) + "-bar");
  this.f_deck__org_gwtproject_user_client_ui_TabPanel_.m_ensureDebugId__java_lang_String(j_l_String.m_valueOf__java_lang_Object(baseID) + "-bottom");
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
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_TabPanel() {
  this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_ = UnmodifiableTabBar.$create__org_gwtproject_user_client_ui_TabPanel(this);
  this.f_deck__org_gwtproject_user_client_ui_TabPanel_ = TabbedDeckPanel.$create__org_gwtproject_user_client_ui_TabPanel_UnmodifiableTabBar(this.f_tabBar__org_gwtproject_user_client_ui_TabPanel_);
 }
 /**
  * @public
  */
 static $clinit() {
  TabPanel.$clinit = () =>{};
  TabPanel.$loadModules();
  Composite.$clinit();
  Iterable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TabPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  BeforeSelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
  SelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.SelectionEvent$impl');
  TabbedDeckPanel = goog.module.get('org.gwtproject.user.client.ui.TabPanel.TabbedDeckPanel$impl');
  UnmodifiableTabBar = goog.module.get('org.gwtproject.user.client.ui.TabPanel.UnmodifiableTabBar$impl');
  VerticalPanel = goog.module.get('org.gwtproject.user.client.ui.VerticalPanel$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(TabPanel, 'org.gwtproject.user.client.ui.TabPanel');

HasWidgets.$markImplementor(TabPanel);
HasAnimation.$markImplementor(TabPanel);
ForIsWidget.$markImplementor(TabPanel);
HasBeforeSelectionHandlers.$markImplementor(TabPanel);
HasSelectionHandlers.$markImplementor(TabPanel);
BeforeSelectionHandler.$markImplementor(TabPanel);
SelectionHandler.$markImplementor(TabPanel);

exports = TabPanel; 
//# sourceMappingURL=TabPanel.js.map