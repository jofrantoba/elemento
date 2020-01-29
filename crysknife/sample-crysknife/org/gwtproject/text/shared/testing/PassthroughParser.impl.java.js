goog.module('org.gwtproject.text.shared.testing.PassthroughParser$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Parser = goog.require('org.gwtproject.text.shared.Parser$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');

/**
 * @implements {Parser<?string>}
  */
class PassthroughParser extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {Parser<?string>}
  * @public
  */
 static m_instance__() {
  PassthroughParser.$clinit();
  if ($Equality.$same(PassthroughParser.f_INSTANCE__org_gwtproject_text_shared_testing_PassthroughParser_, null)) {
   PassthroughParser.f_INSTANCE__org_gwtproject_text_shared_testing_PassthroughParser_ = PassthroughParser.$create__();
  }
  return PassthroughParser.f_INSTANCE__org_gwtproject_text_shared_testing_PassthroughParser_;
 }
 /**
  * @return {!PassthroughParser}
  * @public
  */
 static $create__() {
  PassthroughParser.$clinit();
  let $instance = new PassthroughParser();
  $instance.$ctor__org_gwtproject_text_shared_testing_PassthroughParser__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_text_shared_testing_PassthroughParser__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {(CharSequence|string)} object
  * @return {?string}
  * @public
  */
 m_parse__java_lang_CharSequence(object) {
  return $CharSequences.m_toString__java_lang_CharSequence(object);
 }
 /**
  * @public
  */
 static $clinit() {
  PassthroughParser.$clinit = () =>{};
  PassthroughParser.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PassthroughParser;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
 }
 
}
$Util.$setClassMetadata(PassthroughParser, 'org.gwtproject.text.shared.testing.PassthroughParser');

Parser.$markImplementor(PassthroughParser);

/** @public {PassthroughParser} */
PassthroughParser.f_INSTANCE__org_gwtproject_text_shared_testing_PassthroughParser_;

exports = PassthroughParser; 
//# sourceMappingURL=PassthroughParser.js.map