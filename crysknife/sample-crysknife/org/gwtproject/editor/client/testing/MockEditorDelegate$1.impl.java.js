goog.module('org.gwtproject.editor.client.testing.MockEditorDelegate.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HandlerRegistration = goog.require('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @implements {HandlerRegistration}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!$1}
  * @public
  */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_editor_client_testing_MockEditorDelegate_1__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_testing_MockEditorDelegate_1__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_removeHandler__() {}
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.editor.client.testing.MockEditorDelegate$1');

HandlerRegistration.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=MockEditorDelegate$1.js.map