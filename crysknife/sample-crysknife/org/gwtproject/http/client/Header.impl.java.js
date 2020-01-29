goog.module('org.gwtproject.http.client.Header$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @abstract
  */
class Header extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_http_client_Header__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getName__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getValue__() {}
 /**
  * @public
  */
 static $clinit() {
  Header.$clinit = () =>{};
  Header.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Header;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Header, 'org.gwtproject.http.client.Header');

exports = Header; 
//# sourceMappingURL=Header.js.map