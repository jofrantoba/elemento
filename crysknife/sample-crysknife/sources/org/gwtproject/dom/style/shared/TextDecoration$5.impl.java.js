goog.module('org.gwtproject.dom.style.shared.TextDecoration.$5$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextDecoration = goog.require('org.gwtproject.dom.style.shared.TextDecoration$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $5 extends TextDecoration {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$5}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_gwtproject_dom_style_shared_TextDecoration_5__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_TextDecoration_5__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TextDecoration__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "underline";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {TextDecoration} */ ($Casts.$to(arg0, TextDecoration)));
 }
 /**
  * @public
  */
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  TextDecoration.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $5;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($5, 'org.gwtproject.dom.style.shared.TextDecoration$5');

exports = $5; 
//# sourceMappingURL=TextDecoration$5.js.map