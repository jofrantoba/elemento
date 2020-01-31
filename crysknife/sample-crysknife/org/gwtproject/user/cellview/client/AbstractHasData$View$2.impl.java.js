goog.module('org.gwtproject.user.cellview.client.AbstractHasData.View.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueChangeEvent = goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let View = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.View$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {ValueChangeEvent<List<T>>}
  */
class $2 extends ValueChangeEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {View<T>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData_View_2;
 }
 /** @template T @return {!$2<T>} */
 static $create__org_gwtproject_user_cellview_client_AbstractHasData_View__java_util_List(/** View<T> */ $outer_this, /** List<T> */ $_0) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractHasData_View_2__org_gwtproject_user_cellview_client_AbstractHasData_View__java_util_List($outer_this, $_0);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData_View_2__org_gwtproject_user_cellview_client_AbstractHasData_View__java_util_List(/** View<T> */ $outer_this, /** List<T> */ $_0) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData_View_2 = $outer_this;
  this.$ctor__org_gwtproject_event_logical_shared_ValueChangeEvent__java_lang_Object($_0);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  super.m_dispatch__org_gwtproject_event_logical_shared_ValueChangeHandler(/**@type {ValueChangeHandler<List<T>>}*/ ($Casts.$to(arg0, ValueChangeHandler)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  ValueChangeEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  ValueChangeHandler = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.cellview.client.AbstractHasData$View$2');

exports = $2; 
//# sourceMappingURL=AbstractHasData$View$2.js.map