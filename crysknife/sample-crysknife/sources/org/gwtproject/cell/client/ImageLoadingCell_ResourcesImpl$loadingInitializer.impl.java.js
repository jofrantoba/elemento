goog.module('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl.loadingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageLoadingCell__ResourcesImpl = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');

class loadingInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!loadingInitializer}
  * @public
  */
 static $create__() {
  let $instance = new loadingInitializer();
  $instance.$ctor__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_loadingInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_loadingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  loadingInitializer.$clinit();
  return ImageLoadingCell__ResourcesImpl.f_loading__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  loadingInitializer.$clinit = () =>{};
  loadingInitializer.$loadModules();
  j_l_Object.$clinit();
  ImageLoadingCell__ResourcesImpl.f__instance0__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_.m_loadingInitializer___$p_org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof loadingInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  ImageLoadingCell__ResourcesImpl = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(loadingInitializer, 'org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl$loadingInitializer');

exports = loadingInitializer; 
//# sourceMappingURL=ImageLoadingCell_ResourcesImpl$loadingInitializer.js.map