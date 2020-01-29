goog.module('org.gwtproject.i18n.shared.BidiFormatterBase.Format$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');

class Format extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!Format}
  * @public
  */
 static $create__() {
  let $instance = new Format();
  $instance.$ctor__org_gwtproject_i18n_shared_BidiFormatterBase_Format__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_BidiFormatterBase_Format__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {?string}
  * @public
  */
 static get f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format() {
  return (Format.$clinit(), Format.$f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
 }
 /**
  * @return {?string}
  * @public
  */
 static get f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format() {
  return (Format.$clinit(), Format.$f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
 }
 /**
  * @public
  */
 static $clinit() {
  Format.$clinit = () =>{};
  Format.$loadModules();
  j_l_Object.$clinit();
  Format.$f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format = Character.m_toString__char(Format.f_LRM__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
  Format.$f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format = Character.m_toString__char(Format.f_RLM__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Format;
 }
 /**
  * @public
  */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
 }
 
}
$Util.$setClassMetadata(Format, 'org.gwtproject.i18n.shared.BidiFormatterBase$Format');

/** @public {?string} @const */
Format.f_LEFT__org_gwtproject_i18n_shared_BidiFormatterBase_Format = "left";
/** @public {number} @const */
Format.f_LRE__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8234 /* '\u202A' */;
/** @public {number} @const */
Format.f_LRM__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8206 /* '\u200E' */;
/** @private {?string} */
Format.$f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format;
/** @public {number} @const */
Format.f_PDF__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8236 /* '\u202C' */;
/** @public {?string} @const */
Format.f_RIGHT__org_gwtproject_i18n_shared_BidiFormatterBase_Format = "right";
/** @public {number} @const */
Format.f_RLE__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8235 /* '\u202B' */;
/** @public {number} @const */
Format.f_RLM__org_gwtproject_i18n_shared_BidiFormatterBase_Format = 8207 /* '\u200F' */;
/** @private {?string} */
Format.$f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format;

exports = Format; 
//# sourceMappingURL=BidiFormatterBase$Format.js.map