goog.module('org.gwtproject.user.client.ui.TreeItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');
const HasTreeItems = goog.require('org.gwtproject.user.client.ui.HasTreeItems$impl');
const IsTreeItem = goog.require('org.gwtproject.user.client.ui.IsTreeItem$impl');
const UIObject = goog.require('org.gwtproject.user.client.ui.UIObject$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Focusable = goog.forwardDeclare('org.gwtproject.user.client.ui.Focusable$impl');
let Tree = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree$impl');
let TreeItemAnimation = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem.TreeItemAnimation$impl');
let TreeItemImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem.TreeItemImpl$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {IsTreeItem}
 * @implements {HasTreeItems}
 * @implements {HasHTML}
 * @implements {HasSafeHtml}
  */
class TreeItem extends UIObject {
 /** @protected */
 constructor() {
  super();
  /**@type {ArrayList<TreeItem>}*/
  this.f_children__org_gwtproject_user_client_ui_TreeItem_;
  /**@type {Object}*/
  this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_;
  /**@type {Object}*/
  this.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_;
  /**@type {Object}*/
  this.f_imageHolder__org_gwtproject_user_client_ui_TreeItem_;
  /**@type {boolean}*/
  this.f_isRoot__org_gwtproject_user_client_ui_TreeItem_ = false;
  /**@type {boolean}*/
  this.f_open__org_gwtproject_user_client_ui_TreeItem_ = false;
  /**@type {TreeItem}*/
  this.f_parent__org_gwtproject_user_client_ui_TreeItem_;
  /**@type {boolean}*/
  this.f_selected__org_gwtproject_user_client_ui_TreeItem_ = false;
  /**@type {*}*/
  this.f_userObject__org_gwtproject_user_client_ui_TreeItem_;
  /**@type {Tree}*/
  this.f_tree__org_gwtproject_user_client_ui_TreeItem_;
  /**@type {Widget}*/
  this.f_widget__org_gwtproject_user_client_ui_TreeItem_;
 }
 //Factory method corresponding to constructor 'TreeItem()'.
 /** @return {!TreeItem} */
 static $create__() {
  TreeItem.$clinit();
  let $instance = new TreeItem();
  $instance.$ctor__org_gwtproject_user_client_ui_TreeItem__();
  return $instance;
 }
 //Initialization from constructor 'TreeItem()'.
 
 $ctor__org_gwtproject_user_client_ui_TreeItem__() {
  this.$ctor__org_gwtproject_user_client_ui_TreeItem__boolean(false);
 }
 //Factory method corresponding to constructor 'TreeItem(SafeHtml)'.
 /** @return {!TreeItem} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  TreeItem.$clinit();
  let $instance = new TreeItem();
  $instance.$ctor__org_gwtproject_user_client_ui_TreeItem__org_gwtproject_safehtml_shared_SafeHtml(html);
  return $instance;
 }
 //Initialization from constructor 'TreeItem(SafeHtml)'.
 
 $ctor__org_gwtproject_user_client_ui_TreeItem__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.$ctor__org_gwtproject_user_client_ui_TreeItem__();
  this.m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html);
 }
 //Factory method corresponding to constructor 'TreeItem(Widget)'.
 /** @return {!TreeItem} */
 static $create__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  TreeItem.$clinit();
  let $instance = new TreeItem();
  $instance.$ctor__org_gwtproject_user_client_ui_TreeItem__org_gwtproject_user_client_ui_Widget(widget);
  return $instance;
 }
 //Initialization from constructor 'TreeItem(Widget)'.
 
 $ctor__org_gwtproject_user_client_ui_TreeItem__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.$ctor__org_gwtproject_user_client_ui_TreeItem__();
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(widget);
 }
 //Factory method corresponding to constructor 'TreeItem(boolean)'.
 /** @return {!TreeItem} */
 static $create__boolean(/** boolean */ isRoot) {
  TreeItem.$clinit();
  let $instance = new TreeItem();
  $instance.$ctor__org_gwtproject_user_client_ui_TreeItem__boolean(isRoot);
  return $instance;
 }
 //Initialization from constructor 'TreeItem(boolean)'.
 
 $ctor__org_gwtproject_user_client_ui_TreeItem__boolean(/** boolean */ isRoot) {
  this.$ctor__org_gwtproject_user_client_ui_UIObject__();
  this.f_isRoot__org_gwtproject_user_client_ui_TreeItem_ = isRoot;
  let elem = DOM.m_clone__org_gwtproject_dom_client_Element__boolean(TreeItem.$f_BASE_BARE_ELEM__org_gwtproject_user_client_ui_TreeItem_, true);
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
  this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_ = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(elem);
  this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_.setAttribute("id", DOM.m_createUniqueId__());
  if (isRoot) {
   this.m_initChildren___$pp_org_gwtproject_user_client_ui();
  }
 }
 /** @override @return {TreeItem} */
 m_addItem__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ itemHtml) {
  let ret = TreeItem.$create__org_gwtproject_safehtml_shared_SafeHtml(itemHtml);
  this.m_addItem__org_gwtproject_user_client_ui_TreeItem(ret);
  return ret;
 }
 /** @override */
 m_addItem__org_gwtproject_user_client_ui_TreeItem(/** TreeItem */ item) {
  this.m_maybeRemoveItemFromParent__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(item);
  this.m_insertItem__int__org_gwtproject_user_client_ui_TreeItem(this.m_getChildCount__(), item);
 }
 /** @override */
 m_addItem__org_gwtproject_user_client_ui_IsTreeItem(/** IsTreeItem */ isItem) {
  let item = isItem.m_asTreeItem__();
  this.m_addItem__org_gwtproject_user_client_ui_TreeItem(item);
 }
 /** @override @return {TreeItem} */
 m_addItem__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  let ret = TreeItem.$create__org_gwtproject_user_client_ui_Widget(widget);
  this.m_addItem__org_gwtproject_user_client_ui_TreeItem(ret);
  return ret;
 }
 /** @override @return {TreeItem} */
 m_addTextItem__java_lang_String(/** ?string */ itemText) {
  let ret = TreeItem.$create__();
  ret.m_setText__java_lang_String(itemText);
  this.m_addItem__org_gwtproject_user_client_ui_TreeItem(ret);
  return ret;
 }
 /** @override @return {TreeItem} */
 m_asTreeItem__() {
  return this;
 }
 /** @return {TreeItem} */
 m_getChild__int(/** number */ index) {
  if ((index < 0) || (index >= this.m_getChildCount__())) {
   return null;
  }
  return /**@type {TreeItem}*/ ($Casts.$to(this.f_children__org_gwtproject_user_client_ui_TreeItem_.getAtIndex(index), TreeItem));
 }
 /** @return {number} */
 m_getChildCount__() {
  if ($Equality.$same(this.f_children__org_gwtproject_user_client_ui_TreeItem_, null)) {
   return 0;
  }
  return this.f_children__org_gwtproject_user_client_ui_TreeItem_.size();
 }
 /** @return {number} */
 m_getChildIndex__org_gwtproject_user_client_ui_TreeItem(/** TreeItem */ child) {
  if ($Equality.$same(this.f_children__org_gwtproject_user_client_ui_TreeItem_, null)) {
   return -1;
  }
  return this.f_children__org_gwtproject_user_client_ui_TreeItem_.indexOf(child);
 }
 /** @override @return {?string} */
 m_getHTML__() {
  return $Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_);
 }
 /** @return {TreeItem} */
 m_getParentItem__() {
  return this.f_parent__org_gwtproject_user_client_ui_TreeItem_;
 }
 /** @return {boolean} */
 m_getState__() {
  return this.f_open__org_gwtproject_user_client_ui_TreeItem_;
 }
 /** @override @return {?string} */
 m_getText__() {
  return $Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_);
 }
 /** @return {Tree} */
 m_getTree__() {
  return this.f_tree__org_gwtproject_user_client_ui_TreeItem_;
 }
 /** @return {*} */
 m_getUserObject__() {
  return this.f_userObject__org_gwtproject_user_client_ui_TreeItem_;
 }
 /** @return {Widget} */
 m_getWidget__() {
  return this.f_widget__org_gwtproject_user_client_ui_TreeItem_;
 }
 /** @override @return {?string} */
 m_getTitle__() {
  return this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_.title;
 }
 /** @override */
 m_setTitle__java_lang_String(/** ?string */ title) {
  $Overlay.m_setTitle__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_, title);
 }
 /** @return {TreeItem} */
 m_insertItem__int__org_gwtproject_safehtml_shared_SafeHtml(/** number */ beforeIndex, /** SafeHtml */ itemHtml) {
  let ret = TreeItem.$create__org_gwtproject_safehtml_shared_SafeHtml(itemHtml);
  this.m_insertItem__int__org_gwtproject_user_client_ui_TreeItem(beforeIndex, ret);
  return ret;
 }
 
 m_insertItem__int__org_gwtproject_user_client_ui_TreeItem(/** number */ beforeIndex, /** TreeItem */ item) {
  this.m_maybeRemoveItemFromParent__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(item);
  let childCount = this.m_getChildCount__();
  if (beforeIndex < 0 || beforeIndex > childCount) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
  if ($Equality.$same(this.f_children__org_gwtproject_user_client_ui_TreeItem_, null)) {
   this.m_initChildren___$pp_org_gwtproject_user_client_ui();
  }
  let margin = this.f_isRoot__org_gwtproject_user_client_ui_TreeItem_ ? 0.0 : TreeItem.f_CHILD_MARGIN__org_gwtproject_user_client_ui_TreeItem_;
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   Style_$Overlay.m_setMarginRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(item.m_getElement__().style, margin, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   Style_$Overlay.m_setMarginLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(item.m_getElement__().style, margin, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
  let childContainer = this.f_isRoot__org_gwtproject_user_client_ui_TreeItem_ ? this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_getElement__() : this.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_;
  if (beforeIndex == childCount) {
   childContainer.appendChild(item.m_getElement__());
  } else {
   let beforeElem = this.m_getChild__int(beforeIndex).m_getElement__();
   childContainer.insertBefore(item.m_getElement__(), beforeElem);
  }
  item.m_setParentItem__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(this.f_isRoot__org_gwtproject_user_client_ui_TreeItem_ ? null : this);
  this.f_children__org_gwtproject_user_client_ui_TreeItem_.addAtIndex(beforeIndex, item);
  item.m_setTree__org_gwtproject_user_client_ui_Tree_$pp_org_gwtproject_user_client_ui(this.f_tree__org_gwtproject_user_client_ui_TreeItem_);
  if (!this.f_isRoot__org_gwtproject_user_client_ui_TreeItem_ && this.f_children__org_gwtproject_user_client_ui_TreeItem_.size() == 1) {
   this.m_updateState__boolean__boolean_$pp_org_gwtproject_user_client_ui(false, false);
  }
 }
 /** @return {TreeItem} */
 m_insertItem__int__org_gwtproject_user_client_ui_Widget(/** number */ beforeIndex, /** Widget */ widget) {
  let ret = TreeItem.$create__org_gwtproject_user_client_ui_Widget(widget);
  this.m_insertItem__int__org_gwtproject_user_client_ui_TreeItem(beforeIndex, ret);
  return ret;
 }
 /** @return {TreeItem} */
 m_insertTextItem__int__java_lang_String(/** number */ beforeIndex, /** ?string */ itemText) {
  let ret = TreeItem.$create__();
  ret.m_setText__java_lang_String(itemText);
  this.m_insertItem__int__org_gwtproject_user_client_ui_TreeItem(beforeIndex, ret);
  return ret;
 }
 /** @return {boolean} */
 m_isSelected__() {
  return this.f_selected__org_gwtproject_user_client_ui_TreeItem_;
 }
 
 m_remove__() {
  if (!$Equality.$same(this.f_parent__org_gwtproject_user_client_ui_TreeItem_, null)) {
   this.f_parent__org_gwtproject_user_client_ui_TreeItem_.m_removeItem__org_gwtproject_user_client_ui_TreeItem(this);
  } else if (!$Equality.$same(this.f_tree__org_gwtproject_user_client_ui_TreeItem_, null)) {
   this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_removeItem__org_gwtproject_user_client_ui_TreeItem(this);
  }
 }
 /** @override */
 m_removeItem__org_gwtproject_user_client_ui_TreeItem(/** TreeItem */ item) {
  if ($Equality.$same(this.f_children__org_gwtproject_user_client_ui_TreeItem_, null) || !this.f_children__org_gwtproject_user_client_ui_TreeItem_.contains(item)) {
   return;
  }
  let oldTree = this.f_tree__org_gwtproject_user_client_ui_TreeItem_;
  item.m_setTree__org_gwtproject_user_client_ui_Tree_$pp_org_gwtproject_user_client_ui(null);
  if (this.f_isRoot__org_gwtproject_user_client_ui_TreeItem_) {
   oldTree.m_getElement__().removeChild(item.m_getElement__());
  } else {
   this.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_.removeChild(item.m_getElement__());
  }
  item.m_setParentItem__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(null);
  this.f_children__org_gwtproject_user_client_ui_TreeItem_.remove(item);
  if (!this.f_isRoot__org_gwtproject_user_client_ui_TreeItem_ && this.f_children__org_gwtproject_user_client_ui_TreeItem_.size() == 0) {
   this.m_updateState__boolean__boolean_$pp_org_gwtproject_user_client_ui(false, false);
  }
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
  while (this.m_getChildCount__() > 0) {
   this.m_removeItem__org_gwtproject_user_client_ui_TreeItem(this.m_getChild__int(0));
  }
 }
 /** @override */
 m_setHTML__java_lang_String(/** ?string */ html) {
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(null);
  $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_, html);
 }
 /** @override */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.m_setHTML__java_lang_String(html.m_asString__());
 }
 
 m_setSelected__boolean(/** boolean */ selected) {
  if (this.f_selected__org_gwtproject_user_client_ui_TreeItem_ == selected) {
   return;
  }
  this.f_selected__org_gwtproject_user_client_ui_TreeItem_ = selected;
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_getContentElem___$pp_org_gwtproject_user_client_ui(), "gwt-TreeItem-selected", selected);
 }
 
 m_setState__boolean(/** boolean */ open) {
  this.m_setState__boolean__boolean(open, true);
 }
 
 m_setState__boolean__boolean(/** boolean */ open, /** boolean */ fireEvents) {
  if (open && this.m_getChildCount__() == 0) {
   return;
  }
  if (this.f_open__org_gwtproject_user_client_ui_TreeItem_ != open) {
   this.f_open__org_gwtproject_user_client_ui_TreeItem_ = open;
   this.m_updateState__boolean__boolean_$pp_org_gwtproject_user_client_ui(true, true);
   if (fireEvents && !$Equality.$same(this.f_tree__org_gwtproject_user_client_ui_TreeItem_, null)) {
    this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_fireStateChanged__org_gwtproject_user_client_ui_TreeItem__boolean_$pp_org_gwtproject_user_client_ui(this, open);
   }
  }
 }
 /** @override */
 m_setText__java_lang_String(/** ?string */ text) {
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(null);
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_, text);
 }
 
 m_setUserObject__java_lang_Object(/** * */ userObj) {
  this.f_userObject__org_gwtproject_user_client_ui_TreeItem_ = userObj;
 }
 
 m_setWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ newWidget) {
  if (!$Equality.$same(newWidget, null)) {
   newWidget.m_removeFromParent__();
  }
  if (!$Equality.$same(this.f_widget__org_gwtproject_user_client_ui_TreeItem_, null)) {
   try {
    if (!$Equality.$same(this.f_tree__org_gwtproject_user_client_ui_TreeItem_, null)) {
     this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_orphan__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(this.f_widget__org_gwtproject_user_client_ui_TreeItem_);
    }
   } finally {
    this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_.removeChild(this.f_widget__org_gwtproject_user_client_ui_TreeItem_.m_getElement__());
    this.f_widget__org_gwtproject_user_client_ui_TreeItem_ = null;
   }
  }
  $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_, "");
  this.f_widget__org_gwtproject_user_client_ui_TreeItem_ = newWidget;
  if (!$Equality.$same(newWidget, null)) {
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_, newWidget.m_getElement__());
   if (!$Equality.$same(this.f_tree__org_gwtproject_user_client_ui_TreeItem_, null)) {
    this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_adopt__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(this.f_widget__org_gwtproject_user_client_ui_TreeItem_, this);
   }
   if (Tree.m_shouldTreeDelegateFocusToElement__org_gwtproject_dom_client_Element(this.f_widget__org_gwtproject_user_client_ui_TreeItem_.m_getElement__())) {
    this.f_widget__org_gwtproject_user_client_ui_TreeItem_.m_getElement__().setAttribute("tabIndex", "-1");
   }
  }
 }
 /** @return {Focusable} */
 m_getFocusable__() {
  let focus = this.m_getFocusable__();
  if ($Equality.$same(focus, null)) {
   let w = this.m_getWidget__();
   if (Focusable.$isInstance(w)) {
    focus = /**@type {Focusable}*/ ($Casts.$to(w, Focusable));
   }
  }
  return focus;
 }
 /** @override */
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_, baseID, "content");
  if (!$Equality.$same(this.f_imageHolder__org_gwtproject_user_client_ui_TreeItem_, null)) {
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_imageHolder__org_gwtproject_user_client_ui_TreeItem_, baseID, "image");
  }
  if (!$Equality.$same(this.f_children__org_gwtproject_user_client_ui_TreeItem_, null)) {
   let childCount = 0;
   for (let $iterator = this.f_children__org_gwtproject_user_client_ui_TreeItem_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let child = /**@type {TreeItem}*/ ($Casts.$to($iterator.m_next__(), TreeItem));
    child.m_ensureDebugId__java_lang_String(j_l_String.m_valueOf__java_lang_Object(baseID) + "-child" + childCount);
    childCount++;
   }
  }
 }
 
 m_addTreeItems__java_util_List_$pp_org_gwtproject_user_client_ui(/** List<TreeItem> */ accum) {
  let size = this.m_getChildCount__();
  for (let i = 0; i < size; i++) {
   let item = /**@type {TreeItem}*/ ($Casts.$to(this.f_children__org_gwtproject_user_client_ui_TreeItem_.getAtIndex(i), TreeItem));
   accum.add(item);
   item.m_addTreeItems__java_util_List_$pp_org_gwtproject_user_client_ui(accum);
  }
 }
 /** @return {ArrayList<TreeItem>} */
 m_getChildren___$pp_org_gwtproject_user_client_ui() {
  return this.f_children__org_gwtproject_user_client_ui_TreeItem_;
 }
 /** @return {Object} */
 m_getContentElem___$pp_org_gwtproject_user_client_ui() {
  return this.f_contentElem__org_gwtproject_user_client_ui_TreeItem_;
 }
 /** @return {Object} */
 m_getImageElement___$pp_org_gwtproject_user_client_ui() {
  return DOM.m_getFirstChild__org_gwtproject_dom_client_Element(this.m_getImageHolderElement___$pp_org_gwtproject_user_client_ui());
 }
 /** @return {Object} */
 m_getImageHolderElement___$pp_org_gwtproject_user_client_ui() {
  if (!this.m_isFullNode___$pp_org_gwtproject_user_client_ui()) {
   this.m_convertToFullNode___$p_org_gwtproject_user_client_ui_TreeItem();
  }
  return this.f_imageHolder__org_gwtproject_user_client_ui_TreeItem_;
 }
 
 m_initChildren___$pp_org_gwtproject_user_client_ui() {
  this.m_convertToFullNode___$p_org_gwtproject_user_client_ui_TreeItem();
  this.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_ = DOM.m_createDiv__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getElement__(), this.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_);
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_.style, "whiteSpace", "nowrap");
  this.f_children__org_gwtproject_user_client_ui_TreeItem_ = /**@type {!ArrayList<TreeItem>}*/ (ArrayList.$create__());
 }
 /** @return {boolean} */
 m_isFullNode___$pp_org_gwtproject_user_client_ui() {
  return !$Equality.$same(this.f_imageHolder__org_gwtproject_user_client_ui_TreeItem_, null);
 }
 
 m_maybeRemoveItemFromParent__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(/** TreeItem */ item) {
  if ((!$Equality.$same(item.m_getParentItem__(), null)) || (!$Equality.$same(item.m_getTree__(), null))) {
   item.m_remove__();
  }
 }
 
 m_setParentItem__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(/** TreeItem */ parent) {
  this.f_parent__org_gwtproject_user_client_ui_TreeItem_ = parent;
 }
 
 m_setTree__org_gwtproject_user_client_ui_Tree_$pp_org_gwtproject_user_client_ui(/** Tree */ newTree) {
  if ($Equality.$same(this.f_tree__org_gwtproject_user_client_ui_TreeItem_, newTree)) {
   return;
  }
  if (!$Equality.$same(this.f_tree__org_gwtproject_user_client_ui_TreeItem_, null)) {
   if ($Equality.$same(this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_getSelectedItem__(), this)) {
    this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_setSelectedItem__org_gwtproject_user_client_ui_TreeItem(null);
   }
   if (!$Equality.$same(this.f_widget__org_gwtproject_user_client_ui_TreeItem_, null)) {
    this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_orphan__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(this.f_widget__org_gwtproject_user_client_ui_TreeItem_);
   }
  }
  this.f_tree__org_gwtproject_user_client_ui_TreeItem_ = newTree;
  for (let i = 0, n = this.m_getChildCount__(); i < n; ++i) {
   /**@type {TreeItem}*/ ($Casts.$to(this.f_children__org_gwtproject_user_client_ui_TreeItem_.getAtIndex(i), TreeItem)).m_setTree__org_gwtproject_user_client_ui_Tree_$pp_org_gwtproject_user_client_ui(newTree);
  }
  this.m_updateState__boolean__boolean_$pp_org_gwtproject_user_client_ui(false, true);
  if (!$Equality.$same(newTree, null)) {
   if (!$Equality.$same(this.f_widget__org_gwtproject_user_client_ui_TreeItem_, null)) {
    newTree.m_adopt__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(this.f_widget__org_gwtproject_user_client_ui_TreeItem_, this);
   }
  }
 }
 
 m_updateState__boolean__boolean_$pp_org_gwtproject_user_client_ui(/** boolean */ animate, /** boolean */ updateTreeSelection) {
  if ($Equality.$same(this.f_tree__org_gwtproject_user_client_ui_TreeItem_, null) || this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_isAttached__() == false) {
   return;
  }
  if (this.m_getChildCount__() == 0) {
   if (!$Equality.$same(this.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_, null)) {
    UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_, false);
   }
   this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_showLeafImage__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(this);
   return;
  }
  if (animate && (!$Equality.$same(this.f_tree__org_gwtproject_user_client_ui_TreeItem_, null)) && this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_isAttached__()) {
   TreeItem.f_itemAnimation__org_gwtproject_user_client_ui_TreeItem_.m_setItemState__org_gwtproject_user_client_ui_TreeItem__boolean(this, this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_isAnimationEnabled__());
  } else {
   TreeItem.f_itemAnimation__org_gwtproject_user_client_ui_TreeItem_.m_setItemState__org_gwtproject_user_client_ui_TreeItem__boolean(this, false);
  }
  if (this.f_open__org_gwtproject_user_client_ui_TreeItem_) {
   this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_showOpenImage__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(this);
  } else {
   this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_showClosedImage__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(this);
  }
  if (updateTreeSelection) {
   this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_maybeUpdateSelection__org_gwtproject_user_client_ui_TreeItem__boolean_$pp_org_gwtproject_user_client_ui(this, this.f_open__org_gwtproject_user_client_ui_TreeItem_);
  }
 }
 
 m_updateStateRecursive___$pp_org_gwtproject_user_client_ui() {
  this.m_updateStateRecursiveHelper___$p_org_gwtproject_user_client_ui_TreeItem();
  this.f_tree__org_gwtproject_user_client_ui_TreeItem_.m_maybeUpdateSelection__org_gwtproject_user_client_ui_TreeItem__boolean_$pp_org_gwtproject_user_client_ui(this, this.f_open__org_gwtproject_user_client_ui_TreeItem_);
 }
 
 m_convertToFullNode___$p_org_gwtproject_user_client_ui_TreeItem() {
  TreeItem.f_impl__org_gwtproject_user_client_ui_TreeItem_.m_convertToFullNode__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(this);
 }
 
 m_updateStateRecursiveHelper___$p_org_gwtproject_user_client_ui_TreeItem() {
  this.m_updateState__boolean__boolean_$pp_org_gwtproject_user_client_ui(false, false);
  for (let i = 0, n = this.m_getChildCount__(); i < n; ++i) {
   /**@type {TreeItem}*/ ($Casts.$to(this.f_children__org_gwtproject_user_client_ui_TreeItem_.getAtIndex(i), TreeItem)).m_updateStateRecursiveHelper___$p_org_gwtproject_user_client_ui_TreeItem();
  }
 }
 /** @return {Object} */
 static get f_BASE_INTERNAL_ELEM__org_gwtproject_user_client_ui_TreeItem_() {
  return (TreeItem.$clinit(), TreeItem.$f_BASE_INTERNAL_ELEM__org_gwtproject_user_client_ui_TreeItem_);
 }
 
 static set f_BASE_INTERNAL_ELEM__org_gwtproject_user_client_ui_TreeItem_(/** Object */ value) {
  (TreeItem.$clinit(), TreeItem.$f_BASE_INTERNAL_ELEM__org_gwtproject_user_client_ui_TreeItem_ = value);
 }
 /** @return {Object} */
 static get f_BASE_BARE_ELEM__org_gwtproject_user_client_ui_TreeItem_() {
  return (TreeItem.$clinit(), TreeItem.$f_BASE_BARE_ELEM__org_gwtproject_user_client_ui_TreeItem_);
 }
 
 static set f_BASE_BARE_ELEM__org_gwtproject_user_client_ui_TreeItem_(/** Object */ value) {
  (TreeItem.$clinit(), TreeItem.$f_BASE_BARE_ELEM__org_gwtproject_user_client_ui_TreeItem_ = value);
 }
 
 static $clinit() {
  TreeItem.$clinit = () =>{};
  TreeItem.$loadModules();
  UIObject.$clinit();
  TreeItem.f_itemAnimation__org_gwtproject_user_client_ui_TreeItem_ = TreeItemAnimation.$create__();
  TreeItem.f_impl__org_gwtproject_user_client_ui_TreeItem_ = TreeItemImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TreeItem;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Focusable = goog.module.get('org.gwtproject.user.client.ui.Focusable$impl');
  Tree = goog.module.get('org.gwtproject.user.client.ui.Tree$impl');
  TreeItemAnimation = goog.module.get('org.gwtproject.user.client.ui.TreeItem.TreeItemAnimation$impl');
  TreeItemImpl = goog.module.get('org.gwtproject.user.client.ui.TreeItem.TreeItemImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(TreeItem, 'org.gwtproject.user.client.ui.TreeItem');

IsTreeItem.$markImplementor(TreeItem);
HasTreeItems.$markImplementor(TreeItem);
HasHTML.$markImplementor(TreeItem);
HasSafeHtml.$markImplementor(TreeItem);

/**@const {number}*/
TreeItem.f_CHILD_MARGIN__org_gwtproject_user_client_ui_TreeItem_ = 16.0;
/**@const {number}*/
TreeItem.f_IMAGE_PAD__org_gwtproject_user_client_ui_TreeItem = 7;
/**@const {number}*/
TreeItem.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_TreeItem_ = 200;
/**@const {number}*/
TreeItem.f_ANIMATION_DURATION_PER_ITEM__org_gwtproject_user_client_ui_TreeItem_ = 75;
/**@type {TreeItemAnimation}*/
TreeItem.f_itemAnimation__org_gwtproject_user_client_ui_TreeItem_;
/**@private {Object}*/
TreeItem.$f_BASE_INTERNAL_ELEM__org_gwtproject_user_client_ui_TreeItem_;
/**@private {Object}*/
TreeItem.$f_BASE_BARE_ELEM__org_gwtproject_user_client_ui_TreeItem_;
/**@type {TreeItemImpl}*/
TreeItem.f_impl__org_gwtproject_user_client_ui_TreeItem_;

exports = TreeItem; 
//# sourceMappingURL=TreeItem.js.map