goog.module('org.gwtproject.editor.client.Editor.Path$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Path {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  Path.$clinit = () =>{};
  Path.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_client_Editor_Path = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_Editor_Path;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Path, 'org.gwtproject.editor.client.Editor$Path');

Path.$markImplementor(/** @type {Function} */ (Path));

exports = Path; 
//# sourceMappingURL=Editor$Path.js.map