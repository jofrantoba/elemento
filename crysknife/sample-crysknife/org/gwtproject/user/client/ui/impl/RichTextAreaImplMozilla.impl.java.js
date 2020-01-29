goog.module('org.gwtproject.user.client.ui.impl.RichTextAreaImplMozilla$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RichTextAreaImplStandard = goog.require('org.gwtproject.user.client.ui.impl.RichTextAreaImplStandard$impl');

class RichTextAreaImplMozilla extends RichTextAreaImplStandard {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_isFirstFocus__org_gwtproject_user_client_ui_impl_RichTextAreaImplMozilla = false;
 }
 /**
  * @return {!RichTextAreaImplMozilla}
  * @public
  */
 static $create__() {
  RichTextAreaImplMozilla.$clinit();
  let $instance = new RichTextAreaImplMozilla();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImplMozilla__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImplMozilla__() {
  this.$ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getBackColor__() {
  return this.m_queryCommandValue__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("HiliteColor");
 }
 /**
  * @override
  * @param {?string} color
  * @public
  */
 m_setBackColor__java_lang_String(color) {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("HiliteColor", color);
 }
 /**
  * @public
  */
 static $clinit() {
  RichTextAreaImplMozilla.$clinit = () =>{};
  RichTextAreaImplMozilla.$loadModules();
  RichTextAreaImplStandard.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RichTextAreaImplMozilla;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(RichTextAreaImplMozilla, 'org.gwtproject.user.client.ui.impl.RichTextAreaImplMozilla');

exports = RichTextAreaImplMozilla; 
//# sourceMappingURL=RichTextAreaImplMozilla.js.map