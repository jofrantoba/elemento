goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ga$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__ga extends LocalizedNamesImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__ga} */
 static $create__() {
  LocalizedNamesImpl__ga.$clinit();
  let $instance = new LocalizedNamesImpl__ga();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ga__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ga__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ET", "AF", "ZA", "QO", "DZ", "AR", "AM", "AL", "AQ", "SA", "AZ", "AU", "BD", "BY", "BE", "BZ", "BA", "BO", "BW", "BR", "BG", "BI", "BT", "KH", "KZ", "KE", "CY", "KG", "KR", "KP", "CO", "XK", "HR", "CG", "CI", "DK", "AD", "EE", "EG", "CH", "ER", "FI", "FR", "AI", "GA", "GM", "DE", "GL", "GR", "GY", "GN", "GQ", "AO", "IQ", "IR", "IN", "ID", "IT", "JO", "NO", "IS", "NL", "BQ", "LV", "LR", "LY", "LB", "LT", "MK", "MY", "MW", "MR", "FM", "MD", "MN", "NA", "NG", "NE", "NC", "NZ", "AT", "PK", "DO", "PL", "PT", "GB", "RO", "RU", "EH", "ES", "TJ", "TZ", "EU", "TH", "TW", "AG", "ZM", "SV", "JP", "CZ", "SN", "RS", "GE", "GS", "CL", "CN", "ZW", "SY", "SI", "SK", "SO", "SE", "SZ", "SD", "SS", "TN", "TR", "TM", "UA", "UZ", "HU", "AE", "AW", "BH", "BB", "BJ", "BM", "BN", "BF", "CM", "QA", "VA", "CA", "EA", "KI", "CR", "TF", "IO", "KW", "CU", "CW", "DG", "DJ", "DM", "EC", "YE", "IE", "FJ", "GH", "GG", "JE", "GI", "GD", "GP", "GF", "GU", "GT", "GW", "HT", "HN", "JM", "IL", "LA", "LS", "LI", "EZ", "LU", "MG", "MM", "ML", "MT", "MA", "MQ", "YT", "MX", "MC", "ME", "MS", "MZ", "BS", "PS", "IC", "PH", "MP", "UN", "NR", "SC", "NP", "NI", "NU", "PG", "AX", "VG", "KY", "KM", "CC", "CK", "FK", "FO", "UM", "MH", "MV", "VI", "TC", "PW", "PN", "SB", "BV", "CP", "HM", "IM", "MU", "AC", "CX", "TT", "NF", "OM", "PA", "PY", "PE", "CD", "CF", "PF", "PR", "RE", "CV", "RW", "HK", "MO", "BL", "LC", "MF", "WS", "AS", "KN", "SH", "SM", "PM", "VC", "ST", "TD", "SL", "SG", "SX", "LK", "US", "SR", "SJ", "TL", "TK", "TG", "TO", "TA", "TV", "UG", "UY", "WF", "VU", "VE", "VN", "XA", "XB"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "an Domhan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "an Afraic");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "Meirice\u00E1 Thuaidh");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "Meirice\u00E1 Theas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "an Aig\u00E9ine");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "Iarthar na hAfraice");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "Meirice\u00E1 L\u00E1ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "Oirthear na hAfraice");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "Tuaisceart na hAfraice");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "an Afraic L\u00E1ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "Deisceart na hAfraice");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "Cr\u00EDocha Mheirice\u00E1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "Tuaisceart Mheirice\u00E1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "an Mhuir Chairib");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "Oirthear na h\u00C1ise");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "Deisceart na h\u00C1ise");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "Oirdheisceart na h\u00C1ise");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "Deisceart na hEorpa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "an Astral\u00E1ise");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "an Mheilin\u00E9is");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "an R\u00E9igi\u00FAn Micrin\u00E9iseach");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "an Pholain\u00E9is");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "an \u00C1ise");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "an \u00C1ise L\u00E1ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "Iarthar na h\u00C1ise");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "an Eoraip");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "Oirthear na hEorpa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "Tuaisceart na hEorpa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "Iarthar na hEorpa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "an Afraic fho-Shah\u00E1rach");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "Meirice\u00E1 Laidineach");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "Oile\u00E1n na Deascabh\u00E1la");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AD", "And\u00F3ra");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "Aontas na n\u00C9im\u00EDr\u00EDochta\u00ED Arabacha");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AF", "an Afganast\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "Antigua agus Barb\u00FAda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AI", "Anga\u00EDle");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "an Alb\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "an Airm\u00E9in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AO", "Ang\u00F3la");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "an Antartaice");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AR", "an Airgint\u00EDn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "Sam\u00F3 Mheirice\u00E1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "an Ostair");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "an Astr\u00E1il");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AW", "Ar\u00FAba");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "Oile\u00E1in \u00C5land");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "an Asarbaise\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "an Bhoisnia agus an Heirseagaiv\u00E9in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BB", "Barbad\u00F3s");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BD", "an Bhanglaid\u00E9is");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "an Bheilg");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BF", "Buirc\u00EDne Fas\u00F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "an Bhulg\u00E1ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BH", "Bair\u00E9in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BI", "an Bhur\u00FAin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BJ", "Beinin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "Saint Barth\u00E9lemy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BM", "Beirmi\u00FAda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "Br\u00FAin\u00E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "an Bholaiv");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "an \u00CDsilt\u00EDr Chairibeach");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "an Bhrasa\u00EDl");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BS", "na Bah\u00E1ma\u00ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BT", "an Bh\u00FAt\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "Oile\u00E1n Bouvet");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BW", "an Bhotsu\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "an Bhealar\u00FAis");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BZ", "an Bheil\u00EDs");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CA", "Ceanada");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "Oile\u00E1in Cocos (Keeling)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "Poblacht Dhaonlathach an Chong\u00F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "Poblacht na hAfraice L\u00E1ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "an Cong\u00F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "an Eilv\u00E9is");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "an C\u00F3sta Eabhair");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "Oile\u00E1in Cook");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CL", "an tSile");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "Camar\u00FAn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CN", "an tS\u00EDn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "an Chol\u00F3im");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "Oile\u00E1n Clipperton");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CR", "C\u00F3sta R\u00EDce");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CU", "C\u00FAba");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "Rinn Verde");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "Oile\u00E1n na Nollag");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CY", "an Chipir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "an tSeicia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "an Ghearm\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "an Danmhairg");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DM", "Doiminice");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "an Phoblacht Dhoiminiceach");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "an Ailg\u00E9ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "Ceuta agus Melilla");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EC", "Eacuad\u00F3r");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "an East\u00F3in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EG", "an \u00C9igipt");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "an Sah\u00E1ra Thiar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ER", "an Eiritr\u00E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "an Sp\u00E1inn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "an Aet\u00F3ip");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "an tAontas Eorpach");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "Limist\u00E9ar an euro");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "an Fhionlainn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FJ", "Fids\u00ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "Oile\u00E1in Fh\u00E1clainne");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "an Mhicrin\u00E9is");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "Oile\u00E1in Fhar\u00F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "an Fhrainc");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GA", "an Ghab\u00FAin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "an R\u00EDocht Aontaithe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GD", "Grean\u00E1da");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "an tSeoirsia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "Gu\u00E1in na Fraince");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GG", "Geansa\u00ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GH", "G\u00E1na");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GI", "Giobr\u00E1ltar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "an Ghraonlainn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GM", "an Ghaimbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GN", "an Ghuine");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GP", "Guadal\u00FAip");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "an Ghuine Mhe\u00E1nchiorclach");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "an Ghr\u00E9ig");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "an tSeoirsia Theas agus Oile\u00E1in Sandwich Theas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GT", "Guatamala");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GW", "Guine Bissau");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GY", "an Ghu\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "S.R.R. na S\u00EDne Hong Cong");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "Oile\u00E1n Heard agus Oile\u00E1in McDonald");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HN", "Hond\u00FAras");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "an Chr\u00F3it");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HT", "H\u00E1\u00EDt\u00ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "an Ung\u00E1ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "na hOile\u00E1in Chan\u00E1racha");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "an Indin\u00E9is");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "\u00C9ire");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IL", "Iosrael");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "Oile\u00E1n Mhanann");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IN", "an India");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "Cr\u00EDoch Aig\u00E9an Indiach na Breataine");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "an Iar\u00E1ic");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IR", "an Iar\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "an \u00CDoslainn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "an Iod\u00E1il");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JE", "Geirs\u00ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JM", "Iam\u00E1ice");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "an Iord\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JP", "an tSeap\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "an Ch\u00E9inia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "an Chirgeast\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "an Chamb\u00F3id");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KI", "Cireabait\u00ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "Oile\u00E1in Chom\u00F3ra");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "San Cr\u00EDost\u00F3ir-Nimheas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "an Ch\u00F3ir\u00E9 Thuaidh");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "an Ch\u00F3ir\u00E9 Theas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KW", "Cu\u00E1it");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "Oile\u00E1in Cayman");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "an Chasacst\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "an Liob\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "Saint Lucia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LI", "Lichtinst\u00E9in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LK", "Sr\u00ED Lanca");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LR", "an Lib\u00E9ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LS", "Leos\u00F3ta");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "an Liotu\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "Lucsamburg");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "an Laitvia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "an Libia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "Marac\u00F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MC", "Monac\u00F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MD", "an Mhold\u00F3iv");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ME", "Montain\u00E9agr\u00F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "Saint-Martin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "Oile\u00E1in Marshall");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "an Mhacad\u00F3in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ML", "Mail\u00ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "Maenmar (Burma)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "an Mhong\u00F3il");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "S.R.R. na S\u00EDne Macao");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "na hOile\u00E1in Mh\u00E1irianacha Thuaidh");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "an Mh\u00E1rat\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MS", "Montsarat");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MT", "M\u00E1lta");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MU", "Oile\u00E1n Mhuir\u00EDs");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "Oile\u00E1in Mhaild\u00EDve");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MW", "an Mhal\u00E1iv");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MX", "Meicsiceo");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "an Mhalaeisia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "M\u00F3saimb\u00EDc");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "an Namaib");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "an Nua-Chalad\u00F3in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NE", "an N\u00EDgir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "Oile\u00E1n Norfolk");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NG", "an Nig\u00E9ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NI", "Nicearagua");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "an \u00CDsilt\u00EDr");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "an Iorua");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NP", "Neipeal");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NR", "N\u00E1r\u00FA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "an Nua-Sh\u00E9alainn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("OM", "\u00D3man");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PE", "Peiri\u00FA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "Polain\u00E9is na Fraince");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "Nua-Ghuine Phapua");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "na hOile\u00E1in Fhilip\u00EDneacha");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PK", "an Phacast\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "an Pholainn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "San Pierre agus Miquelon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "Oile\u00E1in Pitcairn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PR", "P\u00F3rt\u00F3 R\u00EDce");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "na Cr\u00EDocha Palaist\u00EDneacha");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PT", "an Phortaing\u00E9il");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PW", "Oile\u00E1in Palau");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PY", "Paragua");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "Catar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "an Aig\u00E9ine Imeallach");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "an R\u00F3m\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "an tSeirbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "an R\u00FAis");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RW", "Ruanda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "an Araib Sh\u00E1dach");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "Oile\u00E1in Sholom\u00F3n");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "na S\u00E9is\u00E9il");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SD", "an tS\u00FAd\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SE", "an tSualainn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SG", "Singeap\u00F3r");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "San H\u00E9ilin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "an tSl\u00F3iv\u00E9in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "Svalbard agus Jan Mayen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "an tSl\u00F3vaic");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SL", "Siarra Leon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SM", "San Mair\u00EDne");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SN", "an tSeineag\u00E1il");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "an tSom\u00E1il");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SR", "Suranam");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "an tS\u00FAd\u00E1in Theas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "S\u00E3o Tom\u00E9 agus Pr\u00EDncipe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SV", "an tSalvad\u00F3ir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "an tSiria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "an tSuasalainn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "Oile\u00E1in na dTurcach agus Caicos");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "Sead");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "Cr\u00EDocha Francacha Dheisceart an Domhain");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TG", "T\u00F3ga");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TH", "an T\u00E9alainn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "an T\u00E1ids\u00EDceast\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TK", "T\u00F3cal\u00E1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "T\u00EDom\u00F3r Thoir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TM", "an Tuircm\u00E9anast\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "an T\u00FAin\u00E9is");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "an Tuirc");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "Oile\u00E1n na Tr\u00EDon\u00F3ide agus Tob\u00E1ga");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TW", "an T\u00E9av\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "an Tans\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "an \u00DAcr\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "Oile\u00E1in Imeallacha S.A.M.");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "na N\u00E1isi\u00FAin Aontaiteh");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "St\u00E1it Aontaithe Mheirice\u00E1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UY", "Uragua");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "an \u00DAisb\u00E9iceast\u00E1in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "Cathair na Vatac\u00E1ine");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "San Uinseann agus na Grean\u00E1id\u00EDn\u00ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VE", "Veinis\u00E9ala");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "Oile\u00E1in Bhriotanacha na Maighdean");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "Oile\u00E1in Mheirice\u00E1nacha na Maighdean");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VN", "V\u00EDtneam");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VU", "Vanuat\u00FA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "Vail\u00EDs agus Fut\u00FAna");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WS", "Sam\u00F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("XK", "an Chosaiv");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "\u00C9imin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "an Afraic Theas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZM", "an tSaimbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "an tSiomb\u00E1ib");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "R\u00E9igi\u00FAn Anaithnid");
 }
 
 static $clinit() {
  LocalizedNamesImpl__ga.$clinit = () =>{};
  LocalizedNamesImpl__ga.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__ga;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__ga, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ga');

exports = LocalizedNamesImpl__ga; 
//# sourceMappingURL=LocalizedNamesImpl_ga.js.map