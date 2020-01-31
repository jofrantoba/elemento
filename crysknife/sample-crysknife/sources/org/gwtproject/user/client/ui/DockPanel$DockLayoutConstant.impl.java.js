goog.module('org.gwtproject.user.client.ui.DockPanel.DockLayoutConstant$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class DockLayoutConstant extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DockLayoutConstant} */
 static $create__() {
  DockLayoutConstant.$clinit();
  let $instance = new DockLayoutConstant();
  $instance.$ctor__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  DockLayoutConstant.$clinit = () =>{};
  DockLayoutConstant.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DockLayoutConstant;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DockLayoutConstant, 'org.gwtproject.user.client.ui.DockPanel$DockLayoutConstant');

exports = DockLayoutConstant; 
//# sourceMappingURL=DockPanel$DockLayoutConstant.js.map