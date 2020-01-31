goog.module('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl.customScrollPanelStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel.Style$impl');
let CustomScrollPanel__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$impl');

class customScrollPanelStyleInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!customScrollPanelStyleInitializer} */
 static $create__() {
  let $instance = new customScrollPanelStyleInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_customScrollPanelStyleInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_customScrollPanelStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Style} */
 static m_get__() {
  customScrollPanelStyleInitializer.$clinit();
  return CustomScrollPanel__ResourcesImpl.f_customScrollPanelStyle__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_;
 }
 
 static $clinit() {
  customScrollPanelStyleInitializer.$clinit = () =>{};
  customScrollPanelStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  CustomScrollPanel__ResourcesImpl.f__instance0__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_.m_customScrollPanelStyleInitializer___$p_org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof customScrollPanelStyleInitializer;
 }
 
 static $loadModules() {
  CustomScrollPanel__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(customScrollPanelStyleInitializer, 'org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$customScrollPanelStyleInitializer');

exports = customScrollPanelStyleInitializer; 
//# sourceMappingURL=CustomScrollPanel_ResourcesImpl$customScrollPanelStyleInitializer.js.map