goog.module('org.gwtproject.user.cellview.client.HasDataPresenter.State$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');

/**
 * @interface
 * @template T
 */
class State {
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getKeyboardSelectedRow__() {}
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_getKeyboardSelectedRowValue__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getPageSize__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getPageStart__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getRowCount__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getRowDataSize__() {}
 /**
  * @abstract
  * @param {number} index
  * @return {T}
  * @public
  */
 m_getRowDataValue__int(index) {}
 /**
  * @abstract
  * @return {List<T>}
  * @public
  */
 m_getRowDataValues__() {}
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_getSelectedValue__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isRowCountExact__() {}
 /**
  * @abstract
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isRowSelected__int(index) {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isViewTouched__() {}
 /**
  * @public
  */
 static $clinit() {
  State.$clinit = () =>{};
  State.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_State = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_State;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(State, 'org.gwtproject.user.cellview.client.HasDataPresenter$State');

State.$markImplementor(/** @type {Function} */ (State));

exports = State; 
//# sourceMappingURL=HasDataPresenter$State.js.map