goog.module('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let Style = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Style$impl');
let ButtonCellBase__DefaultAppearance__ResourcesImpl = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_buttonCellBaseBackground__() {}
 /**
  * @abstract
  * @return {Style}
  * @public
  */
 m_buttonCellBaseStyle__() {}
 /**
  * @return {Resources}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources);
 }
 /**
  * @public
  */
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources = ButtonCellBase__DefaultAppearance__ResourcesImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ClientBundle.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources;
 }
 /**
  * @public
  */
 static $loadModules() {
  ButtonCellBase__DefaultAppearance__ResourcesImpl = goog.module.get('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.cell.client.ButtonCellBase$DefaultAppearance$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/** @private {Resources} */
Resources.$f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources;

exports = Resources; 
//# sourceMappingURL=ButtonCellBase$DefaultAppearance$Resources.js.map