goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl.$1$impl');
let nativeVerticalScrollbarStyleInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl.nativeVerticalScrollbarStyleInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class NativeVerticalScrollbar__ResourcesImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NativeVerticalScrollbar__ResourcesImpl} */
 static $create__() {
  NativeVerticalScrollbar__ResourcesImpl.$clinit();
  let $instance = new NativeVerticalScrollbar__ResourcesImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_nativeVerticalScrollbarStyleInitializer___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl() {
  NativeVerticalScrollbar__ResourcesImpl.$f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_ = $1.$create__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl(this);
 }
 /** @override @return {Style} */
 m_nativeVerticalScrollbarStyle__() {
  return nativeVerticalScrollbarStyleInitializer.m_get__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([this.m_nativeVerticalScrollbarStyle__()], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(NativeVerticalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_, null)) {
   NativeVerticalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   NativeVerticalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_.put("nativeVerticalScrollbarStyle", this.m_nativeVerticalScrollbarStyle__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(NativeVerticalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /** @return {NativeVerticalScrollbar__ResourcesImpl} */
 static get f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_() {
  return (NativeVerticalScrollbar__ResourcesImpl.$clinit(), NativeVerticalScrollbar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_);
 }
 
 static set f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_(/** NativeVerticalScrollbar__ResourcesImpl */ value) {
  (NativeVerticalScrollbar__ResourcesImpl.$clinit(), NativeVerticalScrollbar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_ = value);
 }
 /** @return {Style} */
 static get f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_() {
  return (NativeVerticalScrollbar__ResourcesImpl.$clinit(), NativeVerticalScrollbar__ResourcesImpl.$f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_);
 }
 
 static set f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_(/** Style */ value) {
  (NativeVerticalScrollbar__ResourcesImpl.$clinit(), NativeVerticalScrollbar__ResourcesImpl.$f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_ = value);
 }
 
 static $clinit() {
  NativeVerticalScrollbar__ResourcesImpl.$clinit = () =>{};
  NativeVerticalScrollbar__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  NativeVerticalScrollbar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_ = NativeVerticalScrollbar__ResourcesImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeVerticalScrollbar__ResourcesImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl.$1$impl');
  nativeVerticalScrollbarStyleInitializer = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl.nativeVerticalScrollbarStyleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeVerticalScrollbar__ResourcesImpl, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl');

Resources.$markImplementor(NativeVerticalScrollbar__ResourcesImpl);

/**@private {NativeVerticalScrollbar__ResourcesImpl}*/
NativeVerticalScrollbar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
NativeVerticalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_;
/**@private {Style}*/
NativeVerticalScrollbar__ResourcesImpl.$f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesImpl_;

exports = NativeVerticalScrollbar__ResourcesImpl; 
//# sourceMappingURL=NativeVerticalScrollbar_ResourcesImpl.js.map