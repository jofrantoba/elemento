goog.module('org.gwtproject.dom.client.Style.Clear$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Clear = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear$impl');

/**
 * @deprecated
  */
class Style_Clear extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!Style_Clear}
  * @public
  */
 static $create__() {
  Style_Clear.$clinit();
  let $instance = new Style_Clear();
  $instance.$ctor__org_gwtproject_dom_client_Style_Clear__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_dom_client_Style_Clear__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Clear}
  * @public
  */
 static get f_BOTH__org_gwtproject_dom_client_Style_Clear() {
  return (Style_Clear.$clinit(), Style_Clear.$f_BOTH__org_gwtproject_dom_client_Style_Clear);
 }
 /**
  * @return {Clear}
  * @public
  */
 static get f_LEFT__org_gwtproject_dom_client_Style_Clear() {
  return (Style_Clear.$clinit(), Style_Clear.$f_LEFT__org_gwtproject_dom_client_Style_Clear);
 }
 /**
  * @return {Clear}
  * @public
  */
 static get f_NONE__org_gwtproject_dom_client_Style_Clear() {
  return (Style_Clear.$clinit(), Style_Clear.$f_NONE__org_gwtproject_dom_client_Style_Clear);
 }
 /**
  * @return {Clear}
  * @public
  */
 static get f_RIGHT__org_gwtproject_dom_client_Style_Clear() {
  return (Style_Clear.$clinit(), Style_Clear.$f_RIGHT__org_gwtproject_dom_client_Style_Clear);
 }
 /**
  * @public
  */
 static $clinit() {
  Style_Clear.$clinit = () =>{};
  Style_Clear.$loadModules();
  j_l_Object.$clinit();
  Style_Clear.$f_BOTH__org_gwtproject_dom_client_Style_Clear = Clear.f_BOTH__org_gwtproject_dom_style_shared_Clear;
  Style_Clear.$f_LEFT__org_gwtproject_dom_client_Style_Clear = Clear.f_LEFT__org_gwtproject_dom_style_shared_Clear;
  Style_Clear.$f_NONE__org_gwtproject_dom_client_Style_Clear = Clear.f_NONE__org_gwtproject_dom_style_shared_Clear;
  Style_Clear.$f_RIGHT__org_gwtproject_dom_client_Style_Clear = Clear.f_RIGHT__org_gwtproject_dom_style_shared_Clear;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Style_Clear;
 }
 /**
  * @public
  */
 static $loadModules() {
  Clear = goog.module.get('org.gwtproject.dom.style.shared.Clear$impl');
 }
 
}
$Util.$setClassMetadata(Style_Clear, 'org.gwtproject.dom.client.Style$Clear');

/** @private {Clear} */
Style_Clear.$f_BOTH__org_gwtproject_dom_client_Style_Clear;
/** @private {Clear} */
Style_Clear.$f_LEFT__org_gwtproject_dom_client_Style_Clear;
/** @private {Clear} */
Style_Clear.$f_NONE__org_gwtproject_dom_client_Style_Clear;
/** @private {Clear} */
Style_Clear.$f_RIGHT__org_gwtproject_dom_client_Style_Clear;

exports = Style_Clear; 
//# sourceMappingURL=Style$Clear.js.map