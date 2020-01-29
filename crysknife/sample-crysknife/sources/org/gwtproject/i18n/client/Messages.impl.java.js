goog.module('org.gwtproject.i18n.client.Messages$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizableResource = goog.require('org.gwtproject.i18n.client.LocalizableResource$impl');

/**
 * @interface
 * @extends {LocalizableResource}
 */
class Messages {
 /**
  * @public
  */
 static $clinit() {
  Messages.$clinit = () =>{};
  Messages.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  LocalizableResource.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Messages = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Messages, 'org.gwtproject.i18n.client.Messages');

Messages.$markImplementor(/** @type {Function} */ (Messages));

exports = Messages; 
//# sourceMappingURL=Messages.js.map