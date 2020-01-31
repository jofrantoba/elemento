goog.module('org.gwtproject.text.shared.Parser$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.text.shared.Parser.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Parser {
 /** @abstract @return {T} */
 m_parse__java_lang_CharSequence(/** (CharSequence|string) */ var1) {}
 /** @template T @return {Parser<T>} */
 static $adapt(/** ?function((CharSequence|string)):T */ fn) {
  Parser.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  Parser.$clinit = () =>{};
  Parser.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_text_shared_Parser = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_text_shared_Parser;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.text.shared.Parser.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Parser, 'org.gwtproject.text.shared.Parser');

Parser.$markImplementor(/** @type {Function} */ (Parser));

exports = Parser; 
//# sourceMappingURL=Parser.js.map