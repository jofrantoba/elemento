goog.module('org.gwtproject.user.client.ui.HTML$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDirectionalHtml = goog.require('org.gwtproject.user.client.ui.HasDirectionalHtml$impl');
const HasDirectionalSafeHtml = goog.require('org.gwtproject.user.client.ui.HasDirectionalSafeHtml$impl');
const Label = goog.require('org.gwtproject.user.client.ui.Label$impl');

let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @implements {HasDirectionalHtml}
 * @implements {HasDirectionalSafeHtml}
  */
class HTML extends Label {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} element
  * @return {HTML}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  HTML.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let html = HTML.$create__org_gwtproject_dom_client_Element(element);
  html.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(html);
  return html;
 }
 /**
  * Factory method corresponding to constructor 'HTML()'.
  * @return {!HTML}
  * @public
  */
 static $create__() {
  HTML.$clinit();
  let $instance = new HTML();
  $instance.$ctor__org_gwtproject_user_client_ui_HTML__();
  return $instance;
 }
 /**
  * Initialization from constructor 'HTML()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTML__() {
  this.$ctor__org_gwtproject_user_client_ui_Label__org_gwtproject_dom_client_Element(Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-HTML");
 }
 /**
  * Factory method corresponding to constructor 'HTML(SafeHtml)'.
  * @param {SafeHtml} html
  * @return {!HTML}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(html) {
  HTML.$clinit();
  let $instance = new HTML();
  $instance.$ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_safehtml_shared_SafeHtml(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'HTML(SafeHtml)'.
  * @param {SafeHtml} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.$ctor__org_gwtproject_user_client_ui_HTML__java_lang_String(html.m_asString__());
 }
 /**
  * Factory method corresponding to constructor 'HTML(SafeHtml, Direction)'.
  * @param {SafeHtml} html
  * @param {Direction} dir
  * @return {!HTML}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  HTML.$clinit();
  let $instance = new HTML();
  $instance.$ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
  return $instance;
 }
 /**
  * Initialization from constructor 'HTML(SafeHtml, Direction)'.
  * @param {SafeHtml} html
  * @param {Direction} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  this.$ctor__org_gwtproject_user_client_ui_HTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html.m_asString__(), dir);
 }
 /**
  * Factory method corresponding to constructor 'HTML(SafeHtml, DirectionEstimator)'.
  * @param {SafeHtml} html
  * @param {DirectionEstimator} directionEstimator
  * @return {!HTML}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(html, directionEstimator) {
  HTML.$clinit();
  let $instance = new HTML();
  $instance.$ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(html, directionEstimator);
  return $instance;
 }
 /**
  * Initialization from constructor 'HTML(SafeHtml, DirectionEstimator)'.
  * @param {SafeHtml} html
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(html, directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_HTML__();
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html);
 }
 /**
  * Factory method corresponding to constructor 'HTML(String)'.
  * @param {?string} html
  * @return {!HTML}
  * @public
  */
 static $create__java_lang_String(html) {
  HTML.$clinit();
  let $instance = new HTML();
  $instance.$ctor__org_gwtproject_user_client_ui_HTML__java_lang_String(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'HTML(String)'.
  * @param {?string} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTML__java_lang_String(html) {
  this.$ctor__org_gwtproject_user_client_ui_HTML__();
  this.m_setHTML__java_lang_String(html);
 }
 /**
  * Factory method corresponding to constructor 'HTML(String, Direction)'.
  * @param {?string} html
  * @param {Direction} dir
  * @return {!HTML}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  HTML.$clinit();
  let $instance = new HTML();
  $instance.$ctor__org_gwtproject_user_client_ui_HTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
  return $instance;
 }
 /**
  * Initialization from constructor 'HTML(String, Direction)'.
  * @param {?string} html
  * @param {Direction} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  this.$ctor__org_gwtproject_user_client_ui_HTML__();
  this.m_setHTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
 }
 /**
  * Factory method corresponding to constructor 'HTML(String, boolean)'.
  * @param {?string} html
  * @param {boolean} wordWrap
  * @return {!HTML}
  * @public
  */
 static $create__java_lang_String__boolean(html, wordWrap) {
  HTML.$clinit();
  let $instance = new HTML();
  $instance.$ctor__org_gwtproject_user_client_ui_HTML__java_lang_String__boolean(html, wordWrap);
  return $instance;
 }
 /**
  * Initialization from constructor 'HTML(String, boolean)'.
  * @param {?string} html
  * @param {boolean} wordWrap
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTML__java_lang_String__boolean(html, wordWrap) {
  this.$ctor__org_gwtproject_user_client_ui_HTML__java_lang_String(html);
  this.m_setWordWrap__boolean(wordWrap);
 }
 /**
  * Factory method corresponding to constructor 'HTML(Element)'.
  * @param {Object} element
  * @return {!HTML}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  HTML.$clinit();
  let $instance = new HTML();
  $instance.$ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'HTML(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_Label__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getHTML__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_getHtml__();
 }
 /**
  * @override
  * @param {?string} html
  * @public
  */
 m_setHTML__java_lang_String(html) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_setHtml__java_lang_String(html);
  this.m_updateHorizontalAlignment__();
 }
 /**
  * @override
  * @param {?string} html
  * @param {Direction} dir
  * @public
  */
 m_setHTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_setHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
  this.m_updateHorizontalAlignment__();
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
  * @param {SafeHtml} html
  * @param {Direction} dir
  * @public
  */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  this.m_setHTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html.m_asString__(), dir);
 }
 /**
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_getTextOrHtml__boolean(isHtml) {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_getTextOrHtml__boolean(isHtml);
 }
 /**
  * @public
  */
 static $clinit() {
  HTML.$clinit = () =>{};
  HTML.$loadModules();
  Label.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTML;
 }
 /**
  * @public
  */
 static $loadModules() {
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(HTML, 'org.gwtproject.user.client.ui.HTML');

HasDirectionalHtml.$markImplementor(HTML);
HasDirectionalSafeHtml.$markImplementor(HTML);

exports = HTML; 
//# sourceMappingURL=HTML.js.map