goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Binder = goog.require('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder$impl');

let ValueBoxEditorDecorator = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Binder}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ValueBoxEditorDecorator<?>):Widget} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ValueBoxEditorDecorator<?>):Widget} */
  this.f_$$fn__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder_$LambdaAdaptor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder_$JsFunction(fn);
 }
 /**
  * @param {?function(ValueBoxEditorDecorator<?>):Widget} fn
  * @public
  */
 $ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder_$LambdaAdaptor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder_$LambdaAdaptor = fn;
 }
 /**
  * @param {ValueBoxEditorDecorator<?>} arg0
  * @return {Widget}
  * @public
  */
 m_createAndBindUi__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator(arg0) {
  let /** ?function(ValueBoxEditorDecorator<?>):Widget */ $function;
  return ($function = this.f_$$fn__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder_$LambdaAdaptor, $function(arg0));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {Widget}
  * @public
  */
 m_createAndBindUi__java_lang_Object(arg0) {
  return this.m_createAndBindUi__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator(/**@type {ValueBoxEditorDecorator<*>} */ ($Casts.$to(arg0, ValueBoxEditorDecorator)));
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
  ValueBoxEditorDecorator = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$Binder$$LambdaAdaptor');

Binder.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ValueBoxEditorDecorator$Binder$$LambdaAdaptor.js.map