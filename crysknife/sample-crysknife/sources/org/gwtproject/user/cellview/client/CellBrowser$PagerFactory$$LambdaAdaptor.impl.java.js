goog.module('org.gwtproject.user.cellview.client.CellBrowser.PagerFactory.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PagerFactory = goog.require('org.gwtproject.user.cellview.client.CellBrowser.PagerFactory$impl');

let AbstractPager = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractPager$impl');
let HasRows = goog.forwardDeclare('org.gwtproject.view.client.HasRows$impl');

/**
 * @implements {PagerFactory}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(HasRows):AbstractPager} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(HasRows):AbstractPager} */
  this.f_$$fn__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory_$LambdaAdaptor__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory_$JsFunction(fn);
 }
 /**
  * @param {?function(HasRows):AbstractPager} fn
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory_$LambdaAdaptor__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory_$LambdaAdaptor = fn;
 }
 /**
  * @param {HasRows} arg0
  * @return {AbstractPager}
  * @public
  */
 m_create__org_gwtproject_view_client_HasRows(arg0) {
  let /** ?function(HasRows):AbstractPager */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_cellview_client_CellBrowser_PagerFactory_$LambdaAdaptor, $function(arg0));
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.CellBrowser$PagerFactory$$LambdaAdaptor');

PagerFactory.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CellBrowser$PagerFactory$$LambdaAdaptor.js.map