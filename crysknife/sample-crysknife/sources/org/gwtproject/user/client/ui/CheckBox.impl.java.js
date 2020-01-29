goog.module('org.gwtproject.user.client.ui.CheckBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const HasDirectionEstimator = goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');
const ButtonBase = goog.require('org.gwtproject.user.client.ui.ButtonBase$impl');
const HasDirectionalSafeHtml = goog.require('org.gwtproject.user.client.ui.HasDirectionalSafeHtml$impl');
const HasName = goog.require('org.gwtproject.user.client.ui.HasName$impl');
const HasValue = goog.require('org.gwtproject.user.client.ui.HasValue$impl');
const HasWordWrap = goog.require('org.gwtproject.user.client.ui.HasWordWrap$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let LabelElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let WhiteSpace = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.CheckBox.$1$impl');
let DirectionalTextHelper = goog.forwardDeclare('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasName}
 * @implements {HasValue<?boolean>}
 * @implements {HasWordWrap}
 * @implements {HasDirectionalSafeHtml}
 * @implements {HasDirectionEstimator}
 * @implements {IsEditor<LeafValueEditor<?boolean>>}
  */
class CheckBox extends ButtonBase {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DirectionalTextHelper} */
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox;
  /** @public {Object} */
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox;
  /** @public {Object} */
  this.f_labelElem__org_gwtproject_user_client_ui_CheckBox;
  /** @public {LeafValueEditor<?boolean>} */
  this.f_editor__org_gwtproject_user_client_ui_CheckBox_;
  /** @public {boolean} */
  this.f_valueChangeHandlerInitialized__org_gwtproject_user_client_ui_CheckBox_ = false;
 }
 /**
  * Factory method corresponding to constructor 'CheckBox()'.
  * @return {!CheckBox}
  * @public
  */
 static $create__() {
  CheckBox.$clinit();
  let $instance = new CheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox__();
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckBox()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox__() {
  this.$ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_dom_client_Element(DOM.m_createInputCheck__());
  this.m_setStyleName__java_lang_String("gwt-CheckBox");
 }
 /**
  * Factory method corresponding to constructor 'CheckBox(SafeHtml)'.
  * @param {SafeHtml} label
  * @return {!CheckBox}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(label) {
  CheckBox.$clinit();
  let $instance = new CheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_safehtml_shared_SafeHtml(label);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckBox(SafeHtml)'.
  * @param {SafeHtml} label
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_safehtml_shared_SafeHtml(label) {
  this.$ctor__org_gwtproject_user_client_ui_CheckBox__java_lang_String__boolean(label.m_asString__(), true);
 }
 /**
  * Factory method corresponding to constructor 'CheckBox(SafeHtml, Direction)'.
  * @param {SafeHtml} label
  * @param {Direction} dir
  * @return {!CheckBox}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(label, dir) {
  CheckBox.$clinit();
  let $instance = new CheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(label, dir);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckBox(SafeHtml, Direction)'.
  * @param {SafeHtml} label
  * @param {Direction} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(label, dir) {
  this.$ctor__org_gwtproject_user_client_ui_CheckBox__();
  this.m_setHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(label, dir);
 }
 /**
  * Factory method corresponding to constructor 'CheckBox(SafeHtml, DirectionEstimator)'.
  * @param {SafeHtml} label
  * @param {DirectionEstimator} directionEstimator
  * @return {!CheckBox}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(label, directionEstimator) {
  CheckBox.$clinit();
  let $instance = new CheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(label, directionEstimator);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckBox(SafeHtml, DirectionEstimator)'.
  * @param {SafeHtml} label
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(label, directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_CheckBox__();
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.m_setHTML__java_lang_String(label.m_asString__());
 }
 /**
  * Factory method corresponding to constructor 'CheckBox(String)'.
  * @param {?string} label
  * @return {!CheckBox}
  * @public
  */
 static $create__java_lang_String(label) {
  CheckBox.$clinit();
  let $instance = new CheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox__java_lang_String(label);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckBox(String)'.
  * @param {?string} label
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox__java_lang_String(label) {
  this.$ctor__org_gwtproject_user_client_ui_CheckBox__();
  this.m_setText__java_lang_String(label);
 }
 /**
  * Factory method corresponding to constructor 'CheckBox(String, Direction)'.
  * @param {?string} label
  * @param {Direction} dir
  * @return {!CheckBox}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(label, dir) {
  CheckBox.$clinit();
  let $instance = new CheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(label, dir);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckBox(String, Direction)'.
  * @param {?string} label
  * @param {Direction} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(label, dir) {
  this.$ctor__org_gwtproject_user_client_ui_CheckBox__();
  this.m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(label, dir);
 }
 /**
  * Factory method corresponding to constructor 'CheckBox(String, DirectionEstimator)'.
  * @param {?string} label
  * @param {DirectionEstimator} directionEstimator
  * @return {!CheckBox}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(label, directionEstimator) {
  CheckBox.$clinit();
  let $instance = new CheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(label, directionEstimator);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckBox(String, DirectionEstimator)'.
  * @param {?string} label
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(label, directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_CheckBox__();
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.m_setText__java_lang_String(label);
 }
 /**
  * Factory method corresponding to constructor 'CheckBox(String, boolean)'.
  * @param {?string} label
  * @param {boolean} asHTML
  * @return {!CheckBox}
  * @public
  */
 static $create__java_lang_String__boolean(label, asHTML) {
  CheckBox.$clinit();
  let $instance = new CheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox__java_lang_String__boolean(label, asHTML);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckBox(String, boolean)'.
  * @param {?string} label
  * @param {boolean} asHTML
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox__java_lang_String__boolean(label, asHTML) {
  this.$ctor__org_gwtproject_user_client_ui_CheckBox__();
  if (asHTML) {
   this.m_setHTML__java_lang_String(label);
  } else {
   this.m_setText__java_lang_String(label);
  }
 }
 /**
  * Factory method corresponding to constructor 'CheckBox(Element)'.
  * @param {Object} elem
  * @return {!CheckBox}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(elem) {
  CheckBox.$clinit();
  let $instance = new CheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_dom_client_Element(elem);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckBox(Element)'.
  * @param {Object} elem
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_dom_client_Element(elem) {
  this.$ctor__org_gwtproject_user_client_ui_ButtonBase__org_gwtproject_dom_client_Element(DOM.m_createSpan__());
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox = $Overlay.m_as__org_gwtproject_dom_client_Element(elem);
  this.f_labelElem__org_gwtproject_user_client_ui_CheckBox = Document_$Overlay.m_createLabelElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  this.m_getElement__().appendChild(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox);
  this.m_getElement__().appendChild(this.f_labelElem__org_gwtproject_user_client_ui_CheckBox);
  let uid = DOM.m_createUniqueId__();
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, "id", uid);
  this.f_labelElem__org_gwtproject_user_client_ui_CheckBox.htmlFor = uid;
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox = DirectionalTextHelper.$create__org_gwtproject_dom_client_Element__boolean(this.f_labelElem__org_gwtproject_user_client_ui_CheckBox, true);
  this.m_setTabIndex__int(0);
 }
 /**
  * @override
  * @param {ValueChangeHandler<?boolean>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {
  if (!this.f_valueChangeHandlerInitialized__org_gwtproject_user_client_ui_CheckBox_) {
   this.m_ensureDomEventHandlers__();
   this.f_valueChangeHandlerInitialized__org_gwtproject_user_client_ui_CheckBox_ = true;
  }
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /**
  * @override
  * @return {LeafValueEditor<?boolean>}
  * @public
  */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_CheckBox_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_CheckBox_ = /**@type {TakesValueEditor<?boolean>} */ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_CheckBox_;
 }
 /**
  * @override
  * @return {DirectionEstimator}
  * @public
  */
 m_getDirectionEstimator__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_getDirectionEstimator__();
 }
 /**
  * @return {?string}
  * @public
  */
 m_getFormValue__() {
  return this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.value;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getHTML__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_getHtml__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.name;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTabIndex__() {
  return Element_$Overlay.m_getTabIndex__$devirt__org_gwtproject_dom_client_Element(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_getText__();
 }
 /**
  * @override
  * @return {Direction}
  * @public
  */
 m_getTextDirection__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_getTextDirection__();
 }
 /**
  * @override
  * @return {?boolean}
  * @public
  */
 m_getValue__() {
  if (this.m_isAttached__()) {
   return $Overlay.m_isChecked__$devirt__org_gwtproject_dom_client_InputElement(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox);
  } else {
   return $Overlay.m_isDefaultChecked__$devirt__org_gwtproject_dom_client_InputElement(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox);
  }
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_getWordWrap__() {
  return !j_l_String.m_equals__java_lang_String__java_lang_Object(WhiteSpace.f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace.m_getCssName__(), Style_$Overlay.m_getWhiteSpace__$devirt__org_gwtproject_dom_client_Style(this.m_getElement__().style));
 }
 /**
  * @return {boolean}
  * @public
  * @deprecated
  */
 m_isChecked__() {
  return Boolean.m_booleanValue__java_lang_Boolean(this.m_getValue__()) == true;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {
  return !$Overlay.m_isDisabled__$devirt__org_gwtproject_dom_client_InputElement(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox);
 }
 /**
  * @override
  * @param {number} key
  * @public
  */
 m_setAccessKey__char(key) {
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.accessKey = "" + j_l_String.m_valueOf__char(key);
 }
 /**
  * @param {boolean} checked
  * @public
  * @deprecated
  */
 m_setChecked__boolean(checked) {
  this.m_setValue__java_lang_Boolean(checked);
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setDirectionEstimator__boolean(enabled) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_setDirectionEstimator__boolean(enabled);
 }
 /**
  * @override
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.disabled = !enabled;
  if (enabled) {
   this.m_removeStyleDependentName__java_lang_String("disabled");
  } else {
   this.m_addStyleDependentName__java_lang_String("disabled");
  }
 }
 /**
  * @override
  * @param {boolean} focused
  * @public
  */
 m_setFocus__boolean(focused) {
  if (focused) {
   this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.focus();
  } else {
   this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.blur();
  }
 }
 /**
  * @param {?string} value
  * @public
  */
 m_setFormValue__java_lang_String(value) {
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.setAttribute("value", value);
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @param {Direction} dir
  * @public
  */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_setHtml__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
 }
 /**
  * @override
  * @param {?string} html
  * @public
  */
 m_setHTML__java_lang_String(html) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_setHtml__java_lang_String(html);
 }
 /**
  * @override
  * @param {?string} name
  * @public
  */
 m_setName__java_lang_String(name) {
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.name = name;
 }
 /**
  * @override
  * @param {number} index
  * @public
  */
 m_setTabIndex__int(index) {
  if (!$Equality.$same(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, null)) {
   this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.tabIndex = index;
  }
 }
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_setText__java_lang_String(text);
 }
 /**
  * @override
  * @param {?string} text
  * @param {Direction} dir
  * @public
  */
 m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_CheckBox.m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir);
 }
 /**
  * @param {?boolean} value
  * @public
  */
 m_setValue__java_lang_Boolean(value) {
  this.m_setValue__java_lang_Boolean__boolean(value, false);
 }
 /**
  * @param {?boolean} value
  * @param {boolean} fireEvents
  * @public
  */
 m_setValue__java_lang_Boolean__boolean(value, fireEvents) {
  if ($Equality.$same(value, null)) {
   value = Boolean.f_FALSE__java_lang_Boolean;
  }
  let oldValue = this.m_getValue__();
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.checked = Boolean.m_booleanValue__java_lang_Boolean(value);
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.defaultChecked = Boolean.m_booleanValue__java_lang_Boolean(value);
  if (Boolean.m_equals__java_lang_Boolean__java_lang_Object(value, oldValue)) {
   return;
  }
  if (fireEvents) {
   ValueChangeEvent.m_fire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object(this, value);
  }
 }
 /**
  * @override
  * @param {boolean} wrap
  * @public
  */
 m_setWordWrap__boolean(wrap) {
  Style_$Overlay.m_setWhiteSpace__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_WhiteSpace(this.m_getElement__().style, wrap ? WhiteSpace.f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace : WhiteSpace.f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace);
 }
 /**
  * @override
  * @param {number} eventBitsToAdd
  * @public
  */
 m_sinkEvents__int(eventBitsToAdd) {
  if (this.m_isOrWasAttached__()) {
   Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, eventBitsToAdd | Event.m_getEventsSunk__org_gwtproject_dom_client_Element(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox));
  } else {
   super.m_sinkEvents__int(eventBitsToAdd);
  }
 }
 /**
  * @public
  */
 m_ensureDomEventHandlers__() {
  this.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler($1.$create__org_gwtproject_user_client_ui_CheckBox(this));
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_labelElem__org_gwtproject_user_client_ui_CheckBox, baseID, "label");
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, baseID, "input");
  this.f_labelElem__org_gwtproject_user_client_ui_CheckBox.htmlFor = this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.id;
 }
 /**
  * @override
  * @public
  */
 m_onLoad__() {
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, this);
 }
 /**
  * @override
  * @public
  */
 m_onUnload__() {
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, null);
  this.m_setValue__java_lang_Boolean(this.m_getValue__());
 }
 /**
  * @param {Object} elem
  * @public
  */
 m_replaceInputElement__org_gwtproject_dom_client_Element(elem) {
  let newInputElem = $Overlay.m_as__org_gwtproject_dom_client_Element(elem);
  let tabIndex = this.m_getTabIndex__();
  let checked = Boolean.m_booleanValue__java_lang_Boolean(this.m_getValue__());
  let enabled = this.m_isEnabled__();
  let formValue = this.m_getFormValue__();
  let uid = this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.id;
  let accessKey = this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.accessKey;
  let sunkEvents = Event.m_getEventsSunk__org_gwtproject_dom_client_Element(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox);
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, null);
  this.m_getElement__().replaceChild(newInputElem, this.f_inputElem__org_gwtproject_user_client_ui_CheckBox);
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(elem, Event.m_getEventsSunk__org_gwtproject_dom_client_Element(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox));
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, 0);
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox = newInputElem;
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, sunkEvents);
  this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.id = uid;
  if (!$Equality.$same("", accessKey)) {
   this.f_inputElem__org_gwtproject_user_client_ui_CheckBox.accessKey = accessKey;
  }
  this.m_setTabIndex__int(tabIndex);
  this.m_setValue__java_lang_Boolean(checked);
  this.m_setEnabled__boolean(enabled);
  this.m_setFormValue__java_lang_String(formValue);
  if (this.m_isAttached__()) {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, this);
  }
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_setValue__java_lang_Object(arg0) {
  this.m_setValue__java_lang_Boolean(/**@type {?boolean} */ ($Casts.$to(arg0, Boolean)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @param {boolean} arg1
  * @public
  */
 m_setValue__java_lang_Object__boolean(arg0, arg1) {
  this.m_setValue__java_lang_Boolean__boolean(/**@type {?boolean} */ ($Casts.$to(arg0, Boolean)), arg1);
 }
 /**
  * @return {DirectionEstimator}
  * @public
  */
 static get f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_CheckBox() {
  return (CheckBox.$clinit(), CheckBox.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_CheckBox);
 }
 /**
  * @public
  */
 static $clinit() {
  CheckBox.$clinit = () =>{};
  CheckBox.$loadModules();
  ButtonBase.$clinit();
  CheckBox.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_CheckBox = DirectionalTextHelper.f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CheckBox;
 }
 /**
  * @public
  */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  WhiteSpace = goog.module.get('org.gwtproject.dom.style.shared.WhiteSpace$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.CheckBox.$1$impl');
  DirectionalTextHelper = goog.module.get('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CheckBox, 'org.gwtproject.user.client.ui.CheckBox');

HasName.$markImplementor(CheckBox);
HasValue.$markImplementor(CheckBox);
HasWordWrap.$markImplementor(CheckBox);
HasDirectionalSafeHtml.$markImplementor(CheckBox);
HasDirectionEstimator.$markImplementor(CheckBox);
IsEditor.$markImplementor(CheckBox);

/** @private {DirectionEstimator} */
CheckBox.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_CheckBox;

exports = CheckBox; 
//# sourceMappingURL=CheckBox.js.map