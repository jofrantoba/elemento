goog.module('org.gwtproject.dom.style.shared.CssProperty.$41$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $41 extends CssProperty {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$41}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $41.$clinit();
  let $instance = new $41();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_41__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_CssProperty_41__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getJsName__() {
  return "textAlign";
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
  $41.$clinit = () =>{};
  $41.$loadModules();
  CssProperty.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $41;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($41, 'org.gwtproject.dom.style.shared.CssProperty$41');

exports = $41; 
//# sourceMappingURL=CssProperty$41.js.map