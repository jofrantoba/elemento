goog.module('org.gwtproject.dom.style.shared.Float.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Float = goog.require('org.gwtproject.dom.style.shared.Float$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends Float {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$2}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_dom_style_shared_Float_2__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_Float_2__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Float__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "right";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {Float} */ ($Casts.$to(arg0, Float)));
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  Float.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $2;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.dom.style.shared.Float$2');

exports = $2; 
//# sourceMappingURL=Float$2.js.map