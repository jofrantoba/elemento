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
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_limit__org_gwtproject_user_client_ui_SuggestBox_ = 0;
  /**@type {boolean}*/
  this.f_selectsFirstItem__org_gwtproject_user_client_ui_SuggestBox_ = false;
  /**@type {SuggestOracle}*/
  this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_;
  /**@type {?string}*/
  this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_;
  /**@type {LeafValueEditor<?string>}*/
  this.f_editor__org_gwtproject_user_client_ui_SuggestBox_;
  /**@type {SuggestionDisplay}*/
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_;
  /**@type {ValueBoxBase<?string>}*/
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_;
  /**@type {Callback}*/
  this.f_callback__org_gwtproject_user_client_ui_SuggestBox_;
  /**@type {SuggestionCallback}*/
  this.f_suggestionCallback__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /** @return {SuggestBox} */
 static m_wrap__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_dom_client_Element(/** SuggestOracle */ oracle, /** Object */ element) {
  SuggestBox.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let textBox = TextBox.$create__org_gwtproject_dom_client_Element(element);
  let suggestBox = SuggestBox.$create__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(oracle, textBox);
  suggestBox.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(suggestBox);
  return suggestBox;
 }
 //Factory method corresponding to constructor 'SuggestBox()'.
 /** @return {!SuggestBox} */
 static $create__() {
  SuggestBox.$clinit();
  let $instance = new SuggestBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox__();
  return $instance;
 }
 //Initialization from constructor 'SuggestBox()'.
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox__() {
  this.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle(MultiWordSuggestOracle.$create__());
 }
 //Factory method corresponding to constructor 'SuggestBox(SuggestOracle)'.
 /** @return {!SuggestBox} */
 static $create__org_gwtproject_user_client_ui_SuggestOracle(/** SuggestOracle */ oracle) {
  SuggestBox.$clinit();
  let $instance = new SuggestBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle(oracle);
  return $instance;
 }
 //Initialization from constructor 'SuggestBox(SuggestOracle)'.
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle(/** SuggestOracle */ oracle) {
  this.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(oracle, TextBox.$create__());
 }
 //Factory method corresponding to constructor 'SuggestBox(SuggestOracle, ValueBoxBase)'.
 /** @return {!SuggestBox} */
 static $create__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(/** SuggestOracle */ oracle, /** ValueBoxBase<?string> */ box) {
  SuggestBox.$clinit();
  let $instance = new SuggestBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(oracle, box);
  return $instance;
 }
 //Initialization from constructor 'SuggestBox(SuggestOracle, ValueBoxBase)'.
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase(/** SuggestOracle */ oracle, /** ValueBoxBase<?string> */ box) {
  this.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay(oracle, box, DefaultSuggestionDisplay.$create__());
 }
 //Factory method corresponding to constructor 'SuggestBox(SuggestOracle, ValueBoxBase, SuggestionDisplay)'.
 /** @return {!SuggestBox} */
 static $create__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay(/** SuggestOracle */ oracle, /** ValueBoxBase<?string> */ box, /** SuggestionDisplay */ suggestDisplay) {
  SuggestBox.$clinit();
  let $instance = new SuggestBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay(oracle, box, suggestDisplay);
  return $instance;
 }
 //Initialization from constructor 'SuggestBox(SuggestOracle, ValueBoxBase, SuggestionDisplay)'.
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay(/** SuggestOracle */ oracle, /** ValueBoxBase<?string> */ box, /** SuggestionDisplay */ suggestDisplay) {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestBox();
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_ = box;
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_ = suggestDisplay;
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(box);
  this.m_addEventsToTextBox___$p_org_gwtproject_user_client_ui_SuggestBox();
  this.m_setOracle__org_gwtproject_user_client_ui_SuggestOracle_$p_org_gwtproject_user_client_ui_SuggestBox(oracle);
  this.m_setStyleName__java_lang_String(SuggestBox.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_SuggestBox_);
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
 m_addSelectionHandler__org_gwtproject_event_logical_shared_SelectionHandler(/** SelectionHandler<Suggestion> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, SelectionEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(/** ValueChangeHandler<?string> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /** @override @return {LeafValueEditor<?string>} */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_SuggestBox_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_SuggestBox_ = /**@type {TakesValueEditor<?string>}*/ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /** @return {number} */
 m_getLimit__() {
  return this.f_limit__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /** @return {SuggestionDisplay} */
 m_getSuggestionDisplay__() {
  return this.f_display__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /** @return {SuggestOracle} */
 m_getSuggestOracle__() {
  return this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /** @override @return {number} */
 m_getTabIndex__() {
  return this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_getTabIndex__();
 }
 /** @override @return {?string} */
 m_getText__() {
  return this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_getText__();
 }
 /** @return {TextBoxBase} @deprecated */
 m_getTextBox__() {
  return /**@type {TextBoxBase}*/ ($Casts.$to(this.f_box__org_gwtproject_user_client_ui_SuggestBox_, TextBoxBase));
 }
 /** @override @return {?string} */
 m_getValue__() {
  return /**@type {?string}*/ ($Casts.$to(this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_getValue__(), j_l_String));
 }
 /** @return {ValueBoxBase<?string>} */
 m_getValueBox__() {
  return this.f_box__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /** @deprecated */
 m_hideSuggestionList__() {
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_hideSuggestions__();
 }
 /** @override @return {boolean} @deprecated */
 m_isAnimationEnabled__() {
  return this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_isAnimationEnabledImpl___$pp_org_gwtproject_user_client_ui();
 }
 /** @return {boolean} */
 m_isAutoSelectEnabled__() {
  return this.f_selectsFirstItem__org_gwtproject_user_client_ui_SuggestBox_;
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_isEnabled__();
 }
 /** @return {boolean} */
 m_isSuggestionListShowing__() {
  return this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_isSuggestionListShowing__();
 }
 
 m_refreshSuggestionList__() {
  if (this.m_isAttached__()) {
   this.m_refreshSuggestions___$p_org_gwtproject_user_client_ui_SuggestBox();
  }
 }
 /** @override */
 m_setAccessKey__char(/** number */ key) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setAccessKey__char(key);
 }
 /** @override @deprecated */
 m_setAnimationEnabled__boolean(/** boolean */ enable) {
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_setAnimationEnabledImpl__boolean_$pp_org_gwtproject_user_client_ui(enable);
 }
 
 m_setAutoSelectEnabled__boolean(/** boolean */ selectsFirstItem) {
  this.f_selectsFirstItem__org_gwtproject_user_client_ui_SuggestBox_ = selectsFirstItem;
 }
 /** @override */
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setEnabled__boolean(enabled);
  if (!enabled) {
   this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_hideSuggestions__();
  }
 }
 /** @override */
 m_setFocus__boolean(/** boolean */ focused) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setFocus__boolean(focused);
 }
 
 m_setLimit__int(/** number */ limit) {
  this.f_limit__org_gwtproject_user_client_ui_SuggestBox_ = limit;
 }
 /** @deprecated */
 m_setPopupStyleName__java_lang_String(/** ?string */ style) {
  this.m_getSuggestionDisplay__().m_setPopupStyleNameImpl__java_lang_String_$pp_org_gwtproject_user_client_ui(style);
 }
 /** @override */
 m_setTabIndex__int(/** number */ index) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setTabIndex__int(index);
 }
 /** @override */
 m_setText__java_lang_String(/** ?string */ text) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setText__java_lang_String(text);
 }
 
 m_setValue__java_lang_String(/** ?string */ newValue) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setValue__java_lang_Object(newValue);
 }
 
 m_setValue__java_lang_String__boolean(/** ?string */ value, /** boolean */ fireEvents) {
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setValue__java_lang_Object__boolean(value, fireEvents);
 }
 
 m_showSuggestionList__() {
  if (this.m_isAttached__()) {
   this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_ = null;
   this.m_refreshSuggestions___$p_org_gwtproject_user_client_ui_SuggestBox();
  }
 }
 /** @override */
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_onEnsureDebugId__java_lang_String(baseID);
 }
 
 m_showSuggestions__java_lang_String_$pp_org_gwtproject_user_client_ui(/** ?string */ query) {
  if (j_l_String.m_length__java_lang_String(query) == 0) {
   this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_.m_requestDefaultSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Callback(Request.$create__java_lang_String__int(null, this.f_limit__org_gwtproject_user_client_ui_SuggestBox_), this.f_callback__org_gwtproject_user_client_ui_SuggestBox_);
  } else {
   this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_.m_requestSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Callback(Request.$create__java_lang_String__int(query, this.f_limit__org_gwtproject_user_client_ui_SuggestBox_), this.f_callback__org_gwtproject_user_client_ui_SuggestBox_);
  }
 }
 
 m_addEventsToTextBox___$p_org_gwtproject_user_client_ui_SuggestBox() {
  let events = $1TextBoxEvents.$create__org_gwtproject_user_client_ui_SuggestBox(this);
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler($3.$create__org_gwtproject_user_client_ui_SuggestBox(this));
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler($4.$create__org_gwtproject_user_client_ui_SuggestBox(this));
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_addKeyDownHandler__org_gwtproject_event_dom_client_KeyDownHandler(events);
  this.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(events);
 }
 
 m_fireSuggestionEvent__org_gwtproject_user_client_ui_SuggestOracle_Suggestion_$p_org_gwtproject_user_client_ui_SuggestBox(/** Suggestion */ selectedSuggestion) {
  SelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(this, selectedSuggestion);
 }
 
 m_refreshSuggestions___$p_org_gwtproject_user_client_ui_SuggestBox() {
  let text = this.m_getText__();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(text, this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_)) {
   return;
  } else {
   this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_ = text;
  }
  this.m_showSuggestions__java_lang_String_$pp_org_gwtproject_user_client_ui(text);
 }
 
 m_setNewSelection__org_gwtproject_user_client_ui_SuggestOracle_Suggestion_$p_org_gwtproject_user_client_ui_SuggestBox(/** Suggestion */ curSuggestion) {
  $Asserts.$assertWithMessage(!$Equality.$same(curSuggestion, null), "suggestion cannot be null");
  this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_ = curSuggestion.m_getReplacementString__();
  this.m_setText__java_lang_String(this.f_currentText__org_gwtproject_user_client_ui_SuggestBox_);
  this.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_hideSuggestions__();
  this.m_fireSuggestionEvent__org_gwtproject_user_client_ui_SuggestOracle_Suggestion_$p_org_gwtproject_user_client_ui_SuggestBox(curSuggestion);
 }
 
 m_setOracle__org_gwtproject_user_client_ui_SuggestOracle_$p_org_gwtproject_user_client_ui_SuggestBox(/** SuggestOracle */ oracle) {
  this.f_oracle__org_gwtproject_user_client_ui_SuggestBox_ = oracle;
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object(/** * */ arg0) {
  this.m_setValue__java_lang_String(/**@type {?string}*/ ($Casts.$to(arg0, j_l_String)));
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object__boolean(/** * */ arg0, /** boolean */ arg1) {
  this.m_setValue__java_lang_String__boolean(/**@type {?string}*/ ($Casts.$to(arg0, j_l_String)), arg1);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_SuggestBox() {
  this.f_limit__org_gwtproject_user_client_ui_SuggestBox_ = 20;
  this.f_selectsFirstItem__org_gwtproject_user_client_ui_SuggestBox_ = true;
  this.f_callback__org_gwtproject_user_client_ui_SuggestBox_ = $1.$create__org_gwtproject_user_client_ui_SuggestBox(this);
  this.f_suggestionCallback__org_gwtproject_user_client_ui_SuggestBox_ = $2.$create__org_gwtproject_user_client_ui_SuggestBox(this);
 }
 
 static $clinit() {
  SuggestBox.$clinit = () =>{};
  SuggestBox.$loadModules();
  Composite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SuggestBox;
 }
 
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

/**@const {?string}*/
SuggestBox.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_SuggestBox_ = "gwt-SuggestBox";

exports = SuggestBox; 
//# sourceMappingURL=SuggestBox.js.map