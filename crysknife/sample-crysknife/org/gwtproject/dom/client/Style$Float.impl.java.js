goog.module('org.gwtproject.dom.client.Style.Float$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Float = goog.forwardDeclare('org.gwtproject.dom.style.shared.Float$impl');

/**
 * @deprecated
  */
class Style_Float extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!Style_Float}
  * @public
  */
 static $create__() {
  Style_Float.$clinit();
  let $instance = new Style_Float();
  $instance.$ctor__org_gwtproject_dom_client_Style_Float__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_dom_client_Style_Float__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Float}
  * @public
  */
 static get f_LEFT__org_gwtproject_dom_client_Style_Float() {
  return (Style_Float.$clinit(), Style_Float.$f_LEFT__org_gwtproject_dom_client_Style_Float);
 }
 /**
  * @return {Float}
  * @public
  */
 static get f_RIGHT__org_gwtproject_dom_client_Style_Float() {
  return (Style_Float.$clinit(), Style_Float.$f_RIGHT__org_gwtproject_dom_client_Style_Float);
 }
 /**
  * @return {Float}
  * @public
  */
 static get f_NONE__org_gwtproject_dom_client_Style_Float() {
  return (Style_Float.$clinit(), Style_Float.$f_NONE__org_gwtproject_dom_client_Style_Float);
 }
 /**
  * @public
  */
 static $clinit() {
  Style_Float.$clinit = () =>{};
  Style_Float.$loadModules();
  j_l_Object.$clinit();
  Style_Float.$f_LEFT__org_gwtproject_dom_client_Style_Float = Float.f_LEFT__org_gwtproject_dom_style_shared_Float;
  Style_Float.$f_RIGHT__org_gwtproject_dom_client_Style_Float = Float.f_RIGHT__org_gwtproject_dom_style_shared_Float;
  Style_Float.$f_NONE__org_gwtproject_dom_client_Style_Float = Float.f_NONE__org_gwtproject_dom_style_shared_Float;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Style_Float;
 }
 /**
  * @public
  */
 static $loadModules() {
  Float = goog.module.get('org.gwtproject.dom.style.shared.Float$impl');
 }
 
}
$Util.$setClassMetadata(Style_Float, 'org.gwtproject.dom.client.Style$Float');

/** @private {Float} */
Style_Float.$f_LEFT__org_gwtproject_dom_client_Style_Float;
/** @private {Float} */
Style_Float.$f_RIGHT__org_gwtproject_dom_client_Style_Float;
/** @private {Float} */
Style_Float.$f_NONE__org_gwtproject_dom_client_Style_Float;

exports = Style_Float; 
//# sourceMappingURL=Style$Float.js.map