goog.module('org.gwtproject.view.client.SimpleKeyProvider$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ProvidesKey = goog.require('org.gwtproject.view.client.ProvidesKey$impl');

/**
 * @template T
 * @implements {ProvidesKey<T>}
  */
class SimpleKeyProvider extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T @return {!SimpleKeyProvider<T>} */
 static $create__() {
  SimpleKeyProvider.$clinit();
  let $instance = new SimpleKeyProvider();
  $instance.$ctor__org_gwtproject_view_client_SimpleKeyProvider__();
  return $instance;
 }
 
 $ctor__org_gwtproject_view_client_SimpleKeyProvider__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {*} */
 m_getKey__java_lang_Object(/** T */ item) {
  return item;
 }
 
 static $clinit() {
  SimpleKeyProvider.$clinit = () =>{};
  SimpleKeyProvider.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleKeyProvider;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(SimpleKeyProvider, 'org.gwtproject.view.client.SimpleKeyProvider');

ProvidesKey.$markImplementor(SimpleKeyProvider);

exports = SimpleKeyProvider; 
//# sourceMappingURL=SimpleKeyProvider.js.map