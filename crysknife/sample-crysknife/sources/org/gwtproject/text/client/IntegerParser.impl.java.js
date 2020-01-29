goog.module('org.gwtproject.text.client.IntegerParser$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Parser = goog.require('org.gwtproject.text.shared.Parser$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let ParseException = goog.forwardDeclare('java.text.ParseException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {Parser<Integer>}
  */
class IntegerParser extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {Parser<Integer>}
  * @public
  */
 static m_instance__() {
  IntegerParser.$clinit();
  if ($Equality.$same(IntegerParser.f_INSTANCE__org_gwtproject_text_client_IntegerParser_, null)) {
   IntegerParser.f_INSTANCE__org_gwtproject_text_client_IntegerParser_ = IntegerParser.$create__();
  }
  return IntegerParser.f_INSTANCE__org_gwtproject_text_client_IntegerParser_;
 }
 /**
  * @return {!IntegerParser}
  * @public
  */
 static $create__() {
  IntegerParser.$clinit();
  let $instance = new IntegerParser();
  $instance.$ctor__org_gwtproject_text_client_IntegerParser__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_text_client_IntegerParser__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {(CharSequence|string)} object
  * @return {Integer}
  * @public
  */
 m_parse__java_lang_CharSequence(object) {
  if ($Equality.$same("", $CharSequences.m_toString__java_lang_CharSequence(object))) {
   return null;
  } else {
   try {
    return Integer.m_valueOf__int($Primitives.$narrowDoubleToInt(Math.m_rint__double(NumberFormat.m_getDecimalFormat__().m_parse__java_lang_String($CharSequences.m_toString__java_lang_CharSequence(object)))));
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
  IntegerParser.$clinit = () =>{};
  IntegerParser.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof IntegerParser;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Math = goog.module.get('java.lang.Math$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  ParseException = goog.module.get('java.text.ParseException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(IntegerParser, 'org.gwtproject.text.client.IntegerParser');

Parser.$markImplementor(IntegerParser);

/** @public {IntegerParser} */
IntegerParser.f_INSTANCE__org_gwtproject_text_client_IntegerParser_;

exports = IntegerParser; 
//# sourceMappingURL=IntegerParser.js.map