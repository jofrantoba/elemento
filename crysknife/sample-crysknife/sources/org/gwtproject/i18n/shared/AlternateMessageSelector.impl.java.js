goog.module('org.gwtproject.i18n.shared.AlternateMessageSelector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.i18n.shared.AlternateMessageSelector.$LambdaAdaptor$impl');
let AlternateForm = goog.forwardDeclare('org.gwtproject.i18n.shared.AlternateMessageSelector.AlternateForm$impl');

/**
 * @interface
 */
class AlternateMessageSelector {
 /**
  * @abstract
  * @param {?string} form
  * @return {boolean}
  * @public
  */
 m_isFormAcceptable__java_lang_String(form) {}
 /**
  * @param {?function(?string):boolean} fn
  * @return {AlternateMessageSelector}
  * @public
  */
 static $adapt(fn) {
  AlternateMessageSelector.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @return {AlternateForm}
  * @public
  */
 static get f_OTHER_FORM__org_gwtproject_i18n_shared_AlternateMessageSelector() {
  return (AlternateMessageSelector.$clinit(), AlternateMessageSelector.$f_OTHER_FORM__org_gwtproject_i18n_shared_AlternateMessageSelector);
 }
 /**
  * @public
  */
 static $clinit() {
  AlternateMessageSelector.$clinit = () =>{};
  AlternateMessageSelector.$loadModules();
  AlternateMessageSelector.$f_OTHER_FORM__org_gwtproject_i18n_shared_AlternateMessageSelector = AlternateForm.$create__java_lang_String__java_lang_String(AlternateMessageSelector.f_OTHER_FORM_NAME__org_gwtproject_i18n_shared_AlternateMessageSelector, "Default value if no other forms apply");
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_shared_AlternateMessageSelector = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_AlternateMessageSelector;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.i18n.shared.AlternateMessageSelector.$LambdaAdaptor$impl');
  AlternateForm = goog.module.get('org.gwtproject.i18n.shared.AlternateMessageSelector.AlternateForm$impl');
 }
 
}
$Util.$setClassMetadataForInterface(AlternateMessageSelector, 'org.gwtproject.i18n.shared.AlternateMessageSelector');

AlternateMessageSelector.$markImplementor(/** @type {Function} */ (AlternateMessageSelector));

/** @public {?string} @const */
AlternateMessageSelector.f_OTHER_FORM_NAME__org_gwtproject_i18n_shared_AlternateMessageSelector = "other";
/** @private {AlternateForm} */
AlternateMessageSelector.$f_OTHER_FORM__org_gwtproject_i18n_shared_AlternateMessageSelector;

exports = AlternateMessageSelector; 
//# sourceMappingURL=AlternateMessageSelector.js.map