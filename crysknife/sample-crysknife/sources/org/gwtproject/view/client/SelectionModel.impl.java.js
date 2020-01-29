goog.module('org.gwtproject.view.client.SelectionModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ProvidesKey = goog.require('org.gwtproject.view.client.ProvidesKey$impl');
const HasSelectionChangedHandlers = goog.require('org.gwtproject.view.client.SelectionChangeEvent.HasSelectionChangedHandlers$impl');

let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');

/**
 * @interface
 * @template T
 * @extends {HasSelectionChangedHandlers}
 * @extends {ProvidesKey<T>}
 */
class SelectionModel {
 /**
  * @abstract
  * @override
  * @param {Handler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addSelectionChangeHandler__org_gwtproject_view_client_SelectionChangeEvent_Handler(handler) {}
 /**
  * @abstract
  * @param {T} object
  * @return {boolean}
  * @public
  */
 m_isSelected__java_lang_Object(object) {}
 /**
  * @abstract
  * @param {T} object
  * @param {boolean} selected
  * @public
  */
 m_setSelected__java_lang_Object__boolean(object, selected) {}
 /**
  * @public
  */
 static $clinit() {
  SelectionModel.$clinit = () =>{};
  SelectionModel.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasSelectionChangedHandlers.$markImplementor(classConstructor);
  ProvidesKey.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_view_client_SelectionModel = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_SelectionModel;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SelectionModel, 'org.gwtproject.view.client.SelectionModel');

SelectionModel.$markImplementor(/** @type {Function} */ (SelectionModel));

exports = SelectionModel; 
//# sourceMappingURL=SelectionModel.js.map