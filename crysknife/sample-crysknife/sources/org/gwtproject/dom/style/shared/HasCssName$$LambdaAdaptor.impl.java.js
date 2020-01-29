goog.module('org.gwtproject.dom.style.shared.HasCssName.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

/**
 * @implements {HasCssName}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():?string} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():?string} */
  this.f_$$fn__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor;
  this.$ctor__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor__org_gwtproject_dom_style_shared_HasCssName_$JsFunction(fn);
 }
 /**
  * @param {?function():?string} fn
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor__org_gwtproject_dom_style_shared_HasCssName_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor = fn;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.dom.style.shared.HasCssName$$LambdaAdaptor');

HasCssName.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasCssName$$LambdaAdaptor.js.map