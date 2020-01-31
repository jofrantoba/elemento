goog.module('org.gwtproject.i18n.client.Messages.PluralCount$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class PluralCount {
 /** @abstract @return {Class<?>} */
 m_value__() {}
 
 static $clinit() {
  PluralCount.$clinit = () =>{};
  PluralCount.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Messages_PluralCount = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_PluralCount;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PluralCount, 'org.gwtproject.i18n.client.Messages$PluralCount');

PluralCount.$markImplementor(/** @type {Function} */ (PluralCount));

exports = PluralCount; 
//# sourceMappingURL=Messages$PluralCount.js.map