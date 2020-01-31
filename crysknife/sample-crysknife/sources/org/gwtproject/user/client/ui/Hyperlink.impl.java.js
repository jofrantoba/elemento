goog.module('org.gwtproject.user.client.ui.Hyperlink$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasClickHandlers = goog.require('org.gwtproject.event.dom.client.HasClickHandlers$impl');
const HasDirectionEstimator = goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');
const HasDirectionalSafeHtml = goog.require('org.gwtproject.user.client.ui.HasDirectionalSafeHtml$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let DirectionalTextHelper = goog.forwardDeclare('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let HyperlinkImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.HyperlinkImpl$impl');
let History = goog.forwardDeclare('org.gwtproject.user.history.client.History$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @implements {HasHTML}
 * @implements {HasClickHandlers}
 * @implements {HasDirectionEstimator}
 * @implements {HasDirectionalSafeHtml}
  */
class Hyperlink extends Widget {
 /** @protected */
 constructor() {
  super();
  /**@type {DirectionalTextHelper}*/
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink;
  /**@type {Object}*/
  this.f_anchorElem__org_gwtproject_user_client_ui_Hyperlink_;
  /**@type {?string}*/
  this.f_targetHistoryToken__org_gwtproject_user_client_ui_Hyperlink_;
 }
 //Factory method corresponding to constructor 'Hyperlink()'.
 /** @return {!Hyperlink} */
 static $create__() {
  Hyperlink.$clinit();
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__();
  return $instance;
 }
 //Initialization from constructor 'Hyperlink()'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__() {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_dom_client_Element(DOM.m_createDiv__());
 }
 //Factory method corresponding to constructor 'Hyperlink(SafeHtml, String)'.
 /** @return {!Hyperlink} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(/** SafeHtml */ html, /** ?string */ targetHistoryToken) {
  Hyperlink.$clinit();
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(html, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(SafeHtml, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(/** SafeHtml */ html, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__java_lang_String(html.m_asString__(), true, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'Hyperlink(SafeHtml, Direction, String)'.
 /** @return {!Hyperlink} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** SafeHtml */ html, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  Hyperlink.$clinit();
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html, dir, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(SafeHtml, Direction, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** SafeHtml */ html, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html.m_asString__(), true, dir, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'Hyperlink(SafeHtml, DirectionEstimator, String)'.
 /** @return {!Hyperlink} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  Hyperlink.$clinit();
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html, directionEstimator, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(SafeHtml, DirectionEstimator, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html.m_asString__(), true, directionEstimator, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'Hyperlink(String, String)'.
 /** @return {!Hyperlink} */
 static $create__java_lang_String__java_lang_String(/** ?string */ text, /** ?string */ targetHistoryToken) {
  Hyperlink.$clinit();
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__java_lang_String(text, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__java_lang_String(/** ?string */ text, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__java_lang_String(text, false, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'Hyperlink(String, Direction, String)'.
 /** @return {!Hyperlink} */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  Hyperlink.$clinit();
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, dir, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(String, Direction, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, false, dir, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'Hyperlink(String, DirectionEstimator, String)'.
 /** @return {!Hyperlink} */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  Hyperlink.$clinit();
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, directionEstimator, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(String, DirectionEstimator, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, false, directionEstimator, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'Hyperlink(String, boolean, String)'.
 /** @return {!Hyperlink} */
 static $create__java_lang_String__boolean__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** ?string */ targetHistoryToken) {
  Hyperlink.$clinit();
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__java_lang_String(text, asHTML, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(String, boolean, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setTextOrHtml__java_lang_String__boolean(text, asHTML);
  this.m_setTargetHistoryToken__java_lang_String(targetHistoryToken);
 }
 //Factory method corresponding to constructor 'Hyperlink(Element)'.
 /** @return {!Hyperlink} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ elem) {
  Hyperlink.$clinit();
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_dom_client_Element(elem);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_dom_client_Element(/** Object */ elem) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.$init___$p_org_gwtproject_user_client_ui_Hyperlink();
  if ($Equality.$same(elem, null)) {
   this.m_setElement__org_gwtproject_dom_client_Element(this.f_anchorElem__org_gwtproject_user_client_ui_Hyperlink_);
  } else {
   this.m_setElement__org_gwtproject_dom_client_Element(elem);
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getElement__(), this.f_anchorElem__org_gwtproject_user_client_ui_Hyperlink_);
  }
  this.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event);
  this.m_setStyleName__java_lang_String("gwt-Hyperlink");
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink = DirectionalTextHelper.$create__org_gwtproject_dom_client_Element__boolean(this.f_anchorElem__org_gwtproject_user_client_ui_Hyperlink_, true);
 }
 //Factory method corresponding to constructor 'Hyperlink(String, boolean, Direction, String)'.
 /** @return {!Hyperlink} */
 static $create__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, asHTML, dir, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(String, boolean, Direction, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(text, dir, asHTML);
  this.m_setTargetHistoryToken__java_lang_String(targetHistoryToken);
 }
 //Factory method corresponding to constructor 'Hyperlink(String, boolean, DirectionEstimator, String)'.
 /** @return {!Hyperlink} */
 static $create__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  let $instance = new Hyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, asHTML, directionEstimator, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'Hyperlink(String, boolean, DirectionEstimator, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Hyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setTextOrHtml__java_lang_String__boolean(text, asHTML);
  this.m_setTargetHistoryToken__java_lang_String(targetHistoryToken);
 }
 /** @override @return {HandlerRegistration} @deprecated */
 m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(/** ClickHandler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ClickEvent.m_getType__());
 }
 /** @override @return {DirectionEstimator} */
 m_getDirectionEstimator__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_getDirectionEstimator__();
 }
 /** @override @return {?string} */
 m_getHTML__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_getHtml__();
 }
 /** @return {?string} */
 m_getTargetHistoryToken__() {
  return this.f_targetHistoryToken__org_gwtproject_user_client_ui_Hyperlink_;
 }
 /** @override @return {?string} */
 m_getText__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_getText__();
 }
 /** @override @return {Direction} */
 m_getTextDirection__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_getTextDirection__();
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
  if (DOM.m_eventGetType__org_gwtproject_user_client_Event(event) == Event.f_ONCLICK__org_gwtproject_user_client_Event && Hyperlink.f_impl__org_gwtproject_user_client_ui_Hyperlink_.m_handleAsClick__org_gwtproject_user_client_Event(event)) {
   History.m_newItem__java_lang_String(this.m_getTargetHistoryToken__());
   $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  }
 }
 /** @override */
 m_setDirectionEstimator__boolean(/** boolean */ enabled) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setDirectionEstimator__boolean(enabled);
 }
 /** @override */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(/** DirectionEstimator */ directionEstimator) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
 }
 /** @override */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.m_setHTML__java_lang_String(html.m_asString__());
 }
 /** @override */
 m_setHTML__java_lang_String(/** ?string */ html) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setHtml__java_lang_String(html);
 }
 /** @override */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(/** SafeHtml */ html, /** Direction */ dir) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setHtml__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
 }
 
 m_setTargetHistoryToken__java_lang_String(/** ?string */ targetHistoryToken) {
  $Asserts.$assertWithMessage(!$Equality.$same(targetHistoryToken, null), "targetHistoryToken must not be null, consider using Anchor instead");
  this.f_targetHistoryToken__org_gwtproject_user_client_ui_Hyperlink_ = targetHistoryToken;
  let hash = History.m_encodeHistoryToken__java_lang_String(targetHistoryToken);
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_anchorElem__org_gwtproject_user_client_ui_Hyperlink_, "href", "#" + j_l_String.m_valueOf__java_lang_Object(hash));
 }
 /** @override */
 m_setText__java_lang_String(/** ?string */ text) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setText__java_lang_String(text);
 }
 /** @override */
 m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ text, /** Direction */ dir) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir);
 }
 /** @override */
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_anchorElem__org_gwtproject_user_client_ui_Hyperlink_, "", baseID);
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getElement__(), baseID, "wrapper");
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_Hyperlink() {
  this.f_anchorElem__org_gwtproject_user_client_ui_Hyperlink_ = DOM.m_createAnchor__();
 }
 /** @return {DirectionEstimator} */
 static get f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Hyperlink() {
  return (Hyperlink.$clinit(), Hyperlink.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Hyperlink);
 }
 
 static $clinit() {
  Hyperlink.$clinit = () =>{};
  Hyperlink.$loadModules();
  Widget.$clinit();
  Hyperlink.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Hyperlink = DirectionalTextHelper.f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper;
  Hyperlink.f_impl__org_gwtproject_user_client_ui_Hyperlink_ = HyperlinkImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Hyperlink;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  ClickEvent = goog.module.get('org.gwtproject.event.dom.client.ClickEvent$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  DirectionalTextHelper = goog.module.get('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  HyperlinkImpl = goog.module.get('org.gwtproject.user.client.ui.impl.HyperlinkImpl$impl');
  History = goog.module.get('org.gwtproject.user.history.client.History$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(Hyperlink, 'org.gwtproject.user.client.ui.Hyperlink');

HasHTML.$markImplementor(Hyperlink);
HasClickHandlers.$markImplementor(Hyperlink);
HasDirectionEstimator.$markImplementor(Hyperlink);
HasDirectionalSafeHtml.$markImplementor(Hyperlink);

/**@private {DirectionEstimator}*/
Hyperlink.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Hyperlink;
/**@type {HyperlinkImpl}*/
Hyperlink.f_impl__org_gwtproject_user_client_ui_Hyperlink_;

exports = Hyperlink; 
//# sourceMappingURL=Hyperlink.js.map