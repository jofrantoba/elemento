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
 /**
  * @param {?function():Iterator<Node>} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():Iterator<Node>} */
  this.f_$$fn__javax_validation_Path_$LambdaAdaptor;
  this.$ctor__javax_validation_Path_$LambdaAdaptor__javax_validation_Path_$JsFunction(fn);
 }
 /**
  * @param {?function():Iterator<Node>} fn
  * @public
  */
 $ctor__javax_validation_Path_$LambdaAdaptor__javax_validation_Path_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_validation_Path_$LambdaAdaptor = fn;
 }
 /**
  * @return {Iterator<Node>}
  * @public
  */
 m_iterator__() {
  let /** ?function():Iterator<Node> */ $function;
  return ($function = this.f_$$fn__javax_validation_Path_$LambdaAdaptor, $function());
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Node>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Node>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
 }
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'javax.validation.Path$$LambdaAdaptor');

Path.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Path$$LambdaAdaptor.js.map