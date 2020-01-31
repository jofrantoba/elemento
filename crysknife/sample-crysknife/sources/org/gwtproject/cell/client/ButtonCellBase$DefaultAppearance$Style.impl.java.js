goog.module('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /** @abstract @return {?string} */
 m_buttonCellBase__() {}
 /** @abstract @return {?string} */
 m_buttonCellBaseCollapseLeft__() {}
 /** @abstract @return {?string} */
 m_buttonCellBaseCollapseRight__() {}
 /** @abstract @return {?string} */
 m_buttonCellBaseDefault__() {}
 /** @abstract @return {?string} */
 m_buttonCellBaseNegative__() {}
 /** @abstract @return {?string} */
 m_buttonCellBasePrimary__() {}
 /** @abstract @return {?string} */
 m_buttonCellBasePushing__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.cell.client.ButtonCellBase$DefaultAppearance$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/**@const {?string}*/
Style.f_DEFAULT_CSS__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Style = "org/gwtproject/cell/client/ButtonCellBase.gss";

exports = Style; 
//# sourceMappingURL=ButtonCellBase$DefaultAppearance$Style.js.map