goog.module('org.gwtproject.user.cellview.client.PageSizePager.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let PageSizePager = goog.forwardDeclare('org.gwtproject.user.cellview.client.PageSizePager$impl');

/**
 * @implements {ClickHandler}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {PageSizePager} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_PageSizePager_1;
  /** @public {number} */
  this.$c_increment = 0;
 }
 /**
  * @param {PageSizePager} $outer_this
  * @param {number} $c_increment
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_PageSizePager__int($outer_this, $c_increment) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_PageSizePager_1__org_gwtproject_user_cellview_client_PageSizePager__int($outer_this, $c_increment);
  return $instance;
 }
 /**
  * @param {PageSizePager} $outer_this
  * @param {number} $c_increment
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_PageSizePager_1__org_gwtproject_user_cellview_client_PageSizePager__int($outer_this, $c_increment) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_PageSizePager_1 = $outer_this;
  this.$c_increment = $c_increment;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ClickEvent} event
  * @public
  */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(event) {
  let display = this.f_$outer_this__org_gwtproject_user_cellview_client_PageSizePager_1.m_getDisplay__();
  if (!$Equality.$same(display, null)) {
   let range = display.m_getVisibleRange__();
   let pageSize = Math.min(range.m_getLength__() + this.$c_increment, display.m_getRowCount__() + (display.m_isRowCountExact__() ? 0 : this.$c_increment));
   display.m_setVisibleRange__int__int(range.m_getStart__(), pageSize);
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.PageSizePager$1');

ClickHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=PageSizePager$1.js.map