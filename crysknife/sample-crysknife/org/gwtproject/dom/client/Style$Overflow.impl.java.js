goog.module('org.gwtproject.dom.client.Style.Overflow$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');

/**
 * @deprecated
  */
class Style_Overflow extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!Style_Overflow}
  * @public
  */
 static $create__() {
  Style_Overflow.$clinit();
  let $instance = new Style_Overflow();
  $instance.$ctor__org_gwtproject_dom_client_Style_Overflow__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_dom_client_Style_Overflow__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Overflow}
  * @public
  */
 static get f_VISIBLE__org_gwtproject_dom_client_Style_Overflow() {
  return (Style_Overflow.$clinit(), Style_Overflow.$f_VISIBLE__org_gwtproject_dom_client_Style_Overflow);
 }
 /**
  * @return {Overflow}
  * @public
  */
 static get f_HIDDEN__org_gwtproject_dom_client_Style_Overflow() {
  return (Style_Overflow.$clinit(), Style_Overflow.$f_HIDDEN__org_gwtproject_dom_client_Style_Overflow);
 }
 /**
  * @return {Overflow}
  * @public
  */
 static get f_SCROLL__org_gwtproject_dom_client_Style_Overflow() {
  return (Style_Overflow.$clinit(), Style_Overflow.$f_SCROLL__org_gwtproject_dom_client_Style_Overflow);
 }
 /**
  * @return {Overflow}
  * @public
  */
 static get f_AUTO__org_gwtproject_dom_client_Style_Overflow() {
  return (Style_Overflow.$clinit(), Style_Overflow.$f_AUTO__org_gwtproject_dom_client_Style_Overflow);
 }
 /**
  * @public
  */
 static $clinit() {
  Style_Overflow.$clinit = () =>{};
  Style_Overflow.$loadModules();
  j_l_Object.$clinit();
  Style_Overflow.$f_VISIBLE__org_gwtproject_dom_client_Style_Overflow = Overflow.f_VISIBLE__org_gwtproject_dom_style_shared_Overflow;
  Style_Overflow.$f_HIDDEN__org_gwtproject_dom_client_Style_Overflow = Overflow.f_HIDDEN__org_gwtproject_dom_style_shared_Overflow;
  Style_Overflow.$f_SCROLL__org_gwtproject_dom_client_Style_Overflow = Overflow.f_SCROLL__org_gwtproject_dom_style_shared_Overflow;
  Style_Overflow.$f_AUTO__org_gwtproject_dom_client_Style_Overflow = Overflow.f_AUTO__org_gwtproject_dom_style_shared_Overflow;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Style_Overflow;
 }
 /**
  * @public
  */
 static $loadModules() {
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
 }
 
}
$Util.$setClassMetadata(Style_Overflow, 'org.gwtproject.dom.client.Style$Overflow');

/** @private {Overflow} */
Style_Overflow.$f_VISIBLE__org_gwtproject_dom_client_Style_Overflow;
/** @private {Overflow} */
Style_Overflow.$f_HIDDEN__org_gwtproject_dom_client_Style_Overflow;
/** @private {Overflow} */
Style_Overflow.$f_SCROLL__org_gwtproject_dom_client_Style_Overflow;
/** @private {Overflow} */
Style_Overflow.$f_AUTO__org_gwtproject_dom_client_Style_Overflow;

exports = Style_Overflow; 
//# sourceMappingURL=Style$Overflow.js.map