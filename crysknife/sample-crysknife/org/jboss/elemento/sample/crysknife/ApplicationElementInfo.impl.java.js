goog.module('org.jboss.elemento.sample.crysknife.ApplicationElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class ApplicationElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ApplicationElementInfo}
  * @public
  */
 static $create__() {
  ApplicationElementInfo.$clinit();
  let $instance = new ApplicationElementInfo();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_ApplicationElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_ApplicationElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  ApplicationElementInfo.$clinit = () =>{};
  ApplicationElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ApplicationElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(ApplicationElementInfo, 'org.jboss.elemento.sample.crysknife.ApplicationElementInfo');

exports = ApplicationElementInfo; 
//# sourceMappingURL=ApplicationElementInfo.js.map