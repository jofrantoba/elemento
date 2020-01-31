goog.module('org.gwtproject.aria.client.State$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AriaValueAttribute = goog.forwardDeclare('org.gwtproject.aria.client.AriaValueAttribute$impl');
let Attribute = goog.forwardDeclare('org.gwtproject.aria.client.Attribute$impl');
let CheckedValue = goog.forwardDeclare('org.gwtproject.aria.client.CheckedValue$impl');
let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let GrabbedValue = goog.forwardDeclare('org.gwtproject.aria.client.GrabbedValue$impl');
let InvalidValue = goog.forwardDeclare('org.gwtproject.aria.client.InvalidValue$impl');
let PressedValue = goog.forwardDeclare('org.gwtproject.aria.client.PressedValue$impl');
let PrimitiveValueAttribute = goog.forwardDeclare('org.gwtproject.aria.client.PrimitiveValueAttribute$impl');
let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');

class State extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!State} */
 static $create__() {
  let $instance = new State();
  $instance.$ctor__org_gwtproject_aria_client_State__();
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_State__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Attribute<?boolean>} */
 static get f_BUSY__org_gwtproject_aria_client_State() {
  return (State.$clinit(), State.$f_BUSY__org_gwtproject_aria_client_State);
 }
 /** @return {Attribute<CheckedValue>} */
 static get f_CHECKED__org_gwtproject_aria_client_State() {
  return (State.$clinit(), State.$f_CHECKED__org_gwtproject_aria_client_State);
 }
 /** @return {Attribute<?boolean>} */
 static get f_DISABLED__org_gwtproject_aria_client_State() {
  return (State.$clinit(), State.$f_DISABLED__org_gwtproject_aria_client_State);
 }
 /** @return {Attribute<ExpandedValue>} */
 static get f_EXPANDED__org_gwtproject_aria_client_State() {
  return (State.$clinit(), State.$f_EXPANDED__org_gwtproject_aria_client_State);
 }
 /** @return {Attribute<GrabbedValue>} */
 static get f_GRABBED__org_gwtproject_aria_client_State() {
  return (State.$clinit(), State.$f_GRABBED__org_gwtproject_aria_client_State);
 }
 /** @return {Attribute<?boolean>} */
 static get f_HIDDEN__org_gwtproject_aria_client_State() {
  return (State.$clinit(), State.$f_HIDDEN__org_gwtproject_aria_client_State);
 }
 /** @return {Attribute<InvalidValue>} */
 static get f_INVALID__org_gwtproject_aria_client_State() {
  return (State.$clinit(), State.$f_INVALID__org_gwtproject_aria_client_State);
 }
 /** @return {Attribute<PressedValue>} */
 static get f_PRESSED__org_gwtproject_aria_client_State() {
  return (State.$clinit(), State.$f_PRESSED__org_gwtproject_aria_client_State);
 }
 /** @return {Attribute<SelectedValue>} */
 static get f_SELECTED__org_gwtproject_aria_client_State() {
  return (State.$clinit(), State.$f_SELECTED__org_gwtproject_aria_client_State);
 }
 
 static $clinit() {
  State.$clinit = () =>{};
  State.$loadModules();
  j_l_Object.$clinit();
  State.$f_BUSY__org_gwtproject_aria_client_State = /**@type {!PrimitiveValueAttribute<?boolean>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-busy", "false"));
  State.$f_CHECKED__org_gwtproject_aria_client_State = /**@type {!AriaValueAttribute<CheckedValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-checked", "undefined"));
  State.$f_DISABLED__org_gwtproject_aria_client_State = /**@type {!PrimitiveValueAttribute<?boolean>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-disabled", "false"));
  State.$f_EXPANDED__org_gwtproject_aria_client_State = /**@type {!AriaValueAttribute<ExpandedValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-expanded", "undefined"));
  State.$f_GRABBED__org_gwtproject_aria_client_State = /**@type {!AriaValueAttribute<GrabbedValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-grabbed", "undefined"));
  State.$f_HIDDEN__org_gwtproject_aria_client_State = /**@type {!PrimitiveValueAttribute<?boolean>}*/ (PrimitiveValueAttribute.$create__java_lang_String__java_lang_String("aria-hidden", "false"));
  State.$f_INVALID__org_gwtproject_aria_client_State = /**@type {!AriaValueAttribute<InvalidValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-invalid", "false"));
  State.$f_PRESSED__org_gwtproject_aria_client_State = /**@type {!AriaValueAttribute<PressedValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-pressed", "undefined"));
  State.$f_SELECTED__org_gwtproject_aria_client_State = /**@type {!AriaValueAttribute<SelectedValue>}*/ (AriaValueAttribute.$create__java_lang_String__java_lang_String("aria-selected", "undefined"));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof State;
 }
 
 static $loadModules() {
  AriaValueAttribute = goog.module.get('org.gwtproject.aria.client.AriaValueAttribute$impl');
  PrimitiveValueAttribute = goog.module.get('org.gwtproject.aria.client.PrimitiveValueAttribute$impl');
 }
 
}
$Util.$setClassMetadata(State, 'org.gwtproject.aria.client.State');

/**@private {Attribute<?boolean>}*/
State.$f_BUSY__org_gwtproject_aria_client_State;
/**@private {Attribute<CheckedValue>}*/
State.$f_CHECKED__org_gwtproject_aria_client_State;
/**@private {Attribute<?boolean>}*/
State.$f_DISABLED__org_gwtproject_aria_client_State;
/**@private {Attribute<ExpandedValue>}*/
State.$f_EXPANDED__org_gwtproject_aria_client_State;
/**@private {Attribute<GrabbedValue>}*/
State.$f_GRABBED__org_gwtproject_aria_client_State;
/**@private {Attribute<?boolean>}*/
State.$f_HIDDEN__org_gwtproject_aria_client_State;
/**@private {Attribute<InvalidValue>}*/
State.$f_INVALID__org_gwtproject_aria_client_State;
/**@private {Attribute<PressedValue>}*/
State.$f_PRESSED__org_gwtproject_aria_client_State;
/**@private {Attribute<SelectedValue>}*/
State.$f_SELECTED__org_gwtproject_aria_client_State;

exports = State; 
//# sourceMappingURL=State.js.map