goog.module('org.gwtproject.dom.style.shared.Cursor.$17$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cursor = goog.require('org.gwtproject.dom.style.shared.Cursor$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $17 extends Cursor {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$17}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $17.$clinit();
  let $instance = new $17();
  $instance.$ctor__org_gwtproject_dom_style_shared_Cursor_17__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_Cursor_17__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "col-resize";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {Cursor} */ ($Casts.$to(arg0, Cursor)));
 }
 /**
  * @public
  */
 static $clinit() {
  $17.$clinit = () =>{};
  $17.$loadModules();
  Cursor.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $17;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($17, 'org.gwtproject.dom.style.shared.Cursor$17');

exports = $17; 
//# sourceMappingURL=Cursor$17.js.map