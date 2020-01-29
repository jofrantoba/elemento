goog.module('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl.menuBarSubMenuIconInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let MenuBar__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl$impl');

class menuBarSubMenuIconInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!menuBarSubMenuIconInitializer}
  * @public
  */
 static $create__() {
  let $instance = new menuBarSubMenuIconInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_menuBarSubMenuIconInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_menuBarSubMenuIconInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  menuBarSubMenuIconInitializer.$clinit();
  return MenuBar__ResourcesImpl.f_menuBarSubMenuIcon__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  menuBarSubMenuIconInitializer.$clinit = () =>{};
  menuBarSubMenuIconInitializer.$loadModules();
  j_l_Object.$clinit();
  MenuBar__ResourcesImpl.f__instance0__org_gwtproject_user_client_ui_MenuBar_ResourcesImpl_.m_menuBarSubMenuIconInitializer___$p_org_gwtproject_user_client_ui_MenuBar_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof menuBarSubMenuIconInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  MenuBar__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(menuBarSubMenuIconInitializer, 'org.gwtproject.user.client.ui.MenuBar_ResourcesImpl$menuBarSubMenuIconInitializer');

exports = menuBarSubMenuIconInitializer; 
//# sourceMappingURL=MenuBar_ResourcesImpl$menuBarSubMenuIconInitializer.js.map