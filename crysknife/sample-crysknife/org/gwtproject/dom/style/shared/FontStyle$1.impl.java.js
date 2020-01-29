goog.module('org.gwtproject.dom.style.shared.FontStyle.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FontStyle = goog.require('org.gwtproject.dom.style.shared.FontStyle$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends FontStyle {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$1}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_dom_style_shared_FontStyle_1__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_FontStyle_1__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_FontStyle__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "normal";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {FontStyle} */ ($Casts.$to(arg0, FontStyle)));
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  FontStyle.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.dom.style.shared.FontStyle$1');

exports = $1; 
//# sourceMappingURL=FontStyle$1.js.map