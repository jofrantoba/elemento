goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl.$1$impl');
let nativeHorizontalScrollbarStyleInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl.nativeHorizontalScrollbarStyleInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class NativeHorizontalScrollbar__ResourcesImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!NativeHorizontalScrollbar__ResourcesImpl}
  * @public
  */
 static $create__() {
  NativeHorizontalScrollbar__ResourcesImpl.$clinit();
  let $instance = new NativeHorizontalScrollbar__ResourcesImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 m_nativeHorizontalScrollbarStyleInitializer___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl() {
  NativeHorizontalScrollbar__ResourcesImpl.$f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_ = $1.$create__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl(this);
 }
 /**
  * @override
  * @return {Style}
  * @public
  */
 m_nativeHorizontalScrollbarStyle__() {
  return nativeHorizontalScrollbarStyleInitializer.m_get__();
 }
 /**
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>} */ ($Arrays.$init([this.m_nativeHorizontalScrollbarStyle__()], ResourcePrototype));
 }
 /**
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {
  if ($Equality.$same(NativeHorizontalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_, null)) {
   NativeHorizontalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>} */ (HashMap.$create__());
   NativeHorizontalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_.put("nativeHorizontalScrollbarStyle", this.m_nativeHorizontalScrollbarStyle__());
  }
  return /**@type {ResourcePrototype} */ ($Casts.$to(NativeHorizontalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /**
  * @return {NativeHorizontalScrollbar__ResourcesImpl}
  * @public
  */
 static get f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_() {
  return (NativeHorizontalScrollbar__ResourcesImpl.$clinit(), NativeHorizontalScrollbar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_);
 }
 /**
  * @param {NativeHorizontalScrollbar__ResourcesImpl} value
  * @public
  */
 static set f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_(value) {
  (NativeHorizontalScrollbar__ResourcesImpl.$clinit(), NativeHorizontalScrollbar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_ = value);
 }
 /**
  * @return {Style}
  * @public
  */
 static get f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_() {
  return (NativeHorizontalScrollbar__ResourcesImpl.$clinit(), NativeHorizontalScrollbar__ResourcesImpl.$f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_);
 }
 /**
  * @param {Style} value
  * @public
  */
 static set f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_(value) {
  (NativeHorizontalScrollbar__ResourcesImpl.$clinit(), NativeHorizontalScrollbar__ResourcesImpl.$f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  NativeHorizontalScrollbar__ResourcesImpl.$clinit = () =>{};
  NativeHorizontalScrollbar__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  NativeHorizontalScrollbar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_ = NativeHorizontalScrollbar__ResourcesImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NativeHorizontalScrollbar__ResourcesImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl.$1$impl');
  nativeHorizontalScrollbarStyleInitializer = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl.nativeHorizontalScrollbarStyleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeHorizontalScrollbar__ResourcesImpl, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl');

Resources.$markImplementor(NativeHorizontalScrollbar__ResourcesImpl);

/** @private {NativeHorizontalScrollbar__ResourcesImpl} */
NativeHorizontalScrollbar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_;
/** @public {HashMap<?string, ResourcePrototype>} */
NativeHorizontalScrollbar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_;
/** @private {Style} */
NativeHorizontalScrollbar__ResourcesImpl.$f_nativeHorizontalScrollbarStyle__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesImpl_;

exports = NativeHorizontalScrollbar__ResourcesImpl; 
//# sourceMappingURL=NativeHorizontalScrollbar_ResourcesImpl.js.map