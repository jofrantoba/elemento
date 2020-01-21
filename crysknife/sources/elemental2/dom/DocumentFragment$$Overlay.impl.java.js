goog.module('elemental2.dom.DocumentFragment.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DocumentFragment.AppendNodesUnionType.$Overlay$impl');
let PrependNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DocumentFragment.PrependNodesUnionType.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class DocumentFragment_$Overlay {
 /**
  * @param {!DocumentFragment} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_append__$devirt__elemental2_dom_DocumentFragment__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  DocumentFragment_$Overlay.$clinit();
  $thisArg.append(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!DocumentFragment} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_append__$devirt__elemental2_dom_DocumentFragment__arrayOf_java_lang_String($thisArg, nodes) {
  DocumentFragment_$Overlay.$clinit();
  $thisArg.append(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!DocumentFragment} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_prepend__$devirt__elemental2_dom_DocumentFragment__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  DocumentFragment_$Overlay.$clinit();
  $thisArg.prepend(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!DocumentFragment} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_prepend__$devirt__elemental2_dom_DocumentFragment__arrayOf_java_lang_String($thisArg, nodes) {
  DocumentFragment_$Overlay.$clinit();
  $thisArg.prepend(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @public
  */
 static $clinit() {
  DocumentFragment_$Overlay.$clinit = () =>{};
  DocumentFragment_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DocumentFragment;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(DocumentFragment_$Overlay, 'DocumentFragment');

exports = DocumentFragment_$Overlay; 
//# sourceMappingURL=DocumentFragment$$Overlay.js.map