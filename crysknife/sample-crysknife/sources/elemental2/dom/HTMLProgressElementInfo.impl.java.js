goog.module('elemental2.dom.HTMLProgressElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLProgressElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLProgressElementInfo}
  * @public
  */
 static $create__() {
  HTMLProgressElementInfo.$clinit();
  let $instance = new HTMLProgressElementInfo();
  $instance.$ctor__elemental2_dom_HTMLProgressElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLProgressElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLProgressElementInfo.$clinit = () =>{};
  HTMLProgressElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLProgressElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLProgressElementInfo, 'elemental2.dom.HTMLProgressElementInfo');

exports = HTMLProgressElementInfo; 
//# sourceMappingURL=HTMLProgressElementInfo.js.map