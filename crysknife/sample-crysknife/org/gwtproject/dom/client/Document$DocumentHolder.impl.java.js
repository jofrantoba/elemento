goog.module('org.gwtproject.dom.client.Document.DocumentHolder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');

class DocumentHolder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DocumentHolder}
  * @public
  */
 static $create__() {
  let $instance = new DocumentHolder();
  $instance.$ctor__org_gwtproject_dom_client_Document_DocumentHolder__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_dom_client_Document_DocumentHolder__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Object}
  * @public
  */
 static get f_doc__org_gwtproject_dom_client_Document_DocumentHolder_() {
  return (DocumentHolder.$clinit(), DocumentHolder.$f_doc__org_gwtproject_dom_client_Document_DocumentHolder_);
 }
 /**
  * @param {Object} value
  * @public
  */
 static set f_doc__org_gwtproject_dom_client_Document_DocumentHolder_(value) {
  (DocumentHolder.$clinit(), DocumentHolder.$f_doc__org_gwtproject_dom_client_Document_DocumentHolder_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  DocumentHolder.$clinit = () =>{};
  DocumentHolder.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DocumentHolder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DocumentHolder, 'org.gwtproject.dom.client.Document$DocumentHolder');

/** @private {Object} */
DocumentHolder.$f_doc__org_gwtproject_dom_client_Document_DocumentHolder_;

exports = DocumentHolder; 
//# sourceMappingURL=Document$DocumentHolder.js.map