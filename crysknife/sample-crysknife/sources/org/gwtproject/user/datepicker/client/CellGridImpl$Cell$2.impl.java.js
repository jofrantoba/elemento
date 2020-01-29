goog.module('org.gwtproject.user.datepicker.client.CellGridImpl.Cell.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let Cell = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CellGridImpl.Cell$impl');

/**
 * @template V
 * @implements {ClickHandler}
  */
class $2 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Cell<V>} */
  this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_2;
 }
 /**
  * @template V
  * @param {Cell<V>} $outer_this
  * @return {!$2<V>}
  * @public
  */
 static $create__org_gwtproject_user_datepicker_client_CellGridImpl_Cell($outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_2__org_gwtproject_user_datepicker_client_CellGridImpl_Cell($outer_this);
  return $instance;
 }
 /**
  * @param {Cell<V>} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_2__org_gwtproject_user_datepicker_client_CellGridImpl_Cell($outer_this) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ClickEvent} event
  * @public
  */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(event) {
  if (this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_2.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.m_isActive__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_$p_org_gwtproject_user_datepicker_client_CellGridImpl(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_2)) {
   this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_2.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.m_setSelected__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_2);
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
 static $loadModules() {}
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.datepicker.client.CellGridImpl$Cell$2');

ClickHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=CellGridImpl$Cell$2.js.map