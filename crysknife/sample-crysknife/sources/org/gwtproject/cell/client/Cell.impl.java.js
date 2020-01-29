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
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_dependsOnSelection__() {}
 /**
  * @abstract
  * @return {Set<?string>}
  * @public
  */
 m_getConsumedEvents__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_handlesSelection__() {}
 /**
  * @abstract
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @return {boolean}
  * @public
  */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value) {}
 /**
  * @abstract
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @param {Object} event
  * @param {ValueUpdater<C>} valueUpdater
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {}
 /**
  * @abstract
  * @param {Context} context
  * @param {C} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {}
 /**
  * @abstract
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @return {boolean}
  * @public
  */
 m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value) {}
 /**
  * @abstract
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @public
  */
 m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value) {}
 /**
  * @public
  */
 static $clinit() {
  Cell.$clinit = () =>{};
  Cell.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_Cell = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_Cell;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Cell, 'org.gwtproject.cell.client.Cell');

Cell.$markImplementor(/** @type {Function} */ (Cell));

exports = Cell; 
//# sourceMappingURL=Cell.js.map