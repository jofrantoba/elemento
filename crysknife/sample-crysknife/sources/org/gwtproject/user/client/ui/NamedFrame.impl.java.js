goog.module('org.gwtproject.user.client.ui.NamedFrame$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Frame = goog.require('org.gwtproject.user.client.ui.Frame$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let IFrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
let RegExp = goog.forwardDeclare('org.gwtproject.regexp.shared.RegExp$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let IFrameTemplate = goog.forwardDeclare('org.gwtproject.user.client.ui.NamedFrame.IFrameTemplate$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class NamedFrame extends Frame {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {Object} */
 static m_createIFrame__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(name, null) || !NamedFrame.m_isValidName__java_lang_String(j_l_String.m_trim__java_lang_String(name))) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("expecting one or more non-whitespace chars with no '<', '>', or '&'"));
  }
  let div = DOM.m_createDiv__();
  $Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(div, IFrameTemplate.f_INSTANCE__org_gwtproject_user_client_ui_NamedFrame_IFrameTemplate.m_get__java_lang_String(name));
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(div.firstChild), IFrameElement_$Overlay));
 }
 
 static m_initStatics__() {
  NamedFrame.f_PATTERN_NAME__org_gwtproject_user_client_ui_NamedFrame_ = RegExp.m_compile__java_lang_String("^[^<>&\\'\\\"]+$");
 }
 /** @return {boolean} */
 static m_isValidName__java_lang_String(/** ?string */ name) {
  return NamedFrame.f_PATTERN_NAME__org_gwtproject_user_client_ui_NamedFrame_.m_test__java_lang_String(name);
 }
 /** @return {!NamedFrame} */
 static $create__java_lang_String(/** ?string */ name) {
  NamedFrame.$clinit();
  let $instance = new NamedFrame();
  $instance.$ctor__org_gwtproject_user_client_ui_NamedFrame__java_lang_String(name);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NamedFrame__java_lang_String(/** ?string */ name) {
  this.$ctor__org_gwtproject_user_client_ui_Frame__org_gwtproject_dom_client_Element(NamedFrame.m_createIFrame__java_lang_String(name));
  this.m_setStyleName__java_lang_String(Frame.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_Frame);
 }
 /** @return {?string} */
 m_getName__() {
  return $Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "name");
 }
 
 static $clinit() {
  NamedFrame.$clinit = () =>{};
  NamedFrame.$loadModules();
  Frame.$clinit();
  NamedFrame.m_initStatics__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NamedFrame;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  IFrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
  RegExp = goog.module.get('org.gwtproject.regexp.shared.RegExp$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  IFrameTemplate = goog.module.get('org.gwtproject.user.client.ui.NamedFrame.IFrameTemplate$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(NamedFrame, 'org.gwtproject.user.client.ui.NamedFrame');

/**@type {RegExp}*/
NamedFrame.f_PATTERN_NAME__org_gwtproject_user_client_ui_NamedFrame_;

exports = NamedFrame; 
//# sourceMappingURL=NamedFrame.js.map