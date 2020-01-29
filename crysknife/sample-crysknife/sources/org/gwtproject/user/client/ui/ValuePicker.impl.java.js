goog.module('org.gwtproject.user.client.ui.ValuePicker$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const HasConstrainedValue = goog.require('org.gwtproject.user.client.ui.HasConstrainedValue$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let ToStringRenderer = goog.forwardDeclare('org.gwtproject.text.shared.ToStringRenderer$impl');
let CellList = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.ValuePicker.$1$impl');
let DefaultCell = goog.forwardDeclare('org.gwtproject.user.client.ui.ValuePicker.DefaultCell$impl');
let SingleSelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SingleSelectionModel$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @implements {HasConstrainedValue<T>}
 * @implements {IsEditor<LeafValueEditor<T>>}
  */
class ValuePicker extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {T} */
  this.f_value__org_gwtproject_user_client_ui_ValuePicker_;
  /** @public {CellList<T>} */
  this.f_cellList__org_gwtproject_user_client_ui_ValuePicker_;
  /** @public {SingleSelectionModel<T>} */
  this.f_smodel__org_gwtproject_user_client_ui_ValuePicker_;
  /** @public {LeafValueEditor<T>} */
  this.f_editor__org_gwtproject_user_client_ui_ValuePicker_;
 }
 /**
  * Factory method corresponding to constructor 'ValuePicker(CellList)'.
  * @template T
  * @param {CellList<T>} cellList
  * @return {!ValuePicker<T>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellList(cellList) {
  ValuePicker.$clinit();
  let $instance = new ValuePicker();
  $instance.$ctor__org_gwtproject_user_client_ui_ValuePicker__org_gwtproject_user_cellview_client_CellList(cellList);
  return $instance;
 }
 /**
  * Initialization from constructor 'ValuePicker(CellList)'.
  * @param {CellList<T>} cellList
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ValuePicker__org_gwtproject_user_cellview_client_CellList(cellList) {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_client_ui_ValuePicker();
  this.f_cellList__org_gwtproject_user_client_ui_ValuePicker_ = cellList;
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(cellList);
  cellList.m_setSelectionModel__org_gwtproject_view_client_SelectionModel(this.f_smodel__org_gwtproject_user_client_ui_ValuePicker_);
  this.f_smodel__org_gwtproject_user_client_ui_ValuePicker_.m_addSelectionChangeHandler__org_gwtproject_view_client_SelectionChangeEvent_Handler(/**@type {!$1<T>} */ ($1.$create__org_gwtproject_user_client_ui_ValuePicker(this)));
 }
 /**
  * Factory method corresponding to constructor 'ValuePicker(Renderer)'.
  * @template T
  * @param {Renderer<?>} renderer
  * @return {!ValuePicker<T>}
  * @public
  */
 static $create__org_gwtproject_text_shared_Renderer(renderer) {
  ValuePicker.$clinit();
  let $instance = new ValuePicker();
  $instance.$ctor__org_gwtproject_user_client_ui_ValuePicker__org_gwtproject_text_shared_Renderer(renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'ValuePicker(Renderer)'.
  * @param {Renderer<?>} renderer
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ValuePicker__org_gwtproject_text_shared_Renderer(renderer) {
  this.$ctor__org_gwtproject_user_client_ui_ValuePicker__org_gwtproject_user_cellview_client_CellList(/**@type {!CellList<T>} */ (CellList.$create__org_gwtproject_cell_client_Cell(/**@type {!DefaultCell<T>} */ (DefaultCell.$create__org_gwtproject_text_shared_Renderer(renderer)))));
 }
 /**
  * Factory method corresponding to constructor 'ValuePicker()'.
  * @template T
  * @return {!ValuePicker<T>}
  * @public
  */
 static $create__() {
  ValuePicker.$clinit();
  let $instance = new ValuePicker();
  $instance.$ctor__org_gwtproject_user_client_ui_ValuePicker__();
  return $instance;
 }
 /**
  * Initialization from constructor 'ValuePicker()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ValuePicker__() {
  this.$ctor__org_gwtproject_user_client_ui_ValuePicker__org_gwtproject_text_shared_Renderer(ToStringRenderer.m_instance__());
 }
 /**
  * @override
  * @param {ValueChangeHandler<T>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /**
  * @override
  * @return {LeafValueEditor<T>}
  * @public
  */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_ValuePicker_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_ValuePicker_ = /**@type {TakesValueEditor<T>} */ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_ValuePicker_;
 }
 /**
  * @override
  * @return {ValuePicker<T>}
  * @public
  */
 m_asWidget__() {
  return this;
 }
 /**
  * @return {number}
  * @public
  */
 m_getPageSize__() {
  return this.f_cellList__org_gwtproject_user_client_ui_ValuePicker_.m_getPageSize__();
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_user_client_ui_ValuePicker_;
 }
 /**
  * @override
  * @param {Collection<T>} values
  * @public
  */
 m_setAcceptableValues__java_util_Collection(values) {
  this.f_cellList__org_gwtproject_user_client_ui_ValuePicker_.m_setRowData__java_util_List(/**@type {!ArrayList<T>} */ (ArrayList.$create__java_util_Collection(values)));
 }
 /**
  * @param {number} size
  * @public
  */
 m_setPageSize__int(size) {
  this.f_cellList__org_gwtproject_user_client_ui_ValuePicker_.m_setPageSize__int(size);
 }
 /**
  * @override
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {
  this.m_setValue__java_lang_Object__boolean(value, false);
 }
 /**
  * @override
  * @param {T} value
  * @param {boolean} fireEvents
  * @public
  */
 m_setValue__java_lang_Object__boolean(value, fireEvents) {
  let current = this.m_getValue__();
  if ($Equality.$same(current, value) || (!$Equality.$same(current, null) && $Objects.m_equals__java_lang_Object__java_lang_Object(current, value))) {
   return;
  }
  this.f_value__org_gwtproject_user_client_ui_ValuePicker_ = value;
  this.f_smodel__org_gwtproject_user_client_ui_ValuePicker_.m_setSelected__java_lang_Object__boolean(value, true);
  if (fireEvents) {
   ValueChangeEvent.m_fire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object(this, value);
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_ValuePicker() {
  this.f_smodel__org_gwtproject_user_client_ui_ValuePicker_ = /**@type {!SingleSelectionModel<T>} */ (SingleSelectionModel.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  ValuePicker.$clinit = () =>{};
  ValuePicker.$loadModules();
  Composite.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ValuePicker;
 }
 /**
  * @public
  */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  ToStringRenderer = goog.module.get('org.gwtproject.text.shared.ToStringRenderer$impl');
  CellList = goog.module.get('org.gwtproject.user.cellview.client.CellList$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.ValuePicker.$1$impl');
  DefaultCell = goog.module.get('org.gwtproject.user.client.ui.ValuePicker.DefaultCell$impl');
  SingleSelectionModel = goog.module.get('org.gwtproject.view.client.SingleSelectionModel$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ValuePicker, 'org.gwtproject.user.client.ui.ValuePicker');

HasConstrainedValue.$markImplementor(ValuePicker);
IsEditor.$markImplementor(ValuePicker);

exports = ValuePicker; 
//# sourceMappingURL=ValuePicker.js.map