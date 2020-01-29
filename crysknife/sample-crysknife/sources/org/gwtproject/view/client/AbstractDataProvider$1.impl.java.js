goog.module('org.gwtproject.view.client.AbstractDataProvider.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');

let AbstractDataProvider = goog.forwardDeclare('org.gwtproject.view.client.AbstractDataProvider$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let RangeChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent$impl');

/**
 * @template T
 * @implements {Handler}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractDataProvider<T>} */
  this.f_$outer_this__org_gwtproject_view_client_AbstractDataProvider_1;
  /** @public {HasData<T>} */
  this.$c_display;
 }
 /**
  * @template T
  * @param {AbstractDataProvider<T>} $outer_this
  * @param {HasData<T>} $c_display
  * @return {!$1<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_HasData($outer_this, $c_display) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_view_client_AbstractDataProvider_1__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_HasData($outer_this, $c_display);
  return $instance;
 }
 /**
  * @param {AbstractDataProvider<T>} $outer_this
  * @param {HasData<T>} $c_display
  * @public
  */
 $ctor__org_gwtproject_view_client_AbstractDataProvider_1__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_HasData($outer_this, $c_display) {
  this.f_$outer_this__org_gwtproject_view_client_AbstractDataProvider_1 = $outer_this;
  this.$c_display = $c_display;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {RangeChangeEvent} event
  * @public
  */
 m_onRangeChange__org_gwtproject_view_client_RangeChangeEvent(event) {
  this.f_$outer_this__org_gwtproject_view_client_AbstractDataProvider_1.m_onRangeChanged__org_gwtproject_view_client_HasData(this.$c_display);
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
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.view.client.AbstractDataProvider$1');

Handler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=AbstractDataProvider$1.js.map