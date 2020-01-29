goog.module('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_buttonCellBase__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_buttonCellBaseCollapseLeft__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_buttonCellBaseCollapseRight__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_buttonCellBaseDefault__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_buttonCellBaseNegative__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_buttonCellBasePrimary__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_buttonCellBasePushing__() {}
 /**
  * @public
  */
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CssResource.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.cell.client.ButtonCellBase$DefaultAppearance$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/** @public {?string} @const */
Style.f_DEFAULT_CSS__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Style = "org/gwtproject/cell/client/ButtonCellBase.gss";

exports = Style; 
//# sourceMappingURL=ButtonCellBase$DefaultAppearance$Style.js.map