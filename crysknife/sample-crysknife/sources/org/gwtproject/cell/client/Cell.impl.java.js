goog.module('org.gwtproject.cell.client.Cell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Set = goog.forwardDeclare('java.util.Set$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');

/**
 * @interface
 * @template C
 */
class Cell {
 /** @abstract @return {boolean} */
 m_dependsOnSelection__() {}
 /** @abstract @return {Set<?string>} */
 m_getConsumedEvents__() {}
 /** @abstract @return {boolean} */
 m_handlesSelection__() {}
 /** @abstract @return {boolean} */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Object */ parent, /** C */ value) {}
 /** @abstract */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(/** Context */ context, /** Object */ parent, /** C */ value, /** Object */ event, /** ValueUpdater<C> */ valueUpdater) {}
 /** @abstract */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** C */ value, /** SafeHtmlBuilder */ sb) {}
 /** @abstract @return {boolean} */
 m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Object */ parent, /** C */ value) {}
 /** @abstract */
 m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Object */ parent, /** C */ value) {}
 
 static $clinit() {
  Cell.$clinit = () =>{};
  Cell.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_cell_client_Cell = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_Cell;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Cell, 'org.gwtproject.cell.client.Cell');

Cell.$markImplementor(/** @type {Function} */ (Cell));

exports = Cell; 
//# sourceMappingURL=Cell.js.map