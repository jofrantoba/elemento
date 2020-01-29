goog.module('elemental2.dom.CharacterData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.CharacterData.AfterNodesUnionType.$Overlay$impl');
let BeforeNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CharacterData.BeforeNodesUnionType.$Overlay$impl');
let ReplaceWithNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CharacterData.ReplaceWithNodesUnionType.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class CharacterData_$Overlay {
 /**
  * @param {!CharacterData} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_after__$devirt__elemental2_dom_CharacterData__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  CharacterData_$Overlay.$clinit();
  $thisArg.after(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!CharacterData} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_after__$devirt__elemental2_dom_CharacterData__arrayOf_java_lang_String($thisArg, nodes) {
  CharacterData_$Overlay.$clinit();
  $thisArg.after(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!CharacterData} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_before__$devirt__elemental2_dom_CharacterData__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  CharacterData_$Overlay.$clinit();
  $thisArg.before(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!CharacterData} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_before__$devirt__elemental2_dom_CharacterData__arrayOf_java_lang_String($thisArg, nodes) {
  CharacterData_$Overlay.$clinit();
  $thisArg.before(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!CharacterData} $thisArg
  * @param {Array<Node>} nodes
  * @public
  */
 static m_replaceWith__$devirt__elemental2_dom_CharacterData__arrayOf_elemental2_dom_Node($thisArg, nodes) {
  CharacterData_$Overlay.$clinit();
  $thisArg.replaceWith(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @param {!CharacterData} $thisArg
  * @param {Array<?string>} nodes
  * @public
  */
 static m_replaceWith__$devirt__elemental2_dom_CharacterData__arrayOf_java_lang_String($thisArg, nodes) {
  CharacterData_$Overlay.$clinit();
  $thisArg.replaceWith(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(nodes)));
 }
 /**
  * @public
  */
 static $clinit() {
  CharacterData_$Overlay.$clinit = () =>{};
  CharacterData_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CharacterData;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(CharacterData_$Overlay, 'CharacterData');

exports = CharacterData_$Overlay; 
//# sourceMappingURL=CharacterData$$Overlay.js.map