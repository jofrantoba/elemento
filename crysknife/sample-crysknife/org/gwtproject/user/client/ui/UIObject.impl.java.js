goog.module('org.gwtproject.user.client.ui.UIObject$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasVisibility = goog.require('org.gwtproject.user.client.ui.HasVisibility$impl');

let Float = goog.forwardDeclare('java.lang.Float$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let RuntimeException = goog.forwardDeclare('java.lang.RuntimeException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let DebugInfo = goog.forwardDeclare('org.gwtproject.debug.client.DebugInfo$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let DebugIdImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject.DebugIdImpl$impl');
let DebugIdImplEnabled = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject.DebugIdImplEnabled$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @implements {HasVisibility}
  */
class UIObject extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_element__org_gwtproject_user_client_ui_UIObject_;
 }
 
 $ctor__org_gwtproject_user_client_ui_UIObject__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ id) {
  UIObject.$clinit();
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, "", id);
 }
 /** @return {boolean} */
 static m_isVisible__org_gwtproject_dom_client_Element(/** Object */ elem) {
  UIObject.$clinit();
  return !j_l_String.m_equals__java_lang_String__java_lang_Object($Overlay.m_getDisplay__$devirt__org_gwtproject_dom_client_Style(elem.style), "none");
 }
 
 static m_setVisible__org_gwtproject_dom_client_Element__boolean(/** Object */ elem, /** boolean */ visible) {
  UIObject.$clinit();
  if (visible) {
   $Overlay.m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(elem.style);
  } else {
   $Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(elem.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
  }
  if (visible) {
   elem.removeAttribute("aria-hidden");
  } else {
   elem.setAttribute("aria-hidden", "true");
  }
 }
 
 static m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(/** Object */ elem, /** ?string */ baseID, /** ?string */ id) {
  UIObject.$clinit();
  UIObject.f_debugIdImpl__org_gwtproject_user_client_ui_UIObject_.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, baseID, id);
 }
 /** @return {?string} */
 static m_getStyleName__org_gwtproject_dom_client_Element(/** Object */ elem) {
  UIObject.$clinit();
  return Element_$Overlay.m_getClassName__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {?string} */
 static m_getStylePrimaryName__org_gwtproject_dom_client_Element(/** Object */ elem) {
  UIObject.$clinit();
  let fullClassName = UIObject.m_getStyleName__org_gwtproject_dom_client_Element(elem);
  let spaceIdx = j_l_String.m_indexOf__java_lang_String__int(fullClassName, 32 /* ' ' */);
  if (spaceIdx >= 0) {
   return j_l_String.m_substring__java_lang_String__int__int(fullClassName, 0, spaceIdx);
  }
  return fullClassName;
 }
 
 static m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ styleName) {
  UIObject.$clinit();
  Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, styleName);
 }
 
 static m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(/** Object */ elem, /** ?string */ style, /** boolean */ add) {
  UIObject.$clinit();
  if ($Equality.$same(elem, null)) {
   throw $Exceptions.toJs(RuntimeException.$create__java_lang_String(UIObject.f_NULL_HANDLE_MSG__org_gwtproject_user_client_ui_UIObject_));
  }
  style = j_l_String.m_trim__java_lang_String(style);
  if (j_l_String.m_length__java_lang_String(style) == 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(UIObject.f_EMPTY_STYLENAME_MSG__org_gwtproject_user_client_ui_UIObject_));
  }
  if (add) {
   Element_$Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, style);
  } else {
   Element_$Overlay.m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, style);
  }
 }
 
 static m_setStylePrimaryName__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ style) {
  UIObject.$clinit();
  if ($Equality.$same(elem, null)) {
   throw $Exceptions.toJs(RuntimeException.$create__java_lang_String(UIObject.f_NULL_HANDLE_MSG__org_gwtproject_user_client_ui_UIObject_));
  }
  style = j_l_String.m_trim__java_lang_String(style);
  if (j_l_String.m_length__java_lang_String(style) == 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(UIObject.f_EMPTY_STYLENAME_MSG__org_gwtproject_user_client_ui_UIObject_));
  }
  UIObject.m_updatePrimaryAndDependentStyleNames__org_gwtproject_dom_client_Element__java_lang_String(elem, style);
 }
 
 static m_updatePrimaryAndDependentStyleNames__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ newPrimaryStyle) {
  let classes = j_l_String.m_split__java_lang_String__java_lang_String((j_l_String.m_isEmpty__java_lang_String(Element_$Overlay.m_getClassName__$devirt__org_gwtproject_dom_client_Element(elem)) ? "" : Element_$Overlay.m_getClassName__$devirt__org_gwtproject_dom_client_Element(elem)), "\\s+");
  if (classes.length == 0) {
   return;
  }
  let oldPrimaryStyle = classes[0];
  let oldPrimaryStyleLen = j_l_String.m_length__java_lang_String(oldPrimaryStyle);
  $Arrays.$set(classes, 0, newPrimaryStyle);
  for (let i = 1, n = classes.length; i < n; i++) {
   let name = classes[i];
   if (j_l_String.m_length__java_lang_String(name) > oldPrimaryStyleLen && j_l_String.m_charAt__java_lang_String__int(name, oldPrimaryStyleLen) == 45 /* '-' */ && j_l_String.m_indexOf__java_lang_String__java_lang_String(name, oldPrimaryStyle) == 0) {
    $Arrays.$set(classes, i, j_l_String.m_valueOf__java_lang_Object(newPrimaryStyle) + j_l_String.m_valueOf__java_lang_Object(j_l_String.m_substring__java_lang_String__int(name, oldPrimaryStyleLen)));
   }
  }
  Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, /**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (Arrays.m_stream__arrayOf_java_lang_Object(classes)).m_collect__java_util_stream_Collector(Collectors.m_joining__java_lang_CharSequence(" ")), j_l_String)));
 }
 
 m_addStyleDependentName__java_lang_String(/** ?string */ styleSuffix) {
  this.m_setStyleDependentName__java_lang_String__boolean(styleSuffix, true);
 }
 
 m_addStyleName__java_lang_String(/** ?string */ style) {
  this.m_setStyleName__java_lang_String__boolean(style, true);
 }
 
 m_ensureDebugId__java_lang_String(/** ?string */ id) {
  UIObject.f_debugIdImpl__org_gwtproject_user_client_ui_UIObject_.m_ensureDebugId__org_gwtproject_user_client_ui_UIObject__java_lang_String(this, id);
 }
 /** @return {number} */
 m_getAbsoluteLeft__() {
  return Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @return {number} */
 m_getAbsoluteTop__() {
  return Element_$Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @return {Object} */
 m_getElement__() {
  $Asserts.$assertWithMessage((!$Equality.$same(this.f_element__org_gwtproject_user_client_ui_UIObject_, null)), UIObject.f_MISSING_ELEMENT_ERROR__org_gwtproject_user_client_ui_UIObject);
  return this.f_element__org_gwtproject_user_client_ui_UIObject_;
 }
 
 m_setElement__org_gwtproject_dom_client_Element(/** Object */ elem) {
  this.f_element__org_gwtproject_user_client_ui_UIObject_ = elem;
 }
 /** @return {number} */
 m_getOffsetHeight__() {
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "offsetHeight");
 }
 /** @return {number} */
 m_getOffsetWidth__() {
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "offsetWidth");
 }
 /** @return {?string} */
 m_getStyleName__() {
  return UIObject.m_getStyleName__org_gwtproject_dom_client_Element(this.m_getStyleElement__());
 }
 
 m_setStyleName__java_lang_String(/** ?string */ style) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(this.m_getStyleElement__(), style);
 }
 /** @return {?string} */
 m_getStylePrimaryName__() {
  return UIObject.m_getStylePrimaryName__org_gwtproject_dom_client_Element(this.m_getStyleElement__());
 }
 
 m_setStylePrimaryName__java_lang_String(/** ?string */ style) {
  UIObject.m_setStylePrimaryName__org_gwtproject_dom_client_Element__java_lang_String(this.m_getStyleElement__(), style);
 }
 /** @return {?string} */
 m_getTitle__() {
  return Element_$Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "title");
 }
 
 m_setTitle__java_lang_String(/** ?string */ title) {
  if ($Equality.$same(title, null) || j_l_String.m_length__java_lang_String(title) == 0) {
   this.m_getElement__().removeAttribute("title");
  } else {
   this.m_getElement__().setAttribute("title", title);
  }
 }
 /** @override @return {boolean} */
 m_isVisible__() {
  return UIObject.m_isVisible__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override */
 m_setVisible__boolean(/** boolean */ visible) {
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.m_getElement__(), visible);
 }
 
 m_removeStyleDependentName__java_lang_String(/** ?string */ styleSuffix) {
  this.m_setStyleDependentName__java_lang_String__boolean(styleSuffix, false);
 }
 
 m_removeStyleName__java_lang_String(/** ?string */ style) {
  this.m_setStyleName__java_lang_String__boolean(style, false);
 }
 
 m_setHeight__java_lang_String(/** ?string */ height) {
  $Asserts.$assertWithMessage(this.m_extractLengthValue__java_lang_String_$p_org_gwtproject_user_client_ui_UIObject(j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(j_l_String.m_trim__java_lang_String(height), Locale.f_ROOT__java_util_Locale)) >= 0, "CSS heights should not be negative");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "height", height);
 }
 
 m_setPixelSize__int__int(/** number */ width, /** number */ height) {
  if (width >= 0) {
   this.m_setWidth__java_lang_String(width + "px");
  }
  if (height >= 0) {
   this.m_setHeight__java_lang_String(height + "px");
  }
 }
 
 m_setSize__java_lang_String__java_lang_String(/** ?string */ width, /** ?string */ height) {
  this.m_setWidth__java_lang_String(width);
  this.m_setHeight__java_lang_String(height);
 }
 
 m_setStyleDependentName__java_lang_String__boolean(/** ?string */ styleSuffix, /** boolean */ add) {
  this.m_setStyleName__java_lang_String__boolean(j_l_String.m_valueOf__java_lang_Object(this.m_getStylePrimaryName__()) + j_l_String.m_valueOf__char(45 /* '-' */) + j_l_String.m_valueOf__java_lang_Object(styleSuffix), add);
 }
 
 m_setStyleName__java_lang_String__boolean(/** ?string */ style, /** boolean */ add) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_getStyleElement__(), style, add);
 }
 
 m_setWidth__java_lang_String(/** ?string */ width) {
  $Asserts.$assertWithMessage(this.m_extractLengthValue__java_lang_String_$p_org_gwtproject_user_client_ui_UIObject(j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(j_l_String.m_trim__java_lang_String(width), Locale.f_ROOT__java_util_Locale)) >= 0, "CSS widths should not be negative");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "width", width);
 }
 
 m_sinkBitlessEvent__java_lang_String(/** ?string */ eventTypeName) {
  DOM.m_sinkBitlessEvent__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), eventTypeName);
 }
 
 m_sinkEvents__int(/** number */ eventBitsToAdd) {
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.m_getElement__(), eventBitsToAdd | DOM.m_getEventsSunk__org_gwtproject_dom_client_Element(this.m_getElement__()));
 }
 /** @override @return {?string} */
 toString() {
  if ($Equality.$same(this.f_element__org_gwtproject_user_client_ui_UIObject_, null)) {
   return "(null handle)";
  }
  return Element_$Overlay.m_getString__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 
 m_unsinkEvents__int(/** number */ eventBitsToRemove) {
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.m_getElement__(), DOM.m_getEventsSunk__org_gwtproject_dom_client_Element(this.m_getElement__()) & (~eventBitsToRemove));
 }
 /** @return {Object} */
 m_getStyleElement__() {
  return this.m_getElement__();
 }
 
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getElement__(), "", baseID);
 }
 /** @return {Object} */
 m_resolvePotentialElement__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("resolvePotentialElement"));
 }
 
 m_replaceElement__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui(/** Object */ elem) {
  if (!$Equality.$same(this.f_element__org_gwtproject_user_client_ui_UIObject_, null)) {
   this.m_replaceNode__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_UIObject(this.f_element__org_gwtproject_user_client_ui_UIObject_, elem);
  }
  this.f_element__org_gwtproject_user_client_ui_UIObject_ = elem;
 }
 /** @return {number} */
 m_extractLengthValue__java_lang_String_$p_org_gwtproject_user_client_ui_UIObject(/** ?string */ s) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(s, "auto") || j_l_String.m_equals__java_lang_String__java_lang_Object(s, "inherit") || j_l_String.m_equals__java_lang_String__java_lang_Object(s, "")) {
   return 0.0;
  } else {
   return Float.m_valueOf__java_lang_String(j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(s, "[A-Za-z%\\s]+", "")).m_floatValue__();
  }
 }
 
 m_replaceNode__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_UIObject(/** Object */ node, /** Object */ newNode) {
  let p = node.parentNode;
  if ($Equality.$same(p, null)) {
   return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
 }
 
 static $clinit() {
  UIObject.$clinit = () =>{};
  UIObject.$loadModules();
  j_l_Object.$clinit();
  UIObject.f_debugIdImpl__org_gwtproject_user_client_ui_UIObject_ = DebugInfo.m_isDebugIdEnabled__() ? DebugIdImplEnabled.$create__() : DebugIdImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UIObject;
 }
 
 static $loadModules() {
  Float = goog.module.get('java.lang.Float$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  RuntimeException = goog.module.get('java.lang.RuntimeException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DebugInfo = goog.module.get('org.gwtproject.debug.client.DebugInfo$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  DebugIdImpl = goog.module.get('org.gwtproject.user.client.ui.UIObject.DebugIdImpl$impl');
  DebugIdImplEnabled = goog.module.get('org.gwtproject.user.client.ui.UIObject.DebugIdImplEnabled$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(UIObject, 'org.gwtproject.user.client.ui.UIObject');

HasVisibility.$markImplementor(UIObject);

/**@const {?string}*/
UIObject.f_DEBUG_ID_PREFIX__org_gwtproject_user_client_ui_UIObject = "gwt-debug-";
/**@const {?string}*/
UIObject.f_MISSING_ELEMENT_ERROR__org_gwtproject_user_client_ui_UIObject = "This UIObject's element is not set; you may be missing a call to either Composite.initWidget() or UIObject.setElement()";
/**@const {?string}*/
UIObject.f_SETELEMENT_TWICE_ERROR__org_gwtproject_user_client_ui_UIObject = "Element may only be set once";
/**@const {?string}*/
UIObject.f_EMPTY_STYLENAME_MSG__org_gwtproject_user_client_ui_UIObject_ = "Style names cannot be empty";
/**@const {?string}*/
UIObject.f_NULL_HANDLE_MSG__org_gwtproject_user_client_ui_UIObject_ = "Null widget handle. If you are creating a composite, ensure that initWidget() has been called.";
/**@type {Object}*/
UIObject.f_numberRegex__org_gwtproject_user_client_ui_UIObject_;
/**@type {DebugIdImpl}*/
UIObject.f_debugIdImpl__org_gwtproject_user_client_ui_UIObject_;

exports = UIObject; 
//# sourceMappingURL=UIObject.js.map