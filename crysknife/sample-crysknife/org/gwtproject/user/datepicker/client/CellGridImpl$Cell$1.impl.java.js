goog.module('org.gwtproject.user.datepicker.client.CellGridImpl.Cell.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyDownHandler = goog.require('org.gwtproject.event.dom.client.KeyDownHandler$impl');

let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let Cell = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CellGridImpl.Cell$impl');

/**
 * @template V
 * @implements {KeyDownHandler}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Cell<V>} */
  this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_1;
 }
 /**
  * @template V
  * @param {Cell<V>} $outer_this
  * @return {!$1<V>}
  * @public
  */
 static $create__org_gwtproject_user_datepicker_client_CellGridImpl_Cell($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_1__org_gwtproject_user_datepicker_client_CellGridImpl_Cell($outer_this);
  return $instance;
 }
 /**
  * @param {Cell<V>} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_1__org_gwtproject_user_datepicker_client_CellGridImpl_Cell($outer_this) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {KeyDownEvent} event
  * @public
  */
 m_onKeyDown__org_gwtproject_event_dom_client_KeyDownEvent(event) {
  if (event.m_getNativeKeyCode__() == KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes || event.m_getNativeKeyCode__() == 32 /* ' ' */) {
   if (this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_1.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.m_isActive__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_$p_org_gwtproject_user_datepicker_client_CellGridImpl(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_1)) {
    this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_1.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell.m_setSelected__org_gwtproject_user_datepicker_client_CellGridImpl_Cell(this.f_$outer_this__org_gwtproject_user_datepicker_client_CellGridImpl_Cell_1);
   }
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
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.datepicker.client.CellGridImpl$Cell$1');

KeyDownHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellGridImpl$Cell$1.js.map