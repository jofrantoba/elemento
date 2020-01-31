goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.Style$impl');

/**
 * @interface
 */
class Resources {
 /** @abstract @return {ImageResource} */
 m_sortAscending__() {}
 /** @abstract @return {ImageResource} */
 m_sortDescending__() {}
 /** @abstract @return {Style} */
 m_style__() {}
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Resources;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.cellview.client.AbstractCellTable$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

exports = Resources; 
//# sourceMappingURL=AbstractCellTable$Resources.js.map