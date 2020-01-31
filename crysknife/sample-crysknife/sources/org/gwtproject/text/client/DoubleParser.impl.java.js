goog.module('org.gwtproject.text.client.DoubleParser$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Parser = goog.require('org.gwtproject.text.shared.Parser$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let ParseException = goog.forwardDeclare('java.text.ParseException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Parser<?number>}
  */
class DoubleParser extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {Parser<?number>} */
 static m_instance__() {
  DoubleParser.$clinit();
  if ($Equality.$same(DoubleParser.f_INSTANCE__org_gwtproject_text_client_DoubleParser_, null)) {
   DoubleParser.f_INSTANCE__org_gwtproject_text_client_DoubleParser_ = DoubleParser.$create__();
  }
  return DoubleParser.f_INSTANCE__org_gwtproject_text_client_DoubleParser_;
 }
 /** @return {!DoubleParser} */
 static $create__() {
  DoubleParser.$clinit();
  let $instance = new DoubleParser();
  $instance.$ctor__org_gwtproject_text_client_DoubleParser__();
  return $instance;
 }
 
 $ctor__org_gwtproject_text_client_DoubleParser__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?number} */
 m_parse__java_lang_CharSequence(/** (CharSequence|string) */ object) {
  if ($Equality.$same("", $CharSequences.m_toString__java_lang_CharSequence(object))) {
   return null;
  } else {
   try {
    return NumberFormat.m_getDecimalFormat__().m_parse__java_lang_String($CharSequences.m_toString__java_lang_CharSequence(object));
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (NumberFormatException.$isInstance(__$exc)) {
     let var3 = /**@type {NumberFormatException}*/ (__$exc);
     throw $Exceptions.toJs(ParseException.$create__java_lang_String__int(var3.m_getMessage__(), 0));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 
 static $clinit() {
  DoubleParser.$clinit = () =>{};
  DoubleParser.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoubleParser;
 }
 
 static $loadModules() {
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  ParseException = goog.module.get('java.text.ParseException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DoubleParser, 'org.gwtproject.text.client.DoubleParser');

Parser.$markImplementor(DoubleParser);

/**@type {DoubleParser}*/
DoubleParser.f_INSTANCE__org_gwtproject_text_client_DoubleParser_;

exports = DoubleParser; 
//# sourceMappingURL=DoubleParser.js.map