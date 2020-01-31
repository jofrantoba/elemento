goog.module('org.gwtproject.user.client.ui.DockPanel.TmpRow$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

class TmpRow extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_center__org_gwtproject_user_client_ui_DockPanel_TmpRow = 0;
  /**@type {Object}*/
  this.f_tr__org_gwtproject_user_client_ui_DockPanel_TmpRow;
 }
 /** @return {!TmpRow} */
 static $create__() {
  TmpRow.$clinit();
  let $instance = new TmpRow();
  $instance.$ctor__org_gwtproject_user_client_ui_DockPanel_TmpRow__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DockPanel_TmpRow__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  TmpRow.$clinit = () =>{};
  TmpRow.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TmpRow;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(TmpRow, 'org.gwtproject.user.client.ui.DockPanel$TmpRow');

exports = TmpRow; 
//# sourceMappingURL=DockPanel$TmpRow.js.map