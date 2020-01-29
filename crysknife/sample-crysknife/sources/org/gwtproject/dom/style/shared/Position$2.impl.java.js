goog.module('org.gwtproject.dom.style.shared.Position.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Position = goog.require('org.gwtproject.dom.style.shared.Position$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends Position {
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
  $instance.$ctor__org_gwtproject_dom_style_shared_Position_2__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_Position_2__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Position__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "relative";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {Position} */ ($Casts.$to(arg0, Position)));
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  Position.$clinit();
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
$Util.$setClassMetadata($2, 'org.gwtproject.dom.style.shared.Position$2');

exports = $2; 
//# sourceMappingURL=Position$2.js.map