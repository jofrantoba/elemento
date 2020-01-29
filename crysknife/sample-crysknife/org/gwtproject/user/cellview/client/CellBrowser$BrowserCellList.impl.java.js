goog.module('org.gwtproject.user.cellview.client.CellBrowser.BrowserCellList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CellList = goog.require('org.gwtproject.user.cellview.client.CellList$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let SafeStylesUtils = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let CellBrowser = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Template$impl');
let TreeNodeImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.TreeNodeImpl$impl');
let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @template T
 * @extends {CellList<T>}
  */
class BrowserCellList extends CellList {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellBrowser} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList;
  /** @public {number} */
  this.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = 0;
  /** @public {*} */
  this.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_;
  /** @public {T} */
  this.f_selectedValue__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_;
  /** @public {boolean} */
  this.f_isDestroyed__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = false;
  /** @public {boolean} */
  this.f_isFocusedOpen__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = false;
  /** @public {Object} */
  this.f_tmpElem__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_;
 }
 /**
  * @template T
  * @param {CellBrowser} $outer_this
  * @param {Cell<T>} cell
  * @param {number} level
  * @param {ProvidesKey<T>} keyProvider
  * @return {!BrowserCellList<T>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_cell_client_Cell__int__org_gwtproject_view_client_ProvidesKey($outer_this, cell, level, keyProvider) {
  BrowserCellList.$clinit();
  let $instance = new BrowserCellList();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_cell_client_Cell__int__org_gwtproject_view_client_ProvidesKey($outer_this, cell, level, keyProvider);
  return $instance;
 }
 /**
  * @param {CellBrowser} $outer_this
  * @param {Cell<T>} cell
  * @param {number} level
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_cell_client_Cell__int__org_gwtproject_view_client_ProvidesKey($outer_this, cell, level, keyProvider) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList = $outer_this;
  this.$ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources__org_gwtproject_view_client_ProvidesKey(cell, $outer_this.f_cellListResources__org_gwtproject_user_cellview_client_CellBrowser_, keyProvider);
  this.$init___$p_org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList();
  this.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = level;
 }
 /**
  * @public
  */
 m_deselectValue__() {
  let selectionModel = this.m_getSelectionModel__();
  if (!$Equality.$same(selectionModel, null) && !$Equality.$same(this.f_selectedValue__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_, null)) {
   selectionModel.m_setSelected__java_lang_Object__boolean(this.f_selectedValue__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_, false);
  }
 }
 /**
  * @override
  * @param {Object} item
  * @return {Object}
  * @public
  */
 m_getCellParent__org_gwtproject_dom_client_Element(item) {
  return $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element($Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(item));
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isKeyboardNavigationSuppressed__() {
  return $Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.m_getKeyboardSelectionPolicy__()) || super.m_isKeyboardNavigationSuppressed__();
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent2__org_gwtproject_user_client_Event(event) {
  super.m_onBrowserEvent2__org_gwtproject_user_client_Event(event);
  let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, eventType) && !this.m_isKeyboardNavigationSuppressed__()) {
   let keyCode = NativeEvent_$Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   let isRtl = LocaleInfo.m_getCurrentLocale__().m_isRTL__();
   keyCode = KeyCodes.m_maybeSwapArrowKeysForRtl__int__boolean(keyCode, isRtl);
   switch (keyCode) {
    case KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes: 
     this.m_keyboardNavigateShallow___$p_org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList();
     return;
    case KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes: 
     this.m_keyboardNavigateDeep___$p_org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList();
     return;
   }
  }
 }
 /**
  * @override
  * @param {SafeHtmlBuilder} sb
  * @param {List<T>} values
  * @param {number} start
  * @param {SelectionModel<?>} selectionModel
  * @public
  */
 m_renderRowValues__org_gwtproject_safehtml_shared_SafeHtmlBuilder__java_util_List__int__org_gwtproject_view_client_SelectionModel(sb, values, start, selectionModel) {
  let cell = this.m_getCell__();
  let keyboardSelectedItem = " " + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_cellBrowserKeyboardSelectedItem__());
  let selectedItem = " " + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_cellBrowserSelectedItem__());
  let openItem = " " + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_cellBrowserOpenItem__());
  let evenItem = this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_cellBrowserEvenItem__();
  let oddItem = this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_cellBrowserOddItem__();
  let keyboardSelectedRow = this.m_getKeyboardSelectedRow__() + this.m_getPageStart__();
  let length = values.size();
  let end = start + length;
  for (let i = start; i < end; i++) {
   let value = values.getAtIndex(i - start);
   let isSelected = $Equality.$same(selectionModel, null) ? false : selectionModel.m_isSelected__java_lang_Object(value);
   let isOpen = this.m_isOpen__int_$p_org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList(i);
   let classesBuilder = StringBuilder.$create__();
   classesBuilder.m_append__java_lang_String($Primitives.$coerceDivision(i % 2) == 0 ? evenItem : oddItem);
   if (isOpen) {
    classesBuilder.m_append__java_lang_String(openItem);
   }
   if (isSelected) {
    classesBuilder.m_append__java_lang_String(selectedItem);
   }
   let cellBuilder = SafeHtmlBuilder.$create__();
   let context = Context.$create__int__int__java_lang_Object(i, 0, this.m_getValueKey__java_lang_Object(value));
   cell.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, cellBuilder);
   let /** SafeHtml */ image;
   if (isOpen) {
    image = this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_openImageHtml__org_gwtproject_user_cellview_client_CellBrowser_;
   } else if (this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.m_isLeaf__java_lang_Object(value)) {
    image = CellBrowser.f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellBrowser_;
   } else {
    image = this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_closedImageHtml__org_gwtproject_user_cellview_client_CellBrowser_;
   }
   let padding = SafeStylesUtils.m_fromTrustedString__java_lang_String("padding-right: " + this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_imageWidth__org_gwtproject_user_cellview_client_CellBrowser_ + "px;");
   if (i == keyboardSelectedRow) {
    if (this.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData) {
     classesBuilder.m_append__java_lang_String(keyboardSelectedItem);
    }
    let accessKey = this.m_getAccessKey__();
    if (accessKey != 0) {
     sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template.m_divFocusableWithKey__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__int__char__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(i, classesBuilder.toString(), padding, this.m_getTabIndex__(), this.m_getAccessKey__(), image, cellBuilder.m_toSafeHtml__()));
    } else {
     sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template.m_divFocusable__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__int__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(i, classesBuilder.toString(), padding, this.m_getTabIndex__(), image, cellBuilder.m_toSafeHtml__()));
    }
   } else {
    sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template.m_div__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(i, classesBuilder.toString(), padding, image, cellBuilder.m_toSafeHtml__()));
   }
  }
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.m_updateChildState__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__boolean_$p_org_gwtproject_user_cellview_client_CellBrowser(this, true);
 }
 /**
  * @override
  * @param {number} index
  * @param {boolean} selected
  * @param {boolean} stealFocus
  * @public
  */
 m_setKeyboardSelected__int__boolean__boolean(index, selected, stealFocus) {
  super.m_setKeyboardSelected__int__boolean__boolean(index, selected, stealFocus);
  if (!this.m_isRowWithinBounds__int(index)) {
   return;
  }
  let elem = this.m_getRowElement__int(index);
  let value = this.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_getVisibleItem__int(index);
  let isOpen = selected && this.m_isOpen__int_$p_org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList(index);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(elem, this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_cellBrowserOpenItem__(), isOpen);
  let image = null;
  if (isOpen) {
   image = this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_openImageHtml__org_gwtproject_user_cellview_client_CellBrowser_;
  } else if (this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.m_getTreeViewModel__().m_isLeaf__java_lang_Object(value)) {
   image = CellBrowser.f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellBrowser_;
  } else {
   image = this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_closedImageHtml__org_gwtproject_user_cellview_client_CellBrowser_;
  }
  $Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this.f_tmpElem__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_, image);
  elem.replaceChild($Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(this.f_tmpElem__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_), $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(elem));
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.m_updateChildState__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__boolean_$p_org_gwtproject_user_cellview_client_CellBrowser(this, true);
 }
 /**
  * @param {T} value
  * @public
  */
 m_setSelectedValue__java_lang_Object(value) {
  let oldKey = this.m_getValueKey__java_lang_Object(this.f_selectedValue__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_);
  let newKey = this.m_getValueKey__java_lang_Object(value);
  if (!$Equality.$same(newKey, null) && $Objects.m_equals__java_lang_Object__java_lang_Object(newKey, oldKey)) {
   return;
  }
  this.m_deselectValue__();
  let selectionModel = this.m_getSelectionModel__();
  if (!$Equality.$same(selectionModel, null)) {
   this.f_selectedValue__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = value;
   selectionModel.m_setSelected__java_lang_Object__boolean(this.f_selectedValue__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_, true);
  }
 }
 /**
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isOpen__int_$p_org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList(index) {
  let value = this.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_getKeyboardSelectedRowValue__();
  return index == this.m_getKeyboardSelectedRow__() && !$Equality.$same(value, null) && !this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.m_getTreeViewModel__().m_isLeaf__java_lang_Object(value);
 }
 /**
  * @public
  */
 m_keyboardNavigateDeep___$p_org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList() {
  if (this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.m_isKeyboardSelectionDisabled__()) {
   return;
  }
  if (this.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ < this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.size() - 1) {
   let treeNode = /**@type {TreeNodeImpl<*>} */ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.getAtIndex(this.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ + 1), TreeNodeImpl));
   treeNode.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_setKeyboardSelectedRow__int__boolean__boolean(treeNode.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getKeyboardSelectedRow__(), true, true);
  }
 }
 /**
  * @public
  */
 m_keyboardNavigateShallow___$p_org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList() {
  if (this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.m_isKeyboardSelectionDisabled__()) {
   return;
  }
  if (this.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ > 0) {
   let treeNode = /**@type {TreeNodeImpl<*>} */ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.getAtIndex(this.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ - 1), TreeNodeImpl));
   treeNode.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_setFocus__boolean(true);
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList() {
  this.f_tmpElem__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
 }
 /**
  * @public
  */
 static $clinit() {
  BrowserCellList.$clinit = () =>{};
  BrowserCellList.$loadModules();
  CellList.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BrowserCellList;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  SafeStylesUtils = goog.module.get('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  CellBrowser = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser$impl');
  Template = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.Template$impl');
  TreeNodeImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.TreeNodeImpl$impl');
  KeyboardSelectionPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(BrowserCellList, 'org.gwtproject.user.cellview.client.CellBrowser$BrowserCellList');

exports = BrowserCellList; 
//# sourceMappingURL=CellBrowser$BrowserCellList.js.map