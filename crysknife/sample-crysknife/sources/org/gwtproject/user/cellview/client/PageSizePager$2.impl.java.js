goog.module('org.gwtproject.user.cellview.client.PageSizePager.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let PageSizePager = goog.forwardDeclare('org.gwtproject.user.cellview.client.PageSizePager$impl');

/**
 * @implements {ClickHandler}
  */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {PageSizePager}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_PageSizePager_2;
  /**@type {number}*/
  this.$c_increment = 0;
 }
 /** @return {!$2} */
 static $create__org_gwtproject_user_cellview_client_PageSizePager__int(/** PageSizePager */ $outer_this, /** number */ $c_increment) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_cellview_client_PageSizePager_2__org_gwtproject_user_cellview_client_PageSizePager__int($outer_this, $c_increment);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_PageSizePager_2__org_gwtproject_user_cellview_client_PageSizePager__int(/** PageSizePager */ $outer_this, /** number */ $c_increment) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_PageSizePager_2 = $outer_this;
  this.$c_increment = $c_increment;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(/** ClickEvent */ event) {
  let display = this.f_$outer_this__org_gwtproject_user_cellview_client_PageSizePager_2.m_getDisplay__();
  if (!$Equality.$same(display, null)) {
   let range = display.m_getVisibleRange__();
   let pageSize = Math.max(range.m_getLength__() - this.$c_increment, this.$c_increment);
   display.m_setVisibleRange__int__int(range.m_getStart__(), pageSize);
  }
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.cellview.client.PageSizePager$2');

ClickHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=PageSizePager$2.js.map