goog.module('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.cellview.client.DataGrid.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let ImageResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.Style$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.$1$impl');
let dataGridLoadingInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridLoadingInitializer$impl');
let dataGridSortAscendingInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridSortAscendingInitializer$impl');
let dataGridSortDescendingInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridSortDescendingInitializer$impl');
let dataGridStyleInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridStyleInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class DataGrid__ResourcesImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DataGrid__ResourcesImpl} */
 static $create__() {
  DataGrid__ResourcesImpl.$clinit();
  let $instance = new DataGrid__ResourcesImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_dataGridLoadingInitializer___$p_org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl() {
  DataGrid__ResourcesImpl.$f_dataGridLoading__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("dataGridLoading", UriUtils.m_fromTrustedString__java_lang_String(DataGrid__ResourcesImpl.f_externalImage__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_), 0, 0, 43, 11, true, false);
 }
 /** @override @return {ImageResource} */
 m_dataGridLoading__() {
  return dataGridLoadingInitializer.m_get__();
 }
 
 m_dataGridSortAscendingInitializer___$p_org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl() {
  DataGrid__ResourcesImpl.$f_dataGridSortAscending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("dataGridSortAscending", UriUtils.m_fromTrustedString__java_lang_String(DataGrid__ResourcesImpl.f_externalImage0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_), 0, 0, 11, 7, false, false);
 }
 /** @override @return {ImageResource} */
 m_dataGridSortAscending__() {
  return dataGridSortAscendingInitializer.m_get__();
 }
 
 m_dataGridSortDescendingInitializer___$p_org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl() {
  DataGrid__ResourcesImpl.$f_dataGridSortDescending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("dataGridSortDescending", UriUtils.m_fromTrustedString__java_lang_String(DataGrid__ResourcesImpl.f_externalImage1__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_), 0, 0, 11, 7, false, false);
 }
 /** @override @return {ImageResource} */
 m_dataGridSortDescending__() {
  return dataGridSortDescendingInitializer.m_get__();
 }
 
 m_dataGridStyleInitializer___$p_org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl() {
  DataGrid__ResourcesImpl.$f_dataGridStyle__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = $1.$create__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl(this);
 }
 /** @override @return {Style} */
 m_dataGridStyle__() {
  return dataGridStyleInitializer.m_get__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([this.m_dataGridLoading__(), this.m_dataGridSortAscending__(), this.m_dataGridSortDescending__(), this.m_dataGridStyle__()], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(DataGrid__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_, null)) {
   DataGrid__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   DataGrid__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_.put("dataGridLoading", this.m_dataGridLoading__());
   DataGrid__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_.put("dataGridSortAscending", this.m_dataGridSortAscending__());
   DataGrid__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_.put("dataGridSortDescending", this.m_dataGridSortDescending__());
   DataGrid__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_.put("dataGridStyle", this.m_dataGridStyle__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(DataGrid__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /** @return {DataGrid__ResourcesImpl} */
 static get f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_() {
  return (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_);
 }
 
 static set f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_(/** DataGrid__ResourcesImpl */ value) {
  (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_dataGridLoading__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_() {
  return (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f_dataGridLoading__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_);
 }
 
 static set f_dataGridLoading__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_(/** ImageResource */ value) {
  (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f_dataGridLoading__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_dataGridSortAscending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_() {
  return (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f_dataGridSortAscending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_);
 }
 
 static set f_dataGridSortAscending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_(/** ImageResource */ value) {
  (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f_dataGridSortAscending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_dataGridSortDescending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_() {
  return (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f_dataGridSortDescending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_);
 }
 
 static set f_dataGridSortDescending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_(/** ImageResource */ value) {
  (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f_dataGridSortDescending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = value);
 }
 /** @return {Style} */
 static get f_dataGridStyle__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_() {
  return (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f_dataGridStyle__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_);
 }
 
 static set f_dataGridStyle__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_(/** Style */ value) {
  (DataGrid__ResourcesImpl.$clinit(), DataGrid__ResourcesImpl.$f_dataGridStyle__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = value);
 }
 
 static $clinit() {
  DataGrid__ResourcesImpl.$clinit = () =>{};
  DataGrid__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  DataGrid__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = DataGrid__ResourcesImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataGrid__ResourcesImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  ImageResourcePrototype = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.$1$impl');
  dataGridLoadingInitializer = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridLoadingInitializer$impl');
  dataGridSortAscendingInitializer = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridSortAscendingInitializer$impl');
  dataGridSortDescendingInitializer = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridSortDescendingInitializer$impl');
  dataGridStyleInitializer = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridStyleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DataGrid__ResourcesImpl, 'org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl');

Resources.$markImplementor(DataGrid__ResourcesImpl);

/**@private {DataGrid__ResourcesImpl}*/
DataGrid__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
DataGrid__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;
/**@const {?string}*/
DataGrid__ResourcesImpl.f_externalImage__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = "data:image/gif;base64,R0lGODlhKwALAPEAAP///0tKSqampktKSiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAKwALAAACMoSOCMuW2diD88UKG95W88uF4DaGWFmhZid93pq+pwxnLUnXh8ou+sSz+T64oCAyTBUAACH5BAkKAAAALAAAAAArAAsAAAI9xI4IyyAPYWOxmoTHrHzzmGHe94xkmJifyqFKQ0pwLLgHa82xrekkDrIBZRQab1jyfY7KTtPimixiUsevAAAh+QQJCgAAACwAAAAAKwALAAACPYSOCMswD2FjqZpqW9xv4g8KE7d54XmMpNSgqLoOpgvC60xjNonnyc7p+VKamKw1zDCMR8rp8pksYlKorgAAIfkECQoAAAAsAAAAACsACwAAAkCEjgjLltnYmJS6Bxt+sfq5ZUyoNJ9HHlEqdCfFrqn7DrE2m7Wdj/2y45FkQ13t5itKdshFExC8YCLOEBX6AhQAADsAAAAAAAAAAAA=";
/**@const {?string}*/
DataGrid__ResourcesImpl.f_externalImage0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAjUlEQVR4XmNgwALyKrumFRf3iKCLY4D8yq4qoOL/eRWd29HlUEBeeYdNXmXnfzCuAON6dDVgALI2t6LzMUhRLkghRNO/vKpOR3S1DLmVnTsgCrqgGGp6Zeez/KpWcbhCoO4mJEls+EBCfT0HQ15pl2pueedZoNUXQDRQ4jKQfTkPhCvB+HxuRdd1oM0hAPwcZIjP6ejiAAAAAElFTkSuQmCC";
/**@const {?string}*/
DataGrid__ResourcesImpl.f_externalImage1__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAj0lEQVR4XmPIrewMya3oup5X2XkeiC/nVXRezgViEDu3vPMskH0BROeVdqkyJNTXcwAlDgDxfwxcAaWrOpsYYCC/qlUcKPgMLlnZBcWd/4E274ArhAGgbkeg5D+wApCmCjD9uLi4RwRdLRgAFdQjTAfi8g4bdDUoAKh4O8gJ+ZVdVehyGABkLVDxNHRxEAAAkCpkiGG1rZcAAAAASUVORK5CYII=";
/**@private {ImageResource}*/
DataGrid__ResourcesImpl.$f_dataGridLoading__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;
/**@private {ImageResource}*/
DataGrid__ResourcesImpl.$f_dataGridSortAscending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;
/**@private {ImageResource}*/
DataGrid__ResourcesImpl.$f_dataGridSortDescending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;
/**@private {Style}*/
DataGrid__ResourcesImpl.$f_dataGridStyle__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;

exports = DataGrid__ResourcesImpl; 
//# sourceMappingURL=DataGrid_ResourcesImpl.js.map