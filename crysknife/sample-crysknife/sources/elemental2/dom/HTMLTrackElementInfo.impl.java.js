goog.module('elemental2.dom.HTMLTrackElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTrackElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLTrackElementInfo}
  * @public
  */
 static $create__() {
  HTMLTrackElementInfo.$clinit();
  let $instance = new HTMLTrackElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTrackElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLTrackElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLTrackElementInfo.$clinit = () =>{};
  HTMLTrackElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLTrackElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTrackElementInfo, 'elemental2.dom.HTMLTrackElementInfo');

exports = HTMLTrackElementInfo; 
//# sourceMappingURL=HTMLTrackElementInfo.js.map