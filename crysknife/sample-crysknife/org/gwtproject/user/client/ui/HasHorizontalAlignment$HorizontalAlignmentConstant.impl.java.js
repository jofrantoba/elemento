goog.module('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AutoHorizontalAlignmentConstant = goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment.AutoHorizontalAlignmentConstant$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let HasHorizontalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');

class HorizontalAlignmentConstant extends AutoHorizontalAlignmentConstant {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_textAlignString__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant_;
 }
 /**
  * @param {Direction} direction
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 static m_endOf__org_gwtproject_i18n_client_HasDirection_Direction(direction) {
  HorizontalAlignmentConstant.$clinit();
  return $Equality.$same(direction, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) ? HasHorizontalAlignment.f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment : $Equality.$same(direction, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? HasHorizontalAlignment.f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment : HasHorizontalAlignment.f_ALIGN_LOCALE_END__org_gwtproject_user_client_ui_HasHorizontalAlignment;
 }
 /**
  * @param {Direction} direction
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 static m_startOf__org_gwtproject_i18n_client_HasDirection_Direction(direction) {
  HorizontalAlignmentConstant.$clinit();
  return $Equality.$same(direction, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) ? HasHorizontalAlignment.f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment : $Equality.$same(direction, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? HasHorizontalAlignment.f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment : HasHorizontalAlignment.f_ALIGN_LOCALE_START__org_gwtproject_user_client_ui_HasHorizontalAlignment;
 }
 /**
  * @param {?string} textAlignString
  * @return {!HorizontalAlignmentConstant}
  * @public
  */
 static $create__java_lang_String(textAlignString) {
  HorizontalAlignmentConstant.$clinit();
  let $instance = new HorizontalAlignmentConstant();
  $instance.$ctor__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant__java_lang_String(textAlignString);
  return $instance;
 }
 /**
  * @param {?string} textAlignString
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant__java_lang_String(textAlignString) {
  this.$ctor__org_gwtproject_user_client_ui_HasHorizontalAlignment_AutoHorizontalAlignmentConstant__();
  this.f_textAlignString__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant_ = textAlignString;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getTextAlignString__() {
  return this.f_textAlignString__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant_;
 }
 /**
  * @public
  */
 static $clinit() {
  HorizontalAlignmentConstant.$clinit = () =>{};
  HorizontalAlignmentConstant.$loadModules();
  AutoHorizontalAlignmentConstant.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HorizontalAlignmentConstant;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  HasHorizontalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
 }
 
}
$Util.$setClassMetadata(HorizontalAlignmentConstant, 'org.gwtproject.user.client.ui.HasHorizontalAlignment$HorizontalAlignmentConstant');

exports = HorizontalAlignmentConstant; 
//# sourceMappingURL=HasHorizontalAlignment$HorizontalAlignmentConstant.js.map