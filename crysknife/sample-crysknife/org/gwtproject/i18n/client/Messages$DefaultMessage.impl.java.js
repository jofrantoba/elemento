goog.module('org.gwtproject.i18n.client.Messages.DefaultMessage$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultMessage {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  DefaultMessage.$clinit = () =>{};
  DefaultMessage.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Messages_DefaultMessage = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_DefaultMessage;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultMessage, 'org.gwtproject.i18n.client.Messages$DefaultMessage');

DefaultMessage.$markImplementor(/** @type {Function} */ (DefaultMessage));

exports = DefaultMessage; 
//# sourceMappingURL=Messages$DefaultMessage.js.map