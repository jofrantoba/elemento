goog.module('org.gwtproject.user.cellview.client.CellBrowser.PageSizePagerFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PagerFactory = goog.require('org.gwtproject.user.cellview.client.CellBrowser.PagerFactory$impl');

let AbstractPager = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractPager$impl');
let PageSizePager = goog.forwardDeclare('org.gwtproject.user.cellview.client.PageSizePager$impl');
let HasRows = goog.forwardDeclare('org.gwtproject.view.client.HasRows$impl');

/**
 * @implements {PagerFactory}
  */
class PageSizePagerFactory extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!PageSizePagerFactory}
  * @public
  */
 static $create__() {
  PageSizePagerFactory.$clinit();
  let $instance = new PageSizePagerFactory();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_PageSizePagerFactory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_PageSizePagerFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {HasRows} display
  * @return {AbstractPager}
  * @public
  */
 m_create__org_gwtproject_view_client_HasRows(display) {
  return PageSizePager.$create__int(display.m_getVisibleRange__().m_getLength__());
 }
 /**
  * @public
  */
 static $clinit() {
  PageSizePagerFactory.$clinit = () =>{};
  PageSizePagerFactory.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PageSizePagerFactory;
 }
 /**
  * @public
  */
 static $loadModules() {
  PageSizePager = goog.module.get('org.gwtproject.user.cellview.client.PageSizePager$impl');
 }
 
}
$Util.$setClassMetadata(PageSizePagerFactory, 'org.gwtproject.user.cellview.client.CellBrowser$PageSizePagerFactory');

PagerFactory.$markImplementor(PageSizePagerFactory);

exports = PageSizePagerFactory; 
//# sourceMappingURL=CellBrowser$PageSizePagerFactory.js.map