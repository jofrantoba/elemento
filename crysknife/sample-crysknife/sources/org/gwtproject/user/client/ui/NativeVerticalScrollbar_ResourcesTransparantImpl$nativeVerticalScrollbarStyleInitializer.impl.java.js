goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl.nativeVerticalScrollbarStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');
let NativeVerticalScrollbar__ResourcesTransparantImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$impl');

class nativeVerticalScrollbarStyleInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!nativeVerticalScrollbarStyleInitializer}
  * @public
  */
 static $create__() {
  let $instance = new nativeVerticalScrollbarStyleInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_nativeVerticalScrollbarStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_nativeVerticalScrollbarStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Style}
  * @public
  */
 static m_get__() {
  nativeVerticalScrollbarStyleInitializer.$clinit();
  return NativeVerticalScrollbar__ResourcesTransparantImpl.f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  nativeVerticalScrollbarStyleInitializer.$clinit = () =>{};
  nativeVerticalScrollbarStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  NativeVerticalScrollbar__ResourcesTransparantImpl.f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_.m_nativeVerticalScrollbarStyleInitializer___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof nativeVerticalScrollbarStyleInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  NativeVerticalScrollbar__ResourcesTransparantImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$impl');
 }
 
}
$Util.$setClassMetadata(nativeVerticalScrollbarStyleInitializer, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$nativeVerticalScrollbarStyleInitializer');

exports = nativeVerticalScrollbarStyleInitializer; 
//# sourceMappingURL=NativeVerticalScrollbar_ResourcesTransparantImpl$nativeVerticalScrollbarStyleInitializer.js.map