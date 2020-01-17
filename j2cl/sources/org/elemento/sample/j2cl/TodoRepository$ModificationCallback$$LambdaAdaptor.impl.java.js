goog.module('org.elemento.sample.j2cl.TodoRepository.ModificationCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ModificationCallback = goog.require('org.elemento.sample.j2cl.TodoRepository.ModificationCallback$impl');

/**
 * @implements {ModificationCallback}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():void} */
  this.f_$$fn__org_elemento_sample_j2cl_TodoRepository_ModificationCallback_$LambdaAdaptor;
  this.$ctor__org_elemento_sample_j2cl_TodoRepository_ModificationCallback_$LambdaAdaptor__org_elemento_sample_j2cl_TodoRepository_ModificationCallback_$JsFunction(fn);
 }
 /**
  * @param {?function():void} fn
  * @public
  */
 $ctor__org_elemento_sample_j2cl_TodoRepository_ModificationCallback_$LambdaAdaptor__org_elemento_sample_j2cl_TodoRepository_ModificationCallback_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_elemento_sample_j2cl_TodoRepository_ModificationCallback_$LambdaAdaptor = fn;
 }
 /**
  * @public
  */
 m_execute__() {
  {
   let $function = this.f_$$fn__org_elemento_sample_j2cl_TodoRepository_ModificationCallback_$LambdaAdaptor;
   $function();
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.elemento.sample.j2cl.TodoRepository$ModificationCallback$$LambdaAdaptor');

ModificationCallback.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TodoRepository$ModificationCallback$$LambdaAdaptor.js.map