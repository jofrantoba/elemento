goog.module('org.gwtproject.i18n.client.Messages.AlternateMessage$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class AlternateMessage {
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
  AlternateMessage.$clinit = () =>{};
  AlternateMessage.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Messages_AlternateMessage = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_AlternateMessage;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AlternateMessage, 'org.gwtproject.i18n.client.Messages$AlternateMessage');

AlternateMessage.$markImplementor(/** @type {Function} */ (AlternateMessage));

exports = AlternateMessage; 
//# sourceMappingURL=Messages$AlternateMessage.js.map