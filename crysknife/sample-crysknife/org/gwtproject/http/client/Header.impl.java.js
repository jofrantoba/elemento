goog.module('org.gwtproject.http.client.Header$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @abstract
  */
class Header extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_http_client_Header__() {
  this.$ctor__java_lang_Object__();
 }
 /** @abstract @return {?string} */
 m_getName__() {}
 /** @abstract @return {?string} */
 m_getValue__() {}
 
 static $clinit() {
  Header.$clinit = () =>{};
  Header.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Header;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Header, 'org.gwtproject.http.client.Header');

exports = Header; 
//# sourceMappingURL=Header.js.map