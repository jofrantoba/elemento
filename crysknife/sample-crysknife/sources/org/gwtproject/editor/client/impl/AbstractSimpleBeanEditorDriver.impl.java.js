goog.module('org.gwtproject.editor.client.impl.AbstractSimpleBeanEditorDriver$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SimpleBeanEditorDriver = goog.require('org.gwtproject.editor.client.SimpleBeanEditorDriver$impl');
const BaseEditorDriver = goog.require('org.gwtproject.editor.client.impl.BaseEditorDriver$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @abstract
 * @template T, E
 * @extends {BaseEditorDriver<T, E>}
 * @implements {SimpleBeanEditorDriver<T, E>}
  */
class AbstractSimpleBeanEditorDriver extends BaseEditorDriver {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_AbstractSimpleBeanEditorDriver__() {
  this.$ctor__org_gwtproject_editor_client_impl_BaseEditorDriver__();
 }
 /**
  * @override
  * @param {T} object
  * @public
  */
 m_edit__java_lang_Object(object) {
  this.m_doEdit__java_lang_Object(object);
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_flush__() {
  this.m_doFlush__();
  return this.m_getObject__();
 }
 /**
  * @override
  * @param {E} editor
  * @public
  */
 m_initialize__org_gwtproject_editor_client_Editor(editor) {
  this.m_doInitialize__org_gwtproject_editor_client_Editor(editor);
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractSimpleBeanEditorDriver.$clinit = () =>{};
  AbstractSimpleBeanEditorDriver.$loadModules();
  BaseEditorDriver.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractSimpleBeanEditorDriver;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(AbstractSimpleBeanEditorDriver, 'org.gwtproject.editor.client.impl.AbstractSimpleBeanEditorDriver');

SimpleBeanEditorDriver.$markImplementor(AbstractSimpleBeanEditorDriver);

exports = AbstractSimpleBeanEditorDriver; 
//# sourceMappingURL=AbstractSimpleBeanEditorDriver.js.map