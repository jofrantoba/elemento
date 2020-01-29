goog.module('org.treblereel.gwt.crysknife.templates.client.StyleInjector$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLStyleElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLStyleElement.$Overlay$impl');
let FromString = goog.forwardDeclare('org.treblereel.gwt.crysknife.templates.client.StyleInjector.FromString$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class StyleInjector extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!StyleInjector}
  * @public
  */
 static $create__() {
  let $instance = new StyleInjector();
  $instance.$ctor__org_treblereel_gwt_crysknife_templates_client_StyleInjector__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_templates_client_StyleInjector__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {?string} styleBody
  * @return {FromString}
  * @public
  */
 static m_fromString__java_lang_String(styleBody) {
  StyleInjector.$clinit();
  return FromString.$create__java_lang_String(styleBody);
 }
 /**
  * @param {?string} contents
  * @return {HTMLStyleElement}
  * @public
  */
 static m_createElement__java_lang_String(contents) {
  StyleInjector.$clinit();
  let style = /**@type {HTMLStyleElement} */ ($Casts.$to($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("style"), HTMLStyleElement_$Overlay));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(style, "language", "text/css");
  style.innerHTML = contents;
  return style;
 }
 /**
  * @public
  */
 static $clinit() {
  StyleInjector.$clinit = () =>{};
  StyleInjector.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof StyleInjector;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLStyleElement_$Overlay = goog.module.get('elemental2.dom.HTMLStyleElement.$Overlay$impl');
  FromString = goog.module.get('org.treblereel.gwt.crysknife.templates.client.StyleInjector.FromString$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(StyleInjector, 'org.treblereel.gwt.crysknife.templates.client.StyleInjector');

exports = StyleInjector; 
//# sourceMappingURL=StyleInjector.js.map