goog.module('org.gwtproject.i18n.client.Messages.Offset$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Offset {
 /** @abstract @return {number} */
 m_value__() {}
 
 static $clinit() {
  Offset.$clinit = () =>{};
  Offset.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Messages_Offset = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_Offset;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Offset, 'org.gwtproject.i18n.client.Messages$Offset');

Offset.$markImplementor(/** @type {Function} */ (Offset));

exports = Offset; 
//# sourceMappingURL=Messages$Offset.js.map