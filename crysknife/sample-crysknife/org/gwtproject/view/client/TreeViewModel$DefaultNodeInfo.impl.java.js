goog.module('org.gwtproject.view.client.TreeViewModel.DefaultNodeInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NodeInfo = goog.require('org.gwtproject.view.client.TreeViewModel.NodeInfo$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let AbstractDataProvider = goog.forwardDeclare('org.gwtproject.view.client.AbstractDataProvider$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');
let DefaultSelectionEventManager = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');

/**
 * @template T
 * @implements {NodeInfo<T>}
  */
class DefaultNodeInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Cell<T>} */
  this.f_cell__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
  /** @public {AbstractDataProvider<T>} */
  this.f_dataProvider__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
  /** @public {Handler<T>} */
  this.f_selectionEventManager__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
  /** @public {HandlerRegistration} */
  this.f_selectionEventManagerReg__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
  /** @public {SelectionModel<?>} */
  this.f_selectionModel__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
  /** @public {ValueUpdater<T>} */
  this.f_valueUpdater__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
  /** @public {HasData<T>} */
  this.f_display__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
 }
 /**
  * Factory method corresponding to constructor 'DefaultNodeInfo(AbstractDataProvider, Cell)'.
  * @template T
  * @param {AbstractDataProvider<T>} dataProvider
  * @param {Cell<T>} cell
  * @return {!DefaultNodeInfo<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell(dataProvider, cell) {
  DefaultNodeInfo.$clinit();
  let $instance = new DefaultNodeInfo();
  $instance.$ctor__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell(dataProvider, cell);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultNodeInfo(AbstractDataProvider, Cell)'.
  * @param {AbstractDataProvider<T>} dataProvider
  * @param {Cell<T>} cell
  * @public
  */
 $ctor__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell(dataProvider, cell) {
  this.$ctor__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_SelectionModel__org_gwtproject_cell_client_ValueUpdater(dataProvider, cell, null, null);
 }
 /**
  * Factory method corresponding to constructor 'DefaultNodeInfo(AbstractDataProvider, Cell, SelectionModel, ValueUpdater)'.
  * @template T
  * @param {AbstractDataProvider<T>} dataProvider
  * @param {Cell<T>} cell
  * @param {SelectionModel<?>} selectionModel
  * @param {ValueUpdater<T>} valueUpdater
  * @return {!DefaultNodeInfo<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_SelectionModel__org_gwtproject_cell_client_ValueUpdater(dataProvider, cell, selectionModel, valueUpdater) {
  DefaultNodeInfo.$clinit();
  let $instance = new DefaultNodeInfo();
  $instance.$ctor__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_SelectionModel__org_gwtproject_cell_client_ValueUpdater(dataProvider, cell, selectionModel, valueUpdater);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultNodeInfo(AbstractDataProvider, Cell, SelectionModel, ValueUpdater)'.
  * @param {AbstractDataProvider<T>} dataProvider
  * @param {Cell<T>} cell
  * @param {SelectionModel<?>} selectionModel
  * @param {ValueUpdater<T>} valueUpdater
  * @public
  */
 $ctor__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_SelectionModel__org_gwtproject_cell_client_ValueUpdater(dataProvider, cell, selectionModel, valueUpdater) {
  this.$ctor__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_SelectionModel__org_gwtproject_view_client_CellPreviewEvent_Handler__org_gwtproject_cell_client_ValueUpdater(dataProvider, cell, selectionModel, /**@type {DefaultSelectionEventManager<T>} */ (DefaultSelectionEventManager.m_createDefaultManager__()), valueUpdater);
 }
 /**
  * Factory method corresponding to constructor 'DefaultNodeInfo(AbstractDataProvider, Cell, SelectionModel, Handler, ValueUpdater)'.
  * @template T
  * @param {AbstractDataProvider<T>} dataProvider
  * @param {Cell<T>} cell
  * @param {SelectionModel<?>} selectionModel
  * @param {Handler<T>} selectionEventManager
  * @param {ValueUpdater<T>} valueUpdater
  * @return {!DefaultNodeInfo<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_SelectionModel__org_gwtproject_view_client_CellPreviewEvent_Handler__org_gwtproject_cell_client_ValueUpdater(dataProvider, cell, selectionModel, selectionEventManager, valueUpdater) {
  DefaultNodeInfo.$clinit();
  let $instance = new DefaultNodeInfo();
  $instance.$ctor__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_SelectionModel__org_gwtproject_view_client_CellPreviewEvent_Handler__org_gwtproject_cell_client_ValueUpdater(dataProvider, cell, selectionModel, selectionEventManager, valueUpdater);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultNodeInfo(AbstractDataProvider, Cell, SelectionModel, Handler, ValueUpdater)'.
  * @param {AbstractDataProvider<T>} dataProvider
  * @param {Cell<T>} cell
  * @param {SelectionModel<?>} selectionModel
  * @param {Handler<T>} selectionEventManager
  * @param {ValueUpdater<T>} valueUpdater
  * @public
  */
 $ctor__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_SelectionModel__org_gwtproject_view_client_CellPreviewEvent_Handler__org_gwtproject_cell_client_ValueUpdater(dataProvider, cell, selectionModel, selectionEventManager, valueUpdater) {
  this.$ctor__java_lang_Object__();
  this.f_dataProvider__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_ = dataProvider;
  this.f_cell__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_ = cell;
  this.f_selectionModel__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_ = selectionModel;
  this.f_valueUpdater__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_ = valueUpdater;
  this.f_selectionEventManager__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_ = selectionEventManager;
 }
 /**
  * @override
  * @return {Cell<T>}
  * @public
  */
 m_getCell__() {
  return this.f_cell__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
 }
 /**
  * @override
  * @return {ProvidesKey<T>}
  * @public
  */
 m_getProvidesKey__() {
  return this.f_dataProvider__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
 }
 /**
  * @override
  * @return {SelectionModel<?>}
  * @public
  */
 m_getSelectionModel__() {
  return this.f_selectionModel__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
 }
 /**
  * @override
  * @return {ValueUpdater<T>}
  * @public
  */
 m_getValueUpdater__() {
  return this.f_valueUpdater__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_;
 }
 /**
  * @override
  * @param {HasData<T>} display
  * @public
  */
 m_setDataDisplay__org_gwtproject_view_client_HasData(display) {
  this.f_display__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_ = display;
  if (!$Equality.$same(this.f_selectionEventManager__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_, null)) {
   this.f_selectionEventManagerReg__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_ = display.m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(this.f_selectionEventManager__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_);
  }
  this.f_dataProvider__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_.m_addDataDisplay__org_gwtproject_view_client_HasData(display);
 }
 /**
  * @override
  * @public
  */
 m_unsetDataDisplay__() {
  if (!$Equality.$same(this.f_display__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_, null)) {
   this.f_dataProvider__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_.m_removeDataDisplay__org_gwtproject_view_client_HasData(this.f_display__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_);
   if (!$Equality.$same(this.f_selectionEventManagerReg__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_, null)) {
    this.f_selectionEventManagerReg__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_.m_removeHandler__();
    this.f_selectionEventManagerReg__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_ = null;
   }
   this.f_display__org_gwtproject_view_client_TreeViewModel_DefaultNodeInfo_ = null;
  }
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultNodeInfo.$clinit = () =>{};
  DefaultNodeInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultNodeInfo;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultSelectionEventManager = goog.module.get('org.gwtproject.view.client.DefaultSelectionEventManager$impl');
 }
 
}
$Util.$setClassMetadata(DefaultNodeInfo, 'org.gwtproject.view.client.TreeViewModel$DefaultNodeInfo');

NodeInfo.$markImplementor(DefaultNodeInfo);

exports = DefaultNodeInfo; 
//# sourceMappingURL=TreeViewModel$DefaultNodeInfo.js.map