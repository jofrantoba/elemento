goog.module('org.gwtproject.text.shared.Parser$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.text.shared.Parser.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Parser {
 /**
  * @abstract
  * @param {(CharSequence|string)} var1
  * @return {T}
  * @public
  */
 m_parse__java_lang_CharSequence(var1) {}
 /**
  * @template T
  * @param {?function((CharSequence|string)):T} fn
  * @return {Parser<T>}
  * @public
  */
 static $adapt(fn) {
  Parser.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  Parser.$clinit = () =>{};
  Parser.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_text_shared_Parser = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_text_shared_Parser;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.text.shared.Parser.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Parser, 'org.gwtproject.text.shared.Parser');

Parser.$markImplementor(/** @type {Function} */ (Parser));

exports = Parser; 
//# sourceMappingURL=Parser.js.map