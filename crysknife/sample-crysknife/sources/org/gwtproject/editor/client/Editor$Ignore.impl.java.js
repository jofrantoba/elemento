goog.module('org.gwtproject.editor.client.Editor.Ignore$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.client.Editor.Ignore.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Ignore {
 /** @return {Ignore} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Ignore.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Ignore.$clinit = () =>{};
  Ignore.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_client_Editor_Ignore = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_Editor_Ignore;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.Editor.Ignore.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Ignore, 'org.gwtproject.editor.client.Editor$Ignore');

Ignore.$markImplementor(/** @type {Function} */ (Ignore));

exports = Ignore; 
//# sourceMappingURL=Editor$Ignore.js.map