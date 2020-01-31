goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcesTransparant = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.ResourcesTransparant$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl.$1$impl');
let nativeHorizontalScrollbarStyleInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl.nativeHorizontalScrollbarStyleInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ResourcesTransparant}
  */
class NativeHorizontalScrollbar__ResourcesTransparantImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NativeHorizontalScrollbar__ResourcesTransparantImpl} */
 static $create__() {
  NativeHorizontalScrollbar__ResourcesTransparantImpl.$clinit();
  let $instance = new NativeHorizontalScrollbar__ResourcesTransparantImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_nativeHorizontalScrollbarStyleInitializer___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl() {
  NativeHorizontalScrollbar__ResourcesTransparantImpl.$f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_ = $1.$create__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl(this);
 }
 /** @override @return {Style} */
 m_nativeHorizontalScrollbarStyle__() {
  return nativeHorizontalScrollbarStyleInitializer.m_get__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([this.m_nativeHorizontalScrollbarStyle__()], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(NativeHorizontalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_, null)) {
   NativeHorizontalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   NativeHorizontalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_.put("nativeHorizontalScrollbarStyle", this.m_nativeHorizontalScrollbarStyle__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(NativeHorizontalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_.get(name), ResourcePrototype));
 }
 /** @return {NativeHorizontalScrollbar__ResourcesTransparantImpl} */
 static get f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_() {
  return (NativeHorizontalScrollbar__ResourcesTransparantImpl.$clinit(), NativeHorizontalScrollbar__ResourcesTransparantImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_);
 }
 
 static set f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_(/** NativeHorizontalScrollbar__ResourcesTransparantImpl */ value) {
  (NativeHorizontalScrollbar__ResourcesTransparantImpl.$clinit(), NativeHorizontalScrollbar__ResourcesTransparantImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_ = value);
 }
 /** @return {Style} */
 static get f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_() {
  return (NativeHorizontalScrollbar__ResourcesTransparantImpl.$clinit(), NativeHorizontalScrollbar__ResourcesTransparantImpl.$f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_);
 }
 
 static set f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_(/** Style */ value) {
  (NativeHorizontalScrollbar__ResourcesTransparantImpl.$clinit(), NativeHorizontalScrollbar__ResourcesTransparantImpl.$f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_ = value);
 }
 
 static $clinit() {
  NativeHorizontalScrollbar__ResourcesTransparantImpl.$clinit = () =>{};
  NativeHorizontalScrollbar__ResourcesTransparantImpl.$loadModules();
  j_l_Object.$clinit();
  NativeHorizontalScrollbar__ResourcesTransparantImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_ = NativeHorizontalScrollbar__ResourcesTransparantImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeHorizontalScrollbar__ResourcesTransparantImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl.$1$impl');
  nativeHorizontalScrollbarStyleInitializer = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl.nativeHorizontalScrollbarStyleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeHorizontalScrollbar__ResourcesTransparantImpl, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl');

ResourcesTransparant.$markImplementor(NativeHorizontalScrollbar__ResourcesTransparantImpl);

/**@private {NativeHorizontalScrollbar__ResourcesTransparantImpl}*/
NativeHorizontalScrollbar__ResourcesTransparantImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
NativeHorizontalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_;
/**@private {Style}*/
NativeHorizontalScrollbar__ResourcesTransparantImpl.$f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_;

exports = NativeHorizontalScrollbar__ResourcesTransparantImpl; 
//# sourceMappingURL=NativeHorizontalScrollbar_ResourcesTransparantImpl.js.map