goog.module('org.gwtproject.dom.style.shared.CssProperty.$20$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $20 extends CssProperty {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$20}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $20.$clinit();
  let $instance = new $20();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_20__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_CssProperty_20__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getJsName__() {
  return "marginLeft";
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
  $20.$clinit = () =>{};
  $20.$loadModules();
  CssProperty.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $20;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($20, 'org.gwtproject.dom.style.shared.CssProperty$20');

exports = $20; 
//# sourceMappingURL=CssProperty$20.js.map