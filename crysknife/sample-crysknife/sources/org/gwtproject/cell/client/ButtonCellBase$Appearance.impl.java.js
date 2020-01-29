goog.module('org.gwtproject.cell.client.ButtonCellBase.Appearance$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ButtonCellBase = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');

/**
 * @interface
 * @template C
 */
class Appearance {
 /**
  * @abstract
  * @param {Object} parent
  * @public
  */
 m_onPush__org_gwtproject_dom_client_Element(parent) {}
 /**
  * @abstract
  * @param {Object} parent
  * @public
  */
 m_onUnpush__org_gwtproject_dom_client_Element(parent) {}
 /**
  * @abstract
  * @param {ButtonCellBase<C>} cell
  * @param {Context} context
  * @param {C} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(cell, context, value, sb) {}
 /**
  * @abstract
  * @param {Object} parent
  * @param {boolean} focused
  * @public
  */
 m_setFocus__org_gwtproject_dom_client_Element__boolean(parent, focused) {}
 /**
  * @public
  */
 static $clinit() {
  Appearance.$clinit = () =>{};
  Appearance.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_ButtonCellBase_Appearance = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ButtonCellBase_Appearance;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Appearance, 'org.gwtproject.cell.client.ButtonCellBase$Appearance');

Appearance.$markImplementor(/** @type {Function} */ (Appearance));

exports = Appearance; 
//# sourceMappingURL=ButtonCellBase$Appearance.js.map