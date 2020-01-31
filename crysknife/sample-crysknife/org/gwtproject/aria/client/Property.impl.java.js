goog.module('org.gwtproject.aria.client.Property$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Number = goog.forwardDeclare('java.lang.Number$impl');
let AriaValueAttribute = goog.forwardDeclare('org.gwtproject.aria.client.AriaValueAttribute$impl');
let Attribute = goog.forwardDeclare('org.gwtproject.aria.client.Attribute$impl');
let AutocompleteValue = goog.forwardDeclare('org.gwtproject.aria.client.AutocompleteValue$impl');
let DropeffectValue = goog.forwardDeclare('org.gwtproject.aria.client.DropeffectValue$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let LiveValue = goog.forwardDeclare('org.gwtproject.aria.client.LiveValue$impl');
let OrientationValue = goog.forwardDeclare('org.gwtproject.aria.client.OrientationValue$impl');
let PrimitiveValueAttribute = goog.forwardDeclare('org.gwtproject.aria.client.PrimitiveValueAttribute$impl');
let RelevantValue = goog.forwardDeclare('org.gwtproject.aria.client.RelevantValue$impl');
let SortValue = goog.forwardDeclare('org.gwtproject.aria.client.SortValue$impl');

class Property extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Property} */
 static $create__() {
  let $instance = new Property();
  $instance.$ctor__org_gwtproject_aria_client_Property__();
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_Property__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Attribute<Id>} */
 static get f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<?boolean>} */
 static get f_ATOMIC__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_ATOMIC__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<AutocompleteValue>} */
 static get f_AUTOCOMPLETE__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_AUTOCOMPLETE__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<Id>} */
 static get f_CONTROLS__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_CONTROLS__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<Id>} */
 static get f_DESCRIBEDBY__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_DESCRIBEDBY__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<DropeffectValue>} */
 static get f_DROPEFFECT__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_DROPEFFECT__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<Id>} */
 static get f_FLOWTO__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_FLOWTO__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<?boolean>} */
 static get f_HASPOPUP__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_HASPOPUP__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<?string>} */
 static get f_LABEL__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_LABEL__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<Id>} */
 static get f_LABELLEDBY__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_LABELLEDBY__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<Integer>} */
 static get f_LEVEL__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_LEVEL__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<LiveValue>} */
 static get f_LIVE__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_LIVE__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<?boolean>} */
 static get f_MULTILINE__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_MULTILINE__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<?boolean>} */
 static get f_MULTISELECTABLE__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_MULTISELECTABLE__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<OrientationValue>} */
 static get f_ORIENTATION__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_ORIENTATION__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<Id>} */
 static get f_OWNS__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_OWNS__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<Integer>} */
 static get f_POSINSET__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_POSINSET__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<?boolean>} */
 static get f_READONLY__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_READONLY__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<RelevantValue>} */
 static get f_RELEVANT__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_RELEVANT__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<?boolean>} */
 static get f_REQUIRED__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_REQUIRED__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<Integer>} */
 static get f_SETSIZE__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_SETSIZE__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<SortValue>} */
 static get f_SORT__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_SORT__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<(Number|number)>} */
 static get f_VALUEMAX__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_VALUEMAX__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<(Number|number)>} */
 static get f_VALUEMIN__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_VALUEMIN__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<(Number|number)>} */
 static get f_VALUENOW__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_VALUENOW__org_gwtproject_aria_client_Property);
 }
 /** @return {Attribute<?string>} */
 static get f_VALUETEXT__org_gwtproject_aria_client_Property() {
  return (Property.$clinit(), Property.$f_VALUETEXT__org_gwtproject_aria_client_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  j_l_Object.$clinit();
  Property.$f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<Id>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-activedescendant", ""));
  Property.$f_ATOMIC__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<?boolean>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-atomic", "false"));
  Property.$f_AUTOCOMPLETE__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<AutocompleteValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-autocomplete", "none"));
  Property.$f_CONTROLS__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<Id>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-controls", ""));
  Property.$f_DESCRIBEDBY__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<Id>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-describedby", ""));
  Property.$f_DROPEFFECT__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<DropeffectValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-dropeffect", "none"));
  Property.$f_FLOWTO__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<Id>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-flowto", ""));
  Property.$f_HASPOPUP__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<?boolean>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-haspopup", "false"));
  Property.$f_LABEL__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<?string>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-label", ""));
  Property.$f_LABELLEDBY__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<Id>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-labelledby", ""));
  Property.$f_LEVEL__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<Integer>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-level", ""));
  Property.$f_LIVE__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<LiveValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-live", "off"));
  Property.$f_MULTILINE__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<?boolean>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-multiline", "false"));
  Property.$f_MULTISELECTABLE__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<?boolean>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-multiselectable", "false"));
  Property.$f_ORIENTATION__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<OrientationValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-orientation", "vertical"));
  Property.$f_OWNS__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<Id>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-owns", ""));
  Property.$f_POSINSET__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<Integer>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-posinset", ""));
  Property.$f_READONLY__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<?boolean>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-readonly", "false"));
  Property.$f_RELEVANT__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<RelevantValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-relevant", "additions text"));
  Property.$f_REQUIRED__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<?boolean>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-required", "false"));
  Property.$f_SETSIZE__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<Integer>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-setsize", ""));
  Property.$f_SORT__org_gwtproject_aria_client_Property = /**@type {!AriaValueAttribute<SortValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-sort", "none"));
  Property.$f_VALUEMAX__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<(Number|number)>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-valuemax", ""));
  Property.$f_VALUEMIN__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<(Number|number)>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-valuemin", ""));
  Property.$f_VALUENOW__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<(Number|number)>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-valuenow", ""));
  Property.$f_VALUETEXT__org_gwtproject_aria_client_Property = /**@type {!PrimitiveValueAttribute<?string>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-valuetext", ""));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Property;
 }
 
 static $loadModules() {
  AriaValueAttribute = goog.module.get('org.gwtproject.aria.client.AriaValueAttribute$impl');
  PrimitiveValueAttribute = goog.module.get('org.gwtproject.aria.client.PrimitiveValueAttribute$impl');
 }
 
}
$Util.$setClassMetadata(Property, 'org.gwtproject.aria.client.Property');

/**@private {Attribute<Id>}*/
Property.$f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property;
/**@private {Attribute<?boolean>}*/
Property.$f_ATOMIC__org_gwtproject_aria_client_Property;
/**@private {Attribute<AutocompleteValue>}*/
Property.$f_AUTOCOMPLETE__org_gwtproject_aria_client_Property;
/**@private {Attribute<Id>}*/
Property.$f_CONTROLS__org_gwtproject_aria_client_Property;
/**@private {Attribute<Id>}*/
Property.$f_DESCRIBEDBY__org_gwtproject_aria_client_Property;
/**@private {Attribute<DropeffectValue>}*/
Property.$f_DROPEFFECT__org_gwtproject_aria_client_Property;
/**@private {Attribute<Id>}*/
Property.$f_FLOWTO__org_gwtproject_aria_client_Property;
/**@private {Attribute<?boolean>}*/
Property.$f_HASPOPUP__org_gwtproject_aria_client_Property;
/**@private {Attribute<?string>}*/
Property.$f_LABEL__org_gwtproject_aria_client_Property;
/**@private {Attribute<Id>}*/
Property.$f_LABELLEDBY__org_gwtproject_aria_client_Property;
/**@private {Attribute<Integer>}*/
Property.$f_LEVEL__org_gwtproject_aria_client_Property;
/**@private {Attribute<LiveValue>}*/
Property.$f_LIVE__org_gwtproject_aria_client_Property;
/**@private {Attribute<?boolean>}*/
Property.$f_MULTILINE__org_gwtproject_aria_client_Property;
/**@private {Attribute<?boolean>}*/
Property.$f_MULTISELECTABLE__org_gwtproject_aria_client_Property;
/**@private {Attribute<OrientationValue>}*/
Property.$f_ORIENTATION__org_gwtproject_aria_client_Property;
/**@private {Attribute<Id>}*/
Property.$f_OWNS__org_gwtproject_aria_client_Property;
/**@private {Attribute<Integer>}*/
Property.$f_POSINSET__org_gwtproject_aria_client_Property;
/**@private {Attribute<?boolean>}*/
Property.$f_READONLY__org_gwtproject_aria_client_Property;
/**@private {Attribute<RelevantValue>}*/
Property.$f_RELEVANT__org_gwtproject_aria_client_Property;
/**@private {Attribute<?boolean>}*/
Property.$f_REQUIRED__org_gwtproject_aria_client_Property;
/**@private {Attribute<Integer>}*/
Property.$f_SETSIZE__org_gwtproject_aria_client_Property;
/**@private {Attribute<SortValue>}*/
Property.$f_SORT__org_gwtproject_aria_client_Property;
/**@private {Attribute<(Number|number)>}*/
Property.$f_VALUEMAX__org_gwtproject_aria_client_Property;
/**@private {Attribute<(Number|number)>}*/
Property.$f_VALUEMIN__org_gwtproject_aria_client_Property;
/**@private {Attribute<(Number|number)>}*/
Property.$f_VALUENOW__org_gwtproject_aria_client_Property;
/**@private {Attribute<?string>}*/
Property.$f_VALUETEXT__org_gwtproject_aria_client_Property;

exports = Property; 
//# sourceMappingURL=Property.js.map