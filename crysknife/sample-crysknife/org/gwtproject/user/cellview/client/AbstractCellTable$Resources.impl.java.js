goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.Style$impl');

/**
 * @interface
 */
class Resources {
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_sortAscending__() {}
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_sortDescending__() {}
 /**
  * @abstract
  * @return {Style}
  * @public
  */
 m_style__() {}
 /**
  * @public
  */
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Resources = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Resources;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.cellview.client.AbstractCellTable$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

exports = Resources; 
//# sourceMappingURL=AbstractCellTable$Resources.js.map