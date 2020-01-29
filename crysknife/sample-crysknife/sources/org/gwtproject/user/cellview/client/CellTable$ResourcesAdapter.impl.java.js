goog.module('org.gwtproject.user.cellview.client.CellTable.ResourcesAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.cellview.client.AbstractCellTable.Resources$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.Style$impl');
let CellTable_Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.Resources$impl');
let StyleAdapter = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.StyleAdapter$impl');

/**
 * @implements {Resources}
  */
class ResourcesAdapter extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellTable_Resources} */
  this.f_resources__org_gwtproject_user_cellview_client_CellTable_ResourcesAdapter_;
  /** @public {StyleAdapter} */
  this.f_style__org_gwtproject_user_cellview_client_CellTable_ResourcesAdapter_;
 }
 /**
  * @param {CellTable_Resources} resources
  * @return {!ResourcesAdapter}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellTable_Resources(resources) {
  ResourcesAdapter.$clinit();
  let $instance = new ResourcesAdapter();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesAdapter__org_gwtproject_user_cellview_client_CellTable_Resources(resources);
  return $instance;
 }
 /**
  * @param {CellTable_Resources} resources
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesAdapter__org_gwtproject_user_cellview_client_CellTable_Resources(resources) {
  this.$ctor__java_lang_Object__();
  this.f_resources__org_gwtproject_user_cellview_client_CellTable_ResourcesAdapter_ = resources;
  this.f_style__org_gwtproject_user_cellview_client_CellTable_ResourcesAdapter_ = StyleAdapter.$create__org_gwtproject_user_cellview_client_CellTable_Style(resources.m_cellTableStyle__());
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_sortAscending__() {
  return this.f_resources__org_gwtproject_user_cellview_client_CellTable_ResourcesAdapter_.m_cellTableSortAscending__();
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_sortDescending__() {
  return this.f_resources__org_gwtproject_user_cellview_client_CellTable_ResourcesAdapter_.m_cellTableSortDescending__();
 }
 /**
  * @override
  * @return {Style}
  * @public
  */
 m_style__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_ResourcesAdapter_;
 }
 /**
  * @public
  */
 static $clinit() {
  ResourcesAdapter.$clinit = () =>{};
  ResourcesAdapter.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ResourcesAdapter;
 }
 /**
  * @public
  */
 static $loadModules() {
  StyleAdapter = goog.module.get('org.gwtproject.user.cellview.client.CellTable.StyleAdapter$impl');
 }
 
}
$Util.$setClassMetadata(ResourcesAdapter, 'org.gwtproject.user.cellview.client.CellTable$ResourcesAdapter');

Resources.$markImplementor(ResourcesAdapter);

exports = ResourcesAdapter; 
//# sourceMappingURL=CellTable$ResourcesAdapter.js.map