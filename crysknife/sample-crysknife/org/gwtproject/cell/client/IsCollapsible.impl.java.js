goog.module('org.gwtproject.cell.client.IsCollapsible$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class IsCollapsible {
 /** @abstract @return {boolean} */
 m_isCollapseLeft__() {}
 /** @abstract @return {boolean} */
 m_isCollapseRight__() {}
 /** @abstract */
 m_setCollapseLeft__boolean(/** boolean */ isCollapsed) {}
 /** @abstract */
 m_setCollapseRight__boolean(/** boolean */ isCollapsed) {}
 
 static $clinit() {
  IsCollapsible.$clinit = () =>{};
  IsCollapsible.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_cell_client_IsCollapsible = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_IsCollapsible;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(IsCollapsible, 'org.gwtproject.cell.client.IsCollapsible');

IsCollapsible.$markImplementor(/** @type {Function} */ (IsCollapsible));

exports = IsCollapsible; 
//# sourceMappingURL=IsCollapsible.js.map