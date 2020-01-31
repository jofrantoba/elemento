goog.module('org.jboss.elemento.sample.crysknife.TodoRepositoryInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class TodoRepositoryInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TodoRepositoryInfo} */
 static $create__() {
  TodoRepositoryInfo.$clinit();
  let $instance = new TodoRepositoryInfo();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_TodoRepositoryInfo__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_TodoRepositoryInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  TodoRepositoryInfo.$clinit = () =>{};
  TodoRepositoryInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TodoRepositoryInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(TodoRepositoryInfo, 'org.jboss.elemento.sample.crysknife.TodoRepositoryInfo');

exports = TodoRepositoryInfo; 
//# sourceMappingURL=TodoRepositoryInfo.js.map