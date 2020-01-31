goog.module('org.gwtproject.i18n.shared.DateTimeFormat.PatternPart$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class PatternPart extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_text__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart;
  /**@type {number}*/
  this.f_count__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = 0;
  /**@type {boolean}*/
  this.f_abutStart__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = false;
 }
 /** @return {!PatternPart} */
 static $create__java_lang_String__int(/** ?string */ txt, /** number */ cnt) {
  PatternPart.$clinit();
  let $instance = new PatternPart();
  $instance.$ctor__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart__java_lang_String__int(txt, cnt);
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart__java_lang_String__int(/** ?string */ txt, /** number */ cnt) {
  this.$ctor__java_lang_Object__();
  this.f_text__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = txt;
  this.f_count__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = cnt;
  this.f_abutStart__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = false;
 }
 
 static $clinit() {
  PatternPart.$clinit = () =>{};
  PatternPart.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PatternPart;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(PatternPart, 'org.gwtproject.i18n.shared.DateTimeFormat$PatternPart');

exports = PatternPart; 
//# sourceMappingURL=DateTimeFormat$PatternPart.js.map