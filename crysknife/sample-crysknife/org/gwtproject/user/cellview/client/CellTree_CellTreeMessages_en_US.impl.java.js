goog.module('org.gwtproject.user.cellview.client.CellTree_CellTreeMessages_en_US$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CellTreeMessages = goog.require('org.gwtproject.user.cellview.client.CellTree.CellTreeMessages$impl');

/**
 * @implements {CellTreeMessages}
  */
class CellTree__CellTreeMessages__en__US extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!CellTree__CellTreeMessages__en__US}
  * @public
  */
 static $create__() {
  CellTree__CellTreeMessages__en__US.$clinit();
  let $instance = new CellTree__CellTreeMessages__en__US();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages_en_US__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages_en_US__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_showMore__() {
  return "Show more";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_emptyTree__() {
  return "Empty";
 }
 /**
  * @public
  */
 static $clinit() {
  CellTree__CellTreeMessages__en__US.$clinit = () =>{};
  CellTree__CellTreeMessages__en__US.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellTree__CellTreeMessages__en__US;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(CellTree__CellTreeMessages__en__US, 'org.gwtproject.user.cellview.client.CellTree_CellTreeMessages_en_US');

CellTreeMessages.$markImplementor(CellTree__CellTreeMessages__en__US);

exports = CellTree__CellTreeMessages__en__US; 
//# sourceMappingURL=CellTree_CellTreeMessages_en_US.js.map