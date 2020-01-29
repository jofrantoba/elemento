goog.module('org.gwtproject.user.cellview.client.PageSizePager$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPager = goog.require('org.gwtproject.user.cellview.client.AbstractPager$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.PageSizePager.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.cellview.client.PageSizePager.$2$impl');
let Anchor = goog.forwardDeclare('org.gwtproject.user.client.ui.Anchor$impl');
let FlexTable = goog.forwardDeclare('org.gwtproject.user.client.ui.FlexTable$impl');
let HasRows = goog.forwardDeclare('org.gwtproject.view.client.HasRows$impl');

class PageSizePager extends AbstractPager {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_increment__org_gwtproject_user_cellview_client_PageSizePager_ = 0;
  /** @public {FlexTable} */
  this.f_layout__org_gwtproject_user_cellview_client_PageSizePager_;
  /** @public {Anchor} */
  this.f_showMoreButton__org_gwtproject_user_cellview_client_PageSizePager_;
  /** @public {Anchor} */
  this.f_showLessButton__org_gwtproject_user_cellview_client_PageSizePager_;
 }
 /**
  * @param {number} increment
  * @return {!PageSizePager}
  * @public
  */
 static $create__int(increment) {
  PageSizePager.$clinit();
  let $instance = new PageSizePager();
  $instance.$ctor__org_gwtproject_user_cellview_client_PageSizePager__int(increment);
  return $instance;
 }
 /**
  * @param {number} increment
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_PageSizePager__int(increment) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractPager__();
  this.$init___$p_org_gwtproject_user_cellview_client_PageSizePager();
  this.f_increment__org_gwtproject_user_cellview_client_PageSizePager_ = increment;
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(this.f_layout__org_gwtproject_user_cellview_client_PageSizePager_);
  this.f_layout__org_gwtproject_user_cellview_client_PageSizePager_.m_setCellPadding__int(0);
  this.f_layout__org_gwtproject_user_cellview_client_PageSizePager_.m_setCellSpacing__int(0);
  this.f_showMoreButton__org_gwtproject_user_cellview_client_PageSizePager_.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler($1.$create__org_gwtproject_user_cellview_client_PageSizePager__int(this, increment));
  this.f_showLessButton__org_gwtproject_user_cellview_client_PageSizePager_.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler($2.$create__org_gwtproject_user_cellview_client_PageSizePager__int(this, increment));
  this.f_layout__org_gwtproject_user_cellview_client_PageSizePager_.m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(0, 0, this.f_showLessButton__org_gwtproject_user_cellview_client_PageSizePager_);
  this.f_layout__org_gwtproject_user_cellview_client_PageSizePager_.m_setText__int__int__java_lang_String(0, 1, " | ");
  this.f_layout__org_gwtproject_user_cellview_client_PageSizePager_.m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(0, 2, this.f_showMoreButton__org_gwtproject_user_cellview_client_PageSizePager_);
  this.m_setDisplay__org_gwtproject_view_client_HasRows(null);
 }
 /**
  * @override
  * @param {HasRows} display
  * @public
  */
 m_setDisplay__org_gwtproject_view_client_HasRows(display) {
  if ($Equality.$same(display, null)) {
   this.f_showLessButton__org_gwtproject_user_cellview_client_PageSizePager_.m_setVisible__boolean(false);
   this.f_showMoreButton__org_gwtproject_user_cellview_client_PageSizePager_.m_setVisible__boolean(false);
  }
  super.m_setDisplay__org_gwtproject_view_client_HasRows(display);
 }
 /**
  * @override
  * @param {number} pageSize
  * @public
  */
 m_setPageSize__int(pageSize) {
  super.m_setPageSize__int(pageSize);
 }
 /**
  * @override
  * @public
  */
 m_onRangeOrRowCountChanged__() {
  let display = this.m_getDisplay__();
  let pageSize = display.m_getVisibleRange__().m_getLength__();
  let hasLess = pageSize > this.f_increment__org_gwtproject_user_cellview_client_PageSizePager_;
  let hasMore = !display.m_isRowCountExact__() || pageSize < display.m_getRowCount__();
  this.f_showLessButton__org_gwtproject_user_cellview_client_PageSizePager_.m_setVisible__boolean(hasLess);
  this.f_showMoreButton__org_gwtproject_user_cellview_client_PageSizePager_.m_setVisible__boolean(hasMore);
  this.f_layout__org_gwtproject_user_cellview_client_PageSizePager_.m_setText__int__int__java_lang_String(0, 1, (hasLess && hasMore) ? " | " : "");
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isShowLessButtonVisible___$pp_org_gwtproject_user_cellview_client() {
  return this.f_showLessButton__org_gwtproject_user_cellview_client_PageSizePager_.m_isVisible__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isShowMoreButtonVisible___$pp_org_gwtproject_user_cellview_client() {
  return this.f_showMoreButton__org_gwtproject_user_cellview_client_PageSizePager_.m_isVisible__();
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_PageSizePager() {
  this.f_layout__org_gwtproject_user_cellview_client_PageSizePager_ = FlexTable.$create__();
  this.f_showMoreButton__org_gwtproject_user_cellview_client_PageSizePager_ = Anchor.$create__java_lang_String("Show More");
  this.f_showLessButton__org_gwtproject_user_cellview_client_PageSizePager_ = Anchor.$create__java_lang_String("Show Less");
 }
 /**
  * @public
  */
 static $clinit() {
  PageSizePager.$clinit = () =>{};
  PageSizePager.$loadModules();
  AbstractPager.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PageSizePager;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.PageSizePager.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.cellview.client.PageSizePager.$2$impl');
  Anchor = goog.module.get('org.gwtproject.user.client.ui.Anchor$impl');
  FlexTable = goog.module.get('org.gwtproject.user.client.ui.FlexTable$impl');
 }
 
}
$Util.$setClassMetadata(PageSizePager, 'org.gwtproject.user.cellview.client.PageSizePager');

exports = PageSizePager; 
//# sourceMappingURL=PageSizePager.js.map