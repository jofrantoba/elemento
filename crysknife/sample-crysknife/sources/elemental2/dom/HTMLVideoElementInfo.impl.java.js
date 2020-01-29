goog.module('elemental2.dom.HTMLVideoElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLVideoElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLVideoElementInfo}
  * @public
  */
 static $create__() {
  HTMLVideoElementInfo.$clinit();
  let $instance = new HTMLVideoElementInfo();
  $instance.$ctor__elemental2_dom_HTMLVideoElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLVideoElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLVideoElementInfo.$clinit = () =>{};
  HTMLVideoElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLVideoElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLVideoElementInfo, 'elemental2.dom.HTMLVideoElementInfo');

exports = HTMLVideoElementInfo; 
//# sourceMappingURL=HTMLVideoElementInfo.js.map