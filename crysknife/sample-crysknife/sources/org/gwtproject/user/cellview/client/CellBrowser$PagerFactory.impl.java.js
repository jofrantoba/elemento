goog.module('org.gwtproject.user.cellview.client.CellBrowser.PagerFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractPager = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractPager$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.PagerFactory.$LambdaAdaptor$impl');
let HasRows = goog.forwardDeclare('org.gwtproject.view.client.HasRows$impl');

/**
 * @interface
 */
class PagerFactory {
 /**
  * @abstract
  * @param {HasRows} display
  * @return {AbstractPager}
  * @public
  */
 m_create__org_gwtproject_view_client_HasRows(display) {}
 /**
  * @param {?function(HasRows):AbstractPager} fn
  * @return {PagerFactory}
  * @public
  */
 static $adapt(fn) {
  PagerFactory.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  PagerFactory.$clinit = () =>{};
  PagerFactory.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.PagerFactory.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(PagerFactory, 'org.gwtproject.user.cellview.client.CellBrowser$PagerFactory');

PagerFactory.$markImplementor(/** @type {Function} */ (PagerFactory));

exports = PagerFactory; 
//# sourceMappingURL=CellBrowser$PagerFactory.js.map