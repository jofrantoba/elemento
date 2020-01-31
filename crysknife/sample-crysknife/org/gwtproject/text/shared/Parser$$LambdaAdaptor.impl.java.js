goog.module('org.gwtproject.text.shared.Parser.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Parser = goog.require('org.gwtproject.text.shared.Parser$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');

/**
 * @template T
 * @implements {Parser<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function((CharSequence|string)):T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function((CharSequence|string)):T}*/
  this.f_$$fn__org_gwtproject_text_shared_Parser_$LambdaAdaptor;
  this.$ctor__org_gwtproject_text_shared_Parser_$LambdaAdaptor__org_gwtproject_text_shared_Parser_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_text_shared_Parser_$LambdaAdaptor__org_gwtproject_text_shared_Parser_$JsFunction(/** ?function((CharSequence|string)):T */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_text_shared_Parser_$LambdaAdaptor = fn;
 }
 /** @return {T} */
 m_parse__java_lang_CharSequence(/** (CharSequence|string) */ arg0) {
  let /** ?function((CharSequence|string)):T */ $function;
  return ($function = this.f_$$fn__org_gwtproject_text_shared_Parser_$LambdaAdaptor, $function(arg0));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.text.shared.Parser$$LambdaAdaptor');

Parser.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Parser$$LambdaAdaptor.js.map