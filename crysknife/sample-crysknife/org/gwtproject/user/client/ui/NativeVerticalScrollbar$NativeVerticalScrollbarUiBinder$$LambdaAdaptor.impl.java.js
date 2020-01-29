goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.NativeVerticalScrollbarUiBinder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeVerticalScrollbarUiBinder = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.NativeVerticalScrollbarUiBinder$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeVerticalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeVerticalScrollbarUiBinder}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(NativeVerticalScrollbar):Object} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(NativeVerticalScrollbar):Object} */
  this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinder_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinder_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinder_$JsFunction(fn);
 }
 /**
  * @param {?function(NativeVerticalScrollbar):Object} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinder_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinder_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinder_$LambdaAdaptor = fn;
 }
 /**
  * @param {NativeVerticalScrollbar} arg0
  * @return {Object}
  * @public
  */
 m_createAndBindUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar(arg0) {
  let /** ?function(NativeVerticalScrollbar):Object */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinder_$LambdaAdaptor, $function(arg0));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {Object}
  * @public
  */
 m_createAndBindUi__java_lang_Object(arg0) {
  return this.m_createAndBindUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar(/**@type {NativeVerticalScrollbar} */ ($Casts.$to(arg0, NativeVerticalScrollbar)));
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
 static $loadModules() {
  NativeVerticalScrollbar = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$NativeVerticalScrollbarUiBinder$$LambdaAdaptor');

NativeVerticalScrollbarUiBinder.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=NativeVerticalScrollbar$NativeVerticalScrollbarUiBinder$$LambdaAdaptor.js.map