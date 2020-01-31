goog.module('org.gwtproject.user.cellview.client.AbstractHasData.DefaultKeyboardSelectionHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let AbstractHasData = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let KeyboardPagingPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy$impl');
let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');

/**
 * @template T
 * @implements {Handler<T>}
  */
class DefaultKeyboardSelectionHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractHasData<T>}*/
  this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_;
 }
 /** @template T @return {!DefaultKeyboardSelectionHandler<T>} */
 static $create__org_gwtproject_user_cellview_client_AbstractHasData(/** AbstractHasData<T> */ display) {
  DefaultKeyboardSelectionHandler.$clinit();
  let $instance = new DefaultKeyboardSelectionHandler();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler__org_gwtproject_user_cellview_client_AbstractHasData(display);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler__org_gwtproject_user_cellview_client_AbstractHasData(/** AbstractHasData<T> */ display) {
  this.$ctor__java_lang_Object__();
  this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_ = display;
 }
 /** @return {AbstractHasData<T>} */
 m_getDisplay__() {
  return this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_;
 }
 /** @override */
 m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(/** CellPreviewEvent<T> */ event) {
  let nativeEvent = event.m_getNativeEvent__();
  let eventType = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__());
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, eventType) && !event.m_isCellEditing__()) {
   switch ($Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent)) {
    case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
     this.m_nextRow___$pp_org_gwtproject_user_cellview_client();
     this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
     return;
    case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
     this.m_prevRow___$pp_org_gwtproject_user_cellview_client();
     this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
     return;
    case KeyCodes.f_KEY_PAGEDOWN__org_gwtproject_event_dom_client_KeyCodes: 
     this.m_nextPage___$pp_org_gwtproject_user_cellview_client();
     this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
     return;
    case KeyCodes.f_KEY_PAGEUP__org_gwtproject_event_dom_client_KeyCodes: 
     this.m_prevPage___$pp_org_gwtproject_user_cellview_client();
     this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
     return;
    case KeyCodes.f_KEY_HOME__org_gwtproject_event_dom_client_KeyCodes: 
     this.m_home___$pp_org_gwtproject_user_cellview_client();
     this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
     return;
    case KeyCodes.f_KEY_END__org_gwtproject_event_dom_client_KeyCodes: 
     this.m_end___$pp_org_gwtproject_user_cellview_client();
     this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
     return;
    case 32: 
     this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
     return;
   }
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   let relRow = event.m_getIndex__() - this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getPageStart__();
   let isFocusable = false;
   let target = Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject($Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__()));
   isFocusable = CellBasedWidgetImpl.m_get__().m_isFocusable__org_gwtproject_dom_client_Element(target);
   this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_setKeyboardSelectedRow__int__boolean(relRow, !isFocusable);
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   let relRow_1 = event.m_getIndex__() - this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getPageStart__();
   if (this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getKeyboardSelectedRow__() != relRow_1) {
    this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_setKeyboardSelectedRow__int__boolean(relRow_1, false);
    return;
   }
  }
 }
 
 m_end___$pp_org_gwtproject_user_cellview_client() {
  this.m_setKeyboardSelectedRow__int_$pp_org_gwtproject_user_cellview_client(this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getRowCount__() - 1);
 }
 
 m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(/** CellPreviewEvent<?> */ event) {
  event.m_setCanceled__boolean(true);
  $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__());
 }
 
 m_home___$pp_org_gwtproject_user_cellview_client() {
  this.m_setKeyboardSelectedRow__int_$pp_org_gwtproject_user_cellview_client(-this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getPageStart__());
 }
 
 m_nextPage___$pp_org_gwtproject_user_cellview_client() {
  let keyboardPagingPolicy = this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getKeyboardPagingPolicy__();
  if ($Equality.$same(KeyboardPagingPolicy.f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, keyboardPagingPolicy)) {
   this.m_setKeyboardSelectedRow__int_$pp_org_gwtproject_user_cellview_client(this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getPageSize__());
  } else if ($Equality.$same(KeyboardPagingPolicy.f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, keyboardPagingPolicy)) {
   this.m_setKeyboardSelectedRow__int_$pp_org_gwtproject_user_cellview_client(this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getKeyboardSelectedRow__() + DefaultKeyboardSelectionHandler.f_PAGE_INCREMENT__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_);
  }
 }
 
 m_nextRow___$pp_org_gwtproject_user_cellview_client() {
  this.m_setKeyboardSelectedRow__int_$pp_org_gwtproject_user_cellview_client(this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getKeyboardSelectedRow__() + 1);
 }
 
 m_prevPage___$pp_org_gwtproject_user_cellview_client() {
  let keyboardPagingPolicy = this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getKeyboardPagingPolicy__();
  if ($Equality.$same(KeyboardPagingPolicy.f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, keyboardPagingPolicy)) {
   this.m_setKeyboardSelectedRow__int_$pp_org_gwtproject_user_cellview_client(-this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getPageSize__());
  } else if ($Equality.$same(KeyboardPagingPolicy.f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, keyboardPagingPolicy)) {
   this.m_setKeyboardSelectedRow__int_$pp_org_gwtproject_user_cellview_client(this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getKeyboardSelectedRow__() - DefaultKeyboardSelectionHandler.f_PAGE_INCREMENT__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_);
  }
 }
 
 m_prevRow___$pp_org_gwtproject_user_cellview_client() {
  this.m_setKeyboardSelectedRow__int_$pp_org_gwtproject_user_cellview_client(this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_getKeyboardSelectedRow__() - 1);
 }
 
 m_setKeyboardSelectedRow__int_$pp_org_gwtproject_user_cellview_client(/** number */ row) {
  this.f_display__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_.m_setKeyboardSelectedRow__int__boolean(row, true);
 }
 
 static $clinit() {
  DefaultKeyboardSelectionHandler.$clinit = () =>{};
  DefaultKeyboardSelectionHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultKeyboardSelectionHandler;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
  KeyboardPagingPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy$impl');
 }
 
}
$Util.$setClassMetadata(DefaultKeyboardSelectionHandler, 'org.gwtproject.user.cellview.client.AbstractHasData$DefaultKeyboardSelectionHandler');

Handler.$markImplementor(DefaultKeyboardSelectionHandler);

/**@const {number}*/
DefaultKeyboardSelectionHandler.f_PAGE_INCREMENT__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler_ = 30;

exports = DefaultKeyboardSelectionHandler; 
//# sourceMappingURL=AbstractHasData$DefaultKeyboardSelectionHandler.js.map