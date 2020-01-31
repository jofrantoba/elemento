goog.module('org.gwtproject.editor.client.impl.SimpleBeanEditorDelegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEditorDelegate = goog.require('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @abstract
 * @template T, E
 * @extends {AbstractEditorDelegate<T, E>}
  */
class SimpleBeanEditorDelegate extends AbstractEditorDelegate {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_editor_client_impl_SimpleBeanEditorDelegate__() {
  this.$ctor__org_gwtproject_editor_client_impl_AbstractEditorDelegate__();
 }
 /** @override @return {HandlerRegistration} */
 m_subscribe__() {
  return null;
 }
 
 static $clinit() {
  SimpleBeanEditorDelegate.$clinit = () =>{};
  SimpleBeanEditorDelegate.$loadModules();
  AbstractEditorDelegate.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleBeanEditorDelegate;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(SimpleBeanEditorDelegate, 'org.gwtproject.editor.client.impl.SimpleBeanEditorDelegate');

exports = SimpleBeanEditorDelegate; 
//# sourceMappingURL=SimpleBeanEditorDelegate.js.map