goog.module('org.gwtproject.i18n.client.Messages.PluralText$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 * @deprecated
 */
class PluralText {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  PluralText.$clinit = () =>{};
  PluralText.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Messages_PluralText = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_PluralText;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PluralText, 'org.gwtproject.i18n.client.Messages$PluralText');

PluralText.$markImplementor(/** @type {Function} */ (PluralText));

exports = PluralText; 
//# sourceMappingURL=Messages$PluralText.js.map