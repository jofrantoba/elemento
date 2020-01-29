goog.module('org.gwtproject.dom.client.Element.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let ViewCSS_$Overlay = goog.forwardDeclare('elemental2.dom.ViewCSS.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BodyElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BodyElement.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let UserAgentHolder = goog.forwardDeclare('org.gwtproject.dom.client.Element.UserAgentHolder$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class org_gwtproject_dom_client_Element_$Overlay {
 /**
  * @param {number} val
  * @return {number}
  * @public
  */
 static m_toInt32__double(val) {
  return Js.m_coerceToInt__java_lang_Object(val);
 }
 /**
  * @param {Object} o
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_core_client_JavaScriptObject(o) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  $Asserts.$assert(org_gwtproject_dom_client_Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o));
  return /**@type {Object} */ ($Casts.$to(o, org_gwtproject_dom_client_Element_$Overlay));
 }
 /**
  * @param {Object} node
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_dom_client_Node(node) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  $Asserts.$assert(org_gwtproject_dom_client_Element_$Overlay.m_is__org_gwtproject_dom_client_Node(node));
  return /**@type {Object} */ ($Casts.$to(node, org_gwtproject_dom_client_Element_$Overlay));
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_core_client_JavaScriptObject(o) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return org_gwtproject_dom_client_Element_$Overlay.m_is__org_gwtproject_dom_client_Node(/**@type {Object} */ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} node
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Node(node) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return (!$Equality.$same(node, null)) && (node.nodeType == Node.ELEMENT_NODE);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} className
  * @return {boolean}
  * @public
  */
 static m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, className) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  className = org_gwtproject_dom_client_Element_$Overlay.m_trimClassName__java_lang_String(className);
  let oldClassName = org_gwtproject_dom_client_Element_$Overlay.m_getClassName__$devirt__org_gwtproject_dom_client_Element($thisArg);
  let idx = org_gwtproject_dom_client_Element_$Overlay.m_indexOfName__java_lang_String__java_lang_String(oldClassName, className);
  if (idx == -1) {
   if (j_l_String.m_length__java_lang_String(oldClassName) > 0) {
    org_gwtproject_dom_client_Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, j_l_String.m_valueOf__java_lang_Object(oldClassName) + " " + j_l_String.m_valueOf__java_lang_Object(className));
   } else {
    org_gwtproject_dom_client_Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, className);
   }
   return true;
  }
  return false;
 }
 /**
  * @param {!Object} $thisArg
  * @param {Object} evt
  * @public
  */
 static m_dispatchEvent__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent($thisArg, evt) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).dispatchEvent(/**@type {Event} */ (Js.m_uncheckedCast__java_lang_Object(evt)));
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getAbsoluteBottom__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element($thisArg) + org_gwtproject_dom_client_Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element($thisArg);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let e = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg));
  let subPixelAbsoluteLeft = e.getBoundingClientRect().left + Document_$Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Document($thisArg.ownerDocument);
  return Js.m_coerceToInt__java_lang_Object(subPixelAbsoluteLeft);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getAbsoluteRight__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element($thisArg) + org_gwtproject_dom_client_Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element($thisArg);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let e = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg));
  let subPixelAbsoluteTop = e.getBoundingClientRect().top + Document_$Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Document($thisArg.ownerDocument);
  return Js.m_coerceToInt__java_lang_Object(subPixelAbsoluteTop);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {?string}
  * @public
  */
 static m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, name) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let value = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).getAttribute(name);
  return !$Equality.$same(value, null) ? value : "";
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getClassName__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let className = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).className;
  return $Equality.$same(className, null) ? "" : className;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getClientHeight__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_toInt32__double(org_gwtproject_dom_client_Element_$Overlay.m_getSubPixelClientHeight__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getClientWidth__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_toInt32__double(org_gwtproject_dom_client_Element_$Overlay.m_getSubPixelClientWidth__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getDraggable__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object($thisArg.draggable) ? $thisArg.draggable : null;
 }
 /**
  * @param {!Object} $thisArg
  * @return {Object}
  * @public
  */
 static m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let child = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).firstChild;
  while (!$Equality.$same(child, null) && child.nodeType != 1) {
   child = child.nextSibling;
  }
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(child));
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).innerHTML;
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getInnerText__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).textContent;
 }
 /**
  * @param {!Object} $thisArg
  * @return {Object}
  * @public
  */
 static m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let sib = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).nextSibling;
  while (!$Equality.$same(sib, null) && sib.nodeType != 1) {
   sib = sib.nextSibling;
  }
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(sib));
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_toInt32__double(org_gwtproject_dom_client_Element_$Overlay.m_getSubPixelOffsetHeight__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getOffsetLeft__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_toInt32__double(org_gwtproject_dom_client_Element_$Overlay.m_getSubPixelOffsetLeft__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getOffsetTop__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_toInt32__double(org_gwtproject_dom_client_Element_$Overlay.m_getSubPixelOffsetTop__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_toInt32__double(org_gwtproject_dom_client_Element_$Overlay.m_getSubPixelOffsetWidth__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @return {Object}
  * @public
  */
 static m_getPreviousSiblingElement__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let sib = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).previousSibling;
  while (!$Equality.$same(sib, null) && sib.nodeType != 1) {
   sib = sib.previousSibling;
  }
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(sib));
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {boolean}
  * @public
  */
 static m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, name) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object($thisArg), name));
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {number}
  * @public
  */
 static m_getPropertyDouble__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, name) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let value = window.parseFloat(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object($thisArg), name));
  return isNaN(value) ? 0.0 : value;
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {number}
  * @public
  */
 static m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, name) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(window.parseInt(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object($thisArg), name), 10));
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {Object}
  * @public
  */
 static m_getPropertyJSO__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, name) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let value = /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object($thisArg), name)));
  return Js.m_isTruthy__java_lang_Object(value) ? value : null;
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {*}
  * @public
  */
 static m_getPropertyObject__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, name) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object($thisArg), name);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {?string}
  * @public
  */
 static m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, name) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let value = JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object($thisArg), name);
  return $Equality.$same(value, null) ? null : "" + j_l_String.m_valueOf__java_lang_Object(value);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_toInt32__double(org_gwtproject_dom_client_Element_$Overlay.m_getSubPixelScrollHeight__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let scrollLeft = Js.m_coerceToInt__java_lang_Object(/**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).scrollLeft);
  if (UserAgentHolder.f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_) {
   if (!(org_gwtproject_dom_client_Element_$Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, BodyElement_$Overlay.f_TAG__org_gwtproject_dom_client_BodyElement_$Overlay) || org_gwtproject_dom_client_Element_$Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, "HTML")) && org_gwtproject_dom_client_Element_$Overlay.m_isRTLSafari__$devirt__org_gwtproject_dom_client_Element($thisArg)) {
    return scrollLeft - (org_gwtproject_dom_client_Element_$Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element($thisArg) - org_gwtproject_dom_client_Element_$Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element($thisArg));
   }
  }
  return scrollLeft;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getScrollTop__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_toInt32__double(org_gwtproject_dom_client_Element_$Overlay.m_getSubPixelScrollTop__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return org_gwtproject_dom_client_Element_$Overlay.m_toInt32__double(org_gwtproject_dom_client_Element_$Overlay.m_getSubPixelScrollWidth__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getString__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return /**@type {?string} */ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, ?string>} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "outerHTML"), j_l_String));
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getTabIndex__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).tabIndex;
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getTagName__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).tagName;
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {boolean}
  * @public
  */
 static m_hasAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, name) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  return /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).hasAttribute(name);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} className
  * @return {boolean}
  * @public
  */
 static m_hasClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, className) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  className = org_gwtproject_dom_client_Element_$Overlay.m_trimClassName__java_lang_String(className);
  let idx = org_gwtproject_dom_client_Element_$Overlay.m_indexOfName__java_lang_String__java_lang_String(org_gwtproject_dom_client_Element_$Overlay.m_getClassName__$devirt__org_gwtproject_dom_client_Element($thisArg), className);
  return idx != -1;
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} tagName
  * @return {boolean}
  * @public
  */
 static m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, tagName) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  $Asserts.$assertWithMessage(!$Equality.$same(tagName, null), "tagName must not be null");
  return j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(tagName, org_gwtproject_dom_client_Element_$Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element($thisArg));
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} className
  * @return {boolean}
  * @public
  */
 static m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, className) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  className = org_gwtproject_dom_client_Element_$Overlay.m_trimClassName__java_lang_String(className);
  let oldStyle = org_gwtproject_dom_client_Element_$Overlay.m_getClassName__$devirt__org_gwtproject_dom_client_Element($thisArg);
  let idx = org_gwtproject_dom_client_Element_$Overlay.m_indexOfName__java_lang_String__java_lang_String(oldStyle, className);
  if (idx != -1) {
   let begin = j_l_String.m_trim__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(oldStyle, 0, idx));
   let end = j_l_String.m_trim__java_lang_String(j_l_String.m_substring__java_lang_String__int(oldStyle, idx + j_l_String.m_length__java_lang_String(className)));
   let /** ?string */ newClassName;
   if (j_l_String.m_length__java_lang_String(begin) == 0) {
    newClassName = end;
   } else if (j_l_String.m_length__java_lang_String(end) == 0) {
    newClassName = begin;
   } else {
    newClassName = j_l_String.m_valueOf__java_lang_Object(begin) + " " + j_l_String.m_valueOf__java_lang_Object(end);
   }
   org_gwtproject_dom_client_Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, newClassName);
   return true;
  }
  return false;
 }
 /**
  * @param {?string} nameList
  * @param {?string} name
  * @return {number}
  * @public
  */
 static m_indexOfName__java_lang_String__java_lang_String(nameList, name) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let idx = j_l_String.m_indexOf__java_lang_String__java_lang_String(nameList, name);
  while (idx != -1) {
   if (idx == 0 || j_l_String.m_charAt__java_lang_String__int(nameList, idx - 1) == 32 /* ' ' */) {
    let last = idx + j_l_String.m_length__java_lang_String(name);
    let lastPos = j_l_String.m_length__java_lang_String(nameList);
    if ((last == lastPos) || ((last < lastPos) && (j_l_String.m_charAt__java_lang_String__int(nameList, last) == 32 /* ' ' */))) {
     break;
    }
   }
   idx = j_l_String.m_indexOf__java_lang_String__java_lang_String__int(nameList, name, idx + 1);
  }
  return idx;
 }
 /**
  * @param {?string} className
  * @return {?string}
  * @public
  */
 static m_trimClassName__java_lang_String(className) {
  $Asserts.$assertWithMessage((!$Equality.$same(className, null)), "Unexpectedly null class name");
  className = j_l_String.m_trim__java_lang_String(className);
  $Asserts.$assertWithMessage(!j_l_String.m_isEmpty__java_lang_String(className), "Unexpectedly empty class name");
  return className;
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} className
  * @public
  */
 static m_toggleClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, className) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let added = org_gwtproject_dom_client_Element_$Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, className);
  if (!added) {
   org_gwtproject_dom_client_Element_$Overlay.m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, className);
  }
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} oldClassName
  * @param {?string} newClassName
  * @public
  */
 static m_replaceClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String($thisArg, oldClassName, newClassName) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  org_gwtproject_dom_client_Element_$Overlay.m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, oldClassName);
  org_gwtproject_dom_client_Element_$Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, newClassName);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_scrollIntoView__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  let e = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg));
  let left = e.offsetLeft, top = e.offsetTop;
  let width = e.offsetWidth, height = e.offsetHeight;
  if (!$Equality.$same(e.parentNode, e.offsetParent) && e.parentNode.nodeType == 1) {
   left -= /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object(e.parentNode)).offsetLeft;
   top -= /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object(e.parentNode)).offsetTop;
  }
  let cur = e.parentNode;
  while (!$Equality.$same(cur, null) && (cur.nodeType == 1)) {
   let curEl = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object(cur));
   if (left < curEl.scrollLeft) {
    curEl.scrollLeft = left;
   }
   if (left + width > curEl.scrollLeft + curEl.clientWidth) {
    curEl.scrollLeft = (left + width) - curEl.clientWidth;
   }
   if (top < curEl.scrollTop) {
    curEl.scrollTop = top;
   }
   if (top + height > curEl.scrollTop + curEl.clientHeight) {
    curEl.scrollTop = (top + height) - curEl.clientHeight;
   }
   let offsetLeft = curEl.offsetLeft, offsetTop = curEl.offsetTop;
   if (!$Equality.$same(curEl.parentNode, curEl.offsetParent) && curEl.parentNode.nodeType == 1) {
    offsetLeft -= /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object(curEl.parentNode)).offsetLeft;
    offsetTop -= /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object(curEl.parentNode)).offsetTop;
   }
   left += offsetLeft - curEl.scrollLeft;
   top += offsetTop - curEl.scrollTop;
   cur = curEl.parentNode;
  }
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} className
  * @public
  */
 static m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, className) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).className = $Equality.$same(className, null) ? "" : className;
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} draggable
  * @public
  */
 static m_setDraggable__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, draggable) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).draggable = j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(org_gwtproject_dom_client_Element_$Overlay.f_DRAGGABLE_TRUE__org_gwtproject_dom_client_Element_$Overlay, draggable);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} html
  * @public
  */
 static m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, html) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).innerHTML = $Equality.$same(html, null) ? "" : html;
 }
 /**
  * @param {!Object} $thisArg
  * @param {SafeHtml} html
  * @public
  */
 static m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml($thisArg, html) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  org_gwtproject_dom_client_Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, html.m_asString__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} text
  * @public
  */
 static m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, text) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).textContent = !$Equality.$same(text, null) ? text : "";
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {boolean} value
  * @public
  */
 static m_setPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String__boolean($thisArg, name, value) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object($thisArg), name, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {number} value
  * @public
  */
 static m_setPropertyDouble__$devirt__org_gwtproject_dom_client_Element__java_lang_String__double($thisArg, name, value) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object($thisArg), name, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {number} value
  * @public
  */
 static m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int($thisArg, name, value) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object($thisArg), name, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {Object} value
  * @public
  */
 static m_setPropertyJSO__$devirt__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_core_client_JavaScriptObject($thisArg, name, value) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  org_gwtproject_dom_client_Element_$Overlay.m_setPropertyObject__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_Object($thisArg, name, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {*} value
  * @public
  */
 static m_setPropertyObject__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_Object($thisArg, name, value) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object($thisArg), name, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {?string} value
  * @public
  */
 static m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String($thisArg, name, value) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object($thisArg), name, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} scrollLeft
  * @public
  */
 static m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int($thisArg, scrollLeft) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  if (UserAgentHolder.f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_) {
   if (!(org_gwtproject_dom_client_Element_$Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, BodyElement_$Overlay.f_TAG__org_gwtproject_dom_client_BodyElement_$Overlay) || org_gwtproject_dom_client_Element_$Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, "HTML")) && org_gwtproject_dom_client_Element_$Overlay.m_isRTLSafari__$devirt__org_gwtproject_dom_client_Element($thisArg)) {
    scrollLeft += org_gwtproject_dom_client_Element_$Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element($thisArg) - org_gwtproject_dom_client_Element_$Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element($thisArg);
   }
  }
  /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).scrollLeft = scrollLeft;
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} title
  * @public
  */
 static m_setTitle__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, title) {
  org_gwtproject_dom_client_Element_$Overlay.$clinit();
  /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).title = $Equality.$same(title, null) ? "" : title;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getSubPixelClientHeight__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  return /**@type {Element} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).clientHeight;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getSubPixelClientWidth__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  return /**@type {Element} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).clientWidth;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getSubPixelOffsetHeight__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  let value = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).offsetHeight;
  return Js.m_isTruthy__java_lang_Object(value) ? value : 0.0;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getSubPixelOffsetLeft__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  let value = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).offsetLeft;
  return Js.m_isTruthy__java_lang_Object(value) ? value : 0.0;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getSubPixelOffsetTop__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  let value = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).offsetTop;
  return Js.m_isTruthy__java_lang_Object(value) ? value : 0.0;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getSubPixelOffsetWidth__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  let value = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).offsetWidth;
  return Js.m_isTruthy__java_lang_Object(value) ? value : 0.0;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getSubPixelScrollHeight__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  let value = /**@type {Element} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).scrollHeight;
  return Js.m_isTruthy__java_lang_Object(value) ? value : 0.0;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getSubPixelScrollTop__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  let value = /**@type {Element} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).scrollTop;
  return Js.m_isTruthy__java_lang_Object(value) ? value : 0.0;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getSubPixelScrollWidth__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  let value = /**@type {Element} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).scrollWidth;
  return Js.m_isTruthy__java_lang_Object(value) ? value : 0.0;
 }
 /**
  * @param {!Object} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isRTLSafari__$devirt__org_gwtproject_dom_client_Element($thisArg) {
  let e = /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg));
  let defaultView = /**@type {ViewCSS} */ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>} */ (Js.m_uncheckedCast__java_lang_Object(e.ownerDocument)), "defaultView")));
  return Objects.m_equals__java_lang_String__java_lang_String(defaultView.getComputedStyle(e, "").direction, "rtl");
 }
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_dom_client_Element_$Overlay.$clinit = () =>{};
  org_gwtproject_dom_client_Element_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Object;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BodyElement_$Overlay = goog.module.get('org.gwtproject.dom.client.BodyElement.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  UserAgentHolder = goog.module.get('org.gwtproject.dom.client.Element.UserAgentHolder$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(org_gwtproject_dom_client_Element_$Overlay, 'Object');

/** @public {?string} @const */
org_gwtproject_dom_client_Element_$Overlay.f_DRAGGABLE_AUTO__org_gwtproject_dom_client_Element_$Overlay = "auto";
/** @public {?string} @const */
org_gwtproject_dom_client_Element_$Overlay.f_DRAGGABLE_FALSE__org_gwtproject_dom_client_Element_$Overlay = "false";
/** @public {?string} @const */
org_gwtproject_dom_client_Element_$Overlay.f_DRAGGABLE_TRUE__org_gwtproject_dom_client_Element_$Overlay = "true";

exports = org_gwtproject_dom_client_Element_$Overlay; 
//# sourceMappingURL=Element$$Overlay.js.map