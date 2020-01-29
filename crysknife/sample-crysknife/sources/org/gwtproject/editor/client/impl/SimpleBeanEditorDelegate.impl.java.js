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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_SimpleBeanEditorDelegate__() {
  this.$ctor__org_gwtproject_editor_client_impl_AbstractEditorDelegate__();
 }
 /**
  * @override
  * @return {HandlerRegistration}
  * @public
  */
 m_subscribe__() {
  return null;
 }
 /**
  * @public
  */
 static $clinit() {
  SimpleBeanEditorDelegate.$clinit = () =>{};
  SimpleBeanEditorDelegate.$loadModules();
  AbstractEditorDelegate.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SimpleBeanEditorDelegate;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(SimpleBeanEditorDelegate, 'org.gwtproject.editor.client.impl.SimpleBeanEditorDelegate');

exports = SimpleBeanEditorDelegate; 
//# sourceMappingURL=SimpleBeanEditorDelegate.js.map