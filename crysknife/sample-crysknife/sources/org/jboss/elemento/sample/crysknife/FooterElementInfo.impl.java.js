goog.module('org.jboss.elemento.sample.crysknife.FooterElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class FooterElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!FooterElementInfo}
  * @public
  */
 static $create__() {
  FooterElementInfo.$clinit();
  let $instance = new FooterElementInfo();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_FooterElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_FooterElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  FooterElementInfo.$clinit = () =>{};
  FooterElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FooterElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FooterElementInfo, 'org.jboss.elemento.sample.crysknife.FooterElementInfo');

exports = FooterElementInfo; 
//# sourceMappingURL=FooterElementInfo.js.map