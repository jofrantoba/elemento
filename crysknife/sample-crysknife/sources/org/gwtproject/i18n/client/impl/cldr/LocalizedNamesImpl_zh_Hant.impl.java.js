goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__zh = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__zh__Hant extends LocalizedNamesImpl__zh {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__zh__Hant} */
 static $create__() {
  LocalizedNamesImpl__zh__Hant.$clinit();
  let $instance = new LocalizedNamesImpl__zh__Hant();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_zh_Hant__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_zh_Hant__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_zh__();
 }
 /** @override @return {Array<?string>} */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["TW", "HK", "MY"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["XA", "XB", "AF", "AR", "AE", "OM", "AC", "AL", "DZ", "EG", "AD", "AG", "AO", "AI", "AU", "PG", "BS", "PK", "PY", "PS", "BH", "PA", "BR", "BB", "BY", "BM", "BG", "KP", "MP", "BE", "IS", "BO", "PR", "BA", "BW", "PL", "PW", "BT", "BF", "BV", "TD", "GQ", "QO", "DK", "DE", "DG", "TG", "DM", "DO", "RU", "EC", "ER", "FR", "PF", "GF", "TF", "MF", "FO", "PH", "FI", "FK", "GM", "CR", "CO", "KM", "GL", "GD", "GG", "CU", "GP", "GT", "KZ", "HT", "AW", "SX", "NL", "BQ", "HM", "HN", "DJ", "KI", "KG", "CA", "IC", "GA", "KH", "CZ", "CM", "QA", "CC", "XK", "KW", "CP", "HR", "KE", "LV", "LB", "LY", "LT", "LI", "RE", "IM", "MR", "US", "UM", "VI", "AS", "MN", "ME", "MS", "BD", "PE", "FM", "MU", "MA", "MD", "MC", "MZ", "MX", "NG", "ZA", "GS", "AQ", "SS", "KR", "NP", "NI", "NE", "NO", "SJ", "PN", "PT", "BI", "TT", "JP", "SE", "CH", "SC", "SN", "RS", "SA", "ZM", "SZ", "LK", "SK", "SI", "SB", "SO", "TJ", "TW", "TH", "TZ", "TA", "TN", "TR", "TC", "TM", "TV", "TK", "WF", "VE", "ES", "EH", "GR", "CI", "ZW", "SG", "NC", "HU", "EA", "JM", "IQ", "IR", "ET", "IL", "IN", "ID", "GB", "IO", "VG", "VN", "GI", "CL", "CF", "CN", "MO", "HK", "BN", "LA", "GH", "VA", "FJ", "AM", "AZ", "CG", "CD", "GE", "AT", "AX", "GN", "GW", "CK", "CW", "EE", "IE", "SY", "TL", "TO", "EU", "EZ", "JE", "UG", "UA", "UY", "UZ", "SL", "RW", "LU", "JO", "NA", "NU", "NZ", "CV", "MM", "RO", "IT", "BL", "ST", "SH", "KN", "LC", "PM", "VC", "CX", "SM", "UN", "VU", "YE", "GY", "WS", "SV", "SD", "SR", "NF", "NR", "BZ", "BJ", "LR", "LS", "CY", "KY", "GU", "MQ", "MW", "ML", "MK", "MY", "MV", "MT", "YT", "MH", "MG"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "\u4E2D\u7F8E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "\u6771\u975E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "\u975E\u6D32\u5357\u90E8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "\u5317\u7F8E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "\u52A0\u52D2\u6BD4\u6D77");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "\u6771\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "\u5357\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "\u6771\u5357\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "\u5357\u6B50");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "\u6FB3\u6D32\u8207\u7D10\u897F\u862D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "\u7F8E\u62C9\u5C3C\u897F\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "\u5BC6\u514B\u7F85\u5C3C\u897F\u4E9E\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "\u73BB\u91CC\u5C3C\u897F\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "\u4E9E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "\u4E2D\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "\u897F\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "\u6B50\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "\u6771\u6B50");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "\u5317\u6B50");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "\u897F\u6B50");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "\u6492\u54C8\u62C9\u6492\u6C99\u6F20\u4EE5\u5357\u975E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "\u963F\u68EE\u677E\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AD", "\u5B89\u9053\u723E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "\u963F\u62C9\u4F2F\u806F\u5408\u5927\u516C\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "\u5B89\u5730\u5361\u53CA\u5DF4\u5E03\u9054");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AI", "\u5B89\u594E\u62C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "\u963F\u723E\u5DF4\u5C3C\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "\u4E9E\u7F8E\u5C3C\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "\u5357\u6975\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "\u7F8E\u5C6C\u85A9\u6469\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "\u5967\u5730\u5229");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "\u6FB3\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AW", "\u8377\u5C6C\u963F\u9B6F\u5DF4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "\u5967\u862D\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "\u4E9E\u585E\u62DC\u7136");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "\u6CE2\u58EB\u5C3C\u4E9E\u8207\u8D6B\u585E\u54E5\u7DAD\u7D0D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BB", "\u5DF4\u8C9D\u591A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BD", "\u5B5F\u52A0\u62C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "\u6BD4\u5229\u6642");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BF", "\u5E03\u5409\u7D0D\u6CD5\u7D22");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "\u4FDD\u52A0\u5229\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BI", "\u84B2\u9686\u5730");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BJ", "\u8C9D\u5357");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "\u8056\u5DF4\u745F\u7C73");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BM", "\u767E\u6155\u9054");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "\u6C76\u840A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "\u73BB\u5229\u7DAD\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "\u8377\u862D\u52A0\u52D2\u6BD4\u5340");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BS", "\u5DF4\u54C8\u99AC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "\u5E03\u5A01\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BW", "\u6CE2\u672D\u90A3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "\u767D\u4FC4\u7F85\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BZ", "\u8C9D\u91CC\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "\u79D1\u514B\u65AF\uFF08\u57FA\u9748\uFF09\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "\u525B\u679C\uFF08\u91D1\u590F\u6C99\uFF09");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "\u4E2D\u975E\u5171\u548C\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "\u525B\u679C\uFF08\u5E03\u62C9\u85A9\uFF09");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "\u8C61\u7259\u6D77\u5CB8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "\u5EAB\u514B\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "\u5580\u9EA5\u9686");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CN", "\u4E2D\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "\u54E5\u502B\u6BD4\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "\u514B\u91CC\u6D3E\u9813\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CR", "\u54E5\u65AF\u5927\u9ECE\u52A0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "\u7DAD\u5FB7\u89D2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CW", "\u5EAB\u62C9\u7D22");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "\u8056\u8A95\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CY", "\u8CFD\u666E\u52D2\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "\u5FB7\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DG", "\u8FEA\u4E9E\u54E5\u52A0\u897F\u4E9E\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DJ", "\u5409\u5E03\u5730");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "\u4E39\u9EA5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "\u591A\u660E\u5C3C\u52A0\u5171\u548C\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "\u963F\u723E\u53CA\u5229\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "\u4F11\u9054\u8207\u6885\u5229\u5229\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EC", "\u5384\u74DC\u591A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "\u611B\u6C99\u5C3C\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ER", "\u5384\u5229\u5782\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "\u8863\u7D22\u6BD4\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "\u6B50\u76DF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "\u6B50\u5143\u5340");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "\u82AC\u862D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FJ", "\u6590\u6FDF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "\u798F\u514B\u862D\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "\u5BC6\u514B\u7F85\u5C3C\u897F\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "\u6CD5\u7F85\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "\u6CD5\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GA", "\u52A0\u5F6D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "\u82F1\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GD", "\u683C\u745E\u90A3\u9054");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "\u55AC\u6CBB\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "\u6CD5\u5C6C\u572D\u4E9E\u90A3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GG", "\u6839\u606F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GH", "\u8FE6\u7D0D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GI", "\u76F4\u5E03\u7F85\u9640");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "\u683C\u9675\u862D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GM", "\u7518\u6BD4\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GN", "\u5E7E\u5167\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GP", "\u74DC\u5730\u6D1B\u666E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "\u8D64\u9053\u5E7E\u5167\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "\u5E0C\u81D8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "\u5357\u55AC\u6CBB\u4E9E\u8207\u5357\u4E09\u660E\u6CBB\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GT", "\u74DC\u5730\u99AC\u62C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GU", "\u95DC\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GW", "\u5E7E\u5167\u4E9E\u6BD4\u7D22");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GY", "\u84CB\u4E9E\u90A3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "\u4E2D\u570B\u9999\u6E2F\u7279\u5225\u884C\u653F\u5340");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "\u8D6B\u5FB7\u5CF6\u53CA\u9EA5\u5510\u7D0D\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HN", "\u5B8F\u90FD\u62C9\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "\u514B\u7F85\u57C3\u897F\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "\u52A0\u90A3\u5229\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "\u5370\u5C3C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "\u611B\u723E\u862D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "\u66FC\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "\u82F1\u5C6C\u5370\u5EA6\u6D0B\u9818\u5730");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "\u51B0\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "\u7FA9\u5927\u5229");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JE", "\u6FA4\u897F\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JM", "\u7259\u8CB7\u52A0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "\u7D04\u65E6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "\u80AF\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "\u5409\u723E\u5409\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KI", "\u5409\u91CC\u5DF4\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "\u845B\u6469");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "\u8056\u514B\u91CC\u65AF\u591A\u798F\u53CA\u5C3C\u7DAD\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "\u5317\u97D3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "\u5357\u97D3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "\u958B\u66FC\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "\u54C8\u85A9\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LA", "\u5BEE\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "\u8056\u9732\u897F\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LI", "\u5217\u652F\u6566\u65AF\u767B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LK", "\u65AF\u91CC\u862D\u5361");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LR", "\u8CF4\u6BD4\u745E\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LS", "\u8CF4\u7D22\u6258");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "\u76E7\u68EE\u5821");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "\u62C9\u812B\u7DAD\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "\u5229\u6BD4\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MC", "\u6469\u7D0D\u54E5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MD", "\u6469\u723E\u591A\u74E6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ME", "\u8499\u7279\u5167\u54E5\u7F85");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "\u6CD5\u5C6C\u8056\u99AC\u4E01");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MG", "\u99AC\u9054\u52A0\u65AF\u52A0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "\u99AC\u7D39\u723E\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "\u99AC\u5176\u9813");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ML", "\u99AC\u5229");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "\u7DEC\u7538");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "\u4E2D\u570B\u6FB3\u9580\u7279\u5225\u884C\u653F\u5340");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "\u5317\u99AC\u5229\u5B89\u7D0D\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MQ", "\u99AC\u4E01\u5C3C\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "\u8305\u5229\u5854\u5C3C\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MS", "\u8499\u54F2\u81D8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MT", "\u99AC\u723E\u4ED6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MU", "\u6A21\u91CC\u897F\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "\u99AC\u723E\u5730\u592B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MW", "\u99AC\u62C9\u5A01");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "\u99AC\u4F86\u897F\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "\u83AB\u4E09\u6BD4\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "\u7D0D\u7C73\u6BD4\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "\u65B0\u5580\u91CC\u591A\u5C3C\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NE", "\u5C3C\u65E5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "\u8AFE\u798F\u514B\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NG", "\u5948\u53CA\u5229\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "\u8377\u862D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NP", "\u5C3C\u6CCA\u723E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NR", "\u8AFE\u9B6F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NU", "\u7D10\u57C3\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "\u7D10\u897F\u862D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PA", "\u5DF4\u62FF\u99AC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PE", "\u79D8\u9B6F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "\u6CD5\u5C6C\u73BB\u91CC\u5C3C\u897F\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "\u5DF4\u5E03\u4E9E\u7D10\u5E7E\u5167\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "\u83F2\u5F8B\u8CD3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "\u6CE2\u862D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "\u8056\u76AE\u57C3\u8207\u5BC6\u514B\u9686\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "\u76AE\u7279\u80AF\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "\u5DF4\u52D2\u65AF\u5766\u81EA\u6CBB\u5340");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PW", "\u5E1B\u7409");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "\u5361\u9054");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "\u5927\u6D0B\u6D32\u908A\u7586\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RE", "\u7559\u5C3C\u65FA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "\u7F85\u99AC\u5C3C\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "\u585E\u723E\u7DAD\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "\u4FC4\u7F85\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RW", "\u76E7\u5B89\u9054");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "\u6C99\u70CF\u5730\u963F\u62C9\u4F2F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "\u7D22\u7F85\u9580\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "\u585E\u5E2D\u723E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SD", "\u8607\u4E39");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "\u8056\u8D6B\u52D2\u62FF\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "\u65AF\u6D1B\u7DAD\u5C3C\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "\u632A\u5A01\u5C6C\u65AF\u74E6\u5DF4\u53CA\u5C16\u68C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SL", "\u7345\u5B50\u5C71");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SM", "\u8056\u99AC\u5229\u8AFE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SN", "\u585E\u5167\u52A0\u723E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "\u7D22\u99AC\u5229\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SR", "\u8607\u5229\u5357");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "\u5357\u8607\u4E39");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "\u8056\u591A\u7F8E\u666E\u6797\u897F\u6BD4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SV", "\u85A9\u723E\u74E6\u591A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SX", "\u8377\u5C6C\u8056\u99AC\u4E01");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "\u6558\u5229\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "\u53F2\u74E6\u6FDF\u862D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TA", "\u7279\u91CC\u65AF\u5766\u9054\u5EAB\u5C3C\u4E9E\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "\u571F\u514B\u65AF\u53CA\u958B\u79D1\u65AF\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "\u67E5\u5FB7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "\u6CD5\u5C6C\u5357\u90E8\u5C6C\u5730");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TH", "\u6CF0\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "\u5854\u5409\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TK", "\u6258\u514B\u52DE\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "\u6771\u5E1D\u6C76");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TM", "\u571F\u5EAB\u66FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "\u7A81\u5C3C\u897F\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TO", "\u6771\u52A0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "\u5343\u91CC\u9054\u53CA\u6258\u5DF4\u54E5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TV", "\u5410\u74E6\u9B6F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TW", "\u53F0\u7063");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "\u5766\u5C1A\u5C3C\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "\u70CF\u514B\u862D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UG", "\u70CF\u5E72\u9054");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "\u7F8E\u570B\u672C\u571F\u5916\u5C0F\u5CF6\u5DBC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "\u806F\u5408\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "\u7F8E\u570B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UY", "\u70CF\u62C9\u572D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "\u70CF\u8332\u5225\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "\u68B5\u8482\u5CA1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "\u8056\u6587\u68EE\u53CA\u683C\u745E\u90A3\u4E01");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VE", "\u59D4\u5167\u745E\u62C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "\u82F1\u5C6C\u7DAD\u4EAC\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "\u7F8E\u5C6C\u7DAD\u4EAC\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VU", "\u842C\u90A3\u675C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "\u74E6\u5229\u65AF\u7FA4\u5CF6\u548C\u5BCC\u5716\u90A3\u7FA4\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WS", "\u85A9\u6469\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "\u8449\u9580");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YT", "\u99AC\u7D04\u7279\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZM", "\u5C1A\u6BD4\u4E9E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "\u8F9B\u5DF4\u5A01");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "\u672A\u77E5\u5340\u57DF");
 }
 
 static $clinit() {
  LocalizedNamesImpl__zh__Hant.$clinit = () =>{};
  LocalizedNamesImpl__zh__Hant.$loadModules();
  LocalizedNamesImpl__zh.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__zh__Hant;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__zh__Hant, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant');

exports = LocalizedNamesImpl__zh__Hant; 
//# sourceMappingURL=LocalizedNamesImpl_zh_Hant.js.map