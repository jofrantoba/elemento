goog.module('org.gwtproject.cell.client.FieldUpdater.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FieldUpdater = goog.require('org.gwtproject.cell.client.FieldUpdater$impl');

/**
 * @template T, C
 * @implements {FieldUpdater<T, C>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(number, T, C):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number, T, C):void}*/
  this.f_$$fn__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor;
  this.$ctor__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor__org_gwtproject_cell_client_FieldUpdater_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor__org_gwtproject_cell_client_FieldUpdater_$JsFunction(/** ?function(number, T, C):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor = fn;
 }
 
 m_update__int__java_lang_Object__java_lang_Object(/** number */ arg0, /** T */ arg1, /** C */ arg2) {
  {
   let $function = this.f_$$fn__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.cell.client.FieldUpdater$$LambdaAdaptor');

FieldUpdater.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FieldUpdater$$LambdaAdaptor.js.map