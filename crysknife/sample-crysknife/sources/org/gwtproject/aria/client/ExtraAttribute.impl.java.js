goog.module('org.gwtproject.aria.client.ExtraAttribute$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Attribute = goog.forwardDeclare('org.gwtproject.aria.client.Attribute$impl');
let PrimitiveValueAttribute = goog.forwardDeclare('org.gwtproject.aria.client.PrimitiveValueAttribute$impl');

class ExtraAttribute extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ExtraAttribute}
  * @public
  */
 static $create__() {
  let $instance = new ExtraAttribute();
  $instance.$ctor__org_gwtproject_aria_client_ExtraAttribute__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_aria_client_ExtraAttribute__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Attribute<Integer>}
  * @public
  */
 static get f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute() {
  return (ExtraAttribute.$clinit(), ExtraAttribute.$f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute);
 }
 /**
  * @public
  */
 static $clinit() {
  ExtraAttribute.$clinit = () =>{};
  ExtraAttribute.$loadModules();
  j_l_Object.$clinit();
  ExtraAttribute.$f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute = /**@type {!PrimitiveValueAttribute<Integer>} */ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("tabIndex", ""));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ExtraAttribute;
 }
 /**
  * @public
  */
 static $loadModules() {
  PrimitiveValueAttribute = goog.module.get('org.gwtproject.aria.client.PrimitiveValueAttribute$impl');
 }
 
}
$Util.$setClassMetadata(ExtraAttribute, 'org.gwtproject.aria.client.ExtraAttribute');

/** @private {Attribute<Integer>} */
ExtraAttribute.$f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute;

exports = ExtraAttribute; 
//# sourceMappingURL=ExtraAttribute.js.map