goog.module('elemental2.dom.HTMLAnchorElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLAnchorElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLAnchorElementInfo}
  * @public
  */
 static $create__() {
  HTMLAnchorElementInfo.$clinit();
  let $instance = new HTMLAnchorElementInfo();
  $instance.$ctor__elemental2_dom_HTMLAnchorElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLAnchorElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLAnchorElementInfo.$clinit = () =>{};
  HTMLAnchorElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLAnchorElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLAnchorElementInfo, 'elemental2.dom.HTMLAnchorElementInfo');

exports = HTMLAnchorElementInfo; 
//# sourceMappingURL=HTMLAnchorElementInfo.js.map