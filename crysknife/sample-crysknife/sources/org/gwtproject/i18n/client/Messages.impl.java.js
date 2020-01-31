goog.module('org.gwtproject.i18n.client.Messages$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizableResource = goog.require('org.gwtproject.i18n.client.LocalizableResource$impl');

/**
 * @interface
 * @extends {LocalizableResource}
 */
class Messages {
 
 static $clinit() {
  Messages.$clinit = () =>{};
  Messages.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LocalizableResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Messages = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Messages, 'org.gwtproject.i18n.client.Messages');

Messages.$markImplementor(/** @type {Function} */ (Messages));

exports = Messages; 
//# sourceMappingURL=Messages.js.map