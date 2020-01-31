goog.module('org.gwtproject.http.client.StringValidator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class StringValidator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {boolean} */
 static m_isEmptyOrNullString__java_lang_String(/** ?string */ string_1) {
  StringValidator.$clinit();
  return $Equality.$same(string_1, null) || (0 == j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(string_1)));
 }
 
 static m_throwIfEmptyOrNull__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {
  StringValidator.$clinit();
  $Asserts.$assert((!$Equality.$same(name, null)));
  $Asserts.$assert((j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(name)) != 0));
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object(name, value);
  if (0 == j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(value))) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object(name) + " cannot be empty"));
  }
 }
 
 static m_throwIfNull__java_lang_String__java_lang_Object(/** ?string */ name, /** * */ value) {
  StringValidator.$clinit();
  if ($Equality.$same(null, value)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object(name) + " cannot be null"));
  }
 }
 /** @return {!StringValidator} */
 static $create__() {
  let $instance = new StringValidator();
  $instance.$ctor__org_gwtproject_http_client_StringValidator__();
  return $instance;
 }
 
 $ctor__org_gwtproject_http_client_StringValidator__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  StringValidator.$clinit = () =>{};
  StringValidator.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StringValidator;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(StringValidator, 'org.gwtproject.http.client.StringValidator');

exports = StringValidator; 
//# sourceMappingURL=StringValidator.js.map