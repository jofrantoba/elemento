goog.module('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');
const SuggestionDisplay = goog.require('org.gwtproject.user.client.ui.SuggestBox.SuggestionDisplay$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DecoratedPopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DecoratedPopupPanel$impl');
let MenuBar = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');
let AnimationType = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.AnimationType$impl');
let SuggestBox = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay.$1$impl');
let SuggestionCallback = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback$impl');
let SuggestionMenu = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.SuggestionMenu$impl');
let SuggestionMenuItem = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.SuggestionMenuItem$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasAnimation}
  */
class DefaultSuggestionDisplay extends SuggestionDisplay {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {SuggestionMenu} */
  this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_;
  /** @public {PopupPanel} */
  this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_;
  /** @public {SuggestBox} */
  this.f_lastSuggestBox__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_;
  /** @public {boolean} */
  this.f_hideWhenEmpty__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_ = false;
  /** @public {UIObject} */
  this.f_positionRelativeTo__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_;
 }
 /**
  * @return {!DefaultSuggestionDisplay}
  * @public
  */
 static $create__() {
  DefaultSuggestionDisplay.$clinit();
  let $instance = new DefaultSuggestionDisplay();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay__() {
  this.$ctor__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay();
  this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_ = SuggestionMenu.$create__boolean(true);
  this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_ = this.m_createPopup__();
  this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_setWidget__org_gwtproject_user_client_ui_Widget(this.m_decorateSuggestionList__org_gwtproject_user_client_ui_Widget(this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_));
 }
 /**
  * @override
  * @public
  */
 m_hideSuggestions__() {
  this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_hide__();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isAnimationEnabled__() {
  return this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_isAnimationEnabled__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isSuggestionListHiddenWhenEmpty__() {
  return this.f_hideWhenEmpty__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isSuggestionListShowing__() {
  return this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_isShowing__();
 }
 /**
  * @override
  * @param {boolean} enable
  * @public
  */
 m_setAnimationEnabled__boolean(enable) {
  this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_setAnimationEnabled__boolean(enable);
 }
 /**
  * @param {?string} style
  * @public
  */
 m_setPopupStyleName__java_lang_String(style) {
  this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_setStyleName__java_lang_String(style);
 }
 /**
  * @param {UIObject} uiObject
  * @public
  */
 m_setPositionRelativeTo__org_gwtproject_user_client_ui_UIObject(uiObject) {
  this.f_positionRelativeTo__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_ = uiObject;
 }
 /**
  * @param {boolean} hideWhenEmpty
  * @public
  */
 m_setSuggestionListHiddenWhenEmpty__boolean(hideWhenEmpty) {
  this.f_hideWhenEmpty__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_ = hideWhenEmpty;
 }
 /**
  * @return {PopupPanel}
  * @public
  */
 m_createPopup__() {
  let p = DecoratedPopupPanel.$create__boolean__boolean__java_lang_String(true, false, "suggestPopup");
  p.m_setStyleName__java_lang_String("gwt-SuggestBoxPopup");
  p.m_setPreviewingAllNativeEvents__boolean(true);
  p.m_setAnimationType__org_gwtproject_user_client_ui_PopupPanel_AnimationType(AnimationType.f_ROLL_DOWN__org_gwtproject_user_client_ui_PopupPanel_AnimationType);
  return p;
 }
 /**
  * @param {Widget} suggestionList
  * @return {Widget}
  * @public
  */
 m_decorateSuggestionList__org_gwtproject_user_client_ui_Widget(suggestionList) {
  return suggestionList;
 }
 /**
  * @override
  * @return {Suggestion}
  * @public
  */
 m_getCurrentSelection__() {
  if (!this.m_isSuggestionListShowing__()) {
   return null;
  }
  let item = this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_getSelectedItem__();
  return $Equality.$same(item, null) ? null : /**@type {SuggestionMenuItem} */ ($Casts.$to(item, SuggestionMenuItem)).m_getSuggestion__();
 }
 /**
  * @return {PopupPanel}
  * @public
  */
 m_getPopupPanel__() {
  return this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_;
 }
 /**
  * @return {MenuBar}
  * @public
  */
 m_getSuggestionMenu__() {
  return this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_;
 }
 /**
  * @override
  * @public
  */
 m_moveSelectionDown__() {
  if (this.m_isSuggestionListShowing__()) {
   this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_selectItem__int(this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_getSelectedItemIndex__() + 1);
  }
 }
 /**
  * @override
  * @public
  */
 m_moveSelectionUp__() {
  if (this.m_isSuggestionListShowing__()) {
   if (this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_getSelectedItemIndex__() == -1) {
    this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_selectItem__int(this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_getNumItems__() - 1);
   } else {
    this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_selectItem__int(this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_getSelectedItemIndex__() - 1);
   }
  }
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_ensureDebugId__java_lang_String(j_l_String.m_valueOf__java_lang_Object(baseID) + "-popup");
  this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_setMenuItemDebugIds__java_lang_String_$pp_org_gwtproject_user_client_ui(baseID);
 }
 /**
  * @override
  * @param {SuggestBox} suggestBox
  * @param {Collection<?>} suggestions
  * @param {boolean} isDisplayStringHTML
  * @param {boolean} isAutoSelectEnabled
  * @param {SuggestionCallback} callback
  * @public
  */
 m_showSuggestions__org_gwtproject_user_client_ui_SuggestBox__java_util_Collection__boolean__boolean__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback(suggestBox, suggestions, isDisplayStringHTML, isAutoSelectEnabled, callback) {
  let anySuggestions = (!$Equality.$same(suggestions, null) && suggestions.size() > 0);
  if (!anySuggestions && this.f_hideWhenEmpty__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_) {
   this.m_hideSuggestions__();
   return;
  }
  if (this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_isAttached__()) {
   this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_hide__();
  }
  this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_clearItems__();
  for (let $iterator = suggestions.m_iterator__(); $iterator.m_hasNext__(); ) {
   let curSuggestion = /**@type {Suggestion} */ ($Casts.$to($iterator.m_next__(), Suggestion));
   let menuItem = SuggestionMenuItem.$create__org_gwtproject_user_client_ui_SuggestOracle_Suggestion__boolean(curSuggestion, isDisplayStringHTML);
   menuItem.m_setScheduledCommand__org_gwtproject_core_client_Scheduler_ScheduledCommand($1.$create__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(this, callback, curSuggestion));
   this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_addItem__org_gwtproject_user_client_ui_MenuItem(menuItem);
  }
  if (isAutoSelectEnabled && anySuggestions) {
   this.f_suggestionMenu__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_selectItem__int(0);
  }
  if (!$Equality.$same(this.f_lastSuggestBox__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_, suggestBox)) {
   if (!$Equality.$same(this.f_lastSuggestBox__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_, null)) {
    this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_removeAutoHidePartner__org_gwtproject_dom_client_Element(this.f_lastSuggestBox__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_getElement__());
   }
   this.f_lastSuggestBox__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_ = suggestBox;
   this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_addAutoHidePartner__org_gwtproject_dom_client_Element(suggestBox.m_getElement__());
  }
  this.f_suggestionPopup__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_.m_showRelativeTo__org_gwtproject_user_client_ui_UIObject(!$Equality.$same(this.f_positionRelativeTo__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_, null) ? this.f_positionRelativeTo__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_ : suggestBox);
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isAnimationEnabledImpl___$pp_org_gwtproject_user_client_ui() {
  return this.m_isAnimationEnabled__();
 }
 /**
  * @override
  * @param {boolean} enable
  * @public
  */
 m_setAnimationEnabledImpl__boolean_$pp_org_gwtproject_user_client_ui(enable) {
  this.m_setAnimationEnabled__boolean(enable);
 }
 /**
  * @override
  * @param {?string} style
  * @public
  */
 m_setPopupStyleNameImpl__java_lang_String_$pp_org_gwtproject_user_client_ui(style) {
  this.m_setPopupStyleName__java_lang_String(style);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay() {
  this.f_lastSuggestBox__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_ = null;
  this.f_hideWhenEmpty__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_ = true;
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultSuggestionDisplay.$clinit = () =>{};
  DefaultSuggestionDisplay.$loadModules();
  SuggestionDisplay.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultSuggestionDisplay;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DecoratedPopupPanel = goog.module.get('org.gwtproject.user.client.ui.DecoratedPopupPanel$impl');
  AnimationType = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.AnimationType$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay.$1$impl');
  SuggestionMenu = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.SuggestionMenu$impl');
  SuggestionMenuItem = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.SuggestionMenuItem$impl');
  Suggestion = goog.module.get('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DefaultSuggestionDisplay, 'org.gwtproject.user.client.ui.SuggestBox$DefaultSuggestionDisplay');

HasAnimation.$markImplementor(DefaultSuggestionDisplay);

exports = DefaultSuggestionDisplay; 
//# sourceMappingURL=SuggestBox$DefaultSuggestionDisplay.js.map