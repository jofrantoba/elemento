goog.module('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<SelectAction>}
  */
class SelectAction extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!SelectAction}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new SelectAction();
  $instance.$ctor__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {string} name
  * @return {!SelectAction}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  SelectAction.$clinit();
  if ($Equality.$same(SelectAction.f_namesToValuesMap__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction_, null)) {
   SelectAction.f_namesToValuesMap__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction_ = $Enums.createMapFromValues(SelectAction.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, SelectAction.f_namesToValuesMap__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction_);
 }
 /**
  * @return {!Array<!SelectAction>}
  * @public
  */
 static m_values__() {
  SelectAction.$clinit();
  return /**@type {!Array<SelectAction>} */ ($Arrays.$init([SelectAction.$f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction, SelectAction.$f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction, SelectAction.$f_DESELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction, SelectAction.$f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction, SelectAction.$f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction], SelectAction));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {SelectAction} */ ($Casts.$to(arg0, SelectAction)));
 }
 /**
  * @return {!SelectAction}
  * @public
  */
 static get f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction() {
  return (SelectAction.$clinit(), SelectAction.$f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
 }
 /**
  * @return {!SelectAction}
  * @public
  */
 static get f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction() {
  return (SelectAction.$clinit(), SelectAction.$f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
 }
 /**
  * @return {!SelectAction}
  * @public
  */
 static get f_DESELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction() {
  return (SelectAction.$clinit(), SelectAction.$f_DESELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
 }
 /**
  * @return {!SelectAction}
  * @public
  */
 static get f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction() {
  return (SelectAction.$clinit(), SelectAction.$f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
 }
 /**
  * @return {!SelectAction}
  * @public
  */
 static get f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction() {
  return (SelectAction.$clinit(), SelectAction.$f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
 }
 /**
  * @public
  */
 static $clinit() {
  SelectAction.$clinit = () =>{};
  SelectAction.$loadModules();
  Enum.$clinit();
  SelectAction.$f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = SelectAction.$create__java_lang_String__int($Util.$makeEnumName("DEFAULT"), SelectAction.$ordinal$f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
  SelectAction.$f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = SelectAction.$create__java_lang_String__int($Util.$makeEnumName("SELECT"), SelectAction.$ordinal$f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
  SelectAction.$f_DESELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = SelectAction.$create__java_lang_String__int($Util.$makeEnumName("DESELECT"), SelectAction.$ordinal$f_DESELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
  SelectAction.$f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = SelectAction.$create__java_lang_String__int($Util.$makeEnumName("TOGGLE"), SelectAction.$ordinal$f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
  SelectAction.$f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = SelectAction.$create__java_lang_String__int($Util.$makeEnumName("IGNORE"), SelectAction.$ordinal$f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction);
  SelectAction.f_namesToValuesMap__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SelectAction;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(SelectAction, 'org.gwtproject.view.client.DefaultSelectionEventManager$SelectAction');

/** @private {!SelectAction} */
SelectAction.$f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
/** @private {!SelectAction} */
SelectAction.$f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
/** @private {!SelectAction} */
SelectAction.$f_DESELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
/** @private {!SelectAction} */
SelectAction.$f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
/** @private {!SelectAction} */
SelectAction.$f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
/** @public {Map<?string, !SelectAction>} */
SelectAction.f_namesToValuesMap__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction_;
/** @public {number} @const */
SelectAction.$ordinal$f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = 0;
/** @public {number} @const */
SelectAction.$ordinal$f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = 1;
/** @public {number} @const */
SelectAction.$ordinal$f_DESELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = 2;
/** @public {number} @const */
SelectAction.$ordinal$f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = 3;
/** @public {number} @const */
SelectAction.$ordinal$f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction = 4;

exports = SelectAction; 
//# sourceMappingURL=DefaultSelectionEventManager$SelectAction.js.map