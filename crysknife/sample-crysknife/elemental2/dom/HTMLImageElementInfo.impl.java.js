goog.module('elemental2.dom.HTMLImageElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLImageElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLImageElementInfo}
  * @public
  */
 static $create__() {
  HTMLImageElementInfo.$clinit();
  let $instance = new HTMLImageElementInfo();
  $instance.$ctor__elemental2_dom_HTMLImageElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLImageElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLImageElementInfo.$clinit = () =>{};
  HTMLImageElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLImageElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLImageElementInfo, 'elemental2.dom.HTMLImageElementInfo');

exports = HTMLImageElementInfo; 
//# sourceMappingURL=HTMLImageElementInfo.js.map