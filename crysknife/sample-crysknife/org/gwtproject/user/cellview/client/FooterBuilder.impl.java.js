goog.module('org.gwtproject.user.cellview.client.FooterBuilder$impl');

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
class FooterBuilder {
 /** @abstract @return {TableSectionBuilder} */
 m_buildFooter__() {}
 /** @abstract @return {Column<T, ?>} */
 m_getColumn__org_gwtproject_dom_client_Element(/** Object */ elem) {}
 /** @abstract @return {Header<?>} */
 m_getHeader__org_gwtproject_dom_client_Element(/** Object */ elem) {}
 /** @abstract @return {number} */
 m_getRowIndex__org_gwtproject_dom_client_TableRowElement(/** Object */ row) {}
 /** @abstract @return {boolean} */
 m_isColumn__org_gwtproject_dom_client_Element(/** Object */ elem) {}
 /** @abstract @return {boolean} */
 m_isHeader__org_gwtproject_dom_client_Element(/** Object */ elem) {}
 
 static $clinit() {
  FooterBuilder.$clinit = () =>{};
  FooterBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_FooterBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_FooterBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FooterBuilder, 'org.gwtproject.user.cellview.client.FooterBuilder');

FooterBuilder.$markImplementor(/** @type {Function} */ (FooterBuilder));

exports = FooterBuilder; 
//# sourceMappingURL=FooterBuilder.js.map