goog.module('org.gwtproject.cell.client.ValueUpdater.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueUpdater = goog.require('org.gwtproject.cell.client.ValueUpdater$impl');

/**
 * @template C
 * @implements {ValueUpdater<C>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(C):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(C):void} */
  this.f_$$fn__org_gwtproject_cell_client_ValueUpdater_$LambdaAdaptor;
  this.$ctor__org_gwtproject_cell_client_ValueUpdater_$LambdaAdaptor__org_gwtproject_cell_client_ValueUpdater_$JsFunction(fn);
 }
 /**
  * @param {?function(C):void} fn
  * @public
  */
 $ctor__org_gwtproject_cell_client_ValueUpdater_$LambdaAdaptor__org_gwtproject_cell_client_ValueUpdater_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_cell_client_ValueUpdater_$LambdaAdaptor = fn;
 }
 /**
  * @param {C} arg0
  * @public
  */
 m_update__java_lang_Object(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_cell_client_ValueUpdater_$LambdaAdaptor;
   $function(arg0);
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.cell.client.ValueUpdater$$LambdaAdaptor');

ValueUpdater.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ValueUpdater$$LambdaAdaptor.js.map