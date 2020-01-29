goog.module('org.gwtproject.view.client.OrderedMultiSelectionModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MultiSelectionModel = goog.require('org.gwtproject.view.client.MultiSelectionModel$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let SelectionChange = goog.forwardDeclare('org.gwtproject.view.client.MultiSelectionModel.SelectionChange$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');

/**
 * @template T
 * @extends {MultiSelectionModel<T>}
  */
class OrderedMultiSelectionModel extends MultiSelectionModel {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'OrderedMultiSelectionModel()'.
  * @template T
  * @return {!OrderedMultiSelectionModel<T>}
  * @public
  */
 static $create__() {
  OrderedMultiSelectionModel.$clinit();
  let $instance = new OrderedMultiSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_OrderedMultiSelectionModel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'OrderedMultiSelectionModel()'.
  * @public
  */
 $ctor__org_gwtproject_view_client_OrderedMultiSelectionModel__() {
  this.$ctor__org_gwtproject_view_client_OrderedMultiSelectionModel__org_gwtproject_view_client_ProvidesKey(null);
 }
 /**
  * Factory method corresponding to constructor 'OrderedMultiSelectionModel(ProvidesKey)'.
  * @template T
  * @param {ProvidesKey<T>} keyProvider
  * @return {!OrderedMultiSelectionModel<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  OrderedMultiSelectionModel.$clinit();
  let $instance = new OrderedMultiSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_OrderedMultiSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  return $instance;
 }
 /**
  * Initialization from constructor 'OrderedMultiSelectionModel(ProvidesKey)'.
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_view_client_OrderedMultiSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  this.$ctor__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_ProvidesKey__java_util_Map__java_util_Map(keyProvider, /**@type {!LinkedHashMap<*, T>} */ (LinkedHashMap.$create__()), /**@type {!LinkedHashMap<*, SelectionChange<T>>} */ (LinkedHashMap.$create__()));
 }
 /**
  * @return {List<T>}
  * @public
  */
 m_getSelectedList__() {
  this.m_resolveChanges___$pp_org_gwtproject_view_client();
  return /**@type {!ArrayList<T>} */ (ArrayList.$create__java_util_Collection(this.f_selectedSet__org_gwtproject_view_client_MultiSelectionModel.values()));
 }
 /**
  * @public
  */
 static $clinit() {
  OrderedMultiSelectionModel.$clinit = () =>{};
  OrderedMultiSelectionModel.$loadModules();
  MultiSelectionModel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof OrderedMultiSelectionModel;
 }
 /**
  * @public
  */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
 }
 
}
$Util.$setClassMetadata(OrderedMultiSelectionModel, 'org.gwtproject.view.client.OrderedMultiSelectionModel');

exports = OrderedMultiSelectionModel; 
//# sourceMappingURL=OrderedMultiSelectionModel.js.map