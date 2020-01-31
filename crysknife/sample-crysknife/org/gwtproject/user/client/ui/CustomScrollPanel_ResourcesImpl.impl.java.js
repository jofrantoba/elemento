goog.module('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.CustomScrollPanel.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel.Style$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl.$1$impl');
let customScrollPanelStyleInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl.customScrollPanelStyleInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class CustomScrollPanel__ResourcesImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CustomScrollPanel__ResourcesImpl} */
 static $create__() {
  CustomScrollPanel__ResourcesImpl.$clinit();
  let $instance = new CustomScrollPanel__ResourcesImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_customScrollPanelStyleInitializer___$p_org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl() {
  CustomScrollPanel__ResourcesImpl.$f_customScrollPanelStyle__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_ = $1.$create__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl(this);
 }
 /** @override @return {Style} */
 m_customScrollPanelStyle__() {
  return customScrollPanelStyleInitializer.m_get__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([this.m_customScrollPanelStyle__()], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(CustomScrollPanel__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_, null)) {
   CustomScrollPanel__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   CustomScrollPanel__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_.put("customScrollPanelStyle", this.m_customScrollPanelStyle__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(CustomScrollPanel__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /** @return {CustomScrollPanel__ResourcesImpl} */
 static get f__instance0__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_() {
  return (CustomScrollPanel__ResourcesImpl.$clinit(), CustomScrollPanel__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_);
 }
 
 static set f__instance0__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_(/** CustomScrollPanel__ResourcesImpl */ value) {
  (CustomScrollPanel__ResourcesImpl.$clinit(), CustomScrollPanel__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_ = value);
 }
 /** @return {Style} */
 static get f_customScrollPanelStyle__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_() {
  return (CustomScrollPanel__ResourcesImpl.$clinit(), CustomScrollPanel__ResourcesImpl.$f_customScrollPanelStyle__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_);
 }
 
 static set f_customScrollPanelStyle__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_(/** Style */ value) {
  (CustomScrollPanel__ResourcesImpl.$clinit(), CustomScrollPanel__ResourcesImpl.$f_customScrollPanelStyle__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_ = value);
 }
 
 static $clinit() {
  CustomScrollPanel__ResourcesImpl.$clinit = () =>{};
  CustomScrollPanel__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  CustomScrollPanel__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_ = CustomScrollPanel__ResourcesImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CustomScrollPanel__ResourcesImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl.$1$impl');
  customScrollPanelStyleInitializer = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl.customScrollPanelStyleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CustomScrollPanel__ResourcesImpl, 'org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl');

Resources.$markImplementor(CustomScrollPanel__ResourcesImpl);

/**@private {CustomScrollPanel__ResourcesImpl}*/
CustomScrollPanel__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
CustomScrollPanel__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_;
/**@private {Style}*/
CustomScrollPanel__ResourcesImpl.$f_customScrollPanelStyle__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_;

exports = CustomScrollPanel__ResourcesImpl; 
//# sourceMappingURL=CustomScrollPanel_ResourcesImpl.js.map