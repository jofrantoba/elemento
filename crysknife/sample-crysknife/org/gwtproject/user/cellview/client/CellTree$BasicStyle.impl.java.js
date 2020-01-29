goog.module('org.gwtproject.user.cellview.client.CellTree.BasicStyle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.CellTree.Style$impl');

/**
 * @interface
 * @extends {Style}
 */
class BasicStyle {
 /**
  * @public
  */
 static $clinit() {
  BasicStyle.$clinit = () =>{};
  BasicStyle.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Style.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellTree_BasicStyle = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTree_BasicStyle;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BasicStyle, 'org.gwtproject.user.cellview.client.CellTree$BasicStyle');

BasicStyle.$markImplementor(/** @type {Function} */ (BasicStyle));

/** @public {?string} @const */
BasicStyle.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellTree_BasicStyle = "org/gwtproject/user/cellview/client/CellTreeBasic.gss";

exports = BasicStyle; 
//# sourceMappingURL=CellTree$BasicStyle.js.map