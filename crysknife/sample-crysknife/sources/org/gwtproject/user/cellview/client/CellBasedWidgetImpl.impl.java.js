goog.module('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let CellBasedWidgetImplStandard = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImplStandard$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
  */
class CellBasedWidgetImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Set<?string>} */
  this.f_focusableTypes__org_gwtproject_user_cellview_client_CellBasedWidgetImpl;
 }
 /**
  * @return {CellBasedWidgetImpl}
  * @public
  */
 static m_get__() {
  CellBasedWidgetImpl.$clinit();
  if ($Equality.$same(CellBasedWidgetImpl.f_impl__org_gwtproject_user_cellview_client_CellBasedWidgetImpl_, null)) {
   CellBasedWidgetImpl.f_impl__org_gwtproject_user_cellview_client_CellBasedWidgetImpl_ = CellBasedWidgetImplStandard.$create__();
  }
  return CellBasedWidgetImpl.f_impl__org_gwtproject_user_cellview_client_CellBasedWidgetImpl_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBasedWidgetImpl__() {
  this.$ctor__java_lang_Object__();
  this.f_focusableTypes__org_gwtproject_user_cellview_client_CellBasedWidgetImpl = /**@type {!HashSet<?string>} */ (HashSet.$create__());
  this.f_focusableTypes__org_gwtproject_user_cellview_client_CellBasedWidgetImpl.add("select");
  this.f_focusableTypes__org_gwtproject_user_cellview_client_CellBasedWidgetImpl.add("input");
  this.f_focusableTypes__org_gwtproject_user_cellview_client_CellBasedWidgetImpl.add("textarea");
  this.f_focusableTypes__org_gwtproject_user_cellview_client_CellBasedWidgetImpl.add("option");
  this.f_focusableTypes__org_gwtproject_user_cellview_client_CellBasedWidgetImpl.add("button");
  this.f_focusableTypes__org_gwtproject_user_cellview_client_CellBasedWidgetImpl.add("label");
 }
 /**
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 m_isFocusable__org_gwtproject_dom_client_Element(elem) {
  return this.f_focusableTypes__org_gwtproject_user_cellview_client_CellBasedWidgetImpl.contains(j_l_String.m_toLowerCase__java_lang_String__java_util_Locale($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), Locale.f_ROOT__java_util_Locale)) || $Overlay.m_getTabIndex__$devirt__org_gwtproject_dom_client_Element(elem) >= 0;
 }
 /**
  * @param {Widget} widget
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_Event(widget, event) {}
 /**
  * @param {SafeHtml} html
  * @return {SafeHtml}
  * @public
  */
 m_processHtml__org_gwtproject_safehtml_shared_SafeHtml(html) {
  return html;
 }
 /**
  * @param {ScheduledCommand} command
  * @public
  */
 m_resetFocus__org_gwtproject_core_client_Scheduler_ScheduledCommand(command) {
  command.m_execute__();
 }
 /**
  * @param {Widget} widget
  * @param {Set<?string>} typeNames
  * @public
  */
 m_sinkEvents__org_gwtproject_user_client_ui_Widget__java_util_Set(widget, typeNames) {
  if ($Equality.$same(typeNames, null)) {
   return;
  }
  let eventsToSink = 0;
  for (let $iterator = typeNames.m_iterator__(); $iterator.m_hasNext__(); ) {
   let typeName = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
   let typeInt = Event.m_getTypeInt__java_lang_String(typeName);
   if (typeInt < 0) {
    widget.m_sinkBitlessEvent__java_lang_String(typeName);
   } else {
    typeInt = this.m_sinkEvent__org_gwtproject_user_client_ui_Widget__java_lang_String(widget, typeName);
    if (typeInt > 0) {
     eventsToSink |= typeInt;
    }
   }
  }
  if (eventsToSink > 0) {
   widget.m_sinkEvents__int(eventsToSink);
  }
 }
 /**
  * @param {Widget} widget
  * @param {?string} typeName
  * @return {number}
  * @public
  */
 m_sinkEvent__org_gwtproject_user_client_ui_Widget__java_lang_String(widget, typeName) {
  return Event.m_getTypeInt__java_lang_String(typeName);
 }
 /**
  * @public
  */
 static $clinit() {
  CellBasedWidgetImpl.$clinit = () =>{};
  CellBasedWidgetImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellBasedWidgetImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  CellBasedWidgetImplStandard = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImplStandard$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CellBasedWidgetImpl, 'org.gwtproject.user.cellview.client.CellBasedWidgetImpl');

/** @public {CellBasedWidgetImpl} */
CellBasedWidgetImpl.f_impl__org_gwtproject_user_cellview_client_CellBasedWidgetImpl_;

exports = CellBasedWidgetImpl; 
//# sourceMappingURL=CellBasedWidgetImpl.js.map