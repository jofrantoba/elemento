goog.module('org.gwtproject.user.client.ui.RootPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbsolutePanel = goog.require('org.gwtproject.user.client.ui.AbsolutePanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let CloseHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler$impl');
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.client.BidiUtils$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let AttachDetachException = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException$impl');
let Command = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');
let DefaultRootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel.DefaultRootPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class RootPanel extends AbsolutePanel {
 /** @protected */
 constructor() {
  super();
 }
 
 static m_detachNow__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  RootPanel.$clinit();
  $Asserts.$assertWithMessage(RootPanel.f_widgetsToDetach__org_gwtproject_user_client_ui_RootPanel_.contains(widget), "detachNow() called on a widget " + "not currently in the detach list");
  try {
   widget.m_onDetach__();
  } finally {
   RootPanel.f_widgetsToDetach__org_gwtproject_user_client_ui_RootPanel_.remove(widget);
  }
 }
 
 static m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  RootPanel.$clinit();
  $Asserts.$assertWithMessage(!RootPanel.f_widgetsToDetach__org_gwtproject_user_client_ui_RootPanel_.contains(widget), "detachOnUnload() called twice " + "for the same widget");
  $Asserts.$assertWithMessage(!RootPanel.m_isElementChildOfWidget__org_gwtproject_dom_client_Element(widget.m_getElement__()), "A widget that has " + "an existing parent widget may not be added to the detach list");
  RootPanel.f_widgetsToDetach__org_gwtproject_user_client_ui_RootPanel_.add(widget);
 }
 /** @return {RootPanel} */
 static m_get__() {
  RootPanel.$clinit();
  return RootPanel.m_get__java_lang_String(null);
 }
 /** @return {RootPanel} */
 static m_get__java_lang_String(/** ?string */ id) {
  RootPanel.$clinit();
  let rp = /**@type {RootPanel}*/ ($Casts.$to(RootPanel.f_rootPanels__org_gwtproject_user_client_ui_RootPanel_.get(id), RootPanel));
  let elem = null;
  if (!$Equality.$same(id, null)) {
   if ($Equality.$same(null, (elem = $Overlay.m_get__().getElementById(id)))) {
    return null;
   }
  }
  if (!$Equality.$same(rp, null)) {
   if ($Equality.$same(elem, null) || $Equality.$same(rp.m_getElement__(), elem)) {
    return rp;
   }
  }
  if (RootPanel.f_rootPanels__org_gwtproject_user_client_ui_RootPanel_.size() == 0) {
   RootPanel.m_hookWindowClosing__();
   if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
    BidiUtils.m_setDirectionOnElement__org_gwtproject_dom_client_Element__org_gwtproject_i18n_client_HasDirection_Direction(RootPanel.m_getRootElement__(), Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction);
   }
  }
  if ($Equality.$same(elem, null)) {
   rp = DefaultRootPanel.$create__();
  } else {
   rp = RootPanel.$create__org_gwtproject_dom_client_Element(elem);
  }
  RootPanel.f_rootPanels__org_gwtproject_user_client_ui_RootPanel_.put(id, rp);
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(rp);
  return rp;
 }
 /** @return {Object} */
 static m_getBodyElement__() {
  RootPanel.$clinit();
  return $Overlay.m_get__().body;
 }
 /** @return {boolean} */
 static m_isInDetachList__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  RootPanel.$clinit();
  return RootPanel.f_widgetsToDetach__org_gwtproject_user_client_ui_RootPanel_.contains(widget);
 }
 
 static m_detachWidgets__() {
  RootPanel.$clinit();
  try {
   AttachDetachException.m_tryCommand__java_lang_Iterable__org_gwtproject_user_client_ui_AttachDetachException_Command(RootPanel.f_widgetsToDetach__org_gwtproject_user_client_ui_RootPanel_, RootPanel.f_maybeDetachCommand__org_gwtproject_user_client_ui_RootPanel_);
  } finally {
   RootPanel.f_widgetsToDetach__org_gwtproject_user_client_ui_RootPanel_.clear();
   RootPanel.f_rootPanels__org_gwtproject_user_client_ui_RootPanel_.clear();
  }
 }
 /** @return {Object} */
 static m_getRootElement__() {
  return $Overlay.m_get__().documentElement;
 }
 
 static m_hookWindowClosing__() {
  Window.m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(CloseHandler.$adapt((/** CloseEvent<Window> */ closeEvent) =>{
   RootPanel.m_detachWidgets__();
  }));
 }
 /** @return {boolean} */
 static m_isElementChildOfWidget__org_gwtproject_dom_client_Element(/** Object */ element) {
  element = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(element);
  let body = $Overlay.m_get__().body;
  while ((!$Equality.$same(element, null)) && (!$Equality.$same(body, element))) {
   if (!$Equality.$same(Event.m_getEventListener__org_gwtproject_dom_client_Element(element), null)) {
    return true;
   }
   element = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(element)), Element_$Overlay));
  }
  return false;
 }
 /** @return {!RootPanel} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ elem) {
  let $instance = new RootPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_RootPanel__org_gwtproject_dom_client_Element(elem);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_RootPanel__org_gwtproject_dom_client_Element(/** Object */ elem) {
  this.$ctor__org_gwtproject_user_client_ui_AbsolutePanel__org_gwtproject_dom_client_Element(elem);
  this.m_onAttach__();
 }
 /** @deprecated */
 m_clear__boolean(/** boolean */ clearDom) {
  this.m_clear__();
  if (clearDom) {
   Node_$Overlay.m_removeAllChildren__$devirt__org_gwtproject_dom_client_Node(this.m_getElement__());
  }
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Widget>} */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 
 static $clinit() {
  RootPanel.$clinit = () =>{};
  RootPanel.$loadModules();
  AbsolutePanel.$clinit();
  RootPanel.f_maybeDetachCommand__org_gwtproject_user_client_ui_RootPanel_ = Command.$adapt((/** Widget */ w) =>{
   if (w.m_isAttached__()) {
    w.m_onDetach__();
   }
  });
  RootPanel.f_rootPanels__org_gwtproject_user_client_ui_RootPanel_ = /**@type {!HashMap<?string, RootPanel>}*/ (HashMap.$create__());
  RootPanel.f_widgetsToDetach__org_gwtproject_user_client_ui_RootPanel_ = /**@type {!HashSet<Widget>}*/ (HashSet.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RootPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  CloseHandler = goog.module.get('org.gwtproject.event.logical.shared.CloseHandler$impl');
  BidiUtils = goog.module.get('org.gwtproject.i18n.client.BidiUtils$impl');
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  AttachDetachException = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException$impl');
  Command = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');
  DefaultRootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel.DefaultRootPanel$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RootPanel, 'org.gwtproject.user.client.ui.RootPanel');

/**@type {Command}*/
RootPanel.f_maybeDetachCommand__org_gwtproject_user_client_ui_RootPanel_;
/**@type {Map<?string, RootPanel>}*/
RootPanel.f_rootPanels__org_gwtproject_user_client_ui_RootPanel_;
/**@type {Set<Widget>}*/
RootPanel.f_widgetsToDetach__org_gwtproject_user_client_ui_RootPanel_;

exports = RootPanel; 
//# sourceMappingURL=RootPanel.js.map