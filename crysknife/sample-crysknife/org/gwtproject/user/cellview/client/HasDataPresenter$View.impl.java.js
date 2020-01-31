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
 /** @abstract @template H @return {HandlerRegistration} */
 m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(/** H */ handler, /** Type<H> */ type) {}
 /** @abstract */
 m_replaceAllChildren__java_util_List__org_gwtproject_view_client_SelectionModel__boolean(/** List<T> */ values, /** SelectionModel<?> */ selectionModel, /** boolean */ stealFocus) {}
 /** @abstract */
 m_replaceChildren__java_util_List__int__org_gwtproject_view_client_SelectionModel__boolean(/** List<T> */ values, /** number */ start, /** SelectionModel<?> */ selectionModel, /** boolean */ stealFocus) {}
 /** @abstract */
 m_resetFocus__() {}
 /** @abstract */
 m_setKeyboardSelected__int__boolean__boolean(/** number */ index, /** boolean */ selected, /** boolean */ stealFocus) {}
 /** @abstract */
 m_setLoadingState__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(/** LoadingState */ state) {}
 
 static $clinit() {
  View.$clinit = () =>{};
  View.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_View = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_View;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(View, 'org.gwtproject.user.cellview.client.HasDataPresenter$View');

View.$markImplementor(/** @type {Function} */ (View));

exports = View; 
//# sourceMappingURL=HasDataPresenter$View.js.map