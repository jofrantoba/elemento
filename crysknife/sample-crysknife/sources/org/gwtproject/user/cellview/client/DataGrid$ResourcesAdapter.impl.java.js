goog.module('org.gwtproject.user.cellview.client.DataGrid.ResourcesAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.cellview.client.AbstractCellTable.Resources$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.Style$impl');
let DataGrid_Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.Resources$impl');
let StyleAdapter = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.StyleAdapter$impl');

/**
 * @implements {Resources}
  */
class ResourcesAdapter extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataGrid_Resources}*/
  this.f_resources__org_gwtproject_user_cellview_client_DataGrid_ResourcesAdapter_;
  /**@type {StyleAdapter}*/
  this.f_style__org_gwtproject_user_cellview_client_DataGrid_ResourcesAdapter_;
 }
 /** @return {!ResourcesAdapter} */
 static $create__org_gwtproject_user_cellview_client_DataGrid_Resources(/** DataGrid_Resources */ resources) {
  ResourcesAdapter.$clinit();
  let $instance = new ResourcesAdapter();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesAdapter__org_gwtproject_user_cellview_client_DataGrid_Resources(resources);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesAdapter__org_gwtproject_user_cellview_client_DataGrid_Resources(/** DataGrid_Resources */ resources) {
  this.$ctor__java_lang_Object__();
  this.f_resources__org_gwtproject_user_cellview_client_DataGrid_ResourcesAdapter_ = resources;
  this.f_style__org_gwtproject_user_cellview_client_DataGrid_ResourcesAdapter_ = StyleAdapter.$create__org_gwtproject_user_cellview_client_DataGrid_Style(resources.m_dataGridStyle__());
 }
 /** @override @return {ImageResource} */
 m_sortAscending__() {
  return this.f_resources__org_gwtproject_user_cellview_client_DataGrid_ResourcesAdapter_.m_dataGridSortAscending__();
 }
 /** @override @return {ImageResource} */
 m_sortDescending__() {
  return this.f_resources__org_gwtproject_user_cellview_client_DataGrid_ResourcesAdapter_.m_dataGridSortDescending__();
 }
 /** @override @return {Style} */
 m_style__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_ResourcesAdapter_;
 }
 
 static $clinit() {
  ResourcesAdapter.$clinit = () =>{};
  ResourcesAdapter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResourcesAdapter;
 }
 
 static $loadModules() {
  StyleAdapter = goog.module.get('org.gwtproject.user.cellview.client.DataGrid.StyleAdapter$impl');
 }
 
}
$Util.$setClassMetadata(ResourcesAdapter, 'org.gwtproject.user.cellview.client.DataGrid$ResourcesAdapter');

Resources.$markImplementor(ResourcesAdapter);

exports = ResourcesAdapter; 
//# sourceMappingURL=DataGrid$ResourcesAdapter.js.map