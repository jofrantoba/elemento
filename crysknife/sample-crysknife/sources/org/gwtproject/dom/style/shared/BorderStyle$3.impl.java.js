goog.module('org.gwtproject.dom.style.shared.BorderStyle.$3$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BorderStyle = goog.require('org.gwtproject.dom.style.shared.BorderStyle$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends BorderStyle {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$3}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_dom_style_shared_BorderStyle_3__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_BorderStyle_3__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_BorderStyle__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "dashed";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {BorderStyle} */ ($Casts.$to(arg0, BorderStyle)));
 }
 /**
  * @public
  */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  BorderStyle.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $3;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.dom.style.shared.BorderStyle$3');

exports = $3; 
//# sourceMappingURL=BorderStyle$3.js.map