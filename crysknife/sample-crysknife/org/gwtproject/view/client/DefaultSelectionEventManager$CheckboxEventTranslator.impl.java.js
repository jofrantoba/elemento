goog.module('org.gwtproject.view.client.DefaultSelectionEventManager.CheckboxEventTranslator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EventTranslator = goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.EventTranslator$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let SelectAction = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @implements {EventTranslator<T>}
  */
class CheckboxEventTranslator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_column__org_gwtproject_view_client_DefaultSelectionEventManager_CheckboxEventTranslator_ = 0;
 }
 //Factory method corresponding to constructor 'CheckboxEventTranslator()'.
 /** @template T @return {!CheckboxEventTranslator<T>} */
 static $create__() {
  CheckboxEventTranslator.$clinit();
  let $instance = new CheckboxEventTranslator();
  $instance.$ctor__org_gwtproject_view_client_DefaultSelectionEventManager_CheckboxEventTranslator__();
  return $instance;
 }
 //Initialization from constructor 'CheckboxEventTranslator()'.
 
 $ctor__org_gwtproject_view_client_DefaultSelectionEventManager_CheckboxEventTranslator__() {
  this.$ctor__org_gwtproject_view_client_DefaultSelectionEventManager_CheckboxEventTranslator__int(-1);
 }
 //Factory method corresponding to constructor 'CheckboxEventTranslator(int)'.
 /** @template T @return {!CheckboxEventTranslator<T>} */
 static $create__int(/** number */ column) {
  CheckboxEventTranslator.$clinit();
  let $instance = new CheckboxEventTranslator();
  $instance.$ctor__org_gwtproject_view_client_DefaultSelectionEventManager_CheckboxEventTranslator__int(column);
  return $instance;
 }
 //Initialization from constructor 'CheckboxEventTranslator(int)'.
 
 $ctor__org_gwtproject_view_client_DefaultSelectionEventManager_CheckboxEventTranslator__int(/** number */ column) {
  this.$ctor__java_lang_Object__();
  this.f_column__org_gwtproject_view_client_DefaultSelectionEventManager_CheckboxEventTranslator_ = column;
 }
 /** @override @return {boolean} */
 m_clearCurrentSelection__org_gwtproject_view_client_CellPreviewEvent(/** CellPreviewEvent<T> */ event) {
  return false;
 }
 /** @override @return {SelectAction} */
 m_translateSelectionEvent__org_gwtproject_view_client_CellPreviewEvent(/** CellPreviewEvent<T> */ event) {
  let nativeEvent = event.m_getNativeEvent__();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent))) {
   if (this.f_column__org_gwtproject_view_client_DefaultSelectionEventManager_CheckboxEventTranslator_ > -1 && this.f_column__org_gwtproject_view_client_DefaultSelectionEventManager_CheckboxEventTranslator_ != event.m_getColumn__()) {
    return SelectAction.f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
   }
   let target = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject($Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent)), Element_$Overlay));
   if ($Equality.$same("input", j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(Element_$Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(target), Locale.f_ROOT__java_util_Locale))) {
    let input = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(target), InputElement_$Overlay));
    if ($Equality.$same("checkbox", j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(input.type, Locale.f_ROOT__java_util_Locale))) {
     input.checked = event.m_getDisplay__().m_getSelectionModel__().m_isSelected__java_lang_Object(event.m_getValue__());
     return SelectAction.f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
    }
   }
   return SelectAction.f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
  }
  return SelectAction.f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
 }
 
 static $clinit() {
  CheckboxEventTranslator.$clinit = () =>{};
  CheckboxEventTranslator.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CheckboxEventTranslator;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  SelectAction = goog.module.get('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CheckboxEventTranslator, 'org.gwtproject.view.client.DefaultSelectionEventManager$CheckboxEventTranslator');

EventTranslator.$markImplementor(CheckboxEventTranslator);

exports = CheckboxEventTranslator; 
//# sourceMappingURL=DefaultSelectionEventManager$CheckboxEventTranslator.js.map