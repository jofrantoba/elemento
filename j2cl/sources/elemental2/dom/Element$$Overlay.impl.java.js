goog.module('elemental2.dom.Element.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Element.AfterNodesUnionType.$Overlay$impl');
let AppendNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.AppendNodesUnionType.$Overlay$impl');
let BeforeNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.BeforeNodesUnionType.$Overlay$impl');
let MatchesSelectorRefNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.MatchesSelectorRefNodesUnionType.$Overlay$impl');
let PrependNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.PrependNodesUnionType.$Overlay$impl');
let ReplaceWithNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.ReplaceWithNodesUnionType.$Overlay$impl');
let ScrollIntoViewTopUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.ScrollIntoViewTopUnionType.$Overlay$impl');
let ScrollToScrollToOptionsOrXUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.ScrollToScrollToOptionsOrXUnionType.$Overlay$impl');
let SetAttributeNSValueUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.SetAttributeNSValueUnionType.$Overlay$impl');
let SetAttributeValueUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.SetAttributeValueUnionType.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('elemental2.dom.NodeList.$Overlay$impl');
let ScrollIntoViewOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
let ScrollToOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollToOptions.$Overlay$impl');
let TrustedHTML_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedHTML.$Overlay$impl');
let TrustedScriptURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScriptURL.$Overlay$impl');
let TrustedURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedURL.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Element_$Overlay {
 /**
  * @param {!Element} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_after__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.after(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_after__$devirt__elemental2_dom_Element__arrayOf_java_lang_String($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.after(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_append__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.append(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_append__$devirt__elemental2_dom_Element__arrayOf_java_lang_String($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.append(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_before__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.before(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_before__$devirt__elemental2_dom_Element__arrayOf_java_lang_String($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.before(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} selectors
  * @param {Node} refNodes
  * @return {boolean}
  * @public
  */
 static m_matchesSelector__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_Node($thisArg, selectors, refNodes) {
  Element_$Overlay.$clinit();
  return $thisArg.matchesSelector(selectors, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(refNodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} selectors
  * @param {NodeList<*>} refNodes
  * @return {boolean}
  * @public
  */
 static m_matchesSelector__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_NodeList($thisArg, selectors, refNodes) {
  Element_$Overlay.$clinit();
  return $thisArg.matchesSelector(selectors, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(refNodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_prepend__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.prepend(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_prepend__$devirt__elemental2_dom_Element__arrayOf_java_lang_String($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.prepend(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.replaceWith(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_java_lang_String($thisArg, nodes) {
  Element_$Overlay.$clinit();
  $thisArg.replaceWith(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {ScrollIntoViewOptions} top
  * @public
  */
 static m_scrollIntoView__$devirt__elemental2_dom_Element__elemental2_dom_ScrollIntoViewOptions($thisArg, top) {
  Element_$Overlay.$clinit();
  $thisArg.scrollIntoView(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(top)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {boolean} top
  * @public
  */
 static m_scrollIntoView__$devirt__elemental2_dom_Element__boolean($thisArg, top) {
  Element_$Overlay.$clinit();
  $thisArg.scrollIntoView(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(top)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {ScrollToOptions} scrollToOptionsOrX
  * @param {number} y
  * @public
  */
 static m_scrollTo__$devirt__elemental2_dom_Element__elemental2_dom_ScrollToOptions__double($thisArg, scrollToOptionsOrX, y) {
  Element_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /**
  * @param {!Element} $thisArg
  * @param {ScrollToOptions} scrollToOptionsOrX
  * @public
  */
 static m_scrollTo__$devirt__elemental2_dom_Element__elemental2_dom_ScrollToOptions($thisArg, scrollToOptionsOrX) {
  Element_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {number} scrollToOptionsOrX
  * @param {number} y
  * @public
  */
 static m_scrollTo__$devirt__elemental2_dom_Element__double__double($thisArg, scrollToOptionsOrX, y) {
  Element_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /**
  * @param {!Element} $thisArg
  * @param {number} scrollToOptionsOrX
  * @public
  */
 static m_scrollTo__$devirt__elemental2_dom_Element__double($thisArg, scrollToOptionsOrX) {
  Element_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} name
  * @param {?string} value
  * @public
  */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String($thisArg, name, value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} name
  * @param {TrustedHTML} value
  * @public
  */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_TrustedHTML($thisArg, name, value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} name
  * @param {TrustedScriptURL} value
  * @public
  */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_TrustedScriptURL($thisArg, name, value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} name
  * @param {TrustedURL} value
  * @public
  */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_TrustedURL($thisArg, name, value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} name
  * @param {boolean} value
  * @public
  */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean($thisArg, name, value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} name
  * @param {number} value
  * @public
  */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__double($thisArg, name, value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} qualifiedName
  * @param {?string} value
  * @public
  */
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__java_lang_String($thisArg, namespaceURI, qualifiedName, value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} qualifiedName
  * @param {boolean} value
  * @public
  */
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__boolean($thisArg, namespaceURI, qualifiedName, value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!Element} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} qualifiedName
  * @param {number} value
  * @public
  */
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__double($thisArg, namespaceURI, qualifiedName, value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @return {number}
  * @public
  */
 static get f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay() {
  return (Element_$Overlay.$clinit(), Element_$Overlay.$f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  Element_$Overlay.$clinit = () =>{};
  Element_$Overlay.$loadModules();
  Element_$Overlay.$f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay = Element.ALLOW_KEYBOARD_INPUT;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Element;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Element_$Overlay, 'Element');

/** @private {number} */
Element_$Overlay.$f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay = 0;

exports = Element_$Overlay; 
//# sourceMappingURL=Element$$Overlay.js.map