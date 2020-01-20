goog.module('elemental2.dom.Document.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Document.AppendNodesUnionType.$Overlay$impl');
let CreateTextNodeDataUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.CreateTextNodeDataUnionType.$Overlay$impl');
let PrependNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.PrependNodesUnionType.$Overlay$impl');
let WriteTextUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.WriteTextUnionType.$Overlay$impl');
let WritelnTextUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.WritelnTextUnionType.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Text_$Overlay = goog.forwardDeclare('elemental2.dom.Text.$Overlay$impl');
let Touch_$Overlay = goog.forwardDeclare('elemental2.dom.Touch.$Overlay$impl');
let TouchList_$Overlay = goog.forwardDeclare('elemental2.dom.TouchList.$Overlay$impl');
let TrustedHTML_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedHTML.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Document_$Overlay {
 /**
  * @param {!Document} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_append__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  Document_$Overlay.$clinit();
  $thisArg.append(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_append__$devirt__elemental2_dom_Document__arrayOf_java_lang_String($thisArg, nodes) {
  Document_$Overlay.$clinit();
  $thisArg.append(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {?string} data
  * @return {Text}
  * @public
  */
 static m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String($thisArg, data) {
  Document_$Overlay.$clinit();
  return $thisArg.createTextNode(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {number} data
  * @return {Text}
  * @public
  */
 static m_createTextNode__$devirt__elemental2_dom_Document__double($thisArg, data) {
  Document_$Overlay.$clinit();
  return $thisArg.createTextNode(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {Array<Touch>} touches
  * @return {TouchList}
  * @public
  */
 static m_createTouchList__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Touch($thisArg, touches) {
  Document_$Overlay.$clinit();
  return $thisArg.createTouchList(/**@type {Array<Touch>} */ (Js.m_uncheckedCast__java_lang_Object(touches)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_prepend__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  Document_$Overlay.$clinit();
  $thisArg.prepend(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_prepend__$devirt__elemental2_dom_Document__arrayOf_java_lang_String($thisArg, nodes) {
  Document_$Overlay.$clinit();
  $thisArg.prepend(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {?string} text
  * @public
  */
 static m_write__$devirt__elemental2_dom_Document__java_lang_String($thisArg, text) {
  Document_$Overlay.$clinit();
  $thisArg.write(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {TrustedHTML} text
  * @public
  */
 static m_write__$devirt__elemental2_dom_Document__elemental2_dom_TrustedHTML($thisArg, text) {
  Document_$Overlay.$clinit();
  $thisArg.write(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {?string} text
  * @public
  */
 static m_writeln__$devirt__elemental2_dom_Document__java_lang_String($thisArg, text) {
  Document_$Overlay.$clinit();
  $thisArg.writeln(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 /**
  * @param {!Document} $thisArg
  * @param {TrustedHTML} text
  * @public
  */
 static m_writeln__$devirt__elemental2_dom_Document__elemental2_dom_TrustedHTML($thisArg, text) {
  Document_$Overlay.$clinit();
  $thisArg.writeln(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 /**
  * @public
  */
 static $clinit() {
  Document_$Overlay.$clinit = () =>{};
  Document_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Document;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Document_$Overlay, 'Document');

exports = Document_$Overlay; 
//# sourceMappingURL=Document$$Overlay.js.map