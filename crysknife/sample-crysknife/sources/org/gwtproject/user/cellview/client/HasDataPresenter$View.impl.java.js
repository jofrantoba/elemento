goog.module('org.gwtproject.user.cellview.client.HasDataPresenter.View$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let LoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');

/**
 * @interface
 * @template T
 */
class View {
 /**
  * @abstract
  * @template H
  * @param {H} handler
  * @param {Type<H>} type
  * @return {HandlerRegistration}
  * @public
  */
 m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, type) {}
 /**
  * @abstract
  * @param {List<T>} values
  * @param {SelectionModel<?>} selectionModel
  * @param {boolean} stealFocus
  * @public
  */
 m_replaceAllChildren__java_util_List__org_gwtproject_view_client_SelectionModel__boolean(values, selectionModel, stealFocus) {}
 /**
  * @abstract
  * @param {List<T>} values
  * @param {number} start
  * @param {SelectionModel<?>} selectionModel
  * @param {boolean} stealFocus
  * @public
  */
 m_replaceChildren__java_util_List__int__org_gwtproject_view_client_SelectionModel__boolean(values, start, selectionModel, stealFocus) {}
 /**
  * @abstract
  * @public
  */
 m_resetFocus__() {}
 /**
  * @abstract
  * @param {number} index
  * @param {boolean} selected
  * @param {boolean} stealFocus
  * @public
  */
 m_setKeyboardSelected__int__boolean__boolean(index, selected, stealFocus) {}
 /**
  * @abstract
  * @param {LoadingState} state
  * @public
  */
 m_setLoadingState__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state) {}
 /**
  * @public
  */
 static $clinit() {
  View.$clinit = () =>{};
  View.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_View = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_View;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(View, 'org.gwtproject.user.cellview.client.HasDataPresenter$View');

View.$markImplementor(/** @type {Function} */ (View));

exports = View; 
//# sourceMappingURL=HasDataPresenter$View.js.map