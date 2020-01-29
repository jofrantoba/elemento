goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl.nativeHorizontalScrollbarStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');
let NativeHorizontalScrollbar__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl$impl');

class nativeHorizontalScrollbarStyleInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!nativeHorizontalScrollbarStyleInitializer}
  * @public
  */
 static $create__() {
  let $instance = new nativeHorizontalScrollbarStyleInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_nativeHorizontalScrollbarStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_nativeHorizontalScrollbarStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Style}
  * @public
  */
 static m_get__() {
  nativeHorizontalScrollbarStyleInitializer.$clinit();
  return NativeHorizontalScrollbar__ResourcesImpl.f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  nativeHorizontalScrollbarStyleInitializer.$clinit = () =>{};
  nativeHorizontalScrollbarStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  NativeHorizontalScrollbar__ResourcesImpl.f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_.m_nativeHorizontalScrollbarStyleInitializer___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof nativeHorizontalScrollbarStyleInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  NativeHorizontalScrollbar__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(nativeHorizontalScrollbarStyleInitializer, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl$nativeHorizontalScrollbarStyleInitializer');

exports = nativeHorizontalScrollbarStyleInitializer; 
//# sourceMappingURL=NativeHorizontalScrollbar_ResourcesImpl$nativeHorizontalScrollbarStyleInitializer.js.map