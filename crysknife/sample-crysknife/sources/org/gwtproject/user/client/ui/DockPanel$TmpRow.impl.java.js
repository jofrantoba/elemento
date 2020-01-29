goog.module('org.gwtproject.user.client.ui.DockPanel.TmpRow$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

class TmpRow extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_center__org_gwtproject_user_client_ui_DockPanel_TmpRow = 0;
  /** @public {Object} */
  this.f_tr__org_gwtproject_user_client_ui_DockPanel_TmpRow;
 }
 /**
  * @return {!TmpRow}
  * @public
  */
 static $create__() {
  TmpRow.$clinit();
  let $instance = new TmpRow();
  $instance.$ctor__org_gwtproject_user_client_ui_DockPanel_TmpRow__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DockPanel_TmpRow__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  TmpRow.$clinit = () =>{};
  TmpRow.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TmpRow;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(TmpRow, 'org.gwtproject.user.client.ui.DockPanel$TmpRow');

exports = TmpRow; 
//# sourceMappingURL=DockPanel$TmpRow.js.map