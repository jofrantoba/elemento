goog.module('org.gwtproject.user.cellview.client.AbstractPager.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AbstractPager = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractPager$impl');
let RangeChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent$impl');

/**
 * @implements {Handler}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractPager} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractPager_1;
 }
 /**
  * @param {AbstractPager} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_AbstractPager($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractPager_1__org_gwtproject_user_cellview_client_AbstractPager($outer_this);
  return $instance;
 }
 /**
  * @param {AbstractPager} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractPager_1__org_gwtproject_user_cellview_client_AbstractPager($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractPager_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {RangeChangeEvent} event
  * @public
  */
 m_onRangeChange__org_gwtproject_view_client_RangeChangeEvent(event) {
  if (!$Equality.$same(this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractPager_1.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractPager_1.m_onRangeOrRowCountChanged__();
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.AbstractPager$1');

Handler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=AbstractPager$1.js.map