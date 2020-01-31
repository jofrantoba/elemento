goog.module('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AutoHorizontalAlignmentConstant = goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment.AutoHorizontalAlignmentConstant$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let HasHorizontalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');

class HorizontalAlignmentConstant extends AutoHorizontalAlignmentConstant {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_textAlignString__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant_;
 }
 /** @return {HorizontalAlignmentConstant} */
 static m_endOf__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ direction) {
  HorizontalAlignmentConstant.$clinit();
  return $Equality.$same(direction, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) ? HasHorizontalAlignment.f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment : $Equality.$same(direction, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? HasHorizontalAlignment.f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment : HasHorizontalAlignment.f_ALIGN_LOCALE_END__org_gwtproject_user_client_ui_HasHorizontalAlignment;
 }
 /** @return {HorizontalAlignmentConstant} */
 static m_startOf__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ direction) {
  HorizontalAlignmentConstant.$clinit();
  return $Equality.$same(direction, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) ? HasHorizontalAlignment.f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment : $Equality.$same(direction, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? HasHorizontalAlignment.f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment : HasHorizontalAlignment.f_ALIGN_LOCALE_START__org_gwtproject_user_client_ui_HasHorizontalAlignment;
 }
 /** @return {!HorizontalAlignmentConstant} */
 static $create__java_lang_String(/** ?string */ textAlignString) {
  HorizontalAlignmentConstant.$clinit();
  let $instance = new HorizontalAlignmentConstant();
  $instance.$ctor__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant__java_lang_String(textAlignString);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant__java_lang_String(/** ?string */ textAlignString) {
  this.$ctor__org_gwtproject_user_client_ui_HasHorizontalAlignment_AutoHorizontalAlignmentConstant__();
  this.f_textAlignString__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant_ = textAlignString;
 }
 /** @return {?string} */
 m_getTextAlignString__() {
  return this.f_textAlignString__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant_;
 }
 
 static $clinit() {
  HorizontalAlignmentConstant.$clinit = () =>{};
  HorizontalAlignmentConstant.$loadModules();
  AutoHorizontalAlignmentConstant.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HorizontalAlignmentConstant;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  HasHorizontalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
 }
 
}
$Util.$setClassMetadata(HorizontalAlignmentConstant, 'org.gwtproject.user.client.ui.HasHorizontalAlignment$HorizontalAlignmentConstant');

exports = HorizontalAlignmentConstant; 
//# sourceMappingURL=HasHorizontalAlignment$HorizontalAlignmentConstant.js.map