goog.module('org.gwtproject.user.cellview.client.AbstractHasData.View$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const View = goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.View$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let AbstractHasData = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData$impl');
let RedrawEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.View.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.View.$2$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let LoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @implements {View<T>}
  */
class AbstractHasData_View extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractHasData<T>}*/
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_;
  /**@type {boolean}*/
  this.f_wasFocused__org_gwtproject_user_cellview_client_AbstractHasData_View_ = false;
 }
 /** @template T @return {!AbstractHasData_View<T>} */
 static $create__org_gwtproject_user_cellview_client_AbstractHasData(/** AbstractHasData<T> */ hasData) {
  AbstractHasData_View.$clinit();
  let $instance = new AbstractHasData_View();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractHasData_View__org_gwtproject_user_cellview_client_AbstractHasData(hasData);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData_View__org_gwtproject_user_cellview_client_AbstractHasData(/** AbstractHasData<T> */ hasData) {
  this.$ctor__java_lang_Object__();
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_ = hasData;
 }
 /** @override @template H @return {HandlerRegistration} */
 m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(/** H */ handler, /** Type<H> */ type) {
  return this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, type);
 }
 /** @override */
 m_replaceAllChildren__java_util_List__org_gwtproject_view_client_SelectionModel__boolean(/** List<T> */ values, /** SelectionModel<?> */ selectionModel, /** boolean */ stealFocus) {
  let html = this.m_renderRowValues__java_util_List__int__org_gwtproject_view_client_SelectionModel_$p_org_gwtproject_user_cellview_client_AbstractHasData_View(values, this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_getPageStart__(), selectionModel);
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData = this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData || stealFocus;
  this.f_wasFocused__org_gwtproject_user_cellview_client_AbstractHasData_View_ = this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData;
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isRefreshing__org_gwtproject_user_cellview_client_AbstractHasData_ = true;
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_replaceAllChildren__java_util_List__org_gwtproject_safehtml_shared_SafeHtml(values, html);
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isRefreshing__org_gwtproject_user_cellview_client_AbstractHasData_ = false;
  let elem = this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_getKeyboardSelectedElement__();
  if (!$Equality.$same(elem, null)) {
   this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_setFocusable__org_gwtproject_dom_client_Element__boolean(elem, true);
   if (this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData) {
    this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_onFocus__();
   }
  }
  this.m_fireValueChangeEvent___$p_org_gwtproject_user_cellview_client_AbstractHasData_View();
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_fireEvent__org_gwtproject_event_shared_Event(RedrawEvent.$create__());
 }
 /** @override */
 m_replaceChildren__java_util_List__int__org_gwtproject_view_client_SelectionModel__boolean(/** List<T> */ values, /** number */ start, /** SelectionModel<?> */ selectionModel, /** boolean */ stealFocus) {
  let html = this.m_renderRowValues__java_util_List__int__org_gwtproject_view_client_SelectionModel_$p_org_gwtproject_user_cellview_client_AbstractHasData_View(values, this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_getPageStart__() + start, selectionModel);
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData = this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData || stealFocus;
  this.f_wasFocused__org_gwtproject_user_cellview_client_AbstractHasData_View_ = this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData;
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isRefreshing__org_gwtproject_user_cellview_client_AbstractHasData_ = true;
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_replaceChildren__java_util_List__int__org_gwtproject_safehtml_shared_SafeHtml(values, start, html);
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isRefreshing__org_gwtproject_user_cellview_client_AbstractHasData_ = false;
  let elem = this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_getKeyboardSelectedElement__();
  if (!$Equality.$same(elem, null)) {
   this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_setFocusable__org_gwtproject_dom_client_Element__boolean(elem, true);
   if (this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData) {
    this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_onFocus__();
   }
  }
  this.m_fireValueChangeEvent___$p_org_gwtproject_user_cellview_client_AbstractHasData_View();
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_fireEvent__org_gwtproject_event_shared_Event(RedrawEvent.$create__());
 }
 /** @override */
 m_resetFocus__() {
  if (this.f_wasFocused__org_gwtproject_user_cellview_client_AbstractHasData_View_) {
   CellBasedWidgetImpl.m_get__().m_resetFocus__org_gwtproject_core_client_Scheduler_ScheduledCommand(/**@type {!$1<T>}*/ ($1.$create__org_gwtproject_user_cellview_client_AbstractHasData_View(this)));
  }
 }
 /** @override */
 m_setKeyboardSelected__int__boolean__boolean(/** number */ index, /** boolean */ seleted, /** boolean */ stealFocus) {
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData = this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData || stealFocus;
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_setKeyboardSelected__int__boolean__boolean(index, seleted, stealFocus);
 }
 /** @override */
 m_setLoadingState__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(/** LoadingState */ state) {
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isRefreshing__org_gwtproject_user_cellview_client_AbstractHasData_ = true;
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state);
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.f_isRefreshing__org_gwtproject_user_cellview_client_AbstractHasData_ = false;
 }
 
 m_fireValueChangeEvent___$p_org_gwtproject_user_cellview_client_AbstractHasData_View() {
  this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_fireEvent__org_gwtproject_event_shared_Event(/**@type {!$2<T>}*/ ($2.$create__org_gwtproject_user_cellview_client_AbstractHasData_View__java_util_List(this, this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_getVisibleItems__())));
 }
 /** @return {SafeHtml} */
 m_renderRowValues__java_util_List__int__org_gwtproject_view_client_SelectionModel_$p_org_gwtproject_user_cellview_client_AbstractHasData_View(/** List<T> */ values, /** number */ start, /** SelectionModel<?> */ selectionModel) {
  try {
   let sb = SafeHtmlBuilder.$create__();
   this.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_renderRowValues__org_gwtproject_safehtml_shared_SafeHtmlBuilder__java_util_List__int__org_gwtproject_view_client_SelectionModel(sb, values, start, selectionModel);
   return sb.m_toSafeHtml__();
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (UnsupportedOperationException.$isInstance(__$exc)) {
    let e = /**@type {UnsupportedOperationException}*/ (__$exc);
    return null;
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 
 static $clinit() {
  AbstractHasData_View.$clinit = () =>{};
  AbstractHasData_View.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractHasData_View;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  RedrawEvent = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData.View.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData.View.$2$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractHasData_View, 'org.gwtproject.user.cellview.client.AbstractHasData$View');

View.$markImplementor(AbstractHasData_View);

exports = AbstractHasData_View; 
//# sourceMappingURL=AbstractHasData$View.js.map