goog.module('org.gwtproject.cell.client.ActionCell.Delegate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Delegate = goog.require('org.gwtproject.cell.client.ActionCell.Delegate$impl');

/**
 * @template T
 * @implements {Delegate<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(T):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):void}*/
  this.f_$$fn__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor;
  this.$ctor__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor__org_gwtproject_cell_client_ActionCell_Delegate_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor__org_gwtproject_cell_client_ActionCell_Delegate_$JsFunction(/** ?function(T):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor = fn;
 }
 
 m_execute__java_lang_Object(/** T */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor;
   $function(arg0);
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.cell.client.ActionCell$Delegate$$LambdaAdaptor');

Delegate.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ActionCell$Delegate$$LambdaAdaptor.js.map