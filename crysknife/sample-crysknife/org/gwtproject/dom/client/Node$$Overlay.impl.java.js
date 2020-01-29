goog.module('org.gwtproject.dom.client.Node.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NodeList.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class org_gwtproject_dom_client_Node_$Overlay {
 /**
  * @param {Object} o
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_core_client_JavaScriptObject(o) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  $Asserts.$assert(org_gwtproject_dom_client_Node_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o));
  return /**@type {Object} */ ($Casts.$to(o, org_gwtproject_dom_client_Node_$Overlay));
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_core_client_JavaScriptObject(o) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  try {
   return Js.m_isTruthy__java_lang_Object(o) && Js.m_isTruthy__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(o), "nodeType"));
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (Exception.$isInstance(__$exc)) {
    let e = /**@type {Exception} */ (__$exc);
    return false;
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} index
  * @return {Object}
  * @public
  */
 static m_getChild__$devirt__org_gwtproject_dom_client_Node__int($thisArg, index) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  $Asserts.$assertWithMessage((index >= 0) && (index < org_gwtproject_dom_client_Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node($thisArg)), "Child index out of bounds");
  return NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int($thisArg.childNodes, index);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getChildCount__$devirt__org_gwtproject_dom_client_Node($thisArg) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  return $thisArg.childNodes.length;
 }
 /**
  * @param {!Object} $thisArg
  * @return {Object}
  * @public
  */
 static m_getParentElement__$devirt__org_gwtproject_dom_client_Node($thisArg) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  let parent = /**@type {Node} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).parentNode;
  if ($Equality.$same(parent, null) || parent.nodeType != 1) {
   parent = null;
  }
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(parent));
 }
 /**
  * @param {!Object} $thisArg
  * @return {boolean}
  * @public
  */
 static m_hasParentElement__$devirt__org_gwtproject_dom_client_Node($thisArg) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  return !$Equality.$same(org_gwtproject_dom_client_Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node($thisArg), null);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Object} newChild
  * @param {Object} refChild
  * @return {Object}
  * @public
  */
 static m_insertAfter__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node($thisArg, newChild, refChild) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  $Asserts.$assertWithMessage((!$Equality.$same(newChild, null)), "Cannot add a null child node");
  let next = $Equality.$same(refChild, null) ? null : refChild.nextSibling;
  if ($Equality.$same(next, null)) {
   return $thisArg.appendChild(newChild);
  } else {
   return $thisArg.insertBefore(newChild, next);
  }
 }
 /**
  * @param {!Object} $thisArg
  * @param {Object} child
  * @return {Object}
  * @public
  */
 static m_insertFirst__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node($thisArg, child) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  $Asserts.$assertWithMessage((!$Equality.$same(child, null)), "Cannot add a null child node");
  return $thisArg.insertBefore(child, $thisArg.firstChild);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Object} child
  * @return {boolean}
  * @public
  */
 static m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node($thisArg, child) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  $Asserts.$assertWithMessage((!$Equality.$same(child, null)), "Child cannot be null");
  return /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).contains(/**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object(child)));
 }
 /**
  * @param {!Object} $thisArg
  * @return {Object}
  * @public
  */
 static m_removeAllChildren__$devirt__org_gwtproject_dom_client_Node($thisArg) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  while (!$Equality.$same($thisArg.lastChild, null)) {
   $thisArg.removeChild($thisArg.lastChild);
  }
  return null;
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_removeFromParent__$devirt__org_gwtproject_dom_client_Node($thisArg) {
  org_gwtproject_dom_client_Node_$Overlay.$clinit();
  let parent = org_gwtproject_dom_client_Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node($thisArg);
  if (!$Equality.$same(parent, null)) {
   parent.removeChild($thisArg);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_dom_client_Node_$Overlay.$clinit = () =>{};
  org_gwtproject_dom_client_Node_$Overlay.$loadModules();
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
  Exception = goog.module.get('java.lang.Exception$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NodeList_$Overlay = goog.module.get('org.gwtproject.dom.client.NodeList.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(org_gwtproject_dom_client_Node_$Overlay, 'Object');

exports = org_gwtproject_dom_client_Node_$Overlay; 
//# sourceMappingURL=Node$$Overlay.js.map