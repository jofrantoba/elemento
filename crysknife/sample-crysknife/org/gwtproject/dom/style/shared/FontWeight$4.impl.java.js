goog.module('org.gwtproject.dom.style.shared.FontWeight.$4$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FontWeight = goog.require('org.gwtproject.dom.style.shared.FontWeight$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends FontWeight {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$4}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_dom_style_shared_FontWeight_4__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_FontWeight_4__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_FontWeight__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "lighter";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {FontWeight} */ ($Casts.$to(arg0, FontWeight)));
 }
 /**
  * @public
  */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  FontWeight.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $4;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.dom.style.shared.FontWeight$4');

exports = $4; 
//# sourceMappingURL=FontWeight$4.js.map