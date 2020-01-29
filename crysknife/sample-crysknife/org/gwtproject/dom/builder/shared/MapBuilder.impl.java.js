goog.module('org.gwtproject.dom.builder.shared.MapBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<MapBuilder>}
 */
class MapBuilder {
 /**
  * @abstract
  * @param {?string} name
  * @return {MapBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @public
  */
 static $clinit() {
  MapBuilder.$clinit = () =>{};
  MapBuilder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ElementBuilderBase.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_MapBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_MapBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MapBuilder, 'org.gwtproject.dom.builder.shared.MapBuilder');

MapBuilder.$markImplementor(/** @type {Function} */ (MapBuilder));

exports = MapBuilder; 
//# sourceMappingURL=MapBuilder.js.map