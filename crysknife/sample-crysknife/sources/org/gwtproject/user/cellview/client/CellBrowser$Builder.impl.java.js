goog.module('org.gwtproject.user.cellview.client.CellBrowser.Builder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CellBrowser = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser$impl');
let PageSizePagerFactory = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.PageSizePagerFactory$impl');
let PagerFactory = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.PagerFactory$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Resources$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let TreeViewModel = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel$impl');

/**
 * @template T
  */
class Builder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TreeViewModel} */
  this.f_viewModel__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
  /** @public {T} */
  this.f_rootValue__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
  /** @public {Widget} */
  this.f_loadingIndicator__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
  /** @public {PagerFactory} */
  this.f_pagerFactory__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
  /** @public {Integer} */
  this.f_pageSize__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
  /** @public {Resources} */
  this.f_resources__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
 }
 /**
  * @template T
  * @param {TreeViewModel} viewModel
  * @param {T} rootValue
  * @return {!Builder<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_TreeViewModel__java_lang_Object(viewModel, rootValue) {
  Builder.$clinit();
  let $instance = new Builder();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_Builder__org_gwtproject_view_client_TreeViewModel__java_lang_Object(viewModel, rootValue);
  return $instance;
 }
 /**
  * @param {TreeViewModel} viewModel
  * @param {T} rootValue
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_Builder__org_gwtproject_view_client_TreeViewModel__java_lang_Object(viewModel, rootValue) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_CellBrowser_Builder();
  this.f_viewModel__org_gwtproject_user_cellview_client_CellBrowser_Builder_ = viewModel;
  this.f_rootValue__org_gwtproject_user_cellview_client_CellBrowser_Builder_ = rootValue;
 }
 /**
  * @return {CellBrowser}
  * @public
  */
 m_build__() {
  return CellBrowser.$create__org_gwtproject_user_cellview_client_CellBrowser_Builder(this);
 }
 /**
  * @param {Widget} widget
  * @return {Builder<T>}
  * @public
  */
 m_loadingIndicator__org_gwtproject_user_client_ui_Widget(widget) {
  this.f_loadingIndicator__org_gwtproject_user_cellview_client_CellBrowser_Builder_ = widget;
  return this;
 }
 /**
  * @param {PagerFactory} factory
  * @return {Builder<T>}
  * @public
  */
 m_pagerFactory__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory(factory) {
  this.f_pagerFactory__org_gwtproject_user_cellview_client_CellBrowser_Builder_ = factory;
  return this;
 }
 /**
  * @param {number} pageSize
  * @return {Builder<T>}
  * @public
  */
 m_pageSize__int(pageSize) {
  this.f_pageSize__org_gwtproject_user_cellview_client_CellBrowser_Builder_ = Integer.m_valueOf__int(pageSize);
  return this;
 }
 /**
  * @param {Resources} resources
  * @return {Builder<T>}
  * @public
  */
 m_resources__org_gwtproject_user_cellview_client_CellBrowser_Resources(resources) {
  this.f_resources__org_gwtproject_user_cellview_client_CellBrowser_Builder_ = resources;
  return this;
 }
 /**
  * @return {Resources}
  * @public
  */
 m_resources___$p_org_gwtproject_user_cellview_client_CellBrowser_Builder() {
  if ($Equality.$same(this.f_resources__org_gwtproject_user_cellview_client_CellBrowser_Builder_, null)) {
   this.f_resources__org_gwtproject_user_cellview_client_CellBrowser_Builder_ = CellBrowser.m_getDefaultResources__();
  }
  return this.f_resources__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_CellBrowser_Builder() {
  this.f_pagerFactory__org_gwtproject_user_cellview_client_CellBrowser_Builder_ = PageSizePagerFactory.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  Builder.$clinit = () =>{};
  Builder.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Builder;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CellBrowser = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser$impl');
  PageSizePagerFactory = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.PageSizePagerFactory$impl');
 }
 
}
$Util.$setClassMetadata(Builder, 'org.gwtproject.user.cellview.client.CellBrowser$Builder');

exports = Builder; 
//# sourceMappingURL=CellBrowser$Builder.js.map