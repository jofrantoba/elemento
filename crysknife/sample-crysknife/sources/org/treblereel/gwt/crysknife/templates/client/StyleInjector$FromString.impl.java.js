goog.module('org.treblereel.gwt.crysknife.templates.client.StyleInjector.FromString$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLStyleElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLStyleElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let StyleInjector = goog.forwardDeclare('org.treblereel.gwt.crysknife.templates.client.StyleInjector$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FromString extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_styleBody__org_treblereel_gwt_crysknife_templates_client_StyleInjector_FromString_;
 }
 /**
  * @param {?string} styleBody
  * @return {!FromString}
  * @public
  */
 static $create__java_lang_String(styleBody) {
  FromString.$clinit();
  let $instance = new FromString();
  $instance.$ctor__org_treblereel_gwt_crysknife_templates_client_StyleInjector_FromString__java_lang_String(styleBody);
  return $instance;
 }
 /**
  * @param {?string} styleBody
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_templates_client_StyleInjector_FromString__java_lang_String(styleBody) {
  this.$ctor__java_lang_Object__();
  this.f_styleBody__org_treblereel_gwt_crysknife_templates_client_StyleInjector_FromString_ = styleBody;
 }
 /**
  * @return {HTMLStyleElement}
  * @public
  */
 m_inject__() {
  let doc = $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay;
  let style = StyleInjector.m_createElement__java_lang_String(this.f_styleBody__org_treblereel_gwt_crysknife_templates_client_StyleInjector_FromString_);
  doc.head.appendChild(style);
  return /**@type {HTMLStyleElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(style), HTMLStyleElement_$Overlay));
 }
 /**
  * @public
  */
 static $clinit() {
  FromString.$clinit = () =>{};
  FromString.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FromString;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLStyleElement_$Overlay = goog.module.get('elemental2.dom.HTMLStyleElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  StyleInjector = goog.module.get('org.treblereel.gwt.crysknife.templates.client.StyleInjector$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FromString, 'org.treblereel.gwt.crysknife.templates.client.StyleInjector$FromString');

exports = FromString; 
//# sourceMappingURL=StyleInjector$FromString.js.map