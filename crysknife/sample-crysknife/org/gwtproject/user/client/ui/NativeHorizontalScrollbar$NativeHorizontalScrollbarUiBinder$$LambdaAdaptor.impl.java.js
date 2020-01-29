goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.NativeHorizontalScrollbarUiBinder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeHorizontalScrollbarUiBinder = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.NativeHorizontalScrollbarUiBinder$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeHorizontalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeHorizontalScrollbarUiBinder}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(NativeHorizontalScrollbar):Object} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(NativeHorizontalScrollbar):Object} */
  this.f_$$fn__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder_$JsFunction(fn);
 }
 /**
  * @param {?function(NativeHorizontalScrollbar):Object} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder_$LambdaAdaptor = fn;
 }
 /**
  * @param {NativeHorizontalScrollbar} arg0
  * @return {Object}
  * @public
  */
 m_createAndBindUi__org_gwtproject_user_client_ui_NativeHorizontalScrollbar(arg0) {
  let /** ?function(NativeHorizontalScrollbar):Object */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder_$LambdaAdaptor, $function(arg0));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {Object}
  * @public
  */
 m_createAndBindUi__java_lang_Object(arg0) {
  return this.m_createAndBindUi__org_gwtproject_user_client_ui_NativeHorizontalScrollbar(/**@type {NativeHorizontalScrollbar} */ ($Casts.$to(arg0, NativeHorizontalScrollbar)));
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
  NativeHorizontalScrollbar = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar$NativeHorizontalScrollbarUiBinder$$LambdaAdaptor');

NativeHorizontalScrollbarUiBinder.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=NativeHorizontalScrollbar$NativeHorizontalScrollbarUiBinder$$LambdaAdaptor.js.map