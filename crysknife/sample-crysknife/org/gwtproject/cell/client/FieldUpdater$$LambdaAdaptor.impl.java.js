goog.module('org.gwtproject.cell.client.FieldUpdater.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FieldUpdater = goog.require('org.gwtproject.cell.client.FieldUpdater$impl');

/**
 * @template T, C
 * @implements {FieldUpdater<T, C>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(number, T, C):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(number, T, C):void} */
  this.f_$$fn__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor;
  this.$ctor__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor__org_gwtproject_cell_client_FieldUpdater_$JsFunction(fn);
 }
 /**
  * @param {?function(number, T, C):void} fn
  * @public
  */
 $ctor__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor__org_gwtproject_cell_client_FieldUpdater_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor = fn;
 }
 /**
  * @param {number} arg0
  * @param {T} arg1
  * @param {C} arg2
  * @public
  */
 m_update__int__java_lang_Object__java_lang_Object(arg0, arg1, arg2) {
  {
   let $function = this.f_$$fn__org_gwtproject_cell_client_FieldUpdater_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.cell.client.FieldUpdater$$LambdaAdaptor');

FieldUpdater.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FieldUpdater$$LambdaAdaptor.js.map