goog.module('org.jboss.elemento.sample.crysknife.MainInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class MainInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!MainInfo}
  * @public
  */
 static $create__() {
  MainInfo.$clinit();
  let $instance = new MainInfo();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_MainInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_MainInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  MainInfo.$clinit = () =>{};
  MainInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MainInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(MainInfo, 'org.jboss.elemento.sample.crysknife.MainInfo');

/** @public {?string} @const */
MainInfo.f_repository__org_jboss_elemento_sample_crysknife_MainInfo = "f_repository__org_jboss_elemento_sample_crysknife_Main";
/** @public {?string} @const */
MainInfo.f_application__org_jboss_elemento_sample_crysknife_MainInfo = "f_application__org_jboss_elemento_sample_crysknife_Main";
/** @public {?string} @const */
MainInfo.f_footer__org_jboss_elemento_sample_crysknife_MainInfo = "f_footer__org_jboss_elemento_sample_crysknife_Main";

exports = MainInfo; 
//# sourceMappingURL=MainInfo.js.map