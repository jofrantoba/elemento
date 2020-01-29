goog.module('org.gwtproject.i18n.client.Messages.Offset$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Offset {
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  Offset.$clinit = () =>{};
  Offset.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Messages_Offset = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_Offset;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Offset, 'org.gwtproject.i18n.client.Messages$Offset');

Offset.$markImplementor(/** @type {Function} */ (Offset));

exports = Offset; 
//# sourceMappingURL=Messages$Offset.js.map