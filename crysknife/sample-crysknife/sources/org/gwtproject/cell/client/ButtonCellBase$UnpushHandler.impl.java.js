goog.module('org.gwtproject.cell.client.ButtonCellBase.UnpushHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativePreviewHandler = goog.require('org.gwtproject.user.client.Event.NativePreviewHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ButtonCellBase = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');

/**
 * @template C
 * @implements {NativePreviewHandler}
  */
class UnpushHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ButtonCellBase<C>}*/
  this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler;
  /**@type {Object}*/
  this.f_parent__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler_;
  /**@type {HandlerRegistration}*/
  this.f_reg__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler_;
 }
 /** @template C @return {!UnpushHandler<C>} */
 static $create__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_dom_client_Element(/** ButtonCellBase<C> */ $outer_this, /** Object */ parent) {
  UnpushHandler.$clinit();
  let $instance = new UnpushHandler();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_dom_client_Element($outer_this, parent);
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_dom_client_Element(/** ButtonCellBase<C> */ $outer_this, /** Object */ parent) {
  this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_parent__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler_ = parent;
  this.f_reg__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler_ = Event.m_addNativePreviewHandler__org_gwtproject_user_client_Event_NativePreviewHandler(this);
 }
 /** @override */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(/** NativePreviewEvent */ event) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_MOUSEUP__org_gwtproject_dom_client_BrowserEvents, $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__()))) {
   this.f_reg__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler_.m_removeHandler__();
   this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler.f_appearance__org_gwtproject_cell_client_ButtonCellBase_.m_onUnpush__org_gwtproject_dom_client_Element(this.f_parent__org_gwtproject_cell_client_ButtonCellBase_UnpushHandler_);
  }
 }
 
 static $clinit() {
  UnpushHandler.$clinit = () =>{};
  UnpushHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnpushHandler;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
 }
 
}
$Util.$setClassMetadata(UnpushHandler, 'org.gwtproject.cell.client.ButtonCellBase$UnpushHandler');

NativePreviewHandler.$markImplementor(UnpushHandler);

exports = UnpushHandler; 
//# sourceMappingURL=ButtonCellBase$UnpushHandler.js.map