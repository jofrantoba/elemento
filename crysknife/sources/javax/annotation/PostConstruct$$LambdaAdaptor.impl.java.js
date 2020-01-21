goog.module('javax.annotation.PostConstruct.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const PostConstruct = goog.require('javax.annotation.PostConstruct$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {PostConstruct}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():Class<?>} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():Class<?>} */
  this.f_$$fn__javax_annotation_PostConstruct_$LambdaAdaptor;
  this.$ctor__javax_annotation_PostConstruct_$LambdaAdaptor__javax_annotation_PostConstruct_$JsFunction(fn);
 }
 /**
  * @param {?function():Class<?>} fn
  * @public
  */
 $ctor__javax_annotation_PostConstruct_$LambdaAdaptor__javax_annotation_PostConstruct_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_annotation_PostConstruct_$LambdaAdaptor = fn;
 }
 /**
  * @return {Class<?>}
  * @public
  */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__javax_annotation_PostConstruct_$LambdaAdaptor, $function());
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
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
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'javax.annotation.PostConstruct$$LambdaAdaptor');

PostConstruct.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=PostConstruct$$LambdaAdaptor.js.map