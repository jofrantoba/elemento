goog.module('org.jboss.elemento.sample.crysknife.TodoRepository.ModificationCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ModificationCallback = goog.require('org.jboss.elemento.sample.crysknife.TodoRepository.ModificationCallback$impl');

/**
 * @implements {ModificationCallback}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void}*/
  this.f_$$fn__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback_$LambdaAdaptor__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback_$LambdaAdaptor__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback_$JsFunction(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback_$LambdaAdaptor = fn;
 }
 
 m_execute__() {
  {
   let $function = this.f_$$fn__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback_$LambdaAdaptor;
   $function();
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.sample.crysknife.TodoRepository$ModificationCallback$$LambdaAdaptor');

ModificationCallback.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TodoRepository$ModificationCallback$$LambdaAdaptor.js.map