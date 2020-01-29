goog.module('org.gwtproject.user.client.ui.CustomButton.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Face = goog.require('org.gwtproject.user.client.ui.CustomButton.Face$impl');

let CustomButton = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomButton$impl');

class $2 extends Face {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CustomButton} */
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_2;
  /** @public {?string} */
  this.$c_name;
  /** @public {number} */
  this.$c_faceID = 0;
 }
 /**
  * @param {CustomButton} $outer_this
  * @param {?string} $c_name
  * @param {number} $c_faceID
  * @param {Face} $_0
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_CustomButton__java_lang_String__int__org_gwtproject_user_client_ui_CustomButton_Face($outer_this, $c_name, $c_faceID, $_0) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomButton_2__org_gwtproject_user_client_ui_CustomButton__java_lang_String__int__org_gwtproject_user_client_ui_CustomButton_Face($outer_this, $c_name, $c_faceID, $_0);
  return $instance;
 }
 /**
  * @param {CustomButton} $outer_this
  * @param {?string} $c_name
  * @param {number} $c_faceID
  * @param {Face} $_0
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton_2__org_gwtproject_user_client_ui_CustomButton__java_lang_String__int__org_gwtproject_user_client_ui_CustomButton_Face($outer_this, $c_name, $c_faceID, $_0) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_2 = $outer_this;
  this.$c_name = $c_name;
  this.$c_faceID = $c_faceID;
  this.$ctor__org_gwtproject_user_client_ui_CustomButton_Face__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_CustomButton_Face($outer_this, $_0);
 }
 /**
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.$c_name;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getFaceID___$pp_org_gwtproject_user_client_ui() {
  return this.$c_faceID;
 }
 /**
  * Forwarding method for package private method.
  * @override
  * @return {?string}
  * @public
  */
 m_getName___$pp_org_gwtproject_user_client_ui() {
  return this.m_getName__();
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  Face.$clinit();
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
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.CustomButton$2');

exports = $2; 
//# sourceMappingURL=CustomButton$2.js.map