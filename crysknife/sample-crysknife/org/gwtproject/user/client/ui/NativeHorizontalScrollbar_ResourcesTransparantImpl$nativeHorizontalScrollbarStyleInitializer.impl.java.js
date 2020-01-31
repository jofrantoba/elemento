goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl.nativeHorizontalScrollbarStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');
let NativeHorizontalScrollbar__ResourcesTransparantImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl$impl');

class nativeHorizontalScrollbarStyleInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!nativeHorizontalScrollbarStyleInitializer} */
 static $create__() {
  let $instance = new nativeHorizontalScrollbarStyleInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_nativeHorizontalScrollbarStyleInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_nativeHorizontalScrollbarStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Style} */
 static m_get__() {
  nativeHorizontalScrollbarStyleInitializer.$clinit();
  return NativeHorizontalScrollbar__ResourcesTransparantImpl.f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_;
 }
 
 static $clinit() {
  nativeHorizontalScrollbarStyleInitializer.$clinit = () =>{};
  nativeHorizontalScrollbarStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  NativeHorizontalScrollbar__ResourcesTransparantImpl.f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_.m_nativeHorizontalScrollbarStyleInitializer___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof nativeHorizontalScrollbarStyleInitializer;
 }
 
 static $loadModules() {
  NativeHorizontalScrollbar__ResourcesTransparantImpl = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl$impl');
 }
 
}
$Util.$setClassMetadata(nativeHorizontalScrollbarStyleInitializer, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl$nativeHorizontalScrollbarStyleInitializer');

exports = nativeHorizontalScrollbarStyleInitializer; 
//# sourceMappingURL=NativeHorizontalScrollbar_ResourcesTransparantImpl$nativeHorizontalScrollbarStyleInitializer.js.map