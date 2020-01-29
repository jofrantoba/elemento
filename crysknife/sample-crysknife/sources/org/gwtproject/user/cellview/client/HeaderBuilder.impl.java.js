goog.module('org.gwtproject.user.cellview.client.HeaderBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let TableRowElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let Header = goog.forwardDeclare('org.gwtproject.user.cellview.client.Header$impl');

/**
 * @interface
 * @template T
 */
class HeaderBuilder {
 /**
  * @abstract
  * @return {TableSectionBuilder}
  * @public
  */
 m_buildHeader__() {}
 /**
  * @abstract
  * @param {Object} elem
  * @return {Column<T, ?>}
  * @public
  */
 m_getColumn__org_gwtproject_dom_client_Element(elem) {}
 /**
  * @abstract
  * @param {Object} elem
  * @return {Header<?>}
  * @public
  */
 m_getHeader__org_gwtproject_dom_client_Element(elem) {}
 /**
  * @abstract
  * @param {Object} row
  * @return {number}
  * @public
  */
 m_getRowIndex__org_gwtproject_dom_client_TableRowElement(row) {}
 /**
  * @abstract
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 m_isColumn__org_gwtproject_dom_client_Element(elem) {}
 /**
  * @abstract
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 m_isHeader__org_gwtproject_dom_client_Element(elem) {}
 /**
  * @public
  */
 static $clinit() {
  HeaderBuilder.$clinit = () =>{};
  HeaderBuilder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_HeaderBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HeaderBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HeaderBuilder, 'org.gwtproject.user.cellview.client.HeaderBuilder');

HeaderBuilder.$markImplementor(/** @type {Function} */ (HeaderBuilder));

exports = HeaderBuilder; 
//# sourceMappingURL=HeaderBuilder.js.map