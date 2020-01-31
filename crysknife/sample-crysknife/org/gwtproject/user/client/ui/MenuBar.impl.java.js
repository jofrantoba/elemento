goog.module('org.gwtproject.user.client.ui.MenuBar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CloseHandler = goog.require('org.gwtproject.event.logical.shared.CloseHandler$impl');
const HasCloseHandlers = goog.require('org.gwtproject.event.logical.shared.HasCloseHandlers$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let BlurEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurEvent$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
let FocusPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FocusPanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar.$3$impl');
let MenuPopup = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar.MenuPopup$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar.Resources$impl');
let MenuBar__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl$impl');
let MenuItem = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuItem$impl');
let MenuItemSeparator = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuItemSeparator$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasAnimation}
 * @implements {CloseHandler<PopupPanel>}
 * @implements {HasCloseHandlers<PopupPanel>}
  */
class MenuBar extends Widget {
 /** @protected */
 constructor() {
  super();
  /**@type {ArrayList<UIObject>}*/
  this.f_allItems__org_gwtproject_user_client_ui_MenuBar_;
  /**@type {ArrayList<MenuItem>}*/
  this.f_items__org_gwtproject_user_client_ui_MenuBar_;
  /**@type {Object}*/
  this.f_body__org_gwtproject_user_client_ui_MenuBar_;
  /**@type {AbstractImagePrototype}*/
  this.f_subMenuIcon__org_gwtproject_user_client_ui_MenuBar_;
  /**@type {boolean}*/
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_MenuBar_ = false;
  /**@type {MenuBar}*/
  this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_;
  /**@type {MenuPopup}*/
  this.f_popup__org_gwtproject_user_client_ui_MenuBar_;
  /**@type {MenuItem}*/
  this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_;
  /**@type {MenuBar}*/
  this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_;
  /**@type {boolean}*/
  this.f_vertical__org_gwtproject_user_client_ui_MenuBar_ = false;
  /**@type {boolean}*/
  this.f_autoOpen__org_gwtproject_user_client_ui_MenuBar_ = false;
  /**@type {boolean}*/
  this.f_focusOnHover__org_gwtproject_user_client_ui_MenuBar_ = false;
 }
 //Factory method corresponding to constructor 'MenuBar()'.
 /** @return {!MenuBar} */
 static $create__() {
  MenuBar.$clinit();
  let $instance = new MenuBar();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar__();
  return $instance;
 }
 //Initialization from constructor 'MenuBar()'.
 
 $ctor__org_gwtproject_user_client_ui_MenuBar__() {
  this.$ctor__org_gwtproject_user_client_ui_MenuBar__boolean(false);
 }
 //Factory method corresponding to constructor 'MenuBar(boolean)'.
 /** @return {!MenuBar} */
 static $create__boolean(/** boolean */ vertical) {
  MenuBar.$clinit();
  let $instance = new MenuBar();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar__boolean(vertical);
  return $instance;
 }
 //Initialization from constructor 'MenuBar(boolean)'.
 
 $ctor__org_gwtproject_user_client_ui_MenuBar__boolean(/** boolean */ vertical) {
  this.$ctor__org_gwtproject_user_client_ui_MenuBar__boolean__org_gwtproject_user_client_ui_MenuBar_Resources(vertical, MenuBar__ResourcesImpl.$create__());
 }
 //Factory method corresponding to constructor 'MenuBar(boolean, Resources)'.
 /** @return {!MenuBar} */
 static $create__boolean__org_gwtproject_user_client_ui_MenuBar_Resources(/** boolean */ vertical, /** Resources */ resources) {
  MenuBar.$clinit();
  let $instance = new MenuBar();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar__boolean__org_gwtproject_user_client_ui_MenuBar_Resources(vertical, resources);
  return $instance;
 }
 //Initialization from constructor 'MenuBar(boolean, Resources)'.
 
 $ctor__org_gwtproject_user_client_ui_MenuBar__boolean__org_gwtproject_user_client_ui_MenuBar_Resources(/** boolean */ vertical, /** Resources */ resources) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.$init___$p_org_gwtproject_user_client_ui_MenuBar();
  this.m_init__boolean__org_gwtproject_user_client_ui_AbstractImagePrototype_$p_org_gwtproject_user_client_ui_MenuBar(vertical, AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(resources.m_menuBarSubMenuIcon__()));
 }
 //Factory method corresponding to constructor 'MenuBar(Resources)'.
 /** @return {!MenuBar} */
 static $create__org_gwtproject_user_client_ui_MenuBar_Resources(/** Resources */ resources) {
  MenuBar.$clinit();
  let $instance = new MenuBar();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_user_client_ui_MenuBar_Resources(resources);
  return $instance;
 }
 //Initialization from constructor 'MenuBar(Resources)'.
 
 $ctor__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_user_client_ui_MenuBar_Resources(/** Resources */ resources) {
  this.$ctor__org_gwtproject_user_client_ui_MenuBar__boolean__org_gwtproject_user_client_ui_MenuBar_Resources(false, resources);
 }
 /** @override @return {HandlerRegistration} */
 m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(/** CloseHandler<PopupPanel> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, CloseEvent.m_getType__());
 }
 /** @return {MenuItem} */
 m_addItem__org_gwtproject_user_client_ui_MenuItem(/** MenuItem */ item) {
  return this.m_insertItem__org_gwtproject_user_client_ui_MenuItem__int(item, this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.size());
 }
 /** @return {MenuItem} */
 m_addItem__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_core_client_Scheduler_ScheduledCommand(/** SafeHtml */ html, /** ScheduledCommand */ cmd) {
  return this.m_addItem__org_gwtproject_user_client_ui_MenuItem(MenuItem.$create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_core_client_Scheduler_ScheduledCommand(html, cmd));
 }
 /** @return {MenuItem} */
 m_addItem__java_lang_String__boolean__org_gwtproject_core_client_Scheduler_ScheduledCommand(/** ?string */ text, /** boolean */ asHTML, /** ScheduledCommand */ cmd) {
  return this.m_addItem__org_gwtproject_user_client_ui_MenuItem(MenuItem.$create__java_lang_String__boolean__org_gwtproject_core_client_Scheduler_ScheduledCommand(text, asHTML, cmd));
 }
 /** @return {MenuItem} */
 m_addItem__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_user_client_ui_MenuBar(/** SafeHtml */ html, /** MenuBar */ popup) {
  return this.m_addItem__org_gwtproject_user_client_ui_MenuItem(MenuItem.$create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_user_client_ui_MenuBar(html, popup));
 }
 /** @return {MenuItem} */
 m_addItem__java_lang_String__boolean__org_gwtproject_user_client_ui_MenuBar(/** ?string */ text, /** boolean */ asHTML, /** MenuBar */ popup) {
  return this.m_addItem__org_gwtproject_user_client_ui_MenuItem(MenuItem.$create__java_lang_String__boolean__org_gwtproject_user_client_ui_MenuBar(text, asHTML, popup));
 }
 /** @return {MenuItem} */
 m_addItem__java_lang_String__org_gwtproject_core_client_Scheduler_ScheduledCommand(/** ?string */ text, /** ScheduledCommand */ cmd) {
  return this.m_addItem__org_gwtproject_user_client_ui_MenuItem(MenuItem.$create__java_lang_String__org_gwtproject_core_client_Scheduler_ScheduledCommand(text, cmd));
 }
 /** @return {MenuItem} */
 m_addItem__java_lang_String__org_gwtproject_user_client_ui_MenuBar(/** ?string */ text, /** MenuBar */ popup) {
  return this.m_addItem__org_gwtproject_user_client_ui_MenuItem(MenuItem.$create__java_lang_String__org_gwtproject_user_client_ui_MenuBar(text, popup));
 }
 /** @return {MenuItemSeparator} */
 m_addSeparator__() {
  return this.m_addSeparator__org_gwtproject_user_client_ui_MenuItemSeparator(MenuItemSeparator.$create__());
 }
 /** @return {MenuItemSeparator} */
 m_addSeparator__org_gwtproject_user_client_ui_MenuItemSeparator(/** MenuItemSeparator */ separator) {
  return this.m_insertSeparator__org_gwtproject_user_client_ui_MenuItemSeparator__int(separator, this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.size());
 }
 
 m_clearItems__() {
  this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(null);
  let container = this.m_getItemContainerElement___$p_org_gwtproject_user_client_ui_MenuBar();
  while (DOM.m_getChildCount__org_gwtproject_dom_client_Element(container) > 0) {
   container.removeChild(DOM.m_getChild__org_gwtproject_dom_client_Element__int(container, 0));
  }
  for (let $iterator = this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {UIObject}*/ ($Casts.$to($iterator.m_next__(), UIObject));
   this.m_setItemColSpan__org_gwtproject_user_client_ui_UIObject__int_$p_org_gwtproject_user_client_ui_MenuBar(item, 1);
   if (MenuItemSeparator.$isInstance(item)) {
    /**@type {MenuItemSeparator}*/ ($Casts.$to(item, MenuItemSeparator)).m_setParentMenu__org_gwtproject_user_client_ui_MenuBar_$pp_org_gwtproject_user_client_ui(null);
   } else {
    /**@type {MenuItem}*/ ($Casts.$to(item, MenuItem)).m_setParentMenu__org_gwtproject_user_client_ui_MenuBar_$pp_org_gwtproject_user_client_ui(null);
   }
  }
  this.f_items__org_gwtproject_user_client_ui_MenuBar_.clear();
  this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.clear();
 }
 
 m_closeAllChildren__boolean(/** boolean */ focus) {
  if (!$Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.m_onHide__boolean_$p_org_gwtproject_user_client_ui_MenuBar(focus);
   this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_ = null;
   this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(null);
  }
  if (!$Equality.$same(this.f_popup__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_hide__();
  }
  if (focus && !$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.m_focus__();
  }
 }
 
 m_focus__() {
  FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_focus__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @return {boolean} */
 m_getAutoOpen__() {
  return this.f_autoOpen__org_gwtproject_user_client_ui_MenuBar_;
 }
 /** @return {number} */
 m_getItemIndex__org_gwtproject_user_client_ui_MenuItem(/** MenuItem */ item) {
  return this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.indexOf(item);
 }
 /** @return {number} */
 m_getSeparatorIndex__org_gwtproject_user_client_ui_MenuItemSeparator(/** MenuItemSeparator */ item) {
  return this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.indexOf(item);
 }
 /** @return {MenuItem} */
 m_insertItem__org_gwtproject_user_client_ui_MenuItem__int(/** MenuItem */ item, /** number */ beforeIndex) {
  if (beforeIndex < 0 || beforeIndex > this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.size()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
  this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.addAtIndex(beforeIndex, item);
  let itemsIndex = 0;
  for (let i = 0; i < beforeIndex; i++) {
   if (MenuItem.$isInstance(this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.getAtIndex(i))) {
    itemsIndex++;
   }
  }
  this.f_items__org_gwtproject_user_client_ui_MenuBar_.addAtIndex(itemsIndex, item);
  this.m_addItemElement__int__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_MenuBar(beforeIndex, item.m_getElement__());
  item.m_setParentMenu__org_gwtproject_user_client_ui_MenuBar_$pp_org_gwtproject_user_client_ui(this);
  item.m_setSelectionStyle__boolean(false);
  this.m_updateSubmenuIcon__org_gwtproject_user_client_ui_MenuItem_$pp_org_gwtproject_user_client_ui(item);
  return item;
 }
 /** @return {MenuItemSeparator} */
 m_insertSeparator__int(/** number */ beforeIndex) {
  return this.m_insertSeparator__org_gwtproject_user_client_ui_MenuItemSeparator__int(MenuItemSeparator.$create__(), beforeIndex);
 }
 /** @return {MenuItemSeparator} */
 m_insertSeparator__org_gwtproject_user_client_ui_MenuItemSeparator__int(/** MenuItemSeparator */ separator, /** number */ beforeIndex) {
  if (beforeIndex < 0 || beforeIndex > this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.size()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
  if (this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   this.m_setItemColSpan__org_gwtproject_user_client_ui_UIObject__int_$p_org_gwtproject_user_client_ui_MenuBar(separator, 2);
  }
  this.m_addItemElement__int__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_MenuBar(beforeIndex, separator.m_getElement__());
  separator.m_setParentMenu__org_gwtproject_user_client_ui_MenuBar_$pp_org_gwtproject_user_client_ui(this);
  this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.addAtIndex(beforeIndex, separator);
  return separator;
 }
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return this.f_isAnimationEnabled__org_gwtproject_user_client_ui_MenuBar_;
 }
 /** @return {boolean} */
 m_isFocusOnHoverEnabled__() {
  return this.f_focusOnHover__org_gwtproject_user_client_ui_MenuBar_;
 }
 
 m_moveSelectionDown__() {
  if (this.m_selectFirstItemIfNoneSelected___$p_org_gwtproject_user_client_ui_MenuBar()) {
   return;
  }
  if (this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   this.m_selectNextItem___$p_org_gwtproject_user_client_ui_MenuBar();
  } else {
   if (!$Equality.$same(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_.m_getSubMenu__(), null) && !this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_.m_getSubMenu__().m_getItems__().isEmpty() && ($Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null) || $Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.m_getSelectedItem__(), null))) {
    if ($Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
     this.m_doItemAction__org_gwtproject_user_client_ui_MenuItem__boolean__boolean_$pp_org_gwtproject_user_client_ui(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_, false, true);
    }
    this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_.m_getSubMenu__().m_focus__();
   } else if (!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
    if (this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
     this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.m_selectNextItem___$p_org_gwtproject_user_client_ui_MenuBar();
    } else {
     this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.m_moveSelectionDown__();
    }
   }
  }
 }
 
 m_moveSelectionUp__() {
  if (this.m_selectFirstItemIfNoneSelected___$p_org_gwtproject_user_client_ui_MenuBar()) {
   return;
  }
  if ($Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null) && this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   this.m_selectPrevItem___$p_org_gwtproject_user_client_ui_MenuBar();
  } else if ((!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null)) && this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.m_selectPrevItem___$p_org_gwtproject_user_client_ui_MenuBar();
  } else {
   this.m_close__boolean_$p_org_gwtproject_user_client_ui_MenuBar(true);
  }
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  let item = this.m_findItem__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_MenuBar(DOM.m_eventGetTarget__org_gwtproject_user_client_Event(event));
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONCLICK__org_gwtproject_user_client_Event: 
    {
     FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_focus__org_gwtproject_dom_client_Element(this.m_getElement__());
     if (!$Equality.$same(item, null)) {
      this.m_doItemAction__org_gwtproject_user_client_ui_MenuItem__boolean__boolean_$pp_org_gwtproject_user_client_ui(item, true, true);
     }
     break;
    }
   case Event.f_ONMOUSEOVER__org_gwtproject_user_client_Event: 
    {
     if (!$Equality.$same(item, null)) {
      this.m_itemOver__org_gwtproject_user_client_ui_MenuItem__boolean_$pp_org_gwtproject_user_client_ui(item, true);
     }
     break;
    }
   case Event.f_ONMOUSEOUT__org_gwtproject_user_client_Event: 
    {
     if (!$Equality.$same(item, null)) {
      this.m_itemOver__org_gwtproject_user_client_ui_MenuItem__boolean_$pp_org_gwtproject_user_client_ui(null, false);
     }
     break;
    }
   case Event.f_ONFOCUS__org_gwtproject_user_client_Event: 
    {
     this.m_selectFirstItemIfNoneSelected___$p_org_gwtproject_user_client_ui_MenuBar();
     break;
    }
   case Event.f_ONKEYDOWN__org_gwtproject_user_client_Event: 
    {
     let keyCode = $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event);
     let isRtl = LocaleInfo.m_getCurrentLocale__().m_isRTL__();
     keyCode = KeyCodes.m_maybeSwapArrowKeysForRtl__int__boolean(keyCode, isRtl);
     switch (keyCode) {
      case KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes: 
       this.m_moveToPrevItem___$p_org_gwtproject_user_client_ui_MenuBar();
       this.m_eatEvent__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_MenuBar(event);
       break;
      case KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes: 
       this.m_moveToNextItem___$p_org_gwtproject_user_client_ui_MenuBar();
       this.m_eatEvent__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_MenuBar(event);
       break;
      case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
       this.m_moveSelectionUp__();
       this.m_eatEvent__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_MenuBar(event);
       break;
      case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
       this.m_moveSelectionDown__();
       this.m_eatEvent__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_MenuBar(event);
       break;
      case KeyCodes.f_KEY_ESCAPE__org_gwtproject_event_dom_client_KeyCodes: 
       this.m_closeAllParentsAndChildren___$pp_org_gwtproject_user_client_ui();
       this.m_eatEvent__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_MenuBar(event);
       break;
      case KeyCodes.f_KEY_TAB__org_gwtproject_event_dom_client_KeyCodes: 
       this.m_closeAllParentsAndChildren___$pp_org_gwtproject_user_client_ui();
       break;
      case KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes: 
       if (!this.m_selectFirstItemIfNoneSelected___$p_org_gwtproject_user_client_ui_MenuBar()) {
        this.m_doItemAction__org_gwtproject_user_client_ui_MenuItem__boolean__boolean_$pp_org_gwtproject_user_client_ui(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_, true, true);
        this.m_eatEvent__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_MenuBar(event);
       }
       break;
     }
     break;
    }
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /** @override */
 m_onClose__org_gwtproject_event_logical_shared_CloseEvent(/** CloseEvent<PopupPanel> */ event) {
  let sender = /**@type {PopupPanel}*/ ($Casts.$to(event.m_getTarget__(), PopupPanel));
  let autoClosed = event.m_isAutoClosed__();
  if (autoClosed) {
   this.m_closeAllParents___$pp_org_gwtproject_user_client_ui();
  }
  this.m_onHide__boolean_$p_org_gwtproject_user_client_ui_MenuBar(!autoClosed && this.f_focusOnHover__org_gwtproject_user_client_ui_MenuBar_);
  CloseEvent.m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object(this, sender);
  this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_ = null;
  this.f_popup__org_gwtproject_user_client_ui_MenuBar_ = null;
  if (!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null) && !$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_popup__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_setPreviewingAllNativeEvents__boolean(true);
  }
 }
 
 m_removeItem__org_gwtproject_user_client_ui_MenuItem(/** MenuItem */ item) {
  if ($Equality.$same(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_, item)) {
   this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(null);
  }
  if (this.m_removeItemElement__org_gwtproject_user_client_ui_UIObject_$p_org_gwtproject_user_client_ui_MenuBar(item)) {
   this.m_setItemColSpan__org_gwtproject_user_client_ui_UIObject__int_$p_org_gwtproject_user_client_ui_MenuBar(item, 1);
   this.f_items__org_gwtproject_user_client_ui_MenuBar_.remove(item);
   item.m_setParentMenu__org_gwtproject_user_client_ui_MenuBar_$pp_org_gwtproject_user_client_ui(null);
  }
 }
 
 m_removeSeparator__org_gwtproject_user_client_ui_MenuItemSeparator(/** MenuItemSeparator */ separator) {
  if (this.m_removeItemElement__org_gwtproject_user_client_ui_UIObject_$p_org_gwtproject_user_client_ui_MenuBar(separator)) {
   separator.m_setParentMenu__org_gwtproject_user_client_ui_MenuBar_$pp_org_gwtproject_user_client_ui(null);
  }
 }
 
 m_selectItem__org_gwtproject_user_client_ui_MenuItem(/** MenuItem */ item) {
  $Asserts.$assert($Equality.$same(item, null) || $Equality.$same(item.m_getParentMenu__(), this));
  if ($Equality.$same(item, this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_)) {
   return;
  }
  if (!$Equality.$same(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_.m_setSelectionStyle__boolean(false);
   if (this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
    let tr = DOM.m_getParent__org_gwtproject_dom_client_Element(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_.m_getElement__());
    if (DOM.m_getChildCount__org_gwtproject_dom_client_Element(tr) == 2) {
     let td = DOM.m_getChild__org_gwtproject_dom_client_Element__int(tr, 1);
     UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(td, "subMenuIcon-selected", false);
    }
   }
  }
  if (!$Equality.$same(item, null)) {
   item.m_setSelectionStyle__boolean(true);
   if (this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
    let tr_1 = DOM.m_getParent__org_gwtproject_dom_client_Element(item.m_getElement__());
    if (DOM.m_getChildCount__org_gwtproject_dom_client_Element(tr_1) == 2) {
     let td_1 = DOM.m_getChild__org_gwtproject_dom_client_Element__int(tr_1, 1);
     UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(td_1, "subMenuIcon-selected", true);
    }
   }
   Roles.m_getMenubarRole__().m_setAriaActivedescendantProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_Id(this.m_getElement__(), Id.m_of__org_gwtproject_dom_client_Element(item.m_getElement__()));
  }
  this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_ = item;
 }
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ enable) {
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_MenuBar_ = enable;
 }
 
 m_setAutoOpen__boolean(/** boolean */ autoOpen) {
  this.f_autoOpen__org_gwtproject_user_client_ui_MenuBar_ = autoOpen;
 }
 
 m_setFocusOnHoverEnabled__boolean(/** boolean */ enabled) {
  this.f_focusOnHover__org_gwtproject_user_client_ui_MenuBar_ = enabled;
 }
 /** @return {List<MenuItem>} */
 m_getItems__() {
  return this.f_items__org_gwtproject_user_client_ui_MenuBar_;
 }
 /** @return {MenuItem} */
 m_getSelectedItem__() {
  return this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_;
 }
 /** @override */
 m_onDetach__() {
  if (!$Equality.$same(this.f_popup__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_hide__();
  }
  super.m_onDetach__();
 }
 /** @override */
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  this.m_setMenuItemDebugIds__java_lang_String_$pp_org_gwtproject_user_client_ui(baseID);
 }
 
 m_closeAllParents___$pp_org_gwtproject_user_client_ui() {
  if (!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.m_close__boolean_$p_org_gwtproject_user_client_ui_MenuBar(false);
  } else {
   this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(null);
  }
 }
 
 m_closeAllParentsAndChildren___$pp_org_gwtproject_user_client_ui() {
  this.m_closeAllParents___$pp_org_gwtproject_user_client_ui();
  if ($Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null) && !$Equality.$same(this.f_popup__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_hide__();
  }
 }
 
 m_doItemAction__org_gwtproject_user_client_ui_MenuItem__boolean__boolean_$pp_org_gwtproject_user_client_ui(/** MenuItem */ item, /** boolean */ fireCommand, /** boolean */ focus) {
  if (!item.m_isEnabled__()) {
   return;
  }
  this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(item);
  if (fireCommand && !$Equality.$same(item.m_getScheduledCommand__(), null)) {
   this.m_closeAllParents___$pp_org_gwtproject_user_client_ui();
   FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_blur__org_gwtproject_dom_client_Element(this.m_getElement__());
   let cmd = item.m_getScheduledCommand__();
   Scheduler.m_get__().m_scheduleFinally__org_gwtproject_core_client_Scheduler_ScheduledCommand($1.$create__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_core_client_Scheduler_ScheduledCommand(this, cmd));
   if (!$Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
    this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.m_onHide__boolean_$p_org_gwtproject_user_client_ui_MenuBar(focus);
    this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_hide__();
    this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_ = null;
    this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(null);
   }
  } else if (!$Equality.$same(item.m_getSubMenu__(), null)) {
   if ($Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
    this.m_openPopup__org_gwtproject_user_client_ui_MenuItem_$p_org_gwtproject_user_client_ui_MenuBar(item);
   } else if (!$Equality.$same(item.m_getSubMenu__(), this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_)) {
    this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.m_onHide__boolean_$p_org_gwtproject_user_client_ui_MenuBar(focus);
    this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_hide__();
    this.m_openPopup__org_gwtproject_user_client_ui_MenuItem_$p_org_gwtproject_user_client_ui_MenuBar(item);
   } else if (fireCommand && !this.f_autoOpen__org_gwtproject_user_client_ui_MenuBar_) {
    this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.m_onHide__boolean_$p_org_gwtproject_user_client_ui_MenuBar(focus);
    this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_hide__();
    this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_ = null;
    this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(item);
   }
  } else if (this.f_autoOpen__org_gwtproject_user_client_ui_MenuBar_ && !$Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.m_onHide__boolean_$p_org_gwtproject_user_client_ui_MenuBar(focus);
   this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_hide__();
   this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_ = null;
  }
 }
 /** @return {PopupPanel} */
 m_getPopup___$pp_org_gwtproject_user_client_ui() {
  return this.f_popup__org_gwtproject_user_client_ui_MenuBar_;
 }
 
 m_itemOver__org_gwtproject_user_client_ui_MenuItem__boolean_$pp_org_gwtproject_user_client_ui(/** MenuItem */ item, /** boolean */ focus) {
  if ($Equality.$same(item, null)) {
   if ((!$Equality.$same(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_, null)) && !$Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null) && $Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_.m_getSubMenu__())) {
    return;
   }
  }
  if (!$Equality.$same(item, null) && !item.m_isEnabled__()) {
   return;
  }
  this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(item);
  if (focus && this.f_focusOnHover__org_gwtproject_user_client_ui_MenuBar_) {
   this.m_focus__();
  }
  if (!$Equality.$same(item, null)) {
   if ((!$Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) || (!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null)) || this.f_autoOpen__org_gwtproject_user_client_ui_MenuBar_) {
    this.m_doItemAction__org_gwtproject_user_client_ui_MenuItem__boolean__boolean_$pp_org_gwtproject_user_client_ui(item, false, this.f_focusOnHover__org_gwtproject_user_client_ui_MenuBar_);
   }
  }
 }
 
 m_setMenuItemDebugIds__java_lang_String_$pp_org_gwtproject_user_client_ui(/** ?string */ baseID) {
  let itemCount = 0;
  for (let $iterator = this.f_items__org_gwtproject_user_client_ui_MenuBar_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__(), MenuItem));
   item.m_ensureDebugId__java_lang_String(j_l_String.m_valueOf__java_lang_Object(baseID) + "-item" + itemCount);
   itemCount++;
  }
 }
 
 m_updateSubmenuIcon__org_gwtproject_user_client_ui_MenuItem_$pp_org_gwtproject_user_client_ui(/** MenuItem */ item) {
  if (!this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   return;
  }
  let idx = this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.indexOf(item);
  if (idx == -1) {
   return;
  }
  let container = this.m_getItemContainerElement___$p_org_gwtproject_user_client_ui_MenuBar();
  let tr = DOM.m_getChild__org_gwtproject_dom_client_Element__int(container, idx);
  let tdCount = DOM.m_getChildCount__org_gwtproject_dom_client_Element(tr);
  let submenu = item.m_getSubMenu__();
  if ($Equality.$same(submenu, null)) {
   if (tdCount == 2) {
    tr.removeChild(DOM.m_getChild__org_gwtproject_dom_client_Element__int(tr, 1));
   }
   this.m_setItemColSpan__org_gwtproject_user_client_ui_UIObject__int_$p_org_gwtproject_user_client_ui_MenuBar(item, 2);
  } else if (tdCount == 1) {
   this.m_setItemColSpan__org_gwtproject_user_client_ui_UIObject__int_$p_org_gwtproject_user_client_ui_MenuBar(item, 1);
   let td = DOM.m_createTD__();
   Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(td, "vAlign", "middle");
   Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(td, this.f_subMenuIcon__org_gwtproject_user_client_ui_MenuBar_.m_getSafeHtml__());
   UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(td, "subMenuIcon");
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tr, td);
  }
 }
 
 m_addItemElement__int__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_MenuBar(/** number */ beforeIndex, /** Object */ tdElem) {
  if (this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   let tr = DOM.m_createTR__();
   DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_MenuBar_, tr, beforeIndex);
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tr, tdElem);
  } else {
   let tr_1 = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_MenuBar_, 0);
   DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(tr_1, tdElem, beforeIndex);
  }
 }
 
 m_close__boolean_$p_org_gwtproject_user_client_ui_MenuBar(/** boolean */ focus) {
  if (!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_hide__boolean(!focus);
   if (focus) {
    this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.m_focus__();
   }
  }
 }
 
 m_eatEvent__org_gwtproject_user_client_Event_$p_org_gwtproject_user_client_ui_MenuBar(/** Event */ event) {
  $Overlay.m_stopPropagation__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
 }
 /** @return {MenuItem} */
 m_findItem__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_MenuBar(/** Object */ hItem) {
  for (let $iterator = this.f_items__org_gwtproject_user_client_ui_MenuBar_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__(), MenuItem));
   if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(item.m_getElement__(), hItem)) {
    return item;
   }
  }
  return null;
 }
 /** @return {Object} */
 m_getItemContainerElement___$p_org_gwtproject_user_client_ui_MenuBar() {
  if (this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   return this.f_body__org_gwtproject_user_client_ui_MenuBar_;
  } else {
   return DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_MenuBar_, 0);
  }
 }
 
 m_init__boolean__org_gwtproject_user_client_ui_AbstractImagePrototype_$p_org_gwtproject_user_client_ui_MenuBar(/** boolean */ vertical, /** AbstractImagePrototype */ subMenuIcon) {
  this.f_subMenuIcon__org_gwtproject_user_client_ui_MenuBar_ = subMenuIcon;
  let table = DOM.m_createTable__();
  this.f_body__org_gwtproject_user_client_ui_MenuBar_ = DOM.m_createTBody__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(table, this.f_body__org_gwtproject_user_client_ui_MenuBar_);
  if (!vertical) {
   let tr = DOM.m_createTR__();
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_body__org_gwtproject_user_client_ui_MenuBar_, tr);
  }
  this.f_vertical__org_gwtproject_user_client_ui_MenuBar_ = vertical;
  let outer = FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_createFocusable__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(outer, table);
  this.m_setElement__org_gwtproject_dom_client_Element(outer);
  Roles.m_getMenubarRole__().m_set__org_gwtproject_dom_client_Element(this.m_getElement__());
  this.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_ONMOUSEOVER__org_gwtproject_user_client_Event | Event.f_ONMOUSEOUT__org_gwtproject_user_client_Event | Event.f_ONFOCUS__org_gwtproject_user_client_Event | Event.f_ONKEYDOWN__org_gwtproject_user_client_Event);
  this.m_setStyleName__java_lang_String(MenuBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_MenuBar_);
  if (vertical) {
   this.m_addStyleDependentName__java_lang_String("vertical");
  } else {
   this.m_addStyleDependentName__java_lang_String("horizontal");
  }
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "outline", "0px");
  this.m_getElement__().setAttribute("hideFocus", "true");
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type($2.$create__org_gwtproject_user_client_ui_MenuBar(this), BlurEvent.m_getType__());
 }
 
 m_moveToNextItem___$p_org_gwtproject_user_client_ui_MenuBar() {
  if (this.m_selectFirstItemIfNoneSelected___$p_org_gwtproject_user_client_ui_MenuBar()) {
   return;
  }
  if (!this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   this.m_selectNextItem___$p_org_gwtproject_user_client_ui_MenuBar();
  } else {
   if (!$Equality.$same(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_.m_getSubMenu__(), null) && !this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_.m_getSubMenu__().m_getItems__().isEmpty() && ($Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null) || $Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.m_getSelectedItem__(), null))) {
    if ($Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
     this.m_doItemAction__org_gwtproject_user_client_ui_MenuItem__boolean__boolean_$pp_org_gwtproject_user_client_ui(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_, false, true);
    }
    this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_.m_getSubMenu__().m_focus__();
   } else if (!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
    if (!this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
     this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.m_selectNextItem___$p_org_gwtproject_user_client_ui_MenuBar();
    } else {
     this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.m_moveToNextItem___$p_org_gwtproject_user_client_ui_MenuBar();
    }
   }
  }
 }
 
 m_moveToPrevItem___$p_org_gwtproject_user_client_ui_MenuBar() {
  if (this.m_selectFirstItemIfNoneSelected___$p_org_gwtproject_user_client_ui_MenuBar()) {
   return;
  }
  if (!this.f_vertical__org_gwtproject_user_client_ui_MenuBar_) {
   this.m_selectPrevItem___$p_org_gwtproject_user_client_ui_MenuBar();
  } else {
   if ((!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null)) && (!this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_vertical__org_gwtproject_user_client_ui_MenuBar_)) {
    this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.m_selectPrevItem___$p_org_gwtproject_user_client_ui_MenuBar();
   } else {
    this.m_close__boolean_$p_org_gwtproject_user_client_ui_MenuBar(true);
   }
  }
 }
 
 m_onHide__boolean_$p_org_gwtproject_user_client_ui_MenuBar(/** boolean */ focus) {
  if (!$Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.m_onHide__boolean_$p_org_gwtproject_user_client_ui_MenuBar(focus);
   this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_hide__();
   if (focus) {
    this.m_focus__();
   }
  }
 }
 
 m_openPopup__org_gwtproject_user_client_ui_MenuItem_$p_org_gwtproject_user_client_ui_MenuBar(/** MenuItem */ item) {
  if (!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null) && !$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_popup__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_setPreviewingAllNativeEvents__boolean(false);
  }
  this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_ = item.m_getSubMenu__();
  this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.m_selectItem__org_gwtproject_user_client_ui_MenuItem(null);
  this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_ = this;
  this.f_popup__org_gwtproject_user_client_ui_MenuBar_ = MenuPopup.$create__org_gwtproject_user_client_ui_MenuBar(this);
  this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_setWidget__org_gwtproject_user_client_ui_Widget(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_);
  this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(this);
  this.f_popup__org_gwtproject_user_client_ui_MenuBar_.m_setPopupPositionAndShow__org_gwtproject_user_client_ui_PopupPanel_PositionCallback($3.$create__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_user_client_ui_MenuItem(this, item));
 }
 /** @return {boolean} */
 m_removeItemElement__org_gwtproject_user_client_ui_UIObject_$p_org_gwtproject_user_client_ui_MenuBar(/** UIObject */ item) {
  let idx = this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.indexOf(item);
  if (idx == -1) {
   return false;
  }
  let container = this.m_getItemContainerElement___$p_org_gwtproject_user_client_ui_MenuBar();
  container.removeChild(DOM.m_getChild__org_gwtproject_dom_client_Element__int(container, idx));
  this.f_allItems__org_gwtproject_user_client_ui_MenuBar_.removeAtIndex(idx);
  return true;
 }
 /** @return {boolean} */
 m_selectFirstItemIfNoneSelected___$p_org_gwtproject_user_client_ui_MenuBar() {
  if ($Equality.$same(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_, null)) {
   for (let $iterator = this.f_items__org_gwtproject_user_client_ui_MenuBar_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let nextItem = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__(), MenuItem));
    if (nextItem.m_isEnabled__()) {
     this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(nextItem);
     break;
    }
   }
   return true;
  }
  return false;
 }
 
 m_selectNextItem___$p_org_gwtproject_user_client_ui_MenuBar() {
  if ($Equality.$same(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_, null)) {
   return;
  }
  let index = this.f_items__org_gwtproject_user_client_ui_MenuBar_.indexOf(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_);
  $Asserts.$assert((index != -1));
  let /** MenuItem */ itemToBeSelected;
  let firstIndex = index;
  while (true) {
   index = index + 1;
   if (index == this.f_items__org_gwtproject_user_client_ui_MenuBar_.size()) {
    index = 0;
   }
   if (index == firstIndex) {
    itemToBeSelected = /**@type {MenuItem}*/ ($Casts.$to(this.f_items__org_gwtproject_user_client_ui_MenuBar_.getAtIndex(firstIndex), MenuItem));
    break;
   } else {
    itemToBeSelected = /**@type {MenuItem}*/ ($Casts.$to(this.f_items__org_gwtproject_user_client_ui_MenuBar_.getAtIndex(index), MenuItem));
    if (itemToBeSelected.m_isEnabled__()) {
     break;
    }
   }
  }
  this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(itemToBeSelected);
  if (!$Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.m_doItemAction__org_gwtproject_user_client_ui_MenuItem__boolean__boolean_$pp_org_gwtproject_user_client_ui(itemToBeSelected, false, true);
  }
 }
 
 m_selectPrevItem___$p_org_gwtproject_user_client_ui_MenuBar() {
  if ($Equality.$same(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_, null)) {
   return;
  }
  let index = this.f_items__org_gwtproject_user_client_ui_MenuBar_.indexOf(this.f_selectedItem__org_gwtproject_user_client_ui_MenuBar_);
  $Asserts.$assert((index != -1));
  let /** MenuItem */ itemToBeSelected;
  let firstIndex = index;
  while (true) {
   index = index - 1;
   if (index < 0) {
    index = this.f_items__org_gwtproject_user_client_ui_MenuBar_.size() - 1;
   }
   if (index == firstIndex) {
    itemToBeSelected = /**@type {MenuItem}*/ ($Casts.$to(this.f_items__org_gwtproject_user_client_ui_MenuBar_.getAtIndex(firstIndex), MenuItem));
    break;
   } else {
    itemToBeSelected = /**@type {MenuItem}*/ ($Casts.$to(this.f_items__org_gwtproject_user_client_ui_MenuBar_.getAtIndex(index), MenuItem));
    if (itemToBeSelected.m_isEnabled__()) {
     break;
    }
   }
  }
  this.m_selectItem__org_gwtproject_user_client_ui_MenuItem(itemToBeSelected);
  if (!$Equality.$same(this.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.m_doItemAction__org_gwtproject_user_client_ui_MenuItem__boolean__boolean_$pp_org_gwtproject_user_client_ui(itemToBeSelected, false, true);
  }
 }
 
 m_setItemColSpan__org_gwtproject_user_client_ui_UIObject__int_$p_org_gwtproject_user_client_ui_MenuBar(/** UIObject */ item, /** number */ colspan) {
  Element_$Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(item.m_getElement__(), "colSpan", colspan);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_MenuBar() {
  this.f_allItems__org_gwtproject_user_client_ui_MenuBar_ = /**@type {!ArrayList<UIObject>}*/ (ArrayList.$create__());
  this.f_items__org_gwtproject_user_client_ui_MenuBar_ = /**@type {!ArrayList<MenuItem>}*/ (ArrayList.$create__());
  this.f_subMenuIcon__org_gwtproject_user_client_ui_MenuBar_ = null;
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_MenuBar_ = false;
  this.f_focusOnHover__org_gwtproject_user_client_ui_MenuBar_ = true;
 }
 
 static $clinit() {
  MenuBar.$clinit = () =>{};
  MenuBar.$loadModules();
  Widget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuBar;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Id = goog.module.get('org.gwtproject.aria.client.Id$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  BlurEvent = goog.module.get('org.gwtproject.event.dom.client.BlurEvent$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  CloseEvent = goog.module.get('org.gwtproject.event.logical.shared.CloseEvent$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  AbstractImagePrototype = goog.module.get('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
  FocusPanel = goog.module.get('org.gwtproject.user.client.ui.FocusPanel$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.MenuBar.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.MenuBar.$2$impl');
  $3 = goog.module.get('org.gwtproject.user.client.ui.MenuBar.$3$impl');
  MenuPopup = goog.module.get('org.gwtproject.user.client.ui.MenuBar.MenuPopup$impl');
  MenuBar__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl$impl');
  MenuItem = goog.module.get('org.gwtproject.user.client.ui.MenuItem$impl');
  MenuItemSeparator = goog.module.get('org.gwtproject.user.client.ui.MenuItemSeparator$impl');
  PopupPanel = goog.module.get('org.gwtproject.user.client.ui.PopupPanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(MenuBar, 'org.gwtproject.user.client.ui.MenuBar');

HasAnimation.$markImplementor(MenuBar);
CloseHandler.$markImplementor(MenuBar);
HasCloseHandlers.$markImplementor(MenuBar);

/**@const {?string}*/
MenuBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_MenuBar_ = "gwt-MenuBar";

exports = MenuBar; 
//# sourceMappingURL=MenuBar.js.map