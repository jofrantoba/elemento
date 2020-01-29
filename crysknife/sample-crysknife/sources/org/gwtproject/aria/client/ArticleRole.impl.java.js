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
 /**
  * @public
  */
 static $clinit() {
  ArticleRole.$clinit = () =>{};
  ArticleRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  DocumentRole.$markImplementor(classConstructor);
  RegionRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_ArticleRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ArticleRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ArticleRole, 'org.gwtproject.aria.client.ArticleRole');

ArticleRole.$markImplementor(/** @type {Function} */ (ArticleRole));

exports = ArticleRole; 
//# sourceMappingURL=ArticleRole.js.map