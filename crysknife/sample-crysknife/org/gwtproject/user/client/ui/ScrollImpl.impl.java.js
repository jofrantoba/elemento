goog.module('org.gwtproject.user.client.ui.ScrollImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ScrollImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ScrollImpl} */
 static $create__() {
  ScrollImpl.$clinit();
  let $instance = new ScrollImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_ScrollImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ScrollImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ScrollImpl} */
 static m_get__() {
  ScrollImpl.$clinit();
  if ($Equality.$same(ScrollImpl.f_impl__org_gwtproject_user_client_ui_ScrollImpl_, null)) {
   ScrollImpl.f_impl__org_gwtproject_user_client_ui_ScrollImpl_ = ScrollImpl.$create__();
  }
  return ScrollImpl.f_impl__org_gwtproject_user_client_ui_ScrollImpl_;
 }
 /** @return {number} */
 m_getMaximumHorizontalScrollPosition__org_gwtproject_dom_client_Element(/** Object */ scrollable) {
  return this.m_isRtl__org_gwtproject_dom_client_Element(scrollable) ? 0 : $Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element(scrollable) - $Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(scrollable);
 }
 /** @return {number} */
 m_getMinimumHorizontalScrollPosition__org_gwtproject_dom_client_Element(/** Object */ scrollable) {
  return this.m_isRtl__org_gwtproject_dom_client_Element(scrollable) ? $Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(scrollable) - $Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element(scrollable) : 0;
 }
 
 m_initialize__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ scrollable, /** Object */ container) {}
 /** @return {boolean} */
 m_isRtl__org_gwtproject_dom_client_Element(/** Object */ scrollable) {
  let result = /**@type {?function(*, *):Object}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (Document_$Overlay.m_get__()), "defaultView")), "getComputedStyle"), $JavaScriptFunction))(scrollable, null);
  return $Objects.m_equals__java_lang_Object__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(result, "direction"), "rtl");
 }
 
 static $clinit() {
  ScrollImpl.$clinit = () =>{};
  ScrollImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScrollImpl;
 }
 
 static $loadModules() {
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ScrollImpl, 'org.gwtproject.user.client.ui.ScrollImpl');

/**@type {ScrollImpl}*/
ScrollImpl.f_impl__org_gwtproject_user_client_ui_ScrollImpl_;

exports = ScrollImpl; 
//# sourceMappingURL=ScrollImpl.js.map