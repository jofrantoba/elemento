goog.module('org.gwtproject.user.client.ui.InlineHTML$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HTML = goog.require('org.gwtproject.user.client.ui.HTML$impl');

let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

class InlineHTML extends HTML {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} element
  * @return {InlineHTML}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  InlineHTML.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let html = InlineHTML.$create__org_gwtproject_dom_client_Element(element);
  html.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(html);
  return html;
 }
 /**
  * Factory method corresponding to constructor 'InlineHTML()'.
  * @return {!InlineHTML}
  * @public
  */
 static $create__() {
  InlineHTML.$clinit();
  let $instance = new InlineHTML();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHTML__();
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHTML()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHTML__() {
  this.$ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_dom_client_Element(Document_$Overlay.m_createSpanElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-InlineHTML");
 }
 /**
  * Factory method corresponding to constructor 'InlineHTML(SafeHtml)'.
  * @param {SafeHtml} html
  * @return {!InlineHTML}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(html) {
  InlineHTML.$clinit();
  let $instance = new InlineHTML();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHTML__org_gwtproject_safehtml_shared_SafeHtml(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHTML(SafeHtml)'.
  * @param {SafeHtml} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHTML__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHTML__java_lang_String(html.m_asString__());
 }
 /**
  * Factory method corresponding to constructor 'InlineHTML(SafeHtml, Direction)'.
  * @param {SafeHtml} html
  * @param {Direction} dir
  * @return {!InlineHTML}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  InlineHTML.$clinit();
  let $instance = new InlineHTML();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHTML(SafeHtml, Direction)'.
  * @param {SafeHtml} html
  * @param {Direction} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html.m_asString__(), dir);
 }
 /**
  * Factory method corresponding to constructor 'InlineHTML(SafeHtml, DirectionEstimator)'.
  * @param {SafeHtml} html
  * @param {DirectionEstimator} directionEstimator
  * @return {!InlineHTML}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(html, directionEstimator) {
  InlineHTML.$clinit();
  let $instance = new InlineHTML();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(html, directionEstimator);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHTML(SafeHtml, DirectionEstimator)'.
  * @param {SafeHtml} html
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(html, directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHTML__();
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html);
 }
 /**
  * Factory method corresponding to constructor 'InlineHTML(String)'.
  * @param {?string} html
  * @return {!InlineHTML}
  * @public
  */
 static $create__java_lang_String(html) {
  InlineHTML.$clinit();
  let $instance = new InlineHTML();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHTML__java_lang_String(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHTML(String)'.
  * @param {?string} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHTML__java_lang_String(html) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHTML__();
  this.m_setHTML__java_lang_String(html);
 }
 /**
  * Factory method corresponding to constructor 'InlineHTML(String, Direction)'.
  * @param {?string} html
  * @param {Direction} dir
  * @return {!InlineHTML}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  InlineHTML.$clinit();
  let $instance = new InlineHTML();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHTML(String, Direction)'.
  * @param {?string} html
  * @param {Direction} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHTML__();
  this.m_setHTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir);
 }
 /**
  * Factory method corresponding to constructor 'InlineHTML(Element)'.
  * @param {Object} element
  * @return {!InlineHTML}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  InlineHTML.$clinit();
  let $instance = new InlineHTML();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHTML__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHTML(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHTML__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_HTML__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @public
  */
 static $clinit() {
  InlineHTML.$clinit = () =>{};
  InlineHTML.$loadModules();
  HTML.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof InlineHTML;
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
$Util.$setClassMetadata(InlineHTML, 'org.gwtproject.user.client.ui.InlineHTML');

exports = InlineHTML; 
//# sourceMappingURL=InlineHTML.js.map