goog.module('org.gwtproject.user.client.ui.PopupPanel.PositionCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PositionCallback = goog.require('org.gwtproject.user.client.ui.PopupPanel.PositionCallback$impl');

/**
 * @implements {PositionCallback}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(number, number):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(number, number):void} */
  this.f_$$fn__org_gwtproject_user_client_ui_PopupPanel_PositionCallback_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_PopupPanel_PositionCallback_$LambdaAdaptor__org_gwtproject_user_client_ui_PopupPanel_PositionCallback_$JsFunction(fn);
 }
 /**
  * @param {?function(number, number):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PopupPanel_PositionCallback_$LambdaAdaptor__org_gwtproject_user_client_ui_PopupPanel_PositionCallback_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_PopupPanel_PositionCallback_$LambdaAdaptor = fn;
 }
 /**
  * @param {number} arg0
  * @param {number} arg1
  * @public
  */
 m_setPosition__int__int(arg0, arg1) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_PopupPanel_PositionCallback_$LambdaAdaptor;
   $function(arg0, arg1);
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.PopupPanel$PositionCallback$$LambdaAdaptor');

PositionCallback.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=PopupPanel$PositionCallback$$LambdaAdaptor.js.map