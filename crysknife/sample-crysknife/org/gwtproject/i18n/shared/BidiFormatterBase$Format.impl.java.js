goog.module('org.gwtproject.i18n.shared.BidiFormatterBase.Format$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');

class Format extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Format} */
 static $create__() {
  let $instance = new Format();
  $instance.$ctor__org_gwtproject_i18n_shared_BidiFormatterBase_Format__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_BidiFormatterBase_Format__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 static get f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format() {
  return (Format.$clinit(), Format.$f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
 }
 /** @return {?string} */
 static get f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format() {
  return (Format.$clinit(), Format.$f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
 }
 
 static $clinit() {
  Format.$clinit = () =>{};
  Format.$loadModules();
  j_l_Object.$clinit();
  Format.$f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format = Character.m_toString__char(Format.f_LRM__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
  Format.$f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format = Character.m_toString__char(Format.f_RLM__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Format;
 }
 
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
 }
 
}
$Util.$setClassMetadata(Format, 'org.gwtproject.i18n.shared.BidiFormatterBase$Format');

/**@const {?string}*/
Format.f_LEFT__org_gwtproject_i18n_shared_BidiFormatterBase_Format = "left";
/**@const {number}*/
Format.f_LRE__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8234 /* '\u202A' */;
/**@const {number}*/
Format.f_LRM__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8206 /* '\u200E' */;
/**@private {?string}*/
Format.$f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format;
/**@const {number}*/
Format.f_PDF__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8236 /* '\u202C' */;
/**@const {?string}*/
Format.f_RIGHT__org_gwtproject_i18n_shared_BidiFormatterBase_Format = "right";
/**@const {number}*/
Format.f_RLE__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8235 /* '\u202B' */;
/**@const {number}*/
Format.f_RLM__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8207 /* '\u200F' */;
/**@private {?string}*/
Format.$f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format;

exports = Format; 
//# sourceMappingURL=BidiFormatterBase$Format.js.map