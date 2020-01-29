goog.module('org.gwtproject.i18n.client.Messages.PluralText$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 * @deprecated
 */
class PluralText {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  PluralText.$clinit = () =>{};
  PluralText.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Messages_PluralText = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_PluralText;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PluralText, 'org.gwtproject.i18n.client.Messages$PluralText');

PluralText.$markImplementor(/** @type {Function} */ (PluralText));

exports = PluralText; 
//# sourceMappingURL=Messages$PluralText.js.map