goog.module('org.gwtproject.user.client.ui.impl.RichTextAreaImplMozilla$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RichTextAreaImplStandard = goog.require('org.gwtproject.user.client.ui.impl.RichTextAreaImplStandard$impl');

class RichTextAreaImplMozilla extends RichTextAreaImplStandard {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_isFirstFocus__org_gwtproject_user_client_ui_impl_RichTextAreaImplMozilla = false;
 }
 /** @return {!RichTextAreaImplMozilla} */
 static $create__() {
  RichTextAreaImplMozilla.$clinit();
  let $instance = new RichTextAreaImplMozilla();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImplMozilla__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImplMozilla__() {
  this.$ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard__();
 }
 /** @override @return {?string} */
 m_getBackColor__() {
  return this.m_queryCommandValue__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("HiliteColor");
 }
 /** @override */
 m_setBackColor__java_lang_String(/** ?string */ color) {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("HiliteColor", color);
 }
 
 static $clinit() {
  RichTextAreaImplMozilla.$clinit = () =>{};
  RichTextAreaImplMozilla.$loadModules();
  RichTextAreaImplStandard.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RichTextAreaImplMozilla;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(RichTextAreaImplMozilla, 'org.gwtproject.user.client.ui.impl.RichTextAreaImplMozilla');

exports = RichTextAreaImplMozilla; 
//# sourceMappingURL=RichTextAreaImplMozilla.js.map