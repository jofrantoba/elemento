goog.module('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextAlignment = goog.require('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends TextAlignment {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$2} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_2__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_2__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getTextAlignString___$pp_org_gwtproject_user_client_ui() {
  return "justify";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {TextAlignment}*/ ($Casts.$to(arg0, TextAlignment)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  TextAlignment.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.ValueBoxBase$TextAlignment$2');

exports = $2; 
//# sourceMappingURL=ValueBoxBase$TextAlignment$2.js.map