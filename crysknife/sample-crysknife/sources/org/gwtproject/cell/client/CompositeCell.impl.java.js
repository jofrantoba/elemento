goog.module('org.gwtproject.cell.client.CompositeCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let $1 = goog.forwardDeclare('org.gwtproject.cell.client.CompositeCell.$1$impl');
let HasCell = goog.forwardDeclare('org.gwtproject.cell.client.HasCell$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template C
 * @extends {AbstractCell<C>}
  */
class CompositeCell extends AbstractCell {
 /** @protected */
 constructor() {
  super();
  /**@type {Set<?string>}*/
  this.f_consumedEvents__org_gwtproject_cell_client_CompositeCell_;
  /**@type {boolean}*/
  this.f_dependsOnSelection__org_gwtproject_cell_client_CompositeCell_ = false;
  /**@type {boolean}*/
  this.f_handlesSelection__org_gwtproject_cell_client_CompositeCell_ = false;
  /**@type {List<HasCell<C, ?>>}*/
  this.f_hasCells__org_gwtproject_cell_client_CompositeCell_;
 }
 //Factory method corresponding to constructor 'CompositeCell()'.
 /** @template C @return {!CompositeCell<C>} */
 static $create__() {
  let $instance = new CompositeCell();
  $instance.$ctor__org_gwtproject_cell_client_CompositeCell__();
  return $instance;
 }
 //Initialization from constructor 'CompositeCell()'.
 
 $ctor__org_gwtproject_cell_client_CompositeCell__() {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
 }
 //Factory method corresponding to constructor 'CompositeCell(List)'.
 /** @template C @return {!CompositeCell<C>} */
 static $create__java_util_List(/** List<HasCell<C, ?>> */ hasCells) {
  CompositeCell.$clinit();
  let $instance = new CompositeCell();
  $instance.$ctor__org_gwtproject_cell_client_CompositeCell__java_util_List(hasCells);
  return $instance;
 }
 //Initialization from constructor 'CompositeCell(List)'.
 
 $ctor__org_gwtproject_cell_client_CompositeCell__java_util_List(/** List<HasCell<C, ?>> */ hasCells) {
  this.$ctor__org_gwtproject_cell_client_CompositeCell__();
  this.f_hasCells__org_gwtproject_cell_client_CompositeCell_ = /**@type {List<HasCell<C, ?>>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {!ArrayList<HasCell<C, ?>>}*/ (ArrayList.$create__java_util_Collection(hasCells))));
  let theConsumedEvents = null;
  for (let $iterator = hasCells.m_iterator__(); $iterator.m_hasNext__(); ) {
   let hasCell = /**@type {HasCell<C, *>}*/ ($Casts.$to($iterator.m_next__(), HasCell));
   let cell = hasCell.m_getCell__();
   let events = cell.m_getConsumedEvents__();
   if (!$Equality.$same(events, null)) {
    if ($Equality.$same(theConsumedEvents, null)) {
     theConsumedEvents = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
    }
    theConsumedEvents.addAll(events);
   }
   if (cell.m_dependsOnSelection__()) {
    this.f_dependsOnSelection__org_gwtproject_cell_client_CompositeCell_ = true;
   }
   if (cell.m_handlesSelection__()) {
    this.f_handlesSelection__org_gwtproject_cell_client_CompositeCell_ = true;
   }
  }
  if (!$Equality.$same(theConsumedEvents, null)) {
   this.f_consumedEvents__org_gwtproject_cell_client_CompositeCell_ = /**@type {Set<?string>}*/ (Collections.m_unmodifiableSet__java_util_Set(theConsumedEvents));
  }
 }
 /** @override @return {boolean} */
 m_dependsOnSelection__() {
  return this.f_dependsOnSelection__org_gwtproject_cell_client_CompositeCell_;
 }
 /** @override @return {Set<?string>} */
 m_getConsumedEvents__() {
  return this.f_consumedEvents__org_gwtproject_cell_client_CompositeCell_;
 }
 /** @override @return {boolean} */
 m_handlesSelection__() {
  return this.f_handlesSelection__org_gwtproject_cell_client_CompositeCell_;
 }
 /** @override @return {boolean} */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Object */ parent, /** C */ value) {
  let curChild = $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(this.m_getContainerElement__org_gwtproject_dom_client_Element(parent));
  for (let $iterator = this.f_hasCells__org_gwtproject_cell_client_CompositeCell_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let hasCell = /**@type {HasCell<C, *>}*/ ($Casts.$to($iterator.m_next__(), HasCell));
   if (this.m_isEditingImpl__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_cell_client_CompositeCell(context, curChild, value, hasCell)) {
    return true;
   }
   curChild = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(curChild);
  }
  return false;
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(/** Context */ context, /** Object */ parent, /** C */ value, /** Object */ event, /** ValueUpdater<C> */ valueUpdater) {
  let index = 0;
  let eventTarget = NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
   let target = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(eventTarget), $Overlay));
   let container = this.m_getContainerElement__org_gwtproject_dom_client_Element(parent);
   let wrapper = $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(container);
   while (!$Equality.$same(wrapper, null)) {
    if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(wrapper, target)) {
     this.m_onBrowserEventImpl__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_cell_client_CompositeCell(context, wrapper, value, event, valueUpdater, /**@type {HasCell<C, *>}*/ ($Casts.$to(this.f_hasCells__org_gwtproject_cell_client_CompositeCell_.getAtIndex(index), HasCell)));
    }
    index++;
    wrapper = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(wrapper);
   }
  }
 }
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** C */ value, /** SafeHtmlBuilder */ sb) {
  for (let $iterator = this.f_hasCells__org_gwtproject_cell_client_CompositeCell_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let hasCell = /**@type {HasCell<C, *>}*/ ($Casts.$to($iterator.m_next__(), HasCell));
   this.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder__org_gwtproject_cell_client_HasCell(context, value, sb, hasCell);
  }
 }
 /** @override @return {boolean} */
 m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Object */ parent, /** C */ value) {
  let curChild = $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(this.m_getContainerElement__org_gwtproject_dom_client_Element(parent));
  for (let $iterator = this.f_hasCells__org_gwtproject_cell_client_CompositeCell_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let hasCell = /**@type {HasCell<C, *>}*/ ($Casts.$to($iterator.m_next__(), HasCell));
   if (this.m_resetFocusImpl__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_cell_client_CompositeCell(context, curChild, value, hasCell)) {
    return true;
   }
   curChild = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(curChild);
  }
  return false;
 }
 /** @override */
 m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Object */ parent, /** C */ object) {
  let curChild = $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(this.m_getContainerElement__org_gwtproject_dom_client_Element(parent));
  for (let $iterator = this.f_hasCells__org_gwtproject_cell_client_CompositeCell_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let hasCell = /**@type {HasCell<C, *>}*/ ($Casts.$to($iterator.m_next__(), HasCell));
   this.m_setValueImpl__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_cell_client_CompositeCell(context, curChild, object, hasCell);
   curChild = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(curChild);
  }
 }
 /** @return {List<HasCell<C, ?>>} */
 m_getHasCells__() {
  return this.f_hasCells__org_gwtproject_cell_client_CompositeCell_;
 }
 /** @return {Object} */
 m_getContainerElement__org_gwtproject_dom_client_Element(/** Object */ parent) {
  return parent;
 }
 /** @template X */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder__org_gwtproject_cell_client_HasCell(/** Context */ context, /** C */ value, /** SafeHtmlBuilder */ sb, /** HasCell<C, X> */ hasCell) {
  let cell = hasCell.m_getCell__();
  sb.m_appendHtmlConstant__java_lang_String("<span>");
  cell.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, hasCell.m_getValue__java_lang_Object(value), sb);
  sb.m_appendHtmlConstant__java_lang_String("</span>");
 }
 /** @template X @return {boolean} */
 m_isEditingImpl__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_cell_client_CompositeCell(/** Context */ context, /** Object */ cellParent, /** C */ object, /** HasCell<C, X> */ hasCell) {
  return hasCell.m_getCell__().m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, cellParent, hasCell.m_getValue__java_lang_Object(object));
 }
 /** @template X */
 m_onBrowserEventImpl__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_cell_client_CompositeCell(/** Context */ context, /** Object */ parent, /** C */ object, /** Object */ event, /** ValueUpdater<C> */ valueUpdater, /** HasCell<C, X> */ hasCell) {
  let cell = hasCell.m_getCell__();
  let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let cellConsumedEvents = cell.m_getConsumedEvents__();
  if ($Equality.$same(cellConsumedEvents, null) || !cellConsumedEvents.contains(eventType)) {
   return;
  }
  let tempUpdater = null;
  let fieldUpdater = hasCell.m_getFieldUpdater__();
  if (!$Equality.$same(fieldUpdater, null)) {
   tempUpdater = /**@type {!$1<X, C>}*/ ($1.$create__org_gwtproject_cell_client_CompositeCell__org_gwtproject_cell_client_FieldUpdater__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(this, fieldUpdater, context, object, valueUpdater));
  }
  cell.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, hasCell.m_getValue__java_lang_Object(object), event, tempUpdater);
 }
 /** @template X @return {boolean} */
 m_resetFocusImpl__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_cell_client_CompositeCell(/** Context */ context, /** Object */ cellParent, /** C */ value, /** HasCell<C, X> */ hasCell) {
  let cellValue = hasCell.m_getValue__java_lang_Object(value);
  return hasCell.m_getCell__().m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, cellParent, cellValue);
 }
 /** @template X */
 m_setValueImpl__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_cell_client_CompositeCell(/** Context */ context, /** Object */ cellParent, /** C */ object, /** HasCell<C, X> */ hasCell) {
  hasCell.m_getCell__().m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, cellParent, hasCell.m_getValue__java_lang_Object(object));
 }
 
 static $clinit() {
  CompositeCell.$clinit = () =>{};
  CompositeCell.$loadModules();
  AbstractCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CompositeCell;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.cell.client.CompositeCell.$1$impl');
  HasCell = goog.module.get('org.gwtproject.cell.client.HasCell$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CompositeCell, 'org.gwtproject.cell.client.CompositeCell');

exports = CompositeCell; 
//# sourceMappingURL=CompositeCell.js.map