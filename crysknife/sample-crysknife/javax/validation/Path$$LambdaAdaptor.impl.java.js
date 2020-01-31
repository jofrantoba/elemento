goog.module('javax.validation.Path.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Path = goog.require('javax.validation.Path$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Node = goog.forwardDeclare('javax.validation.Path.Node$impl');

/**
 * @implements {Path}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Iterator<Node> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Iterator<Node>}*/
  this.f_$$fn__javax_validation_Path_$LambdaAdaptor;
  this.$ctor__javax_validation_Path_$LambdaAdaptor__javax_validation_Path_$JsFunction(fn);
 }
 
 $ctor__javax_validation_Path_$LambdaAdaptor__javax_validation_Path_$JsFunction(/** ?function():Iterator<Node> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_validation_Path_$LambdaAdaptor = fn;
 }
 /** @return {Iterator<Node>} */
 m_iterator__() {
  let /** ?function():Iterator<Node> */ $function;
  return ($function = this.f_$$fn__javax_validation_Path_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Node>} */
 m_spliterator__() {
  return /**@type {Spliterator<Node>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
 }
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'javax.validation.Path$$LambdaAdaptor');

Path.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Path$$LambdaAdaptor.js.map