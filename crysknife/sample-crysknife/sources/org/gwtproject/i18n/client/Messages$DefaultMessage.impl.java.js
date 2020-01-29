goog.module('org.gwtproject.i18n.client.Messages.DefaultMessage$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultMessage {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  DefaultMessage.$clinit = () =>{};
  DefaultMessage.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Messages_DefaultMessage = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_DefaultMessage;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultMessage, 'org.gwtproject.i18n.client.Messages$DefaultMessage');

DefaultMessage.$markImplementor(/** @type {Function} */ (DefaultMessage));

exports = DefaultMessage; 
//# sourceMappingURL=Messages$DefaultMessage.js.map