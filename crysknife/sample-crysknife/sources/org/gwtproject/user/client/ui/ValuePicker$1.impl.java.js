goog.module('org.gwtproject.user.client.ui.ValuePicker.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');

let ValuePicker = goog.forwardDeclare('org.gwtproject.user.client.ui.ValuePicker$impl');
let SelectionChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent$impl');

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
  /** @public {ValuePicker<T>} */
  this.f_$outer_this__org_gwtproject_user_client_ui_ValuePicker_1;
 }
 /**
  * @template T
  * @param {ValuePicker<T>} $outer_this
  * @return {!$1<T>}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_ValuePicker($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_ValuePicker_1__org_gwtproject_user_client_ui_ValuePicker($outer_this);
  return $instance;
 }
 /**
  * @param {ValuePicker<T>} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ValuePicker_1__org_gwtproject_user_client_ui_ValuePicker($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_ValuePicker_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {SelectionChangeEvent} event
  * @public
  */
 m_onSelectionChange__org_gwtproject_view_client_SelectionChangeEvent(event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_ValuePicker_1.m_setValue__java_lang_Object__boolean(this.f_$outer_this__org_gwtproject_user_client_ui_ValuePicker_1.f_smodel__org_gwtproject_user_client_ui_ValuePicker_.m_getSelectedObject__(), true);
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.ValuePicker$1');

Handler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ValuePicker$1.js.map