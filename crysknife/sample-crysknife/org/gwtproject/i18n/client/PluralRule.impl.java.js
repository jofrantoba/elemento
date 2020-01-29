goog.module('org.gwtproject.i18n.client.PluralRule$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let PluralForm = goog.forwardDeclare('org.gwtproject.i18n.client.PluralRule.PluralForm$impl');

/**
 * @interface
 */
class PluralRule {
 /**
  * @abstract
  * @return {Array<PluralForm>}
  * @public
  */
 m_pluralForms__() {}
 /**
  * @abstract
  * @param {number} n
  * @return {number}
  * @public
  */
 m_select__int(n) {}
 /**
  * @public
  */
 static $clinit() {
  PluralRule.$clinit = () =>{};
  PluralRule.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_PluralRule = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_PluralRule;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PluralRule, 'org.gwtproject.i18n.client.PluralRule');

PluralRule.$markImplementor(/** @type {Function} */ (PluralRule));

exports = PluralRule; 
//# sourceMappingURL=PluralRule.js.map