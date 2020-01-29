goog.module('org.gwtproject.dom.style.shared.CssProperty.$22$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $22 extends CssProperty {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$22}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $22.$clinit();
  let $instance = new $22();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_22__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_CssProperty_22__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getJsName__() {
  return "margin";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {CssProperty} */ ($Casts.$to(arg0, CssProperty)));
 }
 /**
  * @public
  */
 static $clinit() {
  $22.$clinit = () =>{};
  $22.$loadModules();
  CssProperty.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $22;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($22, 'org.gwtproject.dom.style.shared.CssProperty$22');

exports = $22; 
//# sourceMappingURL=CssProperty$22.js.map