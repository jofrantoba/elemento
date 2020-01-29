goog.module('org.gwtproject.text.client.LongParser$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Parser = goog.require('org.gwtproject.text.shared.Parser$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let ParseException = goog.forwardDeclare('java.text.ParseException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {Parser<Long>}
  */
class LongParser extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {Parser<Long>}
  * @public
  */
 static m_instance__() {
  LongParser.$clinit();
  if ($Equality.$same(LongParser.f_INSTANCE__org_gwtproject_text_client_LongParser_, null)) {
   LongParser.f_INSTANCE__org_gwtproject_text_client_LongParser_ = LongParser.$create__();
  }
  return LongParser.f_INSTANCE__org_gwtproject_text_client_LongParser_;
 }
 /**
  * @return {!LongParser}
  * @public
  */
 static $create__() {
  LongParser.$clinit();
  let $instance = new LongParser();
  $instance.$ctor__org_gwtproject_text_client_LongParser__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_text_client_LongParser__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {(CharSequence|string)} object
  * @return {Long}
  * @public
  */
 m_parse__java_lang_CharSequence(object) {
  if ($Equality.$same("", $CharSequences.m_toString__java_lang_CharSequence(object))) {
   return null;
  } else {
   try {
    return Long.m_valueOf__long($Primitives.$narrowDoubleToLong(NumberFormat.m_getDecimalFormat__().m_parse__java_lang_String($CharSequences.m_toString__java_lang_CharSequence(object))));
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (NumberFormatException.$isInstance(__$exc)) {
     let var3 = /**@type {NumberFormatException} */ (__$exc);
     throw $Exceptions.toJs(ParseException.$create__java_lang_String__int(var3.m_getMessage__(), 0));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 /**
  * @public
  */
 static $clinit() {
  LongParser.$clinit = () =>{};
  LongParser.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LongParser;
 }
 /**
  * @public
  */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  ParseException = goog.module.get('java.text.ParseException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(LongParser, 'org.gwtproject.text.client.LongParser');

Parser.$markImplementor(LongParser);

/** @public {LongParser} */
LongParser.f_INSTANCE__org_gwtproject_text_client_LongParser_;

exports = LongParser; 
//# sourceMappingURL=LongParser.js.map