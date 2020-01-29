goog.module('org.gwtproject.cell.client.IsCollapsible$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class IsCollapsible {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isCollapseLeft__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isCollapseRight__() {}
 /**
  * @abstract
  * @param {boolean} isCollapsed
  * @public
  */
 m_setCollapseLeft__boolean(isCollapsed) {}
 /**
  * @abstract
  * @param {boolean} isCollapsed
  * @public
  */
 m_setCollapseRight__boolean(isCollapsed) {}
 /**
  * @public
  */
 static $clinit() {
  IsCollapsible.$clinit = () =>{};
  IsCollapsible.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_IsCollapsible = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_IsCollapsible;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(IsCollapsible, 'org.gwtproject.cell.client.IsCollapsible');

IsCollapsible.$markImplementor(/** @type {Function} */ (IsCollapsible));

exports = IsCollapsible; 
//# sourceMappingURL=IsCollapsible.js.map