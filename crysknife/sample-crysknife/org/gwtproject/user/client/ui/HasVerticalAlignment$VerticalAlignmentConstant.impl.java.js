goog.module('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class VerticalAlignmentConstant extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_verticalAlignString__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant_;
 }
 /** @return {!VerticalAlignmentConstant} */
 static $create__java_lang_String(/** ?string */ verticalAlignString) {
  VerticalAlignmentConstant.$clinit();
  let $instance = new VerticalAlignmentConstant();
  $instance.$ctor__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__java_lang_String(verticalAlignString);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__java_lang_String(/** ?string */ verticalAlignString) {
  this.$ctor__java_lang_Object__();
  this.f_verticalAlignString__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant_ = verticalAlignString;
 }
 /** @return {?string} */
 m_getVerticalAlignString__() {
  return this.f_verticalAlignString__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant_;
 }
 
 static $clinit() {
  VerticalAlignmentConstant.$clinit = () =>{};
  VerticalAlignmentConstant.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VerticalAlignmentConstant;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(VerticalAlignmentConstant, 'org.gwtproject.user.client.ui.HasVerticalAlignment$VerticalAlignmentConstant');

exports = VerticalAlignmentConstant; 
//# sourceMappingURL=HasVerticalAlignment$VerticalAlignmentConstant.js.map