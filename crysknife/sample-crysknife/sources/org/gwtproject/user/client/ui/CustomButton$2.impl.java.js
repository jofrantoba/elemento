goog.module('org.gwtproject.user.client.ui.CustomButton.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Face = goog.require('org.gwtproject.user.client.ui.CustomButton.Face$impl');

let CustomButton = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomButton$impl');

class $2 extends Face {
 /** @protected */
 constructor() {
  super();
  /**@type {CustomButton}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_2;
  /**@type {?string}*/
  this.$c_name;
  /**@type {number}*/
  this.$c_faceID = 0;
 }
 /** @return {!$2} */
 static $create__org_gwtproject_user_client_ui_CustomButton__java_lang_String__int__org_gwtproject_user_client_ui_CustomButton_Face(/** CustomButton */ $outer_this, /** ?string */ $c_name, /** number */ $c_faceID, /** Face */ $_0) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomButton_2__org_gwtproject_user_client_ui_CustomButton__java_lang_String__int__org_gwtproject_user_client_ui_CustomButton_Face($outer_this, $c_name, $c_faceID, $_0);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_CustomButton_2__org_gwtproject_user_client_ui_CustomButton__java_lang_String__int__org_gwtproject_user_client_ui_CustomButton_Face(/** CustomButton */ $outer_this, /** ?string */ $c_name, /** number */ $c_faceID, /** Face */ $_0) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_2 = $outer_this;
  this.$c_name = $c_name;
  this.$c_faceID = $c_faceID;
  this.$ctor__org_gwtproject_user_client_ui_CustomButton_Face__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_CustomButton_Face($outer_this, $_0);
 }
 /** @return {?string} */
 m_getName__() {
  return this.$c_name;
 }
 /** @override @return {number} */
 m_getFaceID___$pp_org_gwtproject_user_client_ui() {
  return this.$c_faceID;
 }
 //Forwarding method for package private method.
 /** @override @return {?string} */
 m_getName___$pp_org_gwtproject_user_client_ui() {
  return this.m_getName__();
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  Face.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.CustomButton$2');

exports = $2; 
//# sourceMappingURL=CustomButton$2.js.map