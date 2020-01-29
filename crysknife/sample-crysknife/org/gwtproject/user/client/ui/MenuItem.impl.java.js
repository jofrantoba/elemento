goog.module('org.gwtproject.user.client.ui.MenuItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');
const HasEnabled = goog.require('org.gwtproject.user.client.ui.HasEnabled$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');
const UIObject = goog.require('org.gwtproject.user.client.ui.UIObject$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Command = goog.forwardDeclare('org.gwtproject.user.client.Command$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let FocusPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FocusPanel$impl');
let MenuBar = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuItem.$1$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasHTML}
 * @implements {HasEnabled}
 * @implements {HasSafeHtml}
  */
class MenuItem extends UIObject {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ScheduledCommand} */
  this.f_command__org_gwtproject_user_client_ui_MenuItem_;
  /** @public {MenuBar} */
  this.f_parentMenu__org_gwtproject_user_client_ui_MenuItem_;
  /** @public {MenuBar} */
  this.f_subMenu__org_gwtproject_user_client_ui_MenuItem_;
  /** @public {boolean} */
  this.f_enabled__org_gwtproject_user_client_ui_MenuItem_ = false;
 }
 /**
  * Factory method corresponding to constructor 'MenuItem(SafeHtml)'.
  * @param {SafeHtml} html
  * @return {!MenuItem}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(html) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItem__org_gwtproject_safehtml_shared_SafeHtml(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'MenuItem(SafeHtml)'.
  * @param {SafeHtml} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuItem__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean(html.m_asString__(), true);
 }
 /**
  * Factory method corresponding to constructor 'MenuItem(SafeHtml, ScheduledCommand)'.
  * @param {SafeHtml} html
  * @param {ScheduledCommand} cmd
  * @return {!MenuItem}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_core_client_Scheduler_ScheduledCommand(html, cmd) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItem__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_core_client_Scheduler_ScheduledCommand(html, cmd);
  return $instance;
 }
 /**
  * Initialization from constructor 'MenuItem(SafeHtml, ScheduledCommand)'.
  * @param {SafeHtml} html
  * @param {ScheduledCommand} cmd
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuItem__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_core_client_Scheduler_ScheduledCommand(html, cmd) {
  this.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean__org_gwtproject_core_client_Scheduler_ScheduledCommand(html.m_asString__(), true, cmd);
 }
 /**
  * Factory method corresponding to constructor 'MenuItem(SafeHtml, MenuBar)'.
  * @param {SafeHtml} html
  * @param {MenuBar} subMenu
  * @return {!MenuItem}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_user_client_ui_MenuBar(html, subMenu) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItem__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_user_client_ui_MenuBar(html, subMenu);
  return $instance;
 }
 /**
  * Initialization from constructor 'MenuItem(SafeHtml, MenuBar)'.
  * @param {SafeHtml} html
  * @param {MenuBar} subMenu
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuItem__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_user_client_ui_MenuBar(html, subMenu) {
  this.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean__org_gwtproject_user_client_ui_MenuBar(html.m_asString__(), true, subMenu);
 }
 /**
  * Factory method corresponding to constructor 'MenuItem(String, boolean, ScheduledCommand)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {ScheduledCommand} cmd
  * @return {!MenuItem}
  * @public
  */
 static $create__java_lang_String__boolean__org_gwtproject_core_client_Scheduler_ScheduledCommand(text, asHTML, cmd) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean__org_gwtproject_core_client_Scheduler_ScheduledCommand(text, asHTML, cmd);
  return $instance;
 }
 /**
  * Initialization from constructor 'MenuItem(String, boolean, ScheduledCommand)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {ScheduledCommand} cmd
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean__org_gwtproject_core_client_Scheduler_ScheduledCommand(text, asHTML, cmd) {
  this.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean(text, asHTML);
  this.m_setScheduledCommand__org_gwtproject_core_client_Scheduler_ScheduledCommand(cmd);
 }
 /**
  * Factory method corresponding to constructor 'MenuItem(String, boolean, MenuBar)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {MenuBar} subMenu
  * @return {!MenuItem}
  * @public
  */
 static $create__java_lang_String__boolean__org_gwtproject_user_client_ui_MenuBar(text, asHTML, subMenu) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean__org_gwtproject_user_client_ui_MenuBar(text, asHTML, subMenu);
  return $instance;
 }
 /**
  * Initialization from constructor 'MenuItem(String, boolean, MenuBar)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {MenuBar} subMenu
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean__org_gwtproject_user_client_ui_MenuBar(text, asHTML, subMenu) {
  this.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean(text, asHTML);
  this.m_setSubMenu__org_gwtproject_user_client_ui_MenuBar(subMenu);
 }
 /**
  * Factory method corresponding to constructor 'MenuItem(String, ScheduledCommand)'.
  * @param {?string} text
  * @param {ScheduledCommand} cmd
  * @return {!MenuItem}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_core_client_Scheduler_ScheduledCommand(text, cmd) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__org_gwtproject_core_client_Scheduler_ScheduledCommand(text, cmd);
  return $instance;
 }
 /**
  * Initialization from constructor 'MenuItem(String, ScheduledCommand)'.
  * @param {?string} text
  * @param {ScheduledCommand} cmd
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__org_gwtproject_core_client_Scheduler_ScheduledCommand(text, cmd) {
  this.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean(text, false);
  this.m_setScheduledCommand__org_gwtproject_core_client_Scheduler_ScheduledCommand(cmd);
 }
 /**
  * Factory method corresponding to constructor 'MenuItem(String, MenuBar)'.
  * @param {?string} text
  * @param {MenuBar} subMenu
  * @return {!MenuItem}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_user_client_ui_MenuBar(text, subMenu) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__org_gwtproject_user_client_ui_MenuBar(text, subMenu);
  return $instance;
 }
 /**
  * Initialization from constructor 'MenuItem(String, MenuBar)'.
  * @param {?string} text
  * @param {MenuBar} subMenu
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__org_gwtproject_user_client_ui_MenuBar(text, subMenu) {
  this.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean(text, false);
  this.m_setSubMenu__org_gwtproject_user_client_ui_MenuBar(subMenu);
 }
 /**
  * Factory method corresponding to constructor 'MenuItem(String, boolean)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @return {!MenuItem}
  * @public
  */
 static $create__java_lang_String__boolean(text, asHTML) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean(text, asHTML);
  return $instance;
 }
 /**
  * Initialization from constructor 'MenuItem(String, boolean)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean(text, asHTML) {
  this.$ctor__org_gwtproject_user_client_ui_UIObject__();
  this.$init___$p_org_gwtproject_user_client_ui_MenuItem();
  this.m_setElement__org_gwtproject_dom_client_Element(DOM.m_createTD__());
  this.m_setSelectionStyle__boolean(false);
  if (asHTML) {
   this.m_setHTML__java_lang_String(text);
  } else {
   this.m_setText__java_lang_String(text);
  }
  this.m_setStyleName__java_lang_String("gwt-MenuItem");
  this.m_getElement__().setAttribute("id", DOM.m_createUniqueId__());
  Roles.m_getMenuitemRole__().m_set__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @return {Command}
  * @public
  * @deprecated
  */
 m_getCommand__() {
  let /** Command */ rtnVal;
  if ($Equality.$same(this.f_command__org_gwtproject_user_client_ui_MenuItem_, null)) {
   rtnVal = null;
  } else if (Command.$isInstance(this.f_command__org_gwtproject_user_client_ui_MenuItem_)) {
   rtnVal = /**@type {Command} */ ($Casts.$to(this.f_command__org_gwtproject_user_client_ui_MenuItem_, Command));
  } else {
   rtnVal = $1.$create__org_gwtproject_user_client_ui_MenuItem(this);
  }
  return rtnVal;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getHTML__() {
  return $Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @return {MenuBar}
  * @public
  */
 m_getParentMenu__() {
  return this.f_parentMenu__org_gwtproject_user_client_ui_MenuItem_;
 }
 /**
  * @return {ScheduledCommand}
  * @public
  */
 m_getScheduledCommand__() {
  return this.f_command__org_gwtproject_user_client_ui_MenuItem_;
 }
 /**
  * @return {MenuBar}
  * @public
  */
 m_getSubMenu__() {
  return this.f_subMenu__org_gwtproject_user_client_ui_MenuItem_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return $Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {
  return this.f_enabled__org_gwtproject_user_client_ui_MenuItem_;
 }
 /**
  * @param {Command} cmd
  * @public
  * @deprecated
  */
 m_setCommand__org_gwtproject_user_client_Command(cmd) {
  this.f_command__org_gwtproject_user_client_ui_MenuItem_ = cmd;
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  if (enabled) {
   this.m_removeStyleDependentName__java_lang_String(MenuItem.f_DEPENDENT_STYLENAME_DISABLED_ITEM__org_gwtproject_user_client_ui_MenuItem_);
  } else {
   this.m_addStyleDependentName__java_lang_String(MenuItem.f_DEPENDENT_STYLENAME_DISABLED_ITEM__org_gwtproject_user_client_ui_MenuItem_);
  }
  this.f_enabled__org_gwtproject_user_client_ui_MenuItem_ = enabled;
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @public
  */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.m_setHTML__java_lang_String(html.m_asString__());
 }
 /**
  * @override
  * @param {?string} html
  * @public
  */
 m_setHTML__java_lang_String(html) {
  $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), html);
 }
 /**
  * @param {ScheduledCommand} cmd
  * @public
  */
 m_setScheduledCommand__org_gwtproject_core_client_Scheduler_ScheduledCommand(cmd) {
  this.f_command__org_gwtproject_user_client_ui_MenuItem_ = cmd;
 }
 /**
  * @param {MenuBar} subMenu
  * @public
  */
 m_setSubMenu__org_gwtproject_user_client_ui_MenuBar(subMenu) {
  this.f_subMenu__org_gwtproject_user_client_ui_MenuItem_ = subMenu;
  if (!$Equality.$same(this.f_parentMenu__org_gwtproject_user_client_ui_MenuItem_, null)) {
   this.f_parentMenu__org_gwtproject_user_client_ui_MenuItem_.m_updateSubmenuIcon__org_gwtproject_user_client_ui_MenuItem_$pp_org_gwtproject_user_client_ui(this);
  }
  if (!$Equality.$same(subMenu, null)) {
   FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_setTabIndex__org_gwtproject_dom_client_Element__int(subMenu.m_getElement__(), -1);
   Roles.m_getMenuitemRole__().m_setAriaHaspopupProperty__org_gwtproject_dom_client_Element__boolean(this.m_getElement__(), true);
  } else {
   Roles.m_getMenuitemRole__().m_setAriaHaspopupProperty__org_gwtproject_dom_client_Element__boolean(this.m_getElement__(), false);
  }
 }
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), text);
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  if (!$Equality.$same(this.f_subMenu__org_gwtproject_user_client_ui_MenuItem_, null)) {
   this.f_subMenu__org_gwtproject_user_client_ui_MenuItem_.m_setMenuItemDebugIds__java_lang_String_$pp_org_gwtproject_user_client_ui(baseID);
  }
 }
 /**
  * @param {boolean} selected
  * @public
  */
 m_setSelectionStyle__boolean(selected) {
  if (selected) {
   this.m_addStyleDependentName__java_lang_String(MenuItem.f_DEPENDENT_STYLENAME_SELECTED_ITEM__org_gwtproject_user_client_ui_MenuItem_);
  } else {
   this.m_removeStyleDependentName__java_lang_String(MenuItem.f_DEPENDENT_STYLENAME_SELECTED_ITEM__org_gwtproject_user_client_ui_MenuItem_);
  }
 }
 /**
  * @param {MenuBar} parentMenu
  * @public
  */
 m_setParentMenu__org_gwtproject_user_client_ui_MenuBar_$pp_org_gwtproject_user_client_ui(parentMenu) {
  this.f_parentMenu__org_gwtproject_user_client_ui_MenuItem_ = parentMenu;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_MenuItem() {
  this.f_enabled__org_gwtproject_user_client_ui_MenuItem_ = true;
 }
 /**
  * @public
  */
 static $clinit() {
  MenuItem.$clinit = () =>{};
  MenuItem.$loadModules();
  UIObject.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MenuItem;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Command = goog.module.get('org.gwtproject.user.client.Command$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  FocusPanel = goog.module.get('org.gwtproject.user.client.ui.FocusPanel$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.MenuItem.$1$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MenuItem, 'org.gwtproject.user.client.ui.MenuItem');

HasHTML.$markImplementor(MenuItem);
HasEnabled.$markImplementor(MenuItem);
HasSafeHtml.$markImplementor(MenuItem);

/** @public {?string} @const */
MenuItem.f_DEPENDENT_STYLENAME_SELECTED_ITEM__org_gwtproject_user_client_ui_MenuItem_ = "selected";
/** @public {?string} @const */
MenuItem.f_DEPENDENT_STYLENAME_DISABLED_ITEM__org_gwtproject_user_client_ui_MenuItem_ = "disabled";

exports = MenuItem; 
//# sourceMappingURL=MenuItem.js.map