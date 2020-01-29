goog.module('org.gwtproject.editor.client.EditorVisitor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let EditorContext = goog.forwardDeclare('org.gwtproject.editor.client.EditorContext$impl');

class EditorVisitor extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!EditorVisitor}
  * @public
  */
 static $create__() {
  EditorVisitor.$clinit();
  let $instance = new EditorVisitor();
  $instance.$ctor__org_gwtproject_editor_client_EditorVisitor__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_EditorVisitor__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @template T
  * @param {EditorContext<T>} ctx
  * @public
  */
 m_endVisit__org_gwtproject_editor_client_EditorContext(ctx) {}
 /**
  * @template T
  * @param {EditorContext<T>} ctx
  * @return {boolean}
  * @public
  */
 m_visit__org_gwtproject_editor_client_EditorContext(ctx) {
  return true;
 }
 /**
  * @public
  */
 static $clinit() {
  EditorVisitor.$clinit = () =>{};
  EditorVisitor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof EditorVisitor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(EditorVisitor, 'org.gwtproject.editor.client.EditorVisitor');

exports = EditorVisitor; 
//# sourceMappingURL=EditorVisitor.js.map