goog.module('org.gwtproject.i18n.client.PluralRule$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let PluralForm = goog.forwardDeclare('org.gwtproject.i18n.client.PluralRule.PluralForm$impl');

/**
 * @interface
 */
class PluralRule {
 /** @abstract @return {Array<PluralForm>} */
 m_pluralForms__() {}
 /** @abstract @return {number} */
 m_select__int(/** number */ n) {}
 
 static $clinit() {
  PluralRule.$clinit = () =>{};
  PluralRule.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_client_PluralRule = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_PluralRule;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PluralRule, 'org.gwtproject.i18n.client.PluralRule');

PluralRule.$markImplementor(/** @type {Function} */ (PluralRule));

exports = PluralRule; 
//# sourceMappingURL=PluralRule.js.map