goog.module('org.gwtproject.user.client.ui.Tree$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAllFocusHandlers = goog.require('org.gwtproject.event.dom.client.HasAllFocusHandlers$impl');
const HasAllKeyHandlers = goog.require('org.gwtproject.event.dom.client.HasAllKeyHandlers$impl');
const HasAllMouseHandlers = goog.require('org.gwtproject.event.dom.client.HasAllMouseHandlers$impl');
const HasCloseHandlers = goog.require('org.gwtproject.event.logical.shared.HasCloseHandlers$impl');
const HasOpenHandlers = goog.require('org.gwtproject.event.logical.shared.HasOpenHandlers$impl');
const HasSelectionHandlers = goog.require('org.gwtproject.event.logical.shared.HasSelectionHandlers$impl');
const Focusable = goog.require('org.gwtproject.user.client.ui.Focusable$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.HasTreeItems.ForIsWidget$impl');
const HasWidgets_ForIsWidget = goog.require('org.gwtproject.user.client.ui.HasWidgets.ForIsWidget$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let BlurEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurEvent$impl');
let BlurHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurHandler$impl');
let FocusEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusEvent$impl');
let FocusHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusHandler$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let KeyDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownHandler$impl');
let KeyPressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressEvent$impl');
let KeyPressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressHandler$impl');
let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');
let KeyUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpHandler$impl');
let MouseDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownEvent$impl');
let MouseDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownHandler$impl');
let MouseMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveEvent$impl');
let MouseMoveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveHandler$impl');
let MouseOutEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutEvent$impl');
let MouseOutHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutHandler$impl');
let MouseOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverEvent$impl');
let MouseOverHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverHandler$impl');
let MouseUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpEvent$impl');
let MouseUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpHandler$impl');
let MouseWheelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelEvent$impl');
let MouseWheelHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelHandler$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let CloseHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler$impl');
let OpenEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenEvent$impl');
let OpenHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenHandler$impl');
let SelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionEvent$impl');
let SelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
let AttachDetachException = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException$impl');
let FocusPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FocusPanel$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let IsTreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.IsTreeItem$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let ImageAdapter = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree.ImageAdapter$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree.Resources$impl');
let TreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem$impl');
let WidgetIterators = goog.forwardDeclare('org.gwtproject.user.client.ui.WidgetIterators$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ForIsWidget}
 * @implements {HasWidgets_ForIsWidget}
 * @implements {Focusable}
 * @implements {HasAnimation}
 * @implements {HasAllKeyHandlers}
 * @implements {HasAllFocusHandlers}
 * @implements {HasSelectionHandlers<TreeItem>}
 * @implements {HasOpenHandlers<TreeItem>}
 * @implements {HasCloseHandlers<TreeItem>}
 * @implements {HasAllMouseHandlers}
  */
class Tree extends Widget {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<Widget, TreeItem>}*/
  this.f_childWidgets__org_gwtproject_user_client_ui_Tree_;
  /**@type {TreeItem}*/
  this.f_curSelection__org_gwtproject_user_client_ui_Tree_;
  /**@type {Object}*/
  this.f_focusable__org_gwtproject_user_client_ui_Tree_;
  /**@type {ImageAdapter}*/
  this.f_images__org_gwtproject_user_client_ui_Tree_;
  /**@type {?string}*/
  this.f_indentValue__org_gwtproject_user_client_ui_Tree_;
  /**@type {boolean}*/
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_Tree_ = false;
  /**@type {boolean}*/
  this.f_lastWasKeyDown__org_gwtproject_user_client_ui_Tree_ = false;
  /**@type {TreeItem}*/
  this.f_root__org_gwtproject_user_client_ui_Tree_;
  /**@type {boolean}*/
  this.f_scrollOnSelectEnabled__org_gwtproject_user_client_ui_Tree_ = false;
  /**@type {boolean}*/
  this.f_useLeafImages__org_gwtproject_user_client_ui_Tree_ = false;
 }
 /** @return {boolean} */
 static m_shouldTreeDelegateFocusToElement__org_gwtproject_dom_client_Element(/** Object */ elem) {
  Tree.$clinit();
  let name = elem.nodeName;
  return j_l_String.m_equals__java_lang_String__java_lang_Object(name, "SELECT") || j_l_String.m_equals__java_lang_String__java_lang_Object(name, "INPUT") || j_l_String.m_equals__java_lang_String__java_lang_Object(name, "TEXTAREA") || j_l_String.m_equals__java_lang_String__java_lang_Object(name, "OPTION") || j_l_String.m_equals__java_lang_String__java_lang_Object(name, "BUTTON") || j_l_String.m_equals__java_lang_String__java_lang_Object(name, "LABEL");
 }
 //Factory method corresponding to constructor 'Tree()'.
 /** @return {!Tree} */
 static $create__() {
  Tree.$clinit();
  let $instance = new Tree();
  $instance.$ctor__org_gwtproject_user_client_ui_Tree__();
  return $instance;
 }
 //Initialization from constructor 'Tree()'.
 
 $ctor__org_gwtproject_user_client_ui_Tree__() {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.$init___$p_org_gwtproject_user_client_ui_Tree();
  this.m_init__org_gwtproject_user_client_ui_Tree_ImageAdapter__boolean_$p_org_gwtproject_user_client_ui_Tree(ImageAdapter.$create__(), false);
 }
 //Factory method corresponding to constructor 'Tree(Resources)'.
 /** @return {!Tree} */
 static $create__org_gwtproject_user_client_ui_Tree_Resources(/** Resources */ resources) {
  Tree.$clinit();
  let $instance = new Tree();
  $instance.$ctor__org_gwtproject_user_client_ui_Tree__org_gwtproject_user_client_ui_Tree_Resources(resources);
  return $instance;
 }
 //Initialization from constructor 'Tree(Resources)'.
 
 $ctor__org_gwtproject_user_client_ui_Tree__org_gwtproject_user_client_ui_Tree_Resources(/** Resources */ resources) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.$init___$p_org_gwtproject_user_client_ui_Tree();
  this.m_init__org_gwtproject_user_client_ui_Tree_ImageAdapter__boolean_$p_org_gwtproject_user_client_ui_Tree(ImageAdapter.$create__org_gwtproject_user_client_ui_Tree_Resources(resources), false);
 }
 //Factory method corresponding to constructor 'Tree(Resources, boolean)'.
 /** @return {!Tree} */
 static $create__org_gwtproject_user_client_ui_Tree_Resources__boolean(/** Resources */ resources, /** boolean */ useLeafImages) {
  Tree.$clinit();
  let $instance = new Tree();
  $instance.$ctor__org_gwtproject_user_client_ui_Tree__org_gwtproject_user_client_ui_Tree_Resources__boolean(resources, useLeafImages);
  return $instance;
 }
 //Initialization from constructor 'Tree(Resources, boolean)'.
 
 $ctor__org_gwtproject_user_client_ui_Tree__org_gwtproject_user_client_ui_Tree_Resources__boolean(/** Resources */ resources, /** boolean */ useLeafImages) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.$init___$p_org_gwtproject_user_client_ui_Tree();
  this.m_init__org_gwtproject_user_client_ui_Tree_ImageAdapter__boolean_$p_org_gwtproject_user_client_ui_Tree(ImageAdapter.$create__org_gwtproject_user_client_ui_Tree_Resources(resources), useLeafImages);
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.m_addItem__org_gwtproject_user_client_ui_Widget(widget);
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {
  this.m_add__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
 }
 /** @override @return {HandlerRegistration} */
 m_addBlurHandler__org_gwtproject_event_dom_client_BlurHandler(/** BlurHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, BlurEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(/** CloseHandler<TreeItem> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, CloseEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addFocusHandler__org_gwtproject_event_dom_client_FocusHandler(/** FocusHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, FocusEvent.m_getType__());
 }
 /** @override @return {TreeItem} */
 m_addItem__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ itemHtml) {
  return this.f_root__org_gwtproject_user_client_ui_Tree_.m_addItem__org_gwtproject_safehtml_shared_SafeHtml(itemHtml);
 }
 /** @override */
 m_addItem__org_gwtproject_user_client_ui_TreeItem(/** TreeItem */ item) {
  this.f_root__org_gwtproject_user_client_ui_Tree_.m_addItem__org_gwtproject_user_client_ui_TreeItem(item);
 }
 /** @override */
 m_addItem__org_gwtproject_user_client_ui_IsTreeItem(/** IsTreeItem */ isItem) {
  this.f_root__org_gwtproject_user_client_ui_Tree_.m_addItem__org_gwtproject_user_client_ui_IsTreeItem(isItem);
 }
 /** @override @return {TreeItem} */
 m_addItem__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  return this.f_root__org_gwtproject_user_client_ui_Tree_.m_addItem__org_gwtproject_user_client_ui_Widget(widget);
 }
 /** @override @return {TreeItem} */
 m_addItem__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {
  return this.m_addItem__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
 }
 /** @override @return {HandlerRegistration} */
 m_addKeyDownHandler__org_gwtproject_event_dom_client_KeyDownHandler(/** KeyDownHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyDownEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addKeyPressHandler__org_gwtproject_event_dom_client_KeyPressHandler(/** KeyPressHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyPressEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(/** KeyUpHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyUpEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseDownHandler__org_gwtproject_event_dom_client_MouseDownHandler(/** MouseDownHandler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, MouseDownEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseMoveHandler__org_gwtproject_event_dom_client_MouseMoveHandler(/** MouseMoveHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseMoveEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseOutHandler__org_gwtproject_event_dom_client_MouseOutHandler(/** MouseOutHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseOutEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseOverHandler__org_gwtproject_event_dom_client_MouseOverHandler(/** MouseOverHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseOverEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseUpHandler__org_gwtproject_event_dom_client_MouseUpHandler(/** MouseUpHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseUpEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseWheelHandler__org_gwtproject_event_dom_client_MouseWheelHandler(/** MouseWheelHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseWheelEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addOpenHandler__org_gwtproject_event_logical_shared_OpenHandler(/** OpenHandler<TreeItem> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, OpenEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addSelectionHandler__org_gwtproject_event_logical_shared_SelectionHandler(/** SelectionHandler<TreeItem> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, SelectionEvent.m_getType__());
 }
 /** @override @return {TreeItem} */
 m_addTextItem__java_lang_String(/** ?string */ itemText) {
  return this.f_root__org_gwtproject_user_client_ui_Tree_.m_addTextItem__java_lang_String(itemText);
 }
 /** @override */
 m_clear__() {
  this.f_root__org_gwtproject_user_client_ui_Tree_.m_removeItems__();
 }
 
 m_ensureSelectedItemVisible__() {
  if ($Equality.$same(this.f_curSelection__org_gwtproject_user_client_ui_Tree_, null)) {
   return;
  }
  let parent = this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getParentItem__();
  while (!$Equality.$same(parent, null)) {
   parent.m_setState__boolean(true);
   parent = parent.m_getParentItem__();
  }
 }
 /** @return {TreeItem} */
 m_getItem__int(/** number */ index) {
  return this.f_root__org_gwtproject_user_client_ui_Tree_.m_getChild__int(index);
 }
 /** @return {number} */
 m_getItemCount__() {
  return this.f_root__org_gwtproject_user_client_ui_Tree_.m_getChildCount__();
 }
 /** @return {TreeItem} */
 m_getSelectedItem__() {
  return this.f_curSelection__org_gwtproject_user_client_ui_Tree_;
 }
 /** @override @return {number} */
 m_getTabIndex__() {
  return FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_getTabIndex__org_gwtproject_dom_client_Element(this.f_focusable__org_gwtproject_user_client_ui_Tree_);
 }
 /** @return {TreeItem} */
 m_insertItem__int__org_gwtproject_safehtml_shared_SafeHtml(/** number */ beforeIndex, /** SafeHtml */ itemHtml) {
  return this.f_root__org_gwtproject_user_client_ui_Tree_.m_insertItem__int__org_gwtproject_safehtml_shared_SafeHtml(beforeIndex, itemHtml);
 }
 
 m_insertItem__int__org_gwtproject_user_client_ui_TreeItem(/** number */ beforeIndex, /** TreeItem */ item) {
  this.f_root__org_gwtproject_user_client_ui_Tree_.m_insertItem__int__org_gwtproject_user_client_ui_TreeItem(beforeIndex, item);
 }
 /** @return {TreeItem} */
 m_insertItem__int__org_gwtproject_user_client_ui_Widget(/** number */ beforeIndex, /** Widget */ widget) {
  return this.f_root__org_gwtproject_user_client_ui_Tree_.m_insertItem__int__org_gwtproject_user_client_ui_Widget(beforeIndex, widget);
 }
 /** @return {TreeItem} */
 m_insertTextItem__int__java_lang_String(/** number */ beforeIndex, /** ?string */ itemText) {
  return this.f_root__org_gwtproject_user_client_ui_Tree_.m_insertTextItem__int__java_lang_String(beforeIndex, itemText);
 }
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return this.f_isAnimationEnabled__org_gwtproject_user_client_ui_Tree_;
 }
 /** @return {boolean} */
 m_isScrollOnSelectEnabled__() {
  return this.f_scrollOnSelectEnabled__org_gwtproject_user_client_ui_Tree_;
 }
 /** @override @return {Iterator<Widget>} */
 m_iterator__() {
  let widgets = /**@type {!Array<Widget>}*/ ($Arrays.$create([this.f_childWidgets__org_gwtproject_user_client_ui_Tree_.size()], Widget));
  this.f_childWidgets__org_gwtproject_user_client_ui_Tree_.keySet().m_toArray__arrayOf_java_lang_Object(widgets);
  return WidgetIterators.m_createWidgetIterator__org_gwtproject_user_client_ui_HasWidgets__arrayOf_org_gwtproject_user_client_ui_Widget(this, widgets);
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  let eventType = DOM.m_eventGetType__org_gwtproject_user_client_Event(event);
  switch (eventType) {
   case Event.f_ONKEYDOWN__org_gwtproject_user_client_Event: 
    {
     if ($Equality.$same(this.f_curSelection__org_gwtproject_user_client_ui_Tree_, null)) {
      if (this.f_root__org_gwtproject_user_client_ui_Tree_.m_getChildCount__() > 0) {
       this.m_onSelection__org_gwtproject_user_client_ui_TreeItem__boolean__boolean_$p_org_gwtproject_user_client_ui_Tree(this.f_root__org_gwtproject_user_client_ui_Tree_.m_getChild__int(0), true, true);
      }
      super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
      return;
     }
    }
   case Event.f_ONKEYPRESS__org_gwtproject_user_client_Event: 
   case Event.f_ONKEYUP__org_gwtproject_user_client_Event: 
    if ($Overlay.m_getAltKey__$devirt__org_gwtproject_dom_client_NativeEvent(event) || $Overlay.m_getMetaKey__$devirt__org_gwtproject_dom_client_NativeEvent(event)) {
     super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
     return;
    }
    break;
  }
  switch (eventType) {
   case Event.f_ONCLICK__org_gwtproject_user_client_Event: 
    {
     let e = DOM.m_eventGetTarget__org_gwtproject_user_client_Event(event);
     if (Tree.m_shouldTreeDelegateFocusToElement__org_gwtproject_dom_client_Element(e)) {} else if ((!$Equality.$same(this.f_curSelection__org_gwtproject_user_client_ui_Tree_, null)) && Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getContentElem___$pp_org_gwtproject_user_client_ui(), e)) {
      this.m_setFocus__boolean(true);
     }
     break;
    }
   case Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event: 
    {
     if ($Equality.$same(DOM.m_eventGetCurrentTarget__org_gwtproject_user_client_Event(event), this.m_getElement__()) && ($Overlay.m_getButton__$devirt__org_gwtproject_dom_client_NativeEvent(event) == $Overlay.f_BUTTON_LEFT__org_gwtproject_dom_client_NativeEvent_$Overlay)) {
      this.m_elementClicked__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_Tree(DOM.m_eventGetTarget__org_gwtproject_user_client_Event(event));
     }
     break;
    }
   case Event.f_ONKEYDOWN__org_gwtproject_user_client_Event: 
    {
     this.m_keyboardNavigation__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_Tree(event);
     this.f_lastWasKeyDown__org_gwtproject_user_client_ui_Tree_ = true;
     break;
    }
   case Event.f_ONKEYPRESS__org_gwtproject_user_client_Event: 
    {
     if (!this.f_lastWasKeyDown__org_gwtproject_user_client_ui_Tree_) {
      this.m_keyboardNavigation__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_Tree(event);
     }
     this.f_lastWasKeyDown__org_gwtproject_user_client_ui_Tree_ = false;
     break;
    }
   case Event.f_ONKEYUP__org_gwtproject_user_client_Event: 
    {
     if ($Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event) == KeyCodes.f_KEY_TAB__org_gwtproject_event_dom_client_KeyCodes) {
      let chain = /**@type {!ArrayList<Object>}*/ (ArrayList.$create__());
      this.m_collectElementChain__java_util_ArrayList__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_Tree(chain, this.m_getElement__(), DOM.m_eventGetTarget__org_gwtproject_user_client_Event(event));
      let item = this.m_findItemByChain__java_util_ArrayList__int__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(chain, 0, this.f_root__org_gwtproject_user_client_ui_Tree_);
      if (!$Equality.$same(item, this.m_getSelectedItem__())) {
       this.m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem__boolean(item, true);
      }
     }
     this.f_lastWasKeyDown__org_gwtproject_user_client_ui_Tree_ = false;
     break;
    }
  }
  switch (eventType) {
   case Event.f_ONKEYDOWN__org_gwtproject_user_client_Event: 
   case Event.f_ONKEYUP__org_gwtproject_user_client_Event: 
    {
     if (KeyCodes.m_isArrowKey__int($Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event))) {
      $Overlay.m_stopPropagation__$devirt__org_gwtproject_dom_client_NativeEvent(event);
      $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
      return;
     }
    }
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  let item = /**@type {TreeItem}*/ ($Casts.$to(this.f_childWidgets__org_gwtproject_user_client_ui_Tree_.get(w), TreeItem));
  if ($Equality.$same(item, null)) {
   return false;
  }
  item.m_setWidget__org_gwtproject_user_client_ui_Widget(null);
  return true;
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {
  return this.m_remove__org_gwtproject_user_client_ui_Widget(w.m_asWidget__());
 }
 /** @override */
 m_removeItem__org_gwtproject_user_client_ui_TreeItem(/** TreeItem */ item) {
  this.f_root__org_gwtproject_user_client_ui_Tree_.m_removeItem__org_gwtproject_user_client_ui_TreeItem(item);
 }
 /** @override */
 m_removeItem__org_gwtproject_user_client_ui_IsTreeItem(/** IsTreeItem */ isItem) {
  if (!$Equality.$same(isItem, null)) {
   let item = isItem.m_asTreeItem__();
   this.m_removeItem__org_gwtproject_user_client_ui_TreeItem(item);
  }
 }
 /** @override */
 m_removeItems__() {
  while (this.m_getItemCount__() > 0) {
   this.m_removeItem__org_gwtproject_user_client_ui_TreeItem(this.m_getItem__int(0));
  }
 }
 /** @override */
 m_setAccessKey__char(/** number */ key) {
  FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_setAccessKey__org_gwtproject_dom_client_Element__char(this.f_focusable__org_gwtproject_user_client_ui_Tree_, key);
 }
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ enable) {
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_Tree_ = enable;
 }
 /** @override */
 m_setFocus__boolean(/** boolean */ focus) {
  if (focus) {
   FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_focus__org_gwtproject_dom_client_Element(this.f_focusable__org_gwtproject_user_client_ui_Tree_);
  } else {
   FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_blur__org_gwtproject_dom_client_Element(this.f_focusable__org_gwtproject_user_client_ui_Tree_);
  }
 }
 
 m_setScrollOnSelectEnabled__boolean(/** boolean */ enable) {
  this.f_scrollOnSelectEnabled__org_gwtproject_user_client_ui_Tree_ = enable;
 }
 
 m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem(/** TreeItem */ item) {
  this.m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem__boolean(item, true);
 }
 
 m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem__boolean(/** TreeItem */ item, /** boolean */ fireEvents) {
  if ($Equality.$same(item, null)) {
   if ($Equality.$same(this.f_curSelection__org_gwtproject_user_client_ui_Tree_, null)) {
    return;
   }
   this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_setSelected__boolean(false);
   this.f_curSelection__org_gwtproject_user_client_ui_Tree_ = null;
   return;
  }
  this.m_onSelection__org_gwtproject_user_client_ui_TreeItem__boolean__boolean_$p_org_gwtproject_user_client_ui_Tree(item, fireEvents, true);
 }
 /** @override */
 m_setTabIndex__int(/** number */ index) {
  FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_setTabIndex__org_gwtproject_dom_client_Element__int(this.f_focusable__org_gwtproject_user_client_ui_Tree_, index);
 }
 /** @return {Iterator<TreeItem>} */
 m_treeItemIterator__() {
  let accum = /**@type {!ArrayList<TreeItem>}*/ (ArrayList.$create__());
  this.f_root__org_gwtproject_user_client_ui_Tree_.m_addTreeItems__java_util_List_$pp_org_gwtproject_user_client_ui(accum);
  return accum.m_iterator__();
 }
 /** @override */
 m_doAttachChildren__() {
  try {
   AttachDetachException.m_tryCommand__java_lang_Iterable__org_gwtproject_user_client_ui_AttachDetachException_Command(this, AttachDetachException.f_attachCommand__org_gwtproject_user_client_ui_AttachDetachException);
  } finally {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_focusable__org_gwtproject_user_client_ui_Tree_, this);
  }
 }
 /** @override */
 m_doDetachChildren__() {
  try {
   AttachDetachException.m_tryCommand__java_lang_Iterable__org_gwtproject_user_client_ui_AttachDetachException_Command(this, AttachDetachException.f_detachCommand__org_gwtproject_user_client_ui_AttachDetachException);
  } finally {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_focusable__org_gwtproject_user_client_ui_Tree_, null);
  }
 }
 /** @return {boolean} */
 m_isKeyboardNavigationEnabled__org_gwtproject_user_client_ui_TreeItem(/** TreeItem */ currentItem) {
  return true;
 }
 /** @override */
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  this.f_root__org_gwtproject_user_client_ui_Tree_.m_ensureDebugId__java_lang_String(j_l_String.m_valueOf__java_lang_Object(baseID) + "-root");
 }
 /** @override */
 m_onLoad__() {
  this.f_root__org_gwtproject_user_client_ui_Tree_.m_updateStateRecursive___$pp_org_gwtproject_user_client_ui();
 }
 
 m_adopt__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(/** Widget */ widget, /** TreeItem */ treeItem) {
  $Asserts.$assert((!this.f_childWidgets__org_gwtproject_user_client_ui_Tree_.containsKey(widget)));
  this.f_childWidgets__org_gwtproject_user_client_ui_Tree_.put(widget, treeItem);
  widget.m_setParent__org_gwtproject_user_client_ui_Widget(this);
 }
 
 m_fireStateChanged__org_gwtproject_user_client_ui_TreeItem__boolean_$pp_org_gwtproject_user_client_ui(/** TreeItem */ item, /** boolean */ open) {
  if (open) {
   OpenEvent.m_fire__org_gwtproject_event_logical_shared_HasOpenHandlers__java_lang_Object(this, item);
  } else {
   CloseEvent.m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object(this, item);
  }
 }
 /** @return {Map<Widget, TreeItem>} */
 m_getChildWidgets___$pp_org_gwtproject_user_client_ui() {
  return this.f_childWidgets__org_gwtproject_user_client_ui_Tree_;
 }
 /** @return {ImageAdapter} */
 m_getImages___$pp_org_gwtproject_user_client_ui() {
  return this.f_images__org_gwtproject_user_client_ui_Tree_;
 }
 
 m_maybeUpdateSelection__org_gwtproject_user_client_ui_TreeItem__boolean_$pp_org_gwtproject_user_client_ui(/** TreeItem */ itemThatChangedState, /** boolean */ isItemOpening) {
  if (!isItemOpening) {
   let tempItem = this.f_curSelection__org_gwtproject_user_client_ui_Tree_;
   while (!$Equality.$same(tempItem, null)) {
    if ($Equality.$same(tempItem, itemThatChangedState)) {
     this.m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem(itemThatChangedState);
     return;
    }
    tempItem = tempItem.m_getParentItem__();
   }
  }
 }
 
 m_orphan__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(/** Widget */ widget) {
  $Asserts.$assert($Equality.$same(widget.m_getParent__(), this));
  try {
   widget.m_setParent__org_gwtproject_user_client_ui_Widget(null);
  } finally {
   this.f_childWidgets__org_gwtproject_user_client_ui_Tree_.remove(widget);
  }
 }
 
 m_showClosedImage__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(/** TreeItem */ treeItem) {
  this.m_showImage__org_gwtproject_user_client_ui_TreeItem__org_gwtproject_user_client_ui_AbstractImagePrototype_$p_org_gwtproject_user_client_ui_Tree(treeItem, this.f_images__org_gwtproject_user_client_ui_Tree_.m_treeClosed__());
 }
 
 m_showLeafImage__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(/** TreeItem */ treeItem) {
  if (this.f_useLeafImages__org_gwtproject_user_client_ui_Tree_ || treeItem.m_isFullNode___$pp_org_gwtproject_user_client_ui()) {
   this.m_showImage__org_gwtproject_user_client_ui_TreeItem__org_gwtproject_user_client_ui_AbstractImagePrototype_$p_org_gwtproject_user_client_ui_Tree(treeItem, this.f_images__org_gwtproject_user_client_ui_Tree_.m_treeLeaf__());
  } else if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(treeItem.m_getElement__().style, "paddingRight", this.f_indentValue__org_gwtproject_user_client_ui_Tree_);
  } else {
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(treeItem.m_getElement__().style, "paddingLeft", this.f_indentValue__org_gwtproject_user_client_ui_Tree_);
  }
 }
 
 m_showOpenImage__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(/** TreeItem */ treeItem) {
  this.m_showImage__org_gwtproject_user_client_ui_TreeItem__org_gwtproject_user_client_ui_AbstractImagePrototype_$p_org_gwtproject_user_client_ui_Tree(treeItem, this.f_images__org_gwtproject_user_client_ui_Tree_.m_treeOpen__());
 }
 
 m_collectElementChain__java_util_ArrayList__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_Tree(/** ArrayList<Object> */ chain, /** Object */ hRoot, /** Object */ hElem) {
  if ($Equality.$same(hElem, null) || $Equality.$same(hElem, hRoot)) {
   return;
  }
  this.m_collectElementChain__java_util_ArrayList__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_Tree(chain, hRoot, DOM.m_getParent__org_gwtproject_dom_client_Element(hElem));
  chain.add(hElem);
 }
 /** @return {boolean} */
 m_elementClicked__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_Tree(/** Object */ hElem) {
  let chain = /**@type {!ArrayList<Object>}*/ (ArrayList.$create__());
  this.m_collectElementChain__java_util_ArrayList__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_Tree(chain, this.m_getElement__(), hElem);
  let item = this.m_findItemByChain__java_util_ArrayList__int__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(chain, 0, this.f_root__org_gwtproject_user_client_ui_Tree_);
  if (!$Equality.$same(item, null) && !$Equality.$same(item, this.f_root__org_gwtproject_user_client_ui_Tree_)) {
   if (item.m_getChildCount__() > 0 && Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(item.m_getImageElement___$pp_org_gwtproject_user_client_ui(), hElem)) {
    item.m_setState__boolean__boolean(!item.m_getState__(), true);
    return true;
   } else if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(item.m_getElement__(), hElem)) {
    this.m_onSelection__org_gwtproject_user_client_ui_TreeItem__boolean__boolean_$p_org_gwtproject_user_client_ui_Tree(item, true, !Tree.m_shouldTreeDelegateFocusToElement__org_gwtproject_dom_client_Element(hElem));
    return true;
   }
  }
  return false;
 }
 /** @return {TreeItem} */
 m_findDeepestOpenChild__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(/** TreeItem */ item) {
  if (!item.m_getState__()) {
   return item;
  }
  return this.m_findDeepestOpenChild__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(item.m_getChild__int(item.m_getChildCount__() - 1));
 }
 /** @return {TreeItem} */
 m_findItemByChain__java_util_ArrayList__int__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(/** ArrayList<Object> */ chain, /** number */ idx, /** TreeItem */ root) {
  if (idx == chain.size()) {
   return root;
  }
  let hCurElem = /**@type {Object}*/ ($Casts.$to(chain.getAtIndex(idx), Element_$Overlay));
  for (let i = 0, n = root.m_getChildCount__(); i < n; ++i) {
   let child = root.m_getChild__int(i);
   if ($Equality.$same(child.m_getElement__(), hCurElem)) {
    let retItem = this.m_findItemByChain__java_util_ArrayList__int__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(chain, idx + 1, root.m_getChild__int(i));
    if ($Equality.$same(retItem, null)) {
     return child;
    }
    return retItem;
   }
  }
  return this.m_findItemByChain__java_util_ArrayList__int__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(chain, idx + 1, root);
 }
 /** @return {TreeItem} */
 m_getTopClosedParent__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(/** TreeItem */ item) {
  let topClosedParent = null;
  let parent = item.m_getParentItem__();
  while (!$Equality.$same(parent, null) && !$Equality.$same(parent, this.f_root__org_gwtproject_user_client_ui_Tree_)) {
   if (!parent.m_getState__()) {
    topClosedParent = parent;
   }
   parent = parent.m_getParentItem__();
  }
  return topClosedParent;
 }
 
 m_init__org_gwtproject_user_client_ui_Tree_ImageAdapter__boolean_$p_org_gwtproject_user_client_ui_Tree(/** ImageAdapter */ images, /** boolean */ useLeafImages) {
  this.m_setImages__org_gwtproject_user_client_ui_Tree_ImageAdapter__boolean_$p_org_gwtproject_user_client_ui_Tree(images, useLeafImages);
  this.m_setElement__org_gwtproject_dom_client_Element(DOM.m_createDiv__());
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "position", "relative");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "zoom", "1");
  this.f_focusable__org_gwtproject_user_client_ui_Tree_ = FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_createFocusable__();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_focusable__org_gwtproject_user_client_ui_Tree_.style, "fontSize", "0");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_focusable__org_gwtproject_user_client_ui_Tree_.style, "position", "absolute");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_focusable__org_gwtproject_user_client_ui_Tree_.style, "outline", "0px");
  this.f_focusable__org_gwtproject_user_client_ui_Tree_.setAttribute("hideFocus", "true");
  DOM.m_setIntStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String__int(this.f_focusable__org_gwtproject_user_client_ui_Tree_, "zIndex", -1);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getElement__(), this.f_focusable__org_gwtproject_user_client_ui_Tree_);
  this.m_sinkEvents__int(Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event | Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_KEYEVENTS__org_gwtproject_user_client_Event);
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_focusable__org_gwtproject_user_client_ui_Tree_, Event.f_FOCUSEVENTS__org_gwtproject_user_client_Event);
  this.f_root__org_gwtproject_user_client_ui_Tree_ = TreeItem.$create__boolean(true);
  this.f_root__org_gwtproject_user_client_ui_Tree_.m_setTree__org_gwtproject_user_client_ui_Tree_$pp_org_gwtproject_user_client_ui(this);
  this.m_setStyleName__java_lang_String("gwt-Tree");
  Roles.m_getTreeRole__().m_set__org_gwtproject_dom_client_Element(this.f_focusable__org_gwtproject_user_client_ui_Tree_);
 }
 
 m_keyboardNavigation__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_Tree(/** Event */ event) {
  if (this.m_isKeyboardNavigationEnabled__org_gwtproject_user_client_ui_TreeItem(this.f_curSelection__org_gwtproject_user_client_ui_Tree_)) {
   let code = $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   switch (KeyCodes.m_maybeSwapArrowKeysForRtl__int__boolean(code, LocaleInfo.m_getCurrentLocale__().m_isRTL__())) {
    case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
     {
      this.m_moveSelectionUp__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(this.f_curSelection__org_gwtproject_user_client_ui_Tree_);
      break;
     }
    case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
     {
      this.m_moveSelectionDown__org_gwtproject_user_client_ui_TreeItem__boolean_$p_org_gwtproject_user_client_ui_Tree(this.f_curSelection__org_gwtproject_user_client_ui_Tree_, true);
      break;
     }
    case KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes: 
     {
      this.m_maybeCollapseTreeItem___$p_org_gwtproject_user_client_ui_Tree();
      break;
     }
    case KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes: 
     {
      this.m_maybeExpandTreeItem___$p_org_gwtproject_user_client_ui_Tree();
      break;
     }
    default: 
     {
      return;
     }
   }
  }
 }
 
 m_maybeCollapseTreeItem___$p_org_gwtproject_user_client_ui_Tree() {
  let topClosedParent = this.m_getTopClosedParent__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(this.f_curSelection__org_gwtproject_user_client_ui_Tree_);
  if (!$Equality.$same(topClosedParent, null)) {
   this.m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem(topClosedParent);
  } else if (this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getState__()) {
   this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_setState__boolean(false);
  } else {
   let parent = this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getParentItem__();
   if (!$Equality.$same(parent, null)) {
    this.m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem(parent);
   }
  }
 }
 
 m_maybeExpandTreeItem___$p_org_gwtproject_user_client_ui_Tree() {
  let topClosedParent = this.m_getTopClosedParent__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(this.f_curSelection__org_gwtproject_user_client_ui_Tree_);
  if (!$Equality.$same(topClosedParent, null)) {
   this.m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem(topClosedParent);
  } else if (!this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getState__()) {
   this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_setState__boolean(true);
  } else if (this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getChildCount__() > 0) {
   this.m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem(this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getChild__int(0));
  }
 }
 
 m_moveFocus___$p_org_gwtproject_user_client_ui_Tree() {
  let focusableWidget = this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getFocusable__();
  if (!$Equality.$same(focusableWidget, null)) {
   focusableWidget.m_setFocus__boolean(true);
   if (this.f_scrollOnSelectEnabled__org_gwtproject_user_client_ui_Tree_) {
    Element_$Overlay.m_scrollIntoView__$devirt__org_gwtproject_dom_client_Element(/**@type {Widget}*/ ($Casts.$to(focusableWidget, Widget)).m_getElement__());
   }
  } else {
   if (this.f_scrollOnSelectEnabled__org_gwtproject_user_client_ui_Tree_) {
    let selectedElem = this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getContentElem___$pp_org_gwtproject_user_client_ui();
    let containerLeft = this.m_getAbsoluteLeft__();
    let containerTop = this.m_getAbsoluteTop__();
    let left = Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(selectedElem) - containerLeft;
    let top = Element_$Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(selectedElem) - containerTop;
    let width = Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(selectedElem, "offsetWidth");
    let height = Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(selectedElem, "offsetHeight");
    if (width == 0 || height == 0) {
     DOM.m_setIntStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String__int(this.f_focusable__org_gwtproject_user_client_ui_Tree_, "left", 0);
     DOM.m_setIntStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String__int(this.f_focusable__org_gwtproject_user_client_ui_Tree_, "top", 0);
     return;
    }
    Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_focusable__org_gwtproject_user_client_ui_Tree_.style, "left", left + "px");
    Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_focusable__org_gwtproject_user_client_ui_Tree_.style, "top", top + "px");
    Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_focusable__org_gwtproject_user_client_ui_Tree_.style, "width", width + "px");
    Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_focusable__org_gwtproject_user_client_ui_Tree_.style, "height", height + "px");
    Element_$Overlay.m_scrollIntoView__$devirt__org_gwtproject_dom_client_Element(this.f_focusable__org_gwtproject_user_client_ui_Tree_);
   }
   this.m_updateAriaAttributes___$p_org_gwtproject_user_client_ui_Tree();
   this.m_setFocus__boolean(true);
  }
 }
 
 m_moveSelectionDown__org_gwtproject_user_client_ui_TreeItem__boolean_$p_org_gwtproject_user_client_ui_Tree(/** TreeItem */ sel, /** boolean */ dig) {
  if ($Equality.$same(sel, this.f_root__org_gwtproject_user_client_ui_Tree_)) {
   return;
  }
  let topClosedParent = this.m_getTopClosedParent__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(sel);
  if (!$Equality.$same(topClosedParent, null)) {
   this.m_moveSelectionDown__org_gwtproject_user_client_ui_TreeItem__boolean_$p_org_gwtproject_user_client_ui_Tree(topClosedParent, false);
   return;
  }
  let parent = sel.m_getParentItem__();
  if ($Equality.$same(parent, null)) {
   parent = this.f_root__org_gwtproject_user_client_ui_Tree_;
  }
  let idx = parent.m_getChildIndex__org_gwtproject_user_client_ui_TreeItem(sel);
  if (!dig || !sel.m_getState__()) {
   if (idx < parent.m_getChildCount__() - 1) {
    this.m_onSelection__org_gwtproject_user_client_ui_TreeItem__boolean__boolean_$p_org_gwtproject_user_client_ui_Tree(parent.m_getChild__int(idx + 1), true, true);
   } else {
    this.m_moveSelectionDown__org_gwtproject_user_client_ui_TreeItem__boolean_$p_org_gwtproject_user_client_ui_Tree(parent, false);
   }
  } else if (sel.m_getChildCount__() > 0) {
   this.m_onSelection__org_gwtproject_user_client_ui_TreeItem__boolean__boolean_$p_org_gwtproject_user_client_ui_Tree(sel.m_getChild__int(0), true, true);
  }
 }
 
 m_moveSelectionUp__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(/** TreeItem */ sel) {
  let topClosedParent = this.m_getTopClosedParent__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(sel);
  if (!$Equality.$same(topClosedParent, null)) {
   this.m_onSelection__org_gwtproject_user_client_ui_TreeItem__boolean__boolean_$p_org_gwtproject_user_client_ui_Tree(topClosedParent, true, true);
   return;
  }
  let parent = sel.m_getParentItem__();
  if ($Equality.$same(parent, null)) {
   parent = this.f_root__org_gwtproject_user_client_ui_Tree_;
  }
  let idx = parent.m_getChildIndex__org_gwtproject_user_client_ui_TreeItem(sel);
  if (idx > 0) {
   let sibling = parent.m_getChild__int(idx - 1);
   this.m_onSelection__org_gwtproject_user_client_ui_TreeItem__boolean__boolean_$p_org_gwtproject_user_client_ui_Tree(this.m_findDeepestOpenChild__org_gwtproject_user_client_ui_TreeItem_$p_org_gwtproject_user_client_ui_Tree(sibling), true, true);
  } else {
   this.m_onSelection__org_gwtproject_user_client_ui_TreeItem__boolean__boolean_$p_org_gwtproject_user_client_ui_Tree(parent, true, true);
  }
 }
 
 m_onSelection__org_gwtproject_user_client_ui_TreeItem__boolean__boolean_$p_org_gwtproject_user_client_ui_Tree(/** TreeItem */ item, /** boolean */ fireEvents, /** boolean */ moveFocus) {
  if ($Equality.$same(item, this.f_root__org_gwtproject_user_client_ui_Tree_)) {
   return;
  }
  if (!$Equality.$same(this.f_curSelection__org_gwtproject_user_client_ui_Tree_, null)) {
   this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_setSelected__boolean(false);
  }
  this.f_curSelection__org_gwtproject_user_client_ui_Tree_ = item;
  if (!$Equality.$same(this.f_curSelection__org_gwtproject_user_client_ui_Tree_, null)) {
   if (moveFocus) {
    this.m_moveFocus___$p_org_gwtproject_user_client_ui_Tree();
   }
   this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_setSelected__boolean(true);
   if (fireEvents) {
    SelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(this, this.f_curSelection__org_gwtproject_user_client_ui_Tree_);
   }
  }
 }
 
 m_setImages__org_gwtproject_user_client_ui_Tree_ImageAdapter__boolean_$p_org_gwtproject_user_client_ui_Tree(/** ImageAdapter */ images, /** boolean */ useLeafImages) {
  this.f_images__org_gwtproject_user_client_ui_Tree_ = images;
  this.f_useLeafImages__org_gwtproject_user_client_ui_Tree_ = useLeafImages;
  if (!useLeafImages) {
   let image = images.m_treeLeaf__().m_createImage__();
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(image.m_getElement__().style, "visibility", "hidden");
   RootPanel.m_get__().m_add__org_gwtproject_user_client_ui_Widget(image);
   let size = image.m_getWidth__() + TreeItem.f_IMAGE_PAD__org_gwtproject_user_client_ui_TreeItem;
   image.m_removeFromParent__();
   this.f_indentValue__org_gwtproject_user_client_ui_Tree_ = size + "px";
  }
 }
 
 m_showImage__org_gwtproject_user_client_ui_TreeItem__org_gwtproject_user_client_ui_AbstractImagePrototype_$p_org_gwtproject_user_client_ui_Tree(/** TreeItem */ treeItem, /** AbstractImagePrototype */ proto) {
  let holder = treeItem.m_getImageHolderElement___$pp_org_gwtproject_user_client_ui();
  let child = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(holder);
  if ($Equality.$same(child, null)) {
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(holder, proto.m_createElement__());
  } else {
   proto.m_applyTo__org_gwtproject_user_client_ui_Image(/**@type {Image}*/ (Js.m_uncheckedCast__java_lang_Object(child)));
  }
 }
 
 m_updateAriaAttributes___$p_org_gwtproject_user_client_ui_Tree() {
  let curSelectionContentElem = this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getContentElem___$pp_org_gwtproject_user_client_ui();
  let curSelectionLevel = -1;
  let tempItem = this.f_curSelection__org_gwtproject_user_client_ui_Tree_;
  while (!$Equality.$same(tempItem, null)) {
   tempItem = tempItem.m_getParentItem__();
   ++curSelectionLevel;
  }
  Roles.m_getTreeitemRole__().m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(curSelectionContentElem, curSelectionLevel + 1);
  let curSelectionParent = this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getParentItem__();
  if ($Equality.$same(curSelectionParent, null)) {
   curSelectionParent = this.f_root__org_gwtproject_user_client_ui_Tree_;
  }
  Roles.m_getTreeitemRole__().m_setAriaSetsizeProperty__org_gwtproject_dom_client_Element__int(curSelectionContentElem, curSelectionParent.m_getChildCount__());
  let curSelectionIndex = curSelectionParent.m_getChildIndex__org_gwtproject_user_client_ui_TreeItem(this.f_curSelection__org_gwtproject_user_client_ui_Tree_);
  Roles.m_getTreeitemRole__().m_setAriaPosinsetProperty__org_gwtproject_dom_client_Element__int(curSelectionContentElem, curSelectionIndex + 1);
  if (this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getChildCount__() == 0) {
   Roles.m_getTreeitemRole__().m_removeAriaExpandedState__org_gwtproject_dom_client_Element(curSelectionContentElem);
  } else {
   Roles.m_getTreeitemRole__().m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(curSelectionContentElem, ExpandedValue.m_of__boolean(this.f_curSelection__org_gwtproject_user_client_ui_Tree_.m_getState__()));
  }
  Roles.m_getTreeitemRole__().m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(curSelectionContentElem, SelectedValue.m_of__boolean(true));
  Roles.m_getTreeRole__().m_setAriaActivedescendantProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_Id(this.f_focusable__org_gwtproject_user_client_ui_Tree_, Id.m_of__org_gwtproject_dom_client_Element(curSelectionContentElem));
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
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_Tree() {
  this.f_childWidgets__org_gwtproject_user_client_ui_Tree_ = /**@type {!HashMap<Widget, TreeItem>}*/ (HashMap.$create__());
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_Tree_ = false;
  this.f_scrollOnSelectEnabled__org_gwtproject_user_client_ui_Tree_ = true;
 }
 
 static $clinit() {
  Tree.$clinit = () =>{};
  Tree.$loadModules();
  Widget.$clinit();
  Iterable.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tree;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  Id = goog.module.get('org.gwtproject.aria.client.Id$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  SelectedValue = goog.module.get('org.gwtproject.aria.client.SelectedValue$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  BlurEvent = goog.module.get('org.gwtproject.event.dom.client.BlurEvent$impl');
  FocusEvent = goog.module.get('org.gwtproject.event.dom.client.FocusEvent$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  KeyDownEvent = goog.module.get('org.gwtproject.event.dom.client.KeyDownEvent$impl');
  KeyPressEvent = goog.module.get('org.gwtproject.event.dom.client.KeyPressEvent$impl');
  KeyUpEvent = goog.module.get('org.gwtproject.event.dom.client.KeyUpEvent$impl');
  MouseDownEvent = goog.module.get('org.gwtproject.event.dom.client.MouseDownEvent$impl');
  MouseMoveEvent = goog.module.get('org.gwtproject.event.dom.client.MouseMoveEvent$impl');
  MouseOutEvent = goog.module.get('org.gwtproject.event.dom.client.MouseOutEvent$impl');
  MouseOverEvent = goog.module.get('org.gwtproject.event.dom.client.MouseOverEvent$impl');
  MouseUpEvent = goog.module.get('org.gwtproject.event.dom.client.MouseUpEvent$impl');
  MouseWheelEvent = goog.module.get('org.gwtproject.event.dom.client.MouseWheelEvent$impl');
  CloseEvent = goog.module.get('org.gwtproject.event.logical.shared.CloseEvent$impl');
  OpenEvent = goog.module.get('org.gwtproject.event.logical.shared.OpenEvent$impl');
  SelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.SelectionEvent$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  AttachDetachException = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException$impl');
  FocusPanel = goog.module.get('org.gwtproject.user.client.ui.FocusPanel$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  ImageAdapter = goog.module.get('org.gwtproject.user.client.ui.Tree.ImageAdapter$impl');
  TreeItem = goog.module.get('org.gwtproject.user.client.ui.TreeItem$impl');
  WidgetIterators = goog.module.get('org.gwtproject.user.client.ui.WidgetIterators$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Tree, 'org.gwtproject.user.client.ui.Tree');

ForIsWidget.$markImplementor(Tree);
HasWidgets_ForIsWidget.$markImplementor(Tree);
Focusable.$markImplementor(Tree);
HasAnimation.$markImplementor(Tree);
HasAllKeyHandlers.$markImplementor(Tree);
HasAllFocusHandlers.$markImplementor(Tree);
HasSelectionHandlers.$markImplementor(Tree);
HasOpenHandlers.$markImplementor(Tree);
HasCloseHandlers.$markImplementor(Tree);
HasAllMouseHandlers.$markImplementor(Tree);

exports = Tree; 
//# sourceMappingURL=Tree.js.map