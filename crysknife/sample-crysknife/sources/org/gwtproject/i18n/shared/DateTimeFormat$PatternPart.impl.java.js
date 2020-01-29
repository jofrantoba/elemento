goog.module('org.gwtproject.i18n.shared.DateTimeFormat.PatternPart$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class PatternPart extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_text__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart;
  /** @public {number} */
  this.f_count__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = 0;
  /** @public {boolean} */
  this.f_abutStart__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = false;
 }
 /**
  * @param {?string} txt
  * @param {number} cnt
  * @return {!PatternPart}
  * @public
  */
 static $create__java_lang_String__int(txt, cnt) {
  PatternPart.$clinit();
  let $instance = new PatternPart();
  $instance.$ctor__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart__java_lang_String__int(txt, cnt);
  return $instance;
 }
 /**
  * @param {?string} txt
  * @param {number} cnt
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart__java_lang_String__int(txt, cnt) {
  this.$ctor__java_lang_Object__();
  this.f_text__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = txt;
  this.f_count__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = cnt;
  this.f_abutStart__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = false;
 }
 /**
  * @public
  */
 static $clinit() {
  PatternPart.$clinit = () =>{};
  PatternPart.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PatternPart;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(PatternPart, 'org.gwtproject.i18n.shared.DateTimeFormat$PatternPart');

exports = PatternPart; 
//# sourceMappingURL=DateTimeFormat$PatternPart.js.map