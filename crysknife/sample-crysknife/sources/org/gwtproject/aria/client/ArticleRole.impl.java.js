goog.module('org.gwtproject.aria.client.ArticleRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DocumentRole = goog.require('org.gwtproject.aria.client.DocumentRole$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {DocumentRole}
 * @extends {RegionRole}
 */
class ArticleRole {
 
 static $clinit() {
  ArticleRole.$clinit = () =>{};
  ArticleRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  DocumentRole.$markImplementor(ctor);
  RegionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ArticleRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ArticleRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ArticleRole, 'org.gwtproject.aria.client.ArticleRole');

ArticleRole.$markImplementor(/** @type {Function} */ (ArticleRole));

exports = ArticleRole; 
//# sourceMappingURL=ArticleRole.js.map