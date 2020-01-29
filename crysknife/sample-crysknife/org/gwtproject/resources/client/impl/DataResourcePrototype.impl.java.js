goog.module('org.gwtproject.resources.client.impl.DataResourcePrototype$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DataResource = goog.require('org.gwtproject.resources.client.DataResource$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @implements {DataResource}
  */
class DataResourcePrototype extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_name__org_gwtproject_resources_client_impl_DataResourcePrototype_;
  /** @public {SafeUri} */
  this.f_uri__org_gwtproject_resources_client_impl_DataResourcePrototype_;
 }
 /**
  * @param {?string} name
  * @param {SafeUri} uri
  * @return {!DataResourcePrototype}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri(name, uri) {
  DataResourcePrototype.$clinit();
  let $instance = new DataResourcePrototype();
  $instance.$ctor__org_gwtproject_resources_client_impl_DataResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri(name, uri);
  return $instance;
 }
 /**
  * @param {?string} name
  * @param {SafeUri} uri
  * @public
  */
 $ctor__org_gwtproject_resources_client_impl_DataResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri(name, uri) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_gwtproject_resources_client_impl_DataResourcePrototype_ = name;
  this.f_uri__org_gwtproject_resources_client_impl_DataResourcePrototype_ = uri;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.f_name__org_gwtproject_resources_client_impl_DataResourcePrototype_;
 }
 /**
  * @override
  * @return {SafeUri}
  * @public
  */
 m_getSafeUri__() {
  return this.f_uri__org_gwtproject_resources_client_impl_DataResourcePrototype_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getUrl__() {
  return this.f_uri__org_gwtproject_resources_client_impl_DataResourcePrototype_.m_asString__();
 }
 /**
  * @public
  */
 static $clinit() {
  DataResourcePrototype.$clinit = () =>{};
  DataResourcePrototype.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DataResourcePrototype;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DataResourcePrototype, 'org.gwtproject.resources.client.impl.DataResourcePrototype');

DataResource.$markImplementor(DataResourcePrototype);

exports = DataResourcePrototype; 
//# sourceMappingURL=DataResourcePrototype.js.map