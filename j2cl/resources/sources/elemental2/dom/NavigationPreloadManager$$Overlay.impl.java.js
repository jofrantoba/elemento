goog.module('elemental2.dom.NavigationPreloadManager.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /**
  * @public
  */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NavigationPreloadManager;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'NavigationPreloadManager');

exports = $Overlay; 
//# sourceMappingURL=NavigationPreloadManager$$Overlay.js.map