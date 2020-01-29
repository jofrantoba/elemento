goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcesTransparant = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.ResourcesTransparant$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl.$1$impl');
let nativeVerticalScrollbarStyleInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl.nativeVerticalScrollbarStyleInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ResourcesTransparant}
  */
class NativeVerticalScrollbar__ResourcesTransparantImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!NativeVerticalScrollbar__ResourcesTransparantImpl}
  * @public
  */
 static $create__() {
  NativeVerticalScrollbar__ResourcesTransparantImpl.$clinit();
  let $instance = new NativeVerticalScrollbar__ResourcesTransparantImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 m_nativeVerticalScrollbarStyleInitializer___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl() {
  NativeVerticalScrollbar__ResourcesTransparantImpl.$f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_ = $1.$create__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl(this);
 }
 /**
  * @override
  * @return {Style}
  * @public
  */
 m_nativeVerticalScrollbarStyle__() {
  return nativeVerticalScrollbarStyleInitializer.m_get__();
 }
 /**
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>} */ ($Arrays.$init([this.m_nativeVerticalScrollbarStyle__()], ResourcePrototype));
 }
 /**
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {
  if ($Equality.$same(NativeVerticalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_, null)) {
   NativeVerticalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_ = /**@type {!HashMap<?string, ResourcePrototype>} */ (HashMap.$create__());
   NativeVerticalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_.put("nativeVerticalScrollbarStyle", this.m_nativeVerticalScrollbarStyle__());
  }
  return /**@type {ResourcePrototype} */ ($Casts.$to(NativeVerticalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_.get(name), ResourcePrototype));
 }
 /**
  * @return {NativeVerticalScrollbar__ResourcesTransparantImpl}
  * @public
  */
 static get f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_() {
  return (NativeVerticalScrollbar__ResourcesTransparantImpl.$clinit(), NativeVerticalScrollbar__ResourcesTransparantImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_);
 }
 /**
  * @param {NativeVerticalScrollbar__ResourcesTransparantImpl} value
  * @public
  */
 static set f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_(value) {
  (NativeVerticalScrollbar__ResourcesTransparantImpl.$clinit(), NativeVerticalScrollbar__ResourcesTransparantImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_ = value);
 }
 /**
  * @return {Style}
  * @public
  */
 static get f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_() {
  return (NativeVerticalScrollbar__ResourcesTransparantImpl.$clinit(), NativeVerticalScrollbar__ResourcesTransparantImpl.$f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_);
 }
 /**
  * @param {Style} value
  * @public
  */
 static set f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_(value) {
  (NativeVerticalScrollbar__ResourcesTransparantImpl.$clinit(), NativeVerticalScrollbar__ResourcesTransparantImpl.$f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  NativeVerticalScrollbar__ResourcesTransparantImpl.$clinit = () =>{};
  NativeVerticalScrollbar__ResourcesTransparantImpl.$loadModules();
  j_l_Object.$clinit();
  NativeVerticalScrollbar__ResourcesTransparantImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_ = NativeVerticalScrollbar__ResourcesTransparantImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NativeVerticalScrollbar__ResourcesTransparantImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl.$1$impl');
  nativeVerticalScrollbarStyleInitializer = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl.nativeVerticalScrollbarStyleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeVerticalScrollbar__ResourcesTransparantImpl, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl');

ResourcesTransparant.$markImplementor(NativeVerticalScrollbar__ResourcesTransparantImpl);

/** @private {NativeVerticalScrollbar__ResourcesTransparantImpl} */
NativeVerticalScrollbar__ResourcesTransparantImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_;
/** @public {HashMap<?string, ResourcePrototype>} */
NativeVerticalScrollbar__ResourcesTransparantImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_;
/** @private {Style} */
NativeVerticalScrollbar__ResourcesTransparantImpl.$f_nativeVerticalScrollbarStyle__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_;

exports = NativeVerticalScrollbar__ResourcesTransparantImpl; 
//# sourceMappingURL=NativeVerticalScrollbar_ResourcesTransparantImpl.js.map