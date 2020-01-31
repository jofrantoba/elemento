goog.module('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.MenuBar.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let ImageResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let menuBarSubMenuIconInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl.menuBarSubMenuIconInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class MenuBar__ResourcesImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MenuBar__ResourcesImpl} */
 static $create__() {
  MenuBar__ResourcesImpl.$clinit();
  let $instance = new MenuBar__ResourcesImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_menuBarSubMenuIconInitializer___$p_org_gwtproject_user_client_ui_MenuBar_ResourcesImpl() {
  MenuBar__ResourcesImpl.$f_menuBarSubMenuIcon__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("menuBarSubMenuIcon", UriUtils.m_fromTrustedString__java_lang_String(MenuBar__ResourcesImpl.f_externalImage__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_), 0, 0, 5, 9, false, false);
 }
 /** @override @return {ImageResource} */
 m_menuBarSubMenuIcon__() {
  return menuBarSubMenuIconInitializer.m_get__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([this.m_menuBarSubMenuIcon__()], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(MenuBar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_, null)) {
   MenuBar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   MenuBar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_.put("menuBarSubMenuIcon", this.m_menuBarSubMenuIcon__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(MenuBar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /** @return {MenuBar__ResourcesImpl} */
 static get f__instance0__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_() {
  return (MenuBar__ResourcesImpl.$clinit(), MenuBar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_);
 }
 
 static set f__instance0__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_(/** MenuBar__ResourcesImpl */ value) {
  (MenuBar__ResourcesImpl.$clinit(), MenuBar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_menuBarSubMenuIcon__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_() {
  return (MenuBar__ResourcesImpl.$clinit(), MenuBar__ResourcesImpl.$f_menuBarSubMenuIcon__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_);
 }
 
 static set f_menuBarSubMenuIcon__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_(/** ImageResource */ value) {
  (MenuBar__ResourcesImpl.$clinit(), MenuBar__ResourcesImpl.$f_menuBarSubMenuIcon__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_ = value);
 }
 
 static $clinit() {
  MenuBar__ResourcesImpl.$clinit = () =>{};
  MenuBar__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  MenuBar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_ = MenuBar__ResourcesImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuBar__ResourcesImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  ImageResourcePrototype = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  menuBarSubMenuIconInitializer = goog.module.get('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl.menuBarSubMenuIconInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MenuBar__ResourcesImpl, 'org.gwtproject.user.client.ui.MenuBar_ResourcesImpl');

Resources.$markImplementor(MenuBar__ResourcesImpl);

/**@private {MenuBar__ResourcesImpl}*/
MenuBar__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
MenuBar__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_;
/**@const {?string}*/
MenuBar__ResourcesImpl.f_externalImage__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_ = "data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs=";
/**@private {ImageResource}*/
MenuBar__ResourcesImpl.$f_menuBarSubMenuIcon__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_;

exports = MenuBar__ResourcesImpl; 
//# sourceMappingURL=MenuBar_ResourcesImpl.js.map