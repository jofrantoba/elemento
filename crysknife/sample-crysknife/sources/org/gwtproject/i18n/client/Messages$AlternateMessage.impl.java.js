goog.module('org.gwtproject.i18n.client.Messages.AlternateMessage$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class AlternateMessage {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  AlternateMessage.$clinit = () =>{};
  AlternateMessage.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Messages_AlternateMessage = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_AlternateMessage;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AlternateMessage, 'org.gwtproject.i18n.client.Messages$AlternateMessage');

AlternateMessage.$markImplementor(/** @type {Function} */ (AlternateMessage));

exports = AlternateMessage; 
//# sourceMappingURL=Messages$AlternateMessage.js.map