goog.module('org.gwtproject.user.cellview.client.HasDataPresenter.State$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');

/**
 * @interface
 * @template T
 */
class State {
 /** @abstract @return {number} */
 m_getKeyboardSelectedRow__() {}
 /** @abstract @return {T} */
 m_getKeyboardSelectedRowValue__() {}
 /** @abstract @return {number} */
 m_getPageSize__() {}
 /** @abstract @return {number} */
 m_getPageStart__() {}
 /** @abstract @return {number} */
 m_getRowCount__() {}
 /** @abstract @return {number} */
 m_getRowDataSize__() {}
 /** @abstract @return {T} */
 m_getRowDataValue__int(/** number */ index) {}
 /** @abstract @return {List<T>} */
 m_getRowDataValues__() {}
 /** @abstract @return {T} */
 m_getSelectedValue__() {}
 /** @abstract @return {boolean} */
 m_isRowCountExact__() {}
 /** @abstract @return {boolean} */
 m_isRowSelected__int(/** number */ index) {}
 /** @abstract @return {boolean} */
 m_isViewTouched__() {}
 
 static $clinit() {
  State.$clinit = () =>{};
  State.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_State = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_State;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(State, 'org.gwtproject.user.cellview.client.HasDataPresenter$State');

State.$markImplementor(/** @type {Function} */ (State));

exports = State; 
//# sourceMappingURL=HasDataPresenter$State.js.map