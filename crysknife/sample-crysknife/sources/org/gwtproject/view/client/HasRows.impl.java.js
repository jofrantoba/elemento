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
 /**
  * @abstract
  * @param {Handler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(handler) {}
 /**
  * @abstract
  * @param {RowCountChangeEvent_Handler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(handler) {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getRowCount__() {}
 /**
  * @abstract
  * @return {Range}
  * @public
  */
 m_getVisibleRange__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isRowCountExact__() {}
 /**
  * @abstract
  * @param {number} count
  * @public
  */
 m_setRowCount__int(count) {}
 /**
  * @abstract
  * @param {number} count
  * @param {boolean} isExact
  * @public
  */
 m_setRowCount__int__boolean(count, isExact) {}
 /**
  * @abstract
  * @param {number} start
  * @param {number} length
  * @public
  */
 m_setVisibleRange__int__int(start, length) {}
 /**
  * @abstract
  * @param {Range} range
  * @public
  */
 m_setVisibleRange__org_gwtproject_view_client_Range(range) {}
 /**
  * @public
  */
 static $clinit() {
  HasRows.$clinit = () =>{};
  HasRows.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_view_client_HasRows = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_HasRows;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasRows, 'org.gwtproject.view.client.HasRows');

HasRows.$markImplementor(/** @type {Function} */ (HasRows));

exports = HasRows; 
//# sourceMappingURL=HasRows.js.map