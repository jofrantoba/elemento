goog.module('org.gwtproject.user.cellview.client.CellWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const HasValue = goog.require('org.gwtproject.user.client.ui.HasValue$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');
const HasKeyProvider = goog.require('org.gwtproject.view.client.HasKeyProvider$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let CommonResources = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellWidget.$1$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template C
 * @implements {HasKeyProvider<C>}
 * @implements {HasValue<C>}
 * @implements {IsEditor<LeafValueEditor<C>>}
  */
class CellWidget extends Widget {
 /** @protected */
 constructor() {
  super();
  /**@type {Cell<C>}*/
  this.f_cell__org_gwtproject_user_cellview_client_CellWidget_;
  /**@type {LeafValueEditor<C>}*/
  this.f_editor__org_gwtproject_user_cellview_client_CellWidget_;
  /**@type {ProvidesKey<C>}*/
  this.f_keyProvider__org_gwtproject_user_cellview_client_CellWidget_;
  /**@type {C}*/
  this.f_value__org_gwtproject_user_cellview_client_CellWidget_;
  /**@type {ValueUpdater<C>}*/
  this.f_valueUpdater__org_gwtproject_user_cellview_client_CellWidget_;
 }
 /** @return {Object} */
 static m_createDefaultWrapperElement__() {
  let div = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(div, CommonResources.m_getInlineBlockStyle__());
  return div;
 }
 //Factory method corresponding to constructor 'CellWidget(Cell)'.
 /** @template C @return {!CellWidget<C>} */
 static $create__org_gwtproject_cell_client_Cell(/** Cell<C> */ cell) {
  CellWidget.$clinit();
  let $instance = new CellWidget();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell(cell);
  return $instance;
 }
 //Initialization from constructor 'CellWidget(Cell)'.
 
 $ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell(/** Cell<C> */ cell) {
  this.$ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey(cell, null, null);
 }
 //Factory method corresponding to constructor 'CellWidget(Cell, ProvidesKey)'.
 /** @template C @return {!CellWidget<C>} */
 static $create__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_ProvidesKey(/** Cell<C> */ cell, /** ProvidesKey<C> */ keyProvider) {
  CellWidget.$clinit();
  let $instance = new CellWidget();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_ProvidesKey(cell, keyProvider);
  return $instance;
 }
 //Initialization from constructor 'CellWidget(Cell, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_ProvidesKey(/** Cell<C> */ cell, /** ProvidesKey<C> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey(cell, null, keyProvider);
 }
 //Factory method corresponding to constructor 'CellWidget(Cell, Object)'.
 /** @template C @return {!CellWidget<C>} */
 static $create__org_gwtproject_cell_client_Cell__java_lang_Object(/** Cell<C> */ cell, /** C */ initialValue) {
  CellWidget.$clinit();
  let $instance = new CellWidget();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object(cell, initialValue);
  return $instance;
 }
 //Initialization from constructor 'CellWidget(Cell, Object)'.
 
 $ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object(/** Cell<C> */ cell, /** C */ initialValue) {
  this.$ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey(cell, initialValue, null);
 }
 //Factory method corresponding to constructor 'CellWidget(Cell, Object, ProvidesKey)'.
 /** @template C @return {!CellWidget<C>} */
 static $create__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey(/** Cell<C> */ cell, /** C */ initialValue, /** ProvidesKey<C> */ keyProvider) {
  CellWidget.$clinit();
  let $instance = new CellWidget();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey(cell, initialValue, keyProvider);
  return $instance;
 }
 //Initialization from constructor 'CellWidget(Cell, Object, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey(/** Cell<C> */ cell, /** C */ initialValue, /** ProvidesKey<C> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey__org_gwtproject_dom_client_Element(cell, initialValue, keyProvider, CellWidget.m_createDefaultWrapperElement__());
 }
 //Factory method corresponding to constructor 'CellWidget(Cell, Object, ProvidesKey, Element)'.
 /** @template C @return {!CellWidget<C>} */
 static $create__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey__org_gwtproject_dom_client_Element(/** Cell<C> */ cell, /** C */ initialValue, /** ProvidesKey<C> */ keyProvider, /** Object */ elem) {
  CellWidget.$clinit();
  let $instance = new CellWidget();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey__org_gwtproject_dom_client_Element(cell, initialValue, keyProvider, elem);
  return $instance;
 }
 //Initialization from constructor 'CellWidget(Cell, Object, ProvidesKey, Element)'.
 
 $ctor__org_gwtproject_user_cellview_client_CellWidget__org_gwtproject_cell_client_Cell__java_lang_Object__org_gwtproject_view_client_ProvidesKey__org_gwtproject_dom_client_Element(/** Cell<C> */ cell, /** C */ initialValue, /** ProvidesKey<C> */ keyProvider, /** Object */ elem) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.$init___$p_org_gwtproject_user_cellview_client_CellWidget();
  this.f_cell__org_gwtproject_user_cellview_client_CellWidget_ = cell;
  this.f_keyProvider__org_gwtproject_user_cellview_client_CellWidget_ = keyProvider;
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
  CellBasedWidgetImpl.m_get__().m_sinkEvents__org_gwtproject_user_client_ui_Widget__java_util_Set(this, cell.m_getConsumedEvents__());
  this.f_value__org_gwtproject_user_cellview_client_CellWidget_ = initialValue;
  this.m_redraw__();
 }
 /** @override @return {HandlerRegistration} */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(/** ValueChangeHandler<C> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /** @override @return {LeafValueEditor<C>} */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_cellview_client_CellWidget_, null)) {
   this.f_editor__org_gwtproject_user_cellview_client_CellWidget_ = /**@type {TakesValueEditor<C>}*/ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_cellview_client_CellWidget_;
 }
 /** @return {Cell<C>} */
 m_getCell__() {
  return this.f_cell__org_gwtproject_user_cellview_client_CellWidget_;
 }
 /** @override @return {ProvidesKey<C>} */
 m_getKeyProvider__() {
  return this.f_keyProvider__org_gwtproject_user_cellview_client_CellWidget_;
 }
 /** @override @return {C} */
 m_getValue__() {
  return this.f_value__org_gwtproject_user_cellview_client_CellWidget_;
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  CellBasedWidgetImpl.m_get__().m_onBrowserEvent__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_Event(this, event);
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
  let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let consumedEvents = this.f_cell__org_gwtproject_user_cellview_client_CellWidget_.m_getConsumedEvents__();
  if (!$Equality.$same(consumedEvents, null) && consumedEvents.contains(eventType)) {
   this.f_cell__org_gwtproject_user_cellview_client_CellWidget_.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(this.m_createContext___$p_org_gwtproject_user_cellview_client_CellWidget(), this.m_getElement__(), this.f_value__org_gwtproject_user_cellview_client_CellWidget_, event, this.f_valueUpdater__org_gwtproject_user_cellview_client_CellWidget_);
  }
 }
 
 m_redraw__() {
  let sb = SafeHtmlBuilder.$create__();
  this.f_cell__org_gwtproject_user_cellview_client_CellWidget_.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(this.m_createContext___$p_org_gwtproject_user_cellview_client_CellWidget(), this.f_value__org_gwtproject_user_cellview_client_CellWidget_, sb);
  Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this.m_getElement__(), sb.m_toSafeHtml__());
  let child = Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
  if (!$Equality.$same(child, null) && $Equality.$same(Element_$Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(child), null)) {
   Style_$Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(child.style, 100, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
   Style_$Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(child.style, 100, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
  }
 }
 /** @override */
 m_setValue__java_lang_Object(/** C */ value) {
  this.m_setValue__java_lang_Object__boolean__boolean(value, false, true);
 }
 /** @override */
 m_setValue__java_lang_Object__boolean(/** C */ value, /** boolean */ fireEvents) {
  this.m_setValue__java_lang_Object__boolean__boolean(value, fireEvents, true);
 }
 
 m_setValue__java_lang_Object__boolean__boolean(/** C */ value, /** boolean */ fireEvents, /** boolean */ redraw) {
  let oldValue = this.m_getValue__();
  if (!$Equality.$same(value, oldValue) && ($Equality.$same(oldValue, null) || !$Objects.m_equals__java_lang_Object__java_lang_Object(oldValue, value))) {
   this.f_value__org_gwtproject_user_cellview_client_CellWidget_ = value;
   if (redraw) {
    this.m_redraw__();
   }
   if (fireEvents) {
    ValueChangeEvent.m_fire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object(this, value);
   }
  }
 }
 /** @return {Context} */
 m_createContext___$p_org_gwtproject_user_cellview_client_CellWidget() {
  return Context.$create__int__int__java_lang_Object(0, 0, this.m_getKey__java_lang_Object_$p_org_gwtproject_user_cellview_client_CellWidget(this.f_value__org_gwtproject_user_cellview_client_CellWidget_));
 }
 /** @return {*} */
 m_getKey__java_lang_Object_$p_org_gwtproject_user_cellview_client_CellWidget(/** C */ value) {
  return ($Equality.$same(this.f_keyProvider__org_gwtproject_user_cellview_client_CellWidget_, null) || $Equality.$same(value, null)) ? value : this.f_keyProvider__org_gwtproject_user_cellview_client_CellWidget_.m_getKey__java_lang_Object(value);
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_CellWidget() {
  this.f_valueUpdater__org_gwtproject_user_cellview_client_CellWidget_ = /**@type {!$1<C>}*/ ($1.$create__org_gwtproject_user_cellview_client_CellWidget(this));
 }
 
 static $clinit() {
  CellWidget.$clinit = () =>{};
  CellWidget.$loadModules();
  Widget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellWidget;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  CommonResources = goog.module.get('org.gwtproject.resources.client.CommonResources$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.CellWidget.$1$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(CellWidget, 'org.gwtproject.user.cellview.client.CellWidget');

HasKeyProvider.$markImplementor(CellWidget);
HasValue.$markImplementor(CellWidget);
IsEditor.$markImplementor(CellWidget);

exports = CellWidget; 
//# sourceMappingURL=CellWidget.js.map