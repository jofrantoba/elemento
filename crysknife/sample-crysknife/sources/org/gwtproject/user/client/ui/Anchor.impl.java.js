goog.module('org.gwtproject.user.client.ui.Anchor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDirection = goog.require('org.gwtproject.i18n.client.HasDirection$impl');
const HasDirectionEstimator = goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');
const FocusWidget = goog.require('org.gwtproject.user.client.ui.FocusWidget$impl');
const HasDirectionalSafeHtml = goog.require('org.gwtproject.user.client.ui.HasDirectionalSafeHtml$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');
const HasHorizontalAlignment = goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
const HasName = goog.require('org.gwtproject.user.client.ui.HasName$impl');
const HasWordWrap = goog.require('org.gwtproject.user.client.ui.HasWordWrap$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AnchorElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let WhiteSpace = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace$impl');
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.client.BidiUtils$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.Anchor.$1$impl');
let DirectionalTextHelper = goog.forwardDeclare('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
let HorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @implements {HasHorizontalAlignment}
 * @implements {HasName}
 * @implements {HasHTML}
 * @implements {HasWordWrap}
 * @implements {HasDirection}
 * @implements {HasDirectionEstimator}
 * @implements {HasDirectionalSafeHtml}
  */
class Anchor extends FocusWidget {
 /** @protected */
 constructor() {
  super();
  /**@type {DirectionalTextHelper}*/
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_;
  /**@type {HorizontalAlignmentConstant}*/
  this.f_horzAlign__org_gwtproject_user_client_ui_Anchor_;
 }
 /** @return {Anchor} */
 static m_wrap__org_gwtproject_dom_client_Element(/** Object */ element) {
  Anchor.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let anchor = Anchor.$create__org_gwtproject_dom_client_Element(element);
  anchor.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(anchor);
  return anchor;
 }
 //Factory method corresponding to constructor 'Anchor()'.
 /** @return {!Anchor} */
 static $create__() {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__();
  return $instance;
 }
 //Initialization from constructor 'Anchor()'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__() {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__boolean(false);
 }
 //Factory method corresponding to constructor 'Anchor(boolean)'.
 /** @return {!Anchor} */
 static $create__boolean(/** boolean */ useDefaultHref) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__boolean(useDefaultHref);
  return $instance;
 }
 //Initialization from constructor 'Anchor(boolean)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__boolean(/** boolean */ useDefaultHref) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__();
  this.m_setElement__org_gwtproject_dom_client_Element(Document_$Overlay.m_createAnchorElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-Anchor");
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_ = DirectionalTextHelper.$create__org_gwtproject_dom_client_Element__boolean(this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor(), true);
  if (useDefaultHref) {
   this.m_setHref__java_lang_String(Anchor.f_DEFAULT_HREF__org_gwtproject_user_client_ui_Anchor_);
  }
  if ($Equality.$same("true", $Util.$getDefine("gwt.cspCompatModeEnabled"))) {
   this.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler($1.$create__org_gwtproject_user_client_ui_Anchor(this));
  }
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml(html);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean(html.m_asString__(), true);
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, Direction)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(/** SafeHtml */ html, /** Direction */ dir) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, Direction)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(/** SafeHtml */ html, /** Direction */ dir) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html.m_asString__(), true, dir, Anchor.f_DEFAULT_HREF__org_gwtproject_user_client_ui_Anchor_);
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, DirectionEstimator)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(html, directionEstimator);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, DirectionEstimator)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html.m_asString__(), true, directionEstimator, Anchor.f_DEFAULT_HREF__org_gwtproject_user_client_ui_Anchor_);
 }
 //Factory method corresponding to constructor 'Anchor(String)'.
 /** @return {!Anchor} */
 static $create__java_lang_String(/** ?string */ text) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String(text);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String(/** ?string */ text) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__java_lang_String(text, Anchor.f_DEFAULT_HREF__org_gwtproject_user_client_ui_Anchor_);
 }
 //Factory method corresponding to constructor 'Anchor(String, Direction)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ text, /** Direction */ dir) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, Direction)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ text, /** Direction */ dir) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, dir, Anchor.f_DEFAULT_HREF__org_gwtproject_user_client_ui_Anchor_);
 }
 //Factory method corresponding to constructor 'Anchor(String, DirectionEstimator)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(/** ?string */ text, /** DirectionEstimator */ directionEstimator) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(text, directionEstimator);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, DirectionEstimator)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(/** ?string */ text, /** DirectionEstimator */ directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, directionEstimator, Anchor.f_DEFAULT_HREF__org_gwtproject_user_client_ui_Anchor_);
 }
 //Factory method corresponding to constructor 'Anchor(String, boolean)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__boolean(/** ?string */ text, /** boolean */ asHtml) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean(text, asHtml);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, boolean)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean(/** ?string */ text, /** boolean */ asHtml) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String(text, asHtml, Anchor.f_DEFAULT_HREF__org_gwtproject_user_client_ui_Anchor_);
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, String)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(/** SafeHtml */ html, /** ?string */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(html, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(/** SafeHtml */ html, /** ?string */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String(html.m_asString__(), true, href);
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, SafeUri)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeUri(/** SafeHtml */ html, /** SafeUri */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeUri(html, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, SafeUri)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeUri(/** SafeHtml */ html, /** SafeUri */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String(html.m_asString__(), true, href.m_asString__());
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, Direction, String)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** SafeHtml */ html, /** Direction */ dir, /** ?string */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html, dir, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, Direction, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** SafeHtml */ html, /** Direction */ dir, /** ?string */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html.m_asString__(), true, dir, href);
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, Direction, SafeUri)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeUri(/** SafeHtml */ html, /** Direction */ dir, /** SafeUri */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeUri(html, dir, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, Direction, SafeUri)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeUri(/** SafeHtml */ html, /** Direction */ dir, /** SafeUri */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html.m_asString__(), true, dir, href.m_asString__());
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, DirectionEstimator, String)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator, /** ?string */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html, directionEstimator, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, DirectionEstimator, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator, /** ?string */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html.m_asString__(), true, directionEstimator, href);
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, DirectionEstimator, SafeUri)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__org_gwtproject_safehtml_shared_SafeUri(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator, /** SafeUri */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__org_gwtproject_safehtml_shared_SafeUri(html, directionEstimator, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, DirectionEstimator, SafeUri)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__org_gwtproject_safehtml_shared_SafeUri(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator, /** SafeUri */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html.m_asString__(), true, directionEstimator, href.m_asString__());
 }
 //Factory method corresponding to constructor 'Anchor(String, String)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__java_lang_String(/** ?string */ text, /** ?string */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__java_lang_String(text, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__java_lang_String(/** ?string */ text, /** ?string */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String(text, false, href);
 }
 //Factory method corresponding to constructor 'Anchor(String, Direction, String)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** Direction */ dir, /** ?string */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, dir, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, Direction, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** Direction */ dir, /** ?string */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, false, dir, href);
 }
 //Factory method corresponding to constructor 'Anchor(String, DirectionEstimator, String)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** DirectionEstimator */ directionEstimator, /** ?string */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, directionEstimator, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, DirectionEstimator, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** DirectionEstimator */ directionEstimator, /** ?string */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, false, directionEstimator, href);
 }
 //Factory method corresponding to constructor 'Anchor(String, boolean, String)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__boolean__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** ?string */ href) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String(text, asHTML, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, boolean, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** ?string */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setTextOrHtml__java_lang_String__boolean(text, asHTML);
  this.m_setHref__java_lang_String(href);
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, String, String)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String(/** SafeHtml */ html, /** ?string */ href, /** ?string */ target) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String(html, href, target);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String(/** SafeHtml */ html, /** ?string */ href, /** ?string */ target) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String__java_lang_String(html.m_asString__(), true, href, target);
 }
 //Factory method corresponding to constructor 'Anchor(SafeHtml, SafeUri, String)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeUri__java_lang_String(/** SafeHtml */ html, /** SafeUri */ href, /** ?string */ target) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeUri__java_lang_String(html, href, target);
  return $instance;
 }
 //Initialization from constructor 'Anchor(SafeHtml, SafeUri, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeUri__java_lang_String(/** SafeHtml */ html, /** SafeUri */ href, /** ?string */ target) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String__java_lang_String(html.m_asString__(), true, href.m_asString__(), target);
 }
 //Factory method corresponding to constructor 'Anchor(String, String, String)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__java_lang_String__java_lang_String(/** ?string */ text, /** ?string */ href, /** ?string */ target) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__java_lang_String__java_lang_String(text, href, target);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__java_lang_String__java_lang_String(/** ?string */ text, /** ?string */ href, /** ?string */ target) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String__java_lang_String(text, false, href, target);
 }
 //Factory method corresponding to constructor 'Anchor(String, boolean, String, String)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__boolean__java_lang_String__java_lang_String(/** ?string */ text, /** boolean */ asHtml, /** ?string */ href, /** ?string */ target) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String__java_lang_String(text, asHtml, href, target);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, boolean, String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String__java_lang_String(/** ?string */ text, /** boolean */ asHtml, /** ?string */ href, /** ?string */ target) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__java_lang_String(text, asHtml, href);
  this.m_setTarget__java_lang_String(target);
 }
 //Factory method corresponding to constructor 'Anchor(Element)'.
 /** @return {!Anchor} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  Anchor.$clinit();
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'Anchor(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__();
  AnchorElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element);
  this.m_setElement__org_gwtproject_dom_client_Element(element);
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_ = DirectionalTextHelper.$create__org_gwtproject_dom_client_Element__boolean(this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor(), true);
 }
 //Factory method corresponding to constructor 'Anchor(String, boolean, Direction, String)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** Direction */ dir, /** ?string */ href) {
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, asHTML, dir, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, boolean, Direction, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** Direction */ dir, /** ?string */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(text, dir, asHTML);
  this.m_setHref__java_lang_String(href);
 }
 //Factory method corresponding to constructor 'Anchor(String, boolean, DirectionEstimator, String)'.
 /** @return {!Anchor} */
 static $create__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** DirectionEstimator */ directionEstimator, /** ?string */ href) {
  let $instance = new Anchor();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, asHTML, directionEstimator, href);
  return $instance;
 }
 //Initialization from constructor 'Anchor(String, boolean, DirectionEstimator, String)'.
 
 $ctor__org_gwtproject_user_client_ui_Anchor__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** DirectionEstimator */ directionEstimator, /** ?string */ href) {
  this.$ctor__org_gwtproject_user_client_ui_Anchor__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setTextOrHtml__java_lang_String__boolean(text, asHTML);
  this.m_setHref__java_lang_String(href);
 }
 /** @override @return {Direction} */
 m_getDirection__() {
  return BidiUtils.m_getDirectionOnElement__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override @return {DirectionEstimator} */
 m_getDirectionEstimator__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_getDirectionEstimator__();
 }
 /** @override @return {HorizontalAlignmentConstant} */
 m_getHorizontalAlignment__() {
  return this.f_horzAlign__org_gwtproject_user_client_ui_Anchor_;
 }
 /** @return {?string} */
 m_getHref__() {
  return this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().href;
 }
 /** @override @return {?string} */
 m_getHTML__() {
  return Element_$Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().name;
 }
 /** @override @return {number} */
 m_getTabIndex__() {
  return Element_$Overlay.m_getTabIndex__$devirt__org_gwtproject_dom_client_Element(this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor());
 }
 /** @return {?string} */
 m_getTarget__() {
  return this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().target;
 }
 /** @override @return {?string} */
 m_getText__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_getText__();
 }
 /** @override @return {Direction} */
 m_getTextDirection__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_getTextDirection__();
 }
 /** @override @return {boolean} */
 m_getWordWrap__() {
  return !j_l_String.m_equals__java_lang_String__java_lang_Object(WhiteSpace.f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace.m_getCssName__(), Style_$Overlay.m_getWhiteSpace__$devirt__org_gwtproject_dom_client_Style(this.m_getElement__().style));
 }
 /** @override */
 m_setAccessKey__char(/** number */ key) {
  this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().accessKey = Character.m_toString__char(key);
 }
 /** @override @deprecated */
 m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ direction) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(direction);
 }
 /** @override */
 m_setDirectionEstimator__boolean(/** boolean */ enabled) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setDirectionEstimator__boolean(enabled);
 }
 /** @override */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(/** DirectionEstimator */ directionEstimator) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
 }
 /** @override */
 m_setFocus__boolean(/** boolean */ focused) {
  if (focused) {
   this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().focus();
  } else {
   this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().blur();
  }
 }
 /** @override */
 m_setHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(/** HorizontalAlignmentConstant */ align) {
  this.f_horzAlign__org_gwtproject_user_client_ui_Anchor_ = align;
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "textAlign", align.m_getTextAlignString__());
 }
 
 m_setHref__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ href) {
  AnchorElement_$Overlay.m_setHref__$devirt__org_gwtproject_dom_client_AnchorElement__org_gwtproject_safehtml_shared_SafeUri(this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor(), href);
 }
 
 m_setHref__java_lang_String(/** ?string */ href) {
  this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().href = href;
 }
 /** @override */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setHtml__org_gwtproject_safehtml_shared_SafeHtml(html);
 }
 /** @override */
 m_setHTML__java_lang_String(/** ?string */ html) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setHtml__java_lang_String(html);
 }
 /** @override */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(/** SafeHtml */ html, /** Direction */ dir) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setHtml__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
 }
 /** @override */
 m_setName__java_lang_String(/** ?string */ name) {
  this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().name = name;
 }
 /** @override */
 m_setTabIndex__int(/** number */ index) {
  this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().tabIndex = index;
 }
 
 m_setTarget__java_lang_String(/** ?string */ target) {
  this.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().target = target;
 }
 /** @override */
 m_setText__java_lang_String(/** ?string */ text) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setText__java_lang_String(text);
 }
 /** @override */
 m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ text, /** Direction */ dir) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Anchor_.m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir);
 }
 /** @override */
 m_setWordWrap__boolean(/** boolean */ wrap) {
  Style_$Overlay.m_setWhiteSpace__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_WhiteSpace(this.m_getElement__().style, wrap ? WhiteSpace.f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace : WhiteSpace.f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace);
 }
 /** @return {Object} */
 m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor() {
  return AnchorElement_$Overlay.m_as__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @return {DirectionEstimator} */
 static get f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Anchor() {
  return (Anchor.$clinit(), Anchor.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Anchor);
 }
 
 static $clinit() {
  Anchor.$clinit = () =>{};
  Anchor.$loadModules();
  FocusWidget.$clinit();
  Anchor.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Anchor = DirectionalTextHelper.f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Anchor;
 }
 
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AnchorElement_$Overlay = goog.module.get('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  WhiteSpace = goog.module.get('org.gwtproject.dom.style.shared.WhiteSpace$impl');
  BidiUtils = goog.module.get('org.gwtproject.i18n.client.BidiUtils$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.Anchor.$1$impl');
  DirectionalTextHelper = goog.module.get('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(Anchor, 'org.gwtproject.user.client.ui.Anchor');

HasHorizontalAlignment.$markImplementor(Anchor);
HasName.$markImplementor(Anchor);
HasHTML.$markImplementor(Anchor);
HasWordWrap.$markImplementor(Anchor);
HasDirection.$markImplementor(Anchor);
HasDirectionEstimator.$markImplementor(Anchor);
HasDirectionalSafeHtml.$markImplementor(Anchor);

/**@private {DirectionEstimator}*/
Anchor.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Anchor;
/**@const {?string}*/
Anchor.f_DEFAULT_HREF__org_gwtproject_user_client_ui_Anchor_ = "javascript:;";

exports = Anchor; 
//# sourceMappingURL=Anchor.js.map