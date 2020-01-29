goog.module('org.gwtproject.cell.client.ActionCell.Delegate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Delegate = goog.require('org.gwtproject.cell.client.ActionCell.Delegate$impl');

/**
 * @template T
 * @implements {Delegate<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(T):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(T):void} */
  this.f_$$fn__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor;
  this.$ctor__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor__org_gwtproject_cell_client_ActionCell_Delegate_$JsFunction(fn);
 }
 /**
  * @param {?function(T):void} fn
  * @public
  */
 $ctor__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor__org_gwtproject_cell_client_ActionCell_Delegate_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor = fn;
 }
 /**
  * @param {T} arg0
  * @public
  */
 m_execute__java_lang_Object(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_cell_client_ActionCell_Delegate_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.cell.client.ActionCell$Delegate$$LambdaAdaptor');

Delegate.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ActionCell$Delegate$$LambdaAdaptor.js.map