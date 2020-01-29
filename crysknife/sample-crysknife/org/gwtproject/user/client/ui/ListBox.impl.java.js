goog.module('org.gwtproject.user.client.ui.ListBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasChangeHandlers = goog.require('org.gwtproject.event.dom.client.HasChangeHandlers$impl');
const HasDirectionEstimator = goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');
const FocusWidget = goog.require('org.gwtproject.user.client.ui.FocusWidget$impl');
const HasName = goog.require('org.gwtproject.user.client.ui.HasName$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NodeList.$Overlay$impl');
let OptionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
let SelectElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');
let ChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let BidiFormatter = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiFormatter$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let WordCountDirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.WordCountDirectionEstimator$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasChangeHandlers}
 * @implements {HasName}
 * @implements {HasDirectionEstimator}
  */
class ListBox extends FocusWidget {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DirectionEstimator} */
  this.f_estimator__org_gwtproject_user_client_ui_ListBox_;
 }
 /**
  * @param {Object} element
  * @return {ListBox}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  ListBox.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let listBox = ListBox.$create__org_gwtproject_dom_client_Element(element);
  listBox.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(listBox);
  return listBox;
 }
 /**
  * Factory method corresponding to constructor 'ListBox()'.
  * @return {!ListBox}
  * @public
  */
 static $create__() {
  ListBox.$clinit();
  let $instance = new ListBox();
  $instance.$ctor__org_gwtproject_user_client_ui_ListBox__();
  return $instance;
 }
 /**
  * Initialization from constructor 'ListBox()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ListBox__() {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__org_gwtproject_dom_client_Element(Document_$Overlay.m_createSelectElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-ListBox");
 }
 /**
  * Factory method corresponding to constructor 'ListBox(boolean)'.
  * @param {boolean} isMultipleSelect
  * @return {!ListBox}
  * @public
  * @deprecated
  */
 static $create__boolean(isMultipleSelect) {
  ListBox.$clinit();
  let $instance = new ListBox();
  $instance.$ctor__org_gwtproject_user_client_ui_ListBox__boolean(isMultipleSelect);
  return $instance;
 }
 /**
  * Initialization from constructor 'ListBox(boolean)'.
  * @param {boolean} isMultipleSelect
  * @public
  * @deprecated
  */
 $ctor__org_gwtproject_user_client_ui_ListBox__boolean(isMultipleSelect) {
  this.$ctor__org_gwtproject_user_client_ui_ListBox__();
  this.m_setMultipleSelect__boolean(isMultipleSelect);
 }
 /**
  * Factory method corresponding to constructor 'ListBox(Element)'.
  * @param {Object} element
  * @return {!ListBox}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  ListBox.$clinit();
  let $instance = new ListBox();
  $instance.$ctor__org_gwtproject_user_client_ui_ListBox__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'ListBox(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ListBox__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__org_gwtproject_dom_client_Element(element);
  SelectElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {ChangeHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, ChangeEvent.m_getType__());
 }
 /**
  * @param {?string} item
  * @public
  */
 m_addItem__java_lang_String(item) {
  this.m_insertItem__java_lang_String__int(item, ListBox.f_INSERT_AT_END__org_gwtproject_user_client_ui_ListBox_);
 }
 /**
  * @param {?string} item
  * @param {Direction} dir
  * @public
  */
 m_addItem__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(item, dir) {
  this.m_insertItem__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__int(item, dir, ListBox.f_INSERT_AT_END__org_gwtproject_user_client_ui_ListBox_);
 }
 /**
  * @param {?string} item
  * @param {?string} value
  * @public
  */
 m_addItem__java_lang_String__java_lang_String(item, value) {
  this.m_insertItem__java_lang_String__java_lang_String__int(item, value, ListBox.f_INSERT_AT_END__org_gwtproject_user_client_ui_ListBox_);
 }
 /**
  * @param {?string} item
  * @param {Direction} dir
  * @param {?string} value
  * @public
  */
 m_addItem__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(item, dir, value) {
  this.m_insertItem__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__int(item, dir, value, ListBox.f_INSERT_AT_END__org_gwtproject_user_client_ui_ListBox_);
 }
 /**
  * @public
  */
 m_clear__() {
  SelectElement_$Overlay.m_clear__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox());
 }
 /**
  * @override
  * @return {DirectionEstimator}
  * @public
  */
 m_getDirectionEstimator__() {
  return this.f_estimator__org_gwtproject_user_client_ui_ListBox_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getItemCount__() {
  return SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox()).length;
 }
 /**
  * @param {number} index
  * @return {?string}
  * @public
  */
 m_getItemText__int(index) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_ListBox(index);
  return this.m_getOptionText__org_gwtproject_dom_client_OptionElement(/**@type {Object} */ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox()), index), OptionElement_$Overlay)));
 }
 /**
  * @return {?string}
  * @public
  */
 m_getSelectedItemText__() {
  let index = this.m_getSelectedIndex__();
  return index == -1 ? null : this.m_getItemText__int(index);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox().name;
 }
 /**
  * @return {number}
  * @public
  */
 m_getSelectedIndex__() {
  return this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox().selectedIndex;
 }
 /**
  * @param {number} index
  * @return {?string}
  * @public
  */
 m_getValue__int(index) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_ListBox(index);
  return /**@type {Object} */ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox()), index), OptionElement_$Overlay)).value;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getSelectedValue__() {
  let index = this.m_getSelectedIndex__();
  return index == -1 ? null : this.m_getValue__int(index);
 }
 /**
  * @return {number}
  * @public
  */
 m_getVisibleItemCount__() {
  return this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox().size;
 }
 /**
  * @param {?string} item
  * @param {number} index
  * @public
  */
 m_insertItem__java_lang_String__int(item, index) {
  this.m_insertItem__java_lang_String__java_lang_String__int(item, item, index);
 }
 /**
  * @param {?string} item
  * @param {Direction} dir
  * @param {number} index
  * @public
  */
 m_insertItem__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__int(item, dir, index) {
  this.m_insertItem__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__int(item, dir, item, index);
 }
 /**
  * @param {?string} item
  * @param {?string} value
  * @param {number} index
  * @public
  */
 m_insertItem__java_lang_String__java_lang_String__int(item, value, index) {
  this.m_insertItem__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__int(item, null, value, index);
 }
 /**
  * @param {?string} item
  * @param {Direction} dir
  * @param {?string} value
  * @param {number} index
  * @public
  */
 m_insertItem__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__int(item, dir, value, index) {
  let select = this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox();
  let option = Document_$Overlay.m_createOptionElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  this.m_setOptionText__org_gwtproject_dom_client_OptionElement__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(option, item, dir);
  option.value = value;
  let itemCount = SelectElement_$Overlay.m_getLength__$devirt__org_gwtproject_dom_client_SelectElement(select);
  if (index < 0 || index > itemCount) {
   index = itemCount;
  }
  if (index == itemCount) {
   SelectElement_$Overlay.m_add__$devirt__org_gwtproject_dom_client_SelectElement__org_gwtproject_dom_client_OptionElement__org_gwtproject_dom_client_OptionElement(select, option, null);
  } else {
   let before = /**@type {Object} */ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(select), index), OptionElement_$Overlay));
   SelectElement_$Overlay.m_add__$devirt__org_gwtproject_dom_client_SelectElement__org_gwtproject_dom_client_OptionElement__org_gwtproject_dom_client_OptionElement(select, option, before);
  }
 }
 /**
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isItemSelected__int(index) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_ListBox(index);
  return OptionElement_$Overlay.m_isSelected__$devirt__org_gwtproject_dom_client_OptionElement(/**@type {Object} */ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox()), index), OptionElement_$Overlay)));
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isMultipleSelect__() {
  return SelectElement_$Overlay.m_isMultiple__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox());
 }
 /**
  * @param {number} index
  * @public
  */
 m_removeItem__int(index) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_ListBox(index);
  SelectElement_$Overlay.m_remove__$devirt__org_gwtproject_dom_client_SelectElement__int(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox(), index);
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setDirectionEstimator__boolean(enabled) {
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(enabled ? ListBox.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_ListBox : null);
 }
 /**
  * @override
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator) {
  this.f_estimator__org_gwtproject_user_client_ui_ListBox_ = directionEstimator;
 }
 /**
  * @param {number} index
  * @param {boolean} selected
  * @public
  */
 m_setItemSelected__int__boolean(index, selected) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_ListBox(index);
  /**@type {Object} */ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox()), index), OptionElement_$Overlay)).selected = selected;
 }
 /**
  * @param {number} index
  * @param {?string} text
  * @public
  */
 m_setItemText__int__java_lang_String(index, text) {
  this.m_setItemText__int__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(index, text, null);
 }
 /**
  * @param {number} index
  * @param {?string} text
  * @param {Direction} dir
  * @public
  */
 m_setItemText__int__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(index, text, dir) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_ListBox(index);
  if ($Equality.$same(text, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("Cannot set an option to have null text"));
  }
  this.m_setOptionText__org_gwtproject_dom_client_OptionElement__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/**@type {Object} */ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox()), index), OptionElement_$Overlay)), text, dir);
 }
 /**
  * @param {boolean} multiple
  * @public
  */
 m_setMultipleSelect__boolean(multiple) {
  this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox().multiple = multiple;
 }
 /**
  * @override
  * @param {?string} name
  * @public
  */
 m_setName__java_lang_String(name) {
  this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox().name = name;
 }
 /**
  * @param {number} index
  * @public
  */
 m_setSelectedIndex__int(index) {
  this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox().selectedIndex = index;
 }
 /**
  * @param {number} index
  * @param {?string} value
  * @public
  */
 m_setValue__int__java_lang_String(index, value) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_ListBox(index);
  /**@type {Object} */ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox()), index), OptionElement_$Overlay)).value = value;
 }
 /**
  * @param {number} visibleItems
  * @public
  */
 m_setVisibleItemCount__int(visibleItems) {
  this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox().size = visibleItems;
 }
 /**
  * @param {Object} option
  * @return {?string}
  * @public
  */
 m_getOptionText__org_gwtproject_dom_client_OptionElement(option) {
  let text = option.text;
  if (Element_$Overlay.m_hasAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(option, ListBox.f_BIDI_ATTR_NAME__org_gwtproject_user_client_ui_ListBox_) && j_l_String.m_length__java_lang_String(text) > 1) {
   text = j_l_String.m_substring__java_lang_String__int__int(text, 1, j_l_String.m_length__java_lang_String(text) - 1);
  }
  return text;
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  let numItems = this.m_getItemCount__();
  for (let i = 0; i < numItems; i++) {
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(/**@type {Object} */ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(this.m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox()), i), OptionElement_$Overlay)), baseID, "item" + i);
  }
 }
 /**
  * @param {Object} option
  * @param {?string} text
  * @param {Direction} dir
  * @public
  */
 m_setOptionText__org_gwtproject_dom_client_OptionElement__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(option, text, dir) {
  if ($Equality.$same(dir, null) && !$Equality.$same(this.f_estimator__org_gwtproject_user_client_ui_ListBox_, null)) {
   dir = this.f_estimator__org_gwtproject_user_client_ui_ListBox_.m_estimateDirection__java_lang_String(text);
  }
  if ($Equality.$same(dir, null)) {
   option.text = text;
   option.removeAttribute(ListBox.f_BIDI_ATTR_NAME__org_gwtproject_user_client_ui_ListBox_);
  } else {
   let formattedText = BidiFormatter.m_getInstanceForCurrentLocale__().m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, text, false, false);
   option.text = formattedText;
   if (j_l_String.m_length__java_lang_String(formattedText) > j_l_String.m_length__java_lang_String(text)) {
    option.setAttribute(ListBox.f_BIDI_ATTR_NAME__org_gwtproject_user_client_ui_ListBox_, "");
   } else {
    option.removeAttribute(ListBox.f_BIDI_ATTR_NAME__org_gwtproject_user_client_ui_ListBox_);
   }
  }
 }
 /**
  * @param {number} index
  * @public
  */
 m_checkIndex__int_$p_org_gwtproject_user_client_ui_ListBox(index) {
  if (index < 0 || index >= this.m_getItemCount__()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 /**
  * @return {Object}
  * @public
  */
 m_getSelectElement___$p_org_gwtproject_user_client_ui_ListBox() {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), SelectElement_$Overlay));
 }
 /**
  * @return {DirectionEstimator}
  * @public
  */
 static get f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_ListBox() {
  return (ListBox.$clinit(), ListBox.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_ListBox);
 }
 /**
  * @public
  */
 static $clinit() {
  ListBox.$clinit = () =>{};
  ListBox.$loadModules();
  FocusWidget.$clinit();
  ListBox.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_ListBox = WordCountDirectionEstimator.m_get__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ListBox;
 }
 /**
  * @public
  */
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  NodeList_$Overlay = goog.module.get('org.gwtproject.dom.client.NodeList.$Overlay$impl');
  OptionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
  SelectElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
  ChangeEvent = goog.module.get('org.gwtproject.event.dom.client.ChangeEvent$impl');
  BidiFormatter = goog.module.get('org.gwtproject.i18n.shared.BidiFormatter$impl');
  WordCountDirectionEstimator = goog.module.get('org.gwtproject.i18n.shared.WordCountDirectionEstimator$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(ListBox, 'org.gwtproject.user.client.ui.ListBox');

HasChangeHandlers.$markImplementor(ListBox);
HasName.$markImplementor(ListBox);
HasDirectionEstimator.$markImplementor(ListBox);

/** @private {DirectionEstimator} */
ListBox.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_ListBox;
/** @public {?string} @const */
ListBox.f_BIDI_ATTR_NAME__org_gwtproject_user_client_ui_ListBox_ = "bidiwrapped";
/** @public {number} @const */
ListBox.f_INSERT_AT_END__org_gwtproject_user_client_ui_ListBox_ = -1;

exports = ListBox; 
//# sourceMappingURL=ListBox.js.map