goog.module('elemental2.dom.HTMLLIElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLLIElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLLIElementInfo}
  * @public
  */
 static $create__() {
  HTMLLIElementInfo.$clinit();
  let $instance = new HTMLLIElementInfo();
  $instance.$ctor__elemental2_dom_HTMLLIElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLLIElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLLIElementInfo.$clinit = () =>{};
  HTMLLIElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLLIElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLLIElementInfo, 'elemental2.dom.HTMLLIElementInfo');

exports = HTMLLIElementInfo; 
//# sourceMappingURL=HTMLLIElementInfo.js.map