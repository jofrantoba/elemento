goog.module('org.gwtproject.i18n.client.Messages.PluralCount$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class PluralCount {
 /**
  * @abstract
  * @return {Class<?>}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  PluralCount.$clinit = () =>{};
  PluralCount.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Messages_PluralCount = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_PluralCount;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PluralCount, 'org.gwtproject.i18n.client.Messages$PluralCount');

PluralCount.$markImplementor(/** @type {Function} */ (PluralCount));

exports = PluralCount; 
//# sourceMappingURL=Messages$PluralCount.js.map