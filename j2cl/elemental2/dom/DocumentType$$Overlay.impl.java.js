goog.module('elemental2.dom.DocumentType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DocumentType.AfterNodesUnionType.$Overlay$impl');
let BeforeNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DocumentType.BeforeNodesUnionType.$Overlay$impl');
let ReplaceWithNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DocumentType.ReplaceWithNodesUnionType.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class DocumentType_$Overlay {
 /**
  * @param {!DocumentType} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_after__$devirt__elemental2_dom_DocumentType__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.after(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!DocumentType} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_after__$devirt__elemental2_dom_DocumentType__arrayOf_java_lang_String($thisArg, nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.after(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!DocumentType} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_before__$devirt__elemental2_dom_DocumentType__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.before(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!DocumentType} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_before__$devirt__elemental2_dom_DocumentType__arrayOf_java_lang_String($thisArg, nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.before(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!DocumentType} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_replaceWith__$devirt__elemental2_dom_DocumentType__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.replaceWith(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!DocumentType} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_replaceWith__$devirt__elemental2_dom_DocumentType__arrayOf_java_lang_String($thisArg, nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.replaceWith(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @public
  */
 static $clinit() {
  DocumentType_$Overlay.$clinit = () =>{};
  DocumentType_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DocumentType;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(DocumentType_$Overlay, 'DocumentType');

exports = DocumentType_$Overlay; 
//# sourceMappingURL=DocumentType$$Overlay.js.map