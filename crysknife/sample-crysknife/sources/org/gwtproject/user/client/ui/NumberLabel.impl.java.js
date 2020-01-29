goog.module('org.gwtproject.user.client.ui.NumberLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueLabel = goog.require('org.gwtproject.user.client.ui.ValueLabel$impl');

let Number = goog.forwardDeclare('java.lang.Number$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let NumberFormatRenderer = goog.forwardDeclare('org.gwtproject.text.client.NumberFormatRenderer$impl');

/**
 * @template T
 * @extends {ValueLabel<T>}
  */
class NumberLabel extends ValueLabel {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'NumberLabel()'.
  * @template T
  * @return {!NumberLabel<T>}
  * @public
  */
 static $create__() {
  NumberLabel.$clinit();
  let $instance = new NumberLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_NumberLabel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberLabel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NumberLabel__() {
  this.$ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_text_shared_Renderer(NumberFormatRenderer.$create__());
 }
 /**
  * Factory method corresponding to constructor 'NumberLabel(NumberFormat)'.
  * @template T
  * @param {NumberFormat} format
  * @return {!NumberLabel<T>}
  * @public
  */
 static $create__org_gwtproject_i18n_client_NumberFormat(format) {
  NumberLabel.$clinit();
  let $instance = new NumberLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_NumberLabel__org_gwtproject_i18n_client_NumberFormat(format);
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberLabel(NumberFormat)'.
  * @param {NumberFormat} format
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NumberLabel__org_gwtproject_i18n_client_NumberFormat(format) {
  this.$ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_text_shared_Renderer(NumberFormatRenderer.$create__org_gwtproject_i18n_client_NumberFormat(format));
 }
 /**
  * @public
  */
 static $clinit() {
  NumberLabel.$clinit = () =>{};
  NumberLabel.$loadModules();
  ValueLabel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NumberLabel;
 }
 /**
  * @public
  */
 static $loadModules() {
  NumberFormatRenderer = goog.module.get('org.gwtproject.text.client.NumberFormatRenderer$impl');
 }
 
}
$Util.$setClassMetadata(NumberLabel, 'org.gwtproject.user.client.ui.NumberLabel');

exports = NumberLabel; 
//# sourceMappingURL=NumberLabel.js.map