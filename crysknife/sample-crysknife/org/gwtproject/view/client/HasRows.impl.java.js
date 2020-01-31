goog.module('org.gwtproject.view.client.HasRows$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Range = goog.forwardDeclare('org.gwtproject.view.client.Range$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');
let RowCountChangeEvent_Handler = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasRows {
 /** @abstract @return {HandlerRegistration} */
 m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(/** Handler */ handler) {}
 /** @abstract @return {HandlerRegistration} */
 m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(/** RowCountChangeEvent_Handler */ handler) {}
 /** @abstract @return {number} */
 m_getRowCount__() {}
 /** @abstract @return {Range} */
 m_getVisibleRange__() {}
 /** @abstract @return {boolean} */
 m_isRowCountExact__() {}
 /** @abstract */
 m_setRowCount__int(/** number */ count) {}
 /** @abstract */
 m_setRowCount__int__boolean(/** number */ count, /** boolean */ isExact) {}
 /** @abstract */
 m_setVisibleRange__int__int(/** number */ start, /** number */ length) {}
 /** @abstract */
 m_setVisibleRange__org_gwtproject_view_client_Range(/** Range */ range) {}
 
 static $clinit() {
  HasRows.$clinit = () =>{};
  HasRows.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_view_client_HasRows = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_HasRows;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasRows, 'org.gwtproject.view.client.HasRows');

HasRows.$markImplementor(/** @type {Function} */ (HasRows));

exports = HasRows; 
//# sourceMappingURL=HasRows.js.map