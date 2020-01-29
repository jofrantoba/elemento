goog.module('org.gwtproject.dom.style.shared.CssProperty.$49$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $49 extends CssProperty {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$49}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $49.$clinit();
  let $instance = new $49();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_49__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_CssProperty_49__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getJsName__() {
  return "lineHeight";
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
  $49.$clinit = () =>{};
  $49.$loadModules();
  CssProperty.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $49;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($49, 'org.gwtproject.dom.style.shared.CssProperty$49');

exports = $49; 
//# sourceMappingURL=CssProperty$49.js.map