goog.module('org.gwtproject.i18n.client.Messages.Example$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Example {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  Example.$clinit = () =>{};
  Example.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Messages_Example = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_Example;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Example, 'org.gwtproject.i18n.client.Messages$Example');

Example.$markImplementor(/** @type {Function} */ (Example));

exports = Example; 
//# sourceMappingURL=Messages$Example.js.map