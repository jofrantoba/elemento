goog.module('elemental2.dom.HTMLParamElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLParamElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLParamElementInfo}
  * @public
  */
 static $create__() {
  HTMLParamElementInfo.$clinit();
  let $instance = new HTMLParamElementInfo();
  $instance.$ctor__elemental2_dom_HTMLParamElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLParamElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLParamElementInfo.$clinit = () =>{};
  HTMLParamElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLParamElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLParamElementInfo, 'elemental2.dom.HTMLParamElementInfo');

exports = HTMLParamElementInfo; 
//# sourceMappingURL=HTMLParamElementInfo.js.map