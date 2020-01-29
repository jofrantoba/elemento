goog.module('org.gwtproject.cell.client.AbstractInputCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEditableCell = goog.require('org.gwtproject.cell.client.AbstractEditableCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @template C, V
 * @extends {AbstractEditableCell<C, V>}
  */
class AbstractInputCell extends AbstractEditableCell {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {*} */
  this.f_focusedKey__org_gwtproject_cell_client_AbstractInputCell_;
 }
 /**
  * @param {Set<?string>} userEvents
  * @return {Set<?string>}
  * @public
  */
 static m_getConsumedEventsImpl__java_util_Set(userEvents) {
  let events = /**@type {!HashSet<?string>} */ (HashSet.$create__());
  events.add(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents);
  events.add(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents);
  events.add(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents);
  if (!$Equality.$same(userEvents, null) && userEvents.size() > 0) {
   events.addAll(userEvents);
  }
  return events;
 }
 /**
  * @param {Array<?string>} consumedEvents
  * @return {Set<?string>}
  * @public
  */
 static m_getConsumedEventsImpl__arrayOf_java_lang_String(consumedEvents) {
  let userEvents = /**@type {!HashSet<?string>} */ (HashSet.$create__());
  if (!$Equality.$same(consumedEvents, null)) {
   for (let $array = consumedEvents, $index = 0; $index < $array.length; $index++) {
    let event = $array[$index];
    userEvents.add(event);
   }
  }
  return AbstractInputCell.m_getConsumedEventsImpl__java_util_Set(userEvents);
 }
 /**
  * Initialization from constructor 'AbstractInputCell(String...)'.
  * @param {Array<?string>} consumedEvents
  * @public
  */
 $ctor__org_gwtproject_cell_client_AbstractInputCell__arrayOf_java_lang_String(consumedEvents) {
  this.$ctor__org_gwtproject_cell_client_AbstractEditableCell__java_util_Set(AbstractInputCell.m_getConsumedEventsImpl__arrayOf_java_lang_String(consumedEvents));
 }
 /**
  * Initialization from constructor 'AbstractInputCell(Set)'.
  * @param {Set<?string>} consumedEvents
  * @public
  */
 $ctor__org_gwtproject_cell_client_AbstractInputCell__java_util_Set(consumedEvents) {
  this.$ctor__org_gwtproject_cell_client_AbstractEditableCell__java_util_Set(AbstractInputCell.m_getConsumedEventsImpl__java_util_Set(consumedEvents));
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
  return !$Equality.$same(this.f_focusedKey__org_gwtproject_cell_client_AbstractInputCell_, null) && $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_focusedKey__org_gwtproject_cell_client_AbstractInputCell_, context.m_getKey__());
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
  super.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
  let target = /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event)), Element_$Overlay));
  if (!Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_getInputElement__org_gwtproject_dom_client_Element(parent), target)) {
   return;
  }
  let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.f_focusedKey__org_gwtproject_cell_client_AbstractInputCell_ = context.m_getKey__();
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.f_focusedKey__org_gwtproject_cell_client_AbstractInputCell_ = null;
  }
 }
 /**
  * @override
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @return {boolean}
  * @public
  */
 m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value) {
  if (this.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value)) {
   this.m_getInputElement__org_gwtproject_dom_client_Element(parent).focus();
   return true;
  }
  return false;
 }
 /**
  * @param {Object} parent
  * @param {C} value
  * @param {*} key
  * @param {ValueUpdater<C>} valueUpdater
  * @public
  */
 m_finishEditing__org_gwtproject_dom_client_Element__java_lang_Object__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(parent, value, key, valueUpdater) {
  this.f_focusedKey__org_gwtproject_cell_client_AbstractInputCell_ = null;
  this.m_getInputElement__org_gwtproject_dom_client_Element(parent).blur();
 }
 /**
  * @param {Object} parent
  * @return {Object}
  * @public
  */
 m_getInputElement__org_gwtproject_dom_client_Element(parent) {
  return Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent);
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
 m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {
  let input = this.m_getInputElement__org_gwtproject_dom_client_Element(parent);
  let target = /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event)), Element_$Overlay));
  let key = context.m_getKey__();
  if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_getInputElement__org_gwtproject_dom_client_Element(parent), target)) {
   this.m_finishEditing__org_gwtproject_dom_client_Element__java_lang_Object__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(parent, value, key, valueUpdater);
  } else {
   this.f_focusedKey__org_gwtproject_cell_client_AbstractInputCell_ = key;
   input.focus();
  }
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractInputCell.$clinit = () =>{};
  AbstractInputCell.$loadModules();
  AbstractEditableCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractInputCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(AbstractInputCell, 'org.gwtproject.cell.client.AbstractInputCell');

exports = AbstractInputCell; 
//# sourceMappingURL=AbstractInputCell.js.map