goog.module('org.gwtproject.cell.client.AbstractCell$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Cell = goog.require('org.gwtproject.cell.client.Cell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');

/**
 * @abstract
 * @template C
 * @implements {Cell<C>}
  */
class AbstractCell extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Set<?string>} */
  this.f_consumedEvents__org_gwtproject_cell_client_AbstractCell_;
 }
 /**
  * Initialization from constructor 'AbstractCell()'.
  * @public
  */
 $ctor__org_gwtproject_cell_client_AbstractCell__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * Initialization from constructor 'AbstractCell(String...)'.
  * @param {Array<?string>} consumedEvents
  * @public
  */
 $ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(consumedEvents) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__();
  let events = null;
  if (!$Equality.$same(consumedEvents, null) && consumedEvents.length > 0) {
   events = /**@type {!HashSet<?string>} */ (HashSet.$create__());
   for (let $array = consumedEvents, $index = 0; $index < $array.length; $index++) {
    let event = $array[$index];
    events.add(event);
   }
  }
  this.m_init__java_util_Set_$p_org_gwtproject_cell_client_AbstractCell(events);
 }
 /**
  * Initialization from constructor 'AbstractCell(Set)'.
  * @param {Set<?string>} consumedEvents
  * @public
  */
 $ctor__org_gwtproject_cell_client_AbstractCell__java_util_Set(consumedEvents) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__();
  this.m_init__java_util_Set_$p_org_gwtproject_cell_client_AbstractCell(consumedEvents);
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_dependsOnSelection__() {
  return false;
 }
 /**
  * @override
  * @return {Set<?string>}
  * @public
  */
 m_getConsumedEvents__() {
  return this.f_consumedEvents__org_gwtproject_cell_client_AbstractCell_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_handlesSelection__() {
  return false;
 }
 /**
  * @override
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @return {boolean}
  * @public
  */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value) {
  return false;
 }
 /**
  * @override
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @param {Object} event
  * @param {ValueUpdater<C>} valueUpdater
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {
  let eventType = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, eventType) && $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event) == KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes) {
   this.m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
  }
 }
 /**
  * @abstract
  * @override
  * @param {Context} context
  * @param {C} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {}
 /**
  * @override
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @return {boolean}
  * @public
  */
 m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value) {
  return false;
 }
 /**
  * @override
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @public
  */
 m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value) {
  let sb = SafeHtmlBuilder.$create__();
  this.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb);
  Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(parent, sb.m_toSafeHtml__());
 }
 /**
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @param {Object} event
  * @param {ValueUpdater<C>} valueUpdater
  * @public
  */
 m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {}
 /**
  * @param {Set<?string>} consumedEvents
  * @public
  */
 m_init__java_util_Set_$p_org_gwtproject_cell_client_AbstractCell(consumedEvents) {
  if (!$Equality.$same(consumedEvents, null)) {
   this.f_consumedEvents__org_gwtproject_cell_client_AbstractCell_ = /**@type {Set<?string>} */ (Collections.m_unmodifiableSet__java_util_Set(consumedEvents));
  }
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractCell.$clinit = () =>{};
  AbstractCell.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
 }
 
}
$Util.$setClassMetadata(AbstractCell, 'org.gwtproject.cell.client.AbstractCell');

Cell.$markImplementor(AbstractCell);

exports = AbstractCell; 
//# sourceMappingURL=AbstractCell.js.map