goog.module('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextAlignment = goog.require('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends TextAlignment {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$1}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_1__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_1__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getTextAlignString___$pp_org_gwtproject_user_client_ui() {
  return "center";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {TextAlignment} */ ($Casts.$to(arg0, TextAlignment)));
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  TextAlignment.$clinit();
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
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.ValueBoxBase$TextAlignment$1');

exports = $1; 
//# sourceMappingURL=ValueBoxBase$TextAlignment$1.js.map