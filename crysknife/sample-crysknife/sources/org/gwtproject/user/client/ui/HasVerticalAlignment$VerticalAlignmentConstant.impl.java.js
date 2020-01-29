goog.module('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class VerticalAlignmentConstant extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_verticalAlignString__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant_;
 }
 /**
  * @param {?string} verticalAlignString
  * @return {!VerticalAlignmentConstant}
  * @public
  */
 static $create__java_lang_String(verticalAlignString) {
  VerticalAlignmentConstant.$clinit();
  let $instance = new VerticalAlignmentConstant();
  $instance.$ctor__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__java_lang_String(verticalAlignString);
  return $instance;
 }
 /**
  * @param {?string} verticalAlignString
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__java_lang_String(verticalAlignString) {
  this.$ctor__java_lang_Object__();
  this.f_verticalAlignString__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant_ = verticalAlignString;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getVerticalAlignString__() {
  return this.f_verticalAlignString__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant_;
 }
 /**
  * @public
  */
 static $clinit() {
  VerticalAlignmentConstant.$clinit = () =>{};
  VerticalAlignmentConstant.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof VerticalAlignmentConstant;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(VerticalAlignmentConstant, 'org.gwtproject.user.client.ui.HasVerticalAlignment$VerticalAlignmentConstant');

exports = VerticalAlignmentConstant; 
//# sourceMappingURL=HasVerticalAlignment$VerticalAlignmentConstant.js.map