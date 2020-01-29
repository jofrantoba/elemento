goog.module('org.gwtproject.editor.client.testing.FakeLeafValueEditor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LeafValueEditor = goog.require('org.gwtproject.editor.client.LeafValueEditor$impl');

/**
 * @template T
 * @implements {LeafValueEditor<T>}
  */
class FakeLeafValueEditor extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {T} */
  this.f_value__org_gwtproject_editor_client_testing_FakeLeafValueEditor_;
 }
 /**
  * @template T
  * @return {!FakeLeafValueEditor<T>}
  * @public
  */
 static $create__() {
  FakeLeafValueEditor.$clinit();
  let $instance = new FakeLeafValueEditor();
  $instance.$ctor__org_gwtproject_editor_client_testing_FakeLeafValueEditor__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_testing_FakeLeafValueEditor__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_editor_client_testing_FakeLeafValueEditor_;
 }
 /**
  * @override
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {
  this.f_value__org_gwtproject_editor_client_testing_FakeLeafValueEditor_ = value;
 }
 /**
  * @public
  */
 static $clinit() {
  FakeLeafValueEditor.$clinit = () =>{};
  FakeLeafValueEditor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FakeLeafValueEditor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FakeLeafValueEditor, 'org.gwtproject.editor.client.testing.FakeLeafValueEditor');

LeafValueEditor.$markImplementor(FakeLeafValueEditor);

exports = FakeLeafValueEditor; 
//# sourceMappingURL=FakeLeafValueEditor.js.map