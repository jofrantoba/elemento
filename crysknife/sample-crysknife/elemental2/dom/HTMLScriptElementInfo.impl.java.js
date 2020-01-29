goog.module('elemental2.dom.HTMLScriptElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLScriptElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLScriptElementInfo}
  * @public
  */
 static $create__() {
  HTMLScriptElementInfo.$clinit();
  let $instance = new HTMLScriptElementInfo();
  $instance.$ctor__elemental2_dom_HTMLScriptElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLScriptElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLScriptElementInfo.$clinit = () =>{};
  HTMLScriptElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLScriptElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLScriptElementInfo, 'elemental2.dom.HTMLScriptElementInfo');

exports = HTMLScriptElementInfo; 
//# sourceMappingURL=HTMLScriptElementInfo.js.map