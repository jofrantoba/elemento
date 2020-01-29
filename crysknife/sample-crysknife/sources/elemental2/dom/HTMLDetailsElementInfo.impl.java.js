goog.module('elemental2.dom.HTMLDetailsElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLDetailsElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLDetailsElementInfo}
  * @public
  */
 static $create__() {
  HTMLDetailsElementInfo.$clinit();
  let $instance = new HTMLDetailsElementInfo();
  $instance.$ctor__elemental2_dom_HTMLDetailsElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLDetailsElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLDetailsElementInfo.$clinit = () =>{};
  HTMLDetailsElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLDetailsElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLDetailsElementInfo, 'elemental2.dom.HTMLDetailsElementInfo');

exports = HTMLDetailsElementInfo; 
//# sourceMappingURL=HTMLDetailsElementInfo.js.map