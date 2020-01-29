goog.module('org.gwtproject.i18n.shared.AlternateMessageSelector.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AlternateMessageSelector = goog.require('org.gwtproject.i18n.shared.AlternateMessageSelector$impl');

/**
 * @implements {AlternateMessageSelector}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(?string):boolean} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(?string):boolean} */
  this.f_$$fn__org_gwtproject_i18n_shared_AlternateMessageSelector_$LambdaAdaptor;
  this.$ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_$LambdaAdaptor__org_gwtproject_i18n_shared_AlternateMessageSelector_$JsFunction(fn);
 }
 /**
  * @param {?function(?string):boolean} fn
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_AlternateMessageSelector_$LambdaAdaptor__org_gwtproject_i18n_shared_AlternateMessageSelector_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_i18n_shared_AlternateMessageSelector_$LambdaAdaptor = fn;
 }
 /**
  * @param {?string} arg0
  * @return {boolean}
  * @public
  */
 m_isFormAcceptable__java_lang_String(arg0) {
  let /** ?function(?string):boolean */ $function;
  return ($function = this.f_$$fn__org_gwtproject_i18n_shared_AlternateMessageSelector_$LambdaAdaptor, $function(arg0));
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.i18n.shared.AlternateMessageSelector$$LambdaAdaptor');

AlternateMessageSelector.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AlternateMessageSelector$$LambdaAdaptor.js.map