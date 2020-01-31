goog.module('org.gwtproject.user.cellview.client.CellTable.BasicStyle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.CellTable.Style$impl');

/**
 * @interface
 * @extends {Style}
 */
class BasicStyle {
 
 static $clinit() {
  BasicStyle.$clinit = () =>{};
  BasicStyle.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Style.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellTable_BasicStyle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTable_BasicStyle;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BasicStyle, 'org.gwtproject.user.cellview.client.CellTable$BasicStyle');

BasicStyle.$markImplementor(/** @type {Function} */ (BasicStyle));

/**@const {?string}*/
BasicStyle.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellTable_BasicStyle = "org/gwtproject/user/cellview/client/CellTableBasic.gss";

exports = BasicStyle; 
//# sourceMappingURL=CellTable$BasicStyle.js.map