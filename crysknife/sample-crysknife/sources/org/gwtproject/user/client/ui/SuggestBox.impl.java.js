goog.module('org.gwtproject.user.client.ui.SuggestBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const HasAllKeyHandlers = goog.require('org.gwtproject.event.dom.client.HasAllKeyHandlers$impl');
const HasSelectionHandlers = goog.require('org.gwtproject.event.logical.shared.HasSelectionHandlers$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const Focusable = goog.require('org.gwtproject.user.client.ui.Focusable$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');
const HasEnabled = goog.require('org.gwtproject.user.client.ui.HasEnabled$impl');
const HasText = goog.require('org.gwtproject.user.client.ui.HasText$impl');
const HasValue = goog.require('org.gwtproject.user.client.ui.HasValue$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let KeyDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownHandler$impl');
let KeyPressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressEvent$impl');
let KeyPressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressHandler$impl');
let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');
let KeyUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpHandler$impl');
let SelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionEvent$impl');
let SelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionHandler$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let MultiWordSuggestOracle = goog.forwardDeclare('org.gwtproject.user.client.ui.MultiWordSuggestOracle$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.$1$impl');
let $1TextBoxEvents = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.$1TextBoxEvents$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.$4$impl');
let DefaultSuggestionDisplay = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay$impl');
let SuggestionCallback = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback$impl');
let SuggestionDisplay = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.SuggestionDisplay$impl');
let SuggestOracle = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle$impl');
let Callback = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Callback$impl');
let Request = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');
let TextBox = goog.forwardDeclare('org.gwtproject.user.client.ui.TextBox$impl');
let TextBoxBase = goog.forwardDeclare('org.gwtproject.user.client.ui.TextBoxBase$impl');
let ValueBoxBase = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasText}
 * @implements {Focusable}
 * @implements {HasAnimation}
 * @implements {HasEnabled}
 * @implements {HasAllKeyHandlers}
 * @implements {HasValue<?string>}
 * @implements {HasSelectionHandlers<Suggestion>}
 * @implements {IsEditor<LeafValueEditor<?string>>}
  */
class SuggestBox extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_limit__org_gwtproject_user_client_ui_SuggestBox_ = 0;
  /** @public {boolean} */
  this.f_selectsFirstItem__org_gwtproject_user_client_ui_SuggestBox_ = false;
  /** @public {SuggestOracle} */
  this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_;
  /** @public {?string} */
  this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_;
  /** @public {LeafValueEditor<?string>} */
  this.f_editor__org_gwtproject_user_client_ui_SuggestBox_;
  /** @public {SuggestionDisplay} */
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_;
  /** @public {ValueBoxBase<?string>} */
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_;
  /** @public {Callback} */
  this.f_callback__org_gwtproject_user_client_ui_SuggestBox_;
  /** @public {SuggestionCallback} */
  this.f_suggestionCallback__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /**
  * @param {SuggestOracle} oracle
  * @param {Object} element
  * @return {SuggestBox}
  * @public
  */
 static m_wrap__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_dom_client_Element(oracle, element) {
  SuggestBox.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let textBox = TextBox.$create__org_gwtproject_dom_client_Element(element);
  let suggestBox = SuggestBox.$create__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(oracle, textBox);
  suggestBox.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(suggestBox);
  return suggestBox;
 }
 /**
  * Factory method corresponding to constructor 'SuggestBox()'.
  * @return {!SuggestBox}
  * @public
  */
 static $create__() {
  SuggestBox.$clinit();
  let $instance = new SuggestBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox__();
  return $instance;
 }
 /**
  * Initialization from constructor 'SuggestBox()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestBox__() {
  this.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle(MultiWordSuggestOracle.$create__());
 }
 /**
  * Factory method corresponding to constructor 'SuggestBox(SuggestOracle)'.
  * @param {SuggestOracle} oracle
  * @return {!SuggestBox}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_SuggestOracle(oracle) {
  SuggestBox.$clinit();
  let $instance = new SuggestBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle(oracle);
  return $instance;
 }
 /**
  * Initialization from constructor 'SuggestBox(SuggestOracle)'.
  * @param {SuggestOracle} oracle
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle(oracle) {
  this.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(oracle, TextBox.$create__());
 }
 /**
  * Factory method corresponding to constructor 'SuggestBox(SuggestOracle, ValueBoxBase)'.
  * @param {SuggestOracle} oracle
  * @param {ValueBoxBase<?string>} box
  * @return {!SuggestBox}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(oracle, box) {
  SuggestBox.$clinit();
  let $instance = new SuggestBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(oracle, box);
  return $instance;
 }
 /**
  * Initialization from constructor 'SuggestBox(SuggestOracle, ValueBoxBase)'.
  * @param {SuggestOracle} oracle
  * @param {ValueBoxBase<?string>} box
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(oracle, box) {
  this.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay(oracle, box, DefaultSuggestionDisplay.$create__());
 }
 /**
  * Factory method corresponding to constructor 'SuggestBox(SuggestOracle, ValueBoxBase, SuggestionDisplay)'.
  * @param {SuggestOracle} oracle
  * @param {ValueBoxBase<?string>} box
  * @param {SuggestionDisplay} suggestDisplay
  * @return {!SuggestBox}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay(oracle, box, suggestDisplay) {
  SuggestBox.$clinit();
  let $instance = new SuggestBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay(oracle, box, suggestDisplay);
  return $instance;
 }
 /**
  * Initialization from constructor 'SuggestBox(SuggestOracle, ValueBoxBase, SuggestionDisplay)'.
  * @param {SuggestOracle} oracle
  * @param {ValueBoxBase<?string>} box
  * @param {SuggestionDisplay} suggestDisplay
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay(oracle, box, suggestDisplay) {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestBox();
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_ = box;
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_ = suggestDisplay;
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(box);
  this.m_addEventsToTextBox___$p_org_gwtproject_user_client_ui_SuggestBox();
  this.m_setOracle__org_gwtproject_user_client_ui_SuggestOracle_$p_org_gwtproject_user_client_ui_SuggestBox(oracle);
  this.m_setStyleName__java_lang_String(SuggestBox.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_SuggestBox_);
 }
 /**
  * @override
  * @param {KeyDownHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addKeyDownHandler__org_gwtproject_event_dom_client_KeyDownHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyDownEvent.m_getType__());
 }
 /**
  * @override
  * @param {KeyPressHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addKeyPressHandler__org_gwtproject_event_dom_client_KeyPressHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyPressEvent.m_getType__());
 }
 /**
  * @override
  * @param {KeyUpHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyUpEvent.m_getType__());
 }
 /**
  * @override
  * @param {SelectionHandler<Suggestion>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addSelectionHandler__org_gwtproject_event_logical_shared_SelectionHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, SelectionEvent.m_getType__());
 }
 /**
  * @override
  * @param {ValueChangeHandler<?string>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /**
  * @override
  * @return {LeafValueEditor<?string>}
  * @public
  */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_SuggestBox_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_SuggestBox_ = /**@type {TakesValueEditor<?string>} */ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getLimit__() {
  return this.f_limit__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /**
  * @return {SuggestionDisplay}
  * @public
  */
 m_getSuggestionDisplay__() {
  return this.f_display__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /**
  * @return {SuggestOracle}
  * @public
  */
 m_getSuggestOracle__() {
  return this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTabIndex__() {
  return this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_getTabIndex__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_getText__();
 }
 /**
  * @return {TextBoxBase}
  * @public
  * @deprecated
  */
 m_getTextBox__() {
  return /**@type {TextBoxBase} */ ($Casts.$to(this.f_box__org_gwtproject_user_client_ui_SuggestBox_, TextBoxBase));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getValue__() {
  return /**@type {?string} */ ($Casts.$to(this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_getValue__(), j_l_String));
 }
 /**
  * @return {ValueBoxBase<?string>}
  * @public
  */
 m_getValueBox__() {
  return this.f_box__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /**
  * @public
  * @deprecated
  */
 m_hideSuggestionList__() {
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_hideSuggestions__();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  * @deprecated
  */
 m_isAnimationEnabled__() {
  return this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_isAnimationEnabledImpl___$pp_org_gwtproject_user_client_ui();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isAutoSelectEnabled__() {
  return this.f_selectsFirstItem__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {
  return this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_isEnabled__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isSuggestionListShowing__() {
  return this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_isSuggestionListShowing__();
 }
 /**
  * @public
  */
 m_refreshSuggestionList__() {
  if (this.m_isAttached__()) {
   this.m_refreshSuggestions___$p_org_gwtproject_user_client_ui_SuggestBox();
  }
 }
 /**
  * @override
  * @param {number} key
  * @public
  */
 m_setAccessKey__char(key) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setAccessKey__char(key);
 }
 /**
  * @override
  * @param {boolean} enable
  * @public
  * @deprecated
  */
 m_setAnimationEnabled__boolean(enable) {
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_setAnimationEnabledImpl__boolean_$pp_org_gwtproject_user_client_ui(enable);
 }
 /**
  * @param {boolean} selectsFirstItem
  * @public
  */
 m_setAutoSelectEnabled__boolean(selectsFirstItem) {
  this.f_selectsFirstItem__org_gwtproject_user_client_ui_SuggestBox_ = selectsFirstItem;
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setEnabled__boolean(enabled);
  if (!enabled) {
   this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_hideSuggestions__();
  }
 }
 /**
  * @override
  * @param {boolean} focused
  * @public
  */
 m_setFocus__boolean(focused) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setFocus__boolean(focused);
 }
 /**
  * @param {number} limit
  * @public
  */
 m_setLimit__int(limit) {
  this.f_limit__org_gwtproject_user_client_ui_SuggestBox_ = limit;
 }
 /**
  * @param {?string} style
  * @public
  * @deprecated
  */
 m_setPopupStyleName__java_lang_String(style) {
  this.m_getSuggestionDisplay__().m_setPopupStyleNameImpl__java_lang_String_$pp_org_gwtproject_user_client_ui(style);
 }
 /**
  * @override
  * @param {number} index
  * @public
  */
 m_setTabIndex__int(index) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setTabIndex__int(index);
 }
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setText__java_lang_String(text);
 }
 /**
  * @param {?string} newValue
  * @public
  */
 m_setValue__java_lang_String(newValue) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setValue__java_lang_Object(newValue);
 }
 /**
  * @param {?string} value
  * @param {boolean} fireEvents
  * @public
  */
 m_setValue__java_lang_String__boolean(value, fireEvents) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setValue__java_lang_Object__boolean(value, fireEvents);
 }
 /**
  * @public
  */
 m_showSuggestionList__() {
  if (this.m_isAttached__()) {
   this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_ = null;
   this.m_refreshSuggestions___$p_org_gwtproject_user_client_ui_SuggestBox();
  }
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_onEnsureDebugId__java_lang_String(baseID);
 }
 /**
  * @param {?string} query
  * @public
  */
 m_showSuggestions__java_lang_String_$pp_org_gwtproject_user_client_ui(query) {
  if (j_l_String.m_length__java_lang_String(query) == 0) {
   this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_.m_requestDefaultSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Callback(Request.$create__java_lang_String__int(null, this.f_limit__org_gwtproject_user_client_ui_SuggestBox_), this.f_callback__org_gwtproject_user_client_ui_SuggestBox_);
  } else {
   this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_.m_requestSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Callback(Request.$create__java_lang_String__int(query, this.f_limit__org_gwtproject_user_client_ui_SuggestBox_), this.f_callback__org_gwtproject_user_client_ui_SuggestBox_);
  }
 }
 /**
  * @public
  */
 m_addEventsToTextBox___$p_org_gwtproject_user_client_ui_SuggestBox() {
  let events = $1TextBoxEvents.$create__org_gwtproject_user_client_ui_SuggestBox(this);
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler($3.$create__org_gwtproject_user_client_ui_SuggestBox(this));
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler($4.$create__org_gwtproject_user_client_ui_SuggestBox(this));
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_addKeyDownHandler__org_gwtproject_event_dom_client_KeyDownHandler(events);
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(events);
 }
 /**
  * @param {Suggestion} selectedSuggestion
  * @public
  */
 m_fireSuggestionEvent__org_gwtproject_user_client_ui_SuggestOracle_Suggestion_$p_org_gwtproject_user_client_ui_SuggestBox(selectedSuggestion) {
  SelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(this, selectedSuggestion);
 }
 /**
  * @public
  */
 m_refreshSuggestions___$p_org_gwtproject_user_client_ui_SuggestBox() {
  let text = this.m_getText__();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(text, this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_)) {
   return;
  } else {
   this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_ = text;
  }
  this.m_showSuggestions__java_lang_String_$pp_org_gwtproject_user_client_ui(text);
 }
 /**
  * @param {Suggestion} curSuggestion
  * @public
  */
 m_setNewSelection__org_gwtproject_user_client_ui_SuggestOracle_Suggestion_$p_org_gwtproject_user_client_ui_SuggestBox(curSuggestion) {
  $Asserts.$assertWithMessage(!$Equality.$same(curSuggestion, null), "suggestion cannot be null");
  this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_ = curSuggestion.m_getReplacementString__();
  this.m_setText__java_lang_String(this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_);
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_hideSuggestions__();
  this.m_fireSuggestionEvent__org_gwtproject_user_client_ui_SuggestOracle_Suggestion_$p_org_gwtproject_user_client_ui_SuggestBox(curSuggestion);
 }
 /**
  * @param {SuggestOracle} oracle
  * @public
  */
 m_setOracle__org_gwtproject_user_client_ui_SuggestOracle_$p_org_gwtproject_user_client_ui_SuggestBox(oracle) {
  this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_ = oracle;
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_setValue__java_lang_Object(arg0) {
  this.m_setValue__java_lang_String(/**@type {?string} */ ($Casts.$to(arg0, j_l_String)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @param {boolean} arg1
  * @public
  */
 m_setValue__java_lang_Object__boolean(arg0, arg1) {
  this.m_setValue__java_lang_String__boolean(/**@type {?string} */ ($Casts.$to(arg0, j_l_String)), arg1);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_SuggestBox() {
  this.f_limit__org_gwtproject_user_client_ui_SuggestBox_ = 20;
  this.f_selectsFirstItem__org_gwtproject_user_client_ui_SuggestBox_ = true;
  this.f_callback__org_gwtproject_user_client_ui_SuggestBox_ = $1.$create__org_gwtproject_user_client_ui_SuggestBox(this);
  this.f_suggestionCallback__org_gwtproject_user_client_ui_SuggestBox_ = $2.$create__org_gwtproject_user_client_ui_SuggestBox(this);
 }
 /**
  * @public
  */
 static $clinit() {
  SuggestBox.$clinit = () =>{};
  SuggestBox.$loadModules();
  Composite.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SuggestBox;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  KeyDownEvent = goog.module.get('org.gwtproject.event.dom.client.KeyDownEvent$impl');
  KeyPressEvent = goog.module.get('org.gwtproject.event.dom.client.KeyPressEvent$impl');
  KeyUpEvent = goog.module.get('org.gwtproject.event.dom.client.KeyUpEvent$impl');
  SelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.SelectionEvent$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  MultiWordSuggestOracle = goog.module.get('org.gwtproject.user.client.ui.MultiWordSuggestOracle$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.$1$impl');
  $1TextBoxEvents = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.$1TextBoxEvents$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.$2$impl');
  $3 = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.$3$impl');
  $4 = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.$4$impl');
  DefaultSuggestionDisplay = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay$impl');
  Request = goog.module.get('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');
  TextBox = goog.module.get('org.gwtproject.user.client.ui.TextBox$impl');
  TextBoxBase = goog.module.get('org.gwtproject.user.client.ui.TextBoxBase$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SuggestBox, 'org.gwtproject.user.client.ui.SuggestBox');

HasText.$markImplementor(SuggestBox);
Focusable.$markImplementor(SuggestBox);
HasAnimation.$markImplementor(SuggestBox);
HasEnabled.$markImplementor(SuggestBox);
HasAllKeyHandlers.$markImplementor(SuggestBox);
HasValue.$markImplementor(SuggestBox);
HasSelectionHandlers.$markImplementor(SuggestBox);
IsEditor.$markImplementor(SuggestBox);

/** @public {?string} @const */
SuggestBox.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_SuggestBox_ = "gwt-SuggestBox";

exports = SuggestBox; 
//# sourceMappingURL=SuggestBox.js.map