goog.module('org.gwtproject.user.cellview.client.AbstractPager.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AbstractPager = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractPager$impl');
let RowCountChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent$impl');

/**
 * @implements {Handler}
  */
class $2 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractPager} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractPager_2;
 }
 /**
  * @param {AbstractPager} $outer_this
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_AbstractPager($outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractPager_2__org_gwtproject_user_cellview_client_AbstractPager($outer_this);
  return $instance;
 }
 /**
  * @param {AbstractPager} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractPager_2__org_gwtproject_user_cellview_client_AbstractPager($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractPager_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {RowCountChangeEvent} event
  * @public
  */
 m_onRowCountChange__org_gwtproject_view_client_RowCountChangeEvent(event) {
  if (!$Equality.$same(this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractPager_2.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractPager_2.m_handleRowCountChange__int__boolean_$p_org_gwtproject_user_cellview_client_AbstractPager(event.m_getNewRowCount__(), event.m_isNewRowCountExact__());
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $2;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.cellview.client.AbstractPager$2');

Handler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=AbstractPager$2.js.map