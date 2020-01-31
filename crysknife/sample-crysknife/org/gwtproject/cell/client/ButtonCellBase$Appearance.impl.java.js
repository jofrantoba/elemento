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
 /** @abstract */
 m_onPush__org_gwtproject_dom_client_Element(/** Object */ parent) {}
 /** @abstract */
 m_onUnpush__org_gwtproject_dom_client_Element(/** Object */ parent) {}
 /** @abstract */
 m_render__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** ButtonCellBase<C> */ cell, /** Context */ context, /** C */ value, /** SafeHtmlBuilder */ sb) {}
 /** @abstract */
 m_setFocus__org_gwtproject_dom_client_Element__boolean(/** Object */ parent, /** boolean */ focused) {}
 
 static $clinit() {
  Appearance.$clinit = () =>{};
  Appearance.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_cell_client_ButtonCellBase_Appearance = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ButtonCellBase_Appearance;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Appearance, 'org.gwtproject.cell.client.ButtonCellBase$Appearance');

Appearance.$markImplementor(/** @type {Function} */ (Appearance));

exports = Appearance; 
//# sourceMappingURL=ButtonCellBase$Appearance.js.map