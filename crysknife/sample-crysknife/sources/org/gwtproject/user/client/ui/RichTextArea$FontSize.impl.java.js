goog.module('org.gwtproject.user.client.ui.RichTextArea.FontSize$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');

class FontSize extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_number__org_gwtproject_user_client_ui_RichTextArea_FontSize_ = 0;
 }
 /**
  * @param {number} number_1
  * @return {!FontSize}
  * @public
  */
 static $create__int(number_1) {
  let $instance = new FontSize();
  $instance.$ctor__org_gwtproject_user_client_ui_RichTextArea_FontSize__int(number_1);
  return $instance;
 }
 /**
  * @param {number} number_1
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RichTextArea_FontSize__int(number_1) {
  this.$ctor__java_lang_Object__();
  this.f_number__org_gwtproject_user_client_ui_RichTextArea_FontSize_ = number_1;
 }
 /**
  * @return {number}
  * @public
  */
 m_getNumber__() {
  return this.f_number__org_gwtproject_user_client_ui_RichTextArea_FontSize_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return Integer.m_toString__int(this.f_number__org_gwtproject_user_client_ui_RichTextArea_FontSize_);
 }
 /**
  * @return {FontSize}
  * @public
  */
 static get f_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize() {
  return (FontSize.$clinit(), FontSize.$f_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize);
 }
 /**
  * @return {FontSize}
  * @public
  */
 static get f_MEDIUM__org_gwtproject_user_client_ui_RichTextArea_FontSize() {
  return (FontSize.$clinit(), FontSize.$f_MEDIUM__org_gwtproject_user_client_ui_RichTextArea_FontSize);
 }
 /**
  * @return {FontSize}
  * @public
  */
 static get f_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize() {
  return (FontSize.$clinit(), FontSize.$f_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize);
 }
 /**
  * @return {FontSize}
  * @public
  */
 static get f_X_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize() {
  return (FontSize.$clinit(), FontSize.$f_X_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize);
 }
 /**
  * @return {FontSize}
  * @public
  */
 static get f_X_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize() {
  return (FontSize.$clinit(), FontSize.$f_X_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize);
 }
 /**
  * @return {FontSize}
  * @public
  */
 static get f_XX_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize() {
  return (FontSize.$clinit(), FontSize.$f_XX_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize);
 }
 /**
  * @return {FontSize}
  * @public
  */
 static get f_XX_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize() {
  return (FontSize.$clinit(), FontSize.$f_XX_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize);
 }
 /**
  * @public
  */
 static $clinit() {
  FontSize.$clinit = () =>{};
  FontSize.$loadModules();
  j_l_Object.$clinit();
  FontSize.$f_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize = FontSize.$create__int(5);
  FontSize.$f_MEDIUM__org_gwtproject_user_client_ui_RichTextArea_FontSize = FontSize.$create__int(4);
  FontSize.$f_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize = FontSize.$create__int(3);
  FontSize.$f_X_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize = FontSize.$create__int(6);
  FontSize.$f_X_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize = FontSize.$create__int(2);
  FontSize.$f_XX_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize = FontSize.$create__int(7);
  FontSize.$f_XX_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize = FontSize.$create__int(1);
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FontSize;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
 }
 
}
$Util.$setClassMetadata(FontSize, 'org.gwtproject.user.client.ui.RichTextArea$FontSize');

/** @private {FontSize} */
FontSize.$f_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize;
/** @private {FontSize} */
FontSize.$f_MEDIUM__org_gwtproject_user_client_ui_RichTextArea_FontSize;
/** @private {FontSize} */
FontSize.$f_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize;
/** @private {FontSize} */
FontSize.$f_X_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize;
/** @private {FontSize} */
FontSize.$f_X_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize;
/** @private {FontSize} */
FontSize.$f_XX_LARGE__org_gwtproject_user_client_ui_RichTextArea_FontSize;
/** @private {FontSize} */
FontSize.$f_XX_SMALL__org_gwtproject_user_client_ui_RichTextArea_FontSize;

exports = FontSize; 
//# sourceMappingURL=RichTextArea$FontSize.js.map