goog.module('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$4$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextAlignment = goog.require('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends TextAlignment {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$4} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_4__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_4__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getTextAlignString___$pp_org_gwtproject_user_client_ui() {
  return "right";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {TextAlignment}*/ ($Casts.$to(arg0, TextAlignment)));
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  TextAlignment.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.user.client.ui.ValueBoxBase$TextAlignment$4');

exports = $4; 
//# sourceMappingURL=ValueBoxBase$TextAlignment$4.js.map