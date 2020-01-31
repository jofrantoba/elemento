goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__pt extends LocalizedNamesImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__pt} */
 static $create__() {
  LocalizedNamesImpl__pt.$clinit();
  let $instance = new LocalizedNamesImpl__pt();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_pt__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_pt__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /** @override @return {Array<?string>} */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BR", "AO", "PT", "MZ"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AF", "ZA", "AL", "DE", "AD", "AO", "AI", "AQ", "AG", "SA", "DZ", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BE", "BZ", "BJ", "BM", "BY", "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "BT", "CV", "CM", "KH", "CA", "QA", "KZ", "EA", "TD", "CL", "CN", "CY", "VA", "CO", "KM", "CD", "KP", "KR", "CI", "CR", "HR", "CU", "CW", "DG", "DK", "DJ", "DM", "EG", "SV", "AE", "EC", "ER", "SK", "SI", "ES", "US", "EE", "ET", "FJ", "PH", "FI", "FR", "GA", "GM", "GH", "GE", "GI", "GD", "GR", "GL", "GP", "GU", "GT", "GG", "GY", "GF", "GN", "GW", "GQ", "HT", "HN", "HK", "HU", "YE", "BV", "CX", "AC", "CP", "IM", "NF", "AX", "IC", "KY", "CC", "CK", "FO", "GS", "HM", "FK", "MP", "MH", "UM", "PN", "SB", "TC", "VI", "VG", "IN", "ID", "IR", "IQ", "IE", "IS", "IL", "IT", "JM", "JP", "JE", "JO", "XK", "KW", "LA", "LS", "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MK", "MG", "MY", "MW", "MV", "ML", "MT", "MA", "MQ", "MU", "MR", "YT", "MX", "MM", "FM", "MZ", "MD", "MC", "MN", "ME", "MS", "UN", "NA", "NR", "NP", "NI", "NE", "NG", "NU", "NO", "NC", "NZ", "QO", "OM", "NL", "BQ", "PW", "PA", "PG", "PK", "PY", "PE", "PF", "PL", "PR", "PT", "KE", "KG", "KI", "MO", "GB", "CF", "CG", "DO", "RE", "RO", "RW", "RU", "EH", "WS", "AS", "SM", "SH", "LC", "BL", "KN", "MF", "PM", "ST", "VC", "SC", "SN", "SL", "RS", "SG", "SX", "SY", "SO", "LK", "SZ", "SD", "SS", "SE", "CH", "SR", "SJ", "TJ", "TH", "TW", "TZ", "CZ", "IO", "TF", "PS", "TL", "TG", "TK", "TO", "TT", "TA", "TN", "TM", "TR", "TV", "UA", "UG", "EU", "UY", "UZ", "VU", "VE", "VN", "WF", "XA", "XB", "ZM", "ZW", "EZ"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "Mundo");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "\u00C1frica");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "Am\u00E9rica do Norte");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "Am\u00E9rica do Sul");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "\u00C1frica Ocidental");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "Am\u00E9rica Central");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "\u00C1frica Oriental");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "\u00C1frica do Norte");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "\u00C1frica Central");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "\u00C1frica Meridional");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "Am\u00E9ricas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "Am\u00E9rica Setentrional");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "Caribe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "\u00C1sia Oriental");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "\u00C1sia Meridional");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "Sudeste Asi\u00E1tico");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "Europa Meridional");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "Austral\u00E1sia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "Melan\u00E9sia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "Regi\u00E3o da Micron\u00E9sia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "Polin\u00E9sia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "\u00C1sia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "\u00C1sia Central");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "\u00C1sia Ocidental");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "Europa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "Europa Oriental");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "Europa Setentrional");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "Europa Ocidental");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "\u00C1frica Subsaariana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "Am\u00E9rica Latina");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "Ilha de Ascens\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "Emirados \u00C1rabes Unidos");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AF", "Afeganist\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "Ant\u00EDgua e Barbuda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AI", "Anguila");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "Alb\u00E2nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "Arm\u00EAnia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "Ant\u00E1rtida");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "Samoa Americana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "\u00C1ustria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "Austr\u00E1lia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "Ilhas Aland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "Azerbaij\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "B\u00F3snia e Herzegovina");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "B\u00E9lgica");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BF", "Burquina Faso");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "Bulg\u00E1ria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BH", "Bahrein");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "S\u00E3o Bartolomeu");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BM", "Bermudas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "Bol\u00EDvia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "Pa\u00EDses Baixos Caribenhos");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "Brasil");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BT", "But\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "Ilha Bouvet");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BW", "Botsuana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "Bielorr\u00FAssia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CA", "Canad\u00E1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "Ilhas Cocos (Keeling)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "Rep\u00FAblica Centro-Africana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "Rep\u00FAblica do Congo");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "Su\u00ED\u00E7a");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "Costa do Marfim");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "Ilhas Cook");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "Camar\u00F5es");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "Col\u00F4mbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "Ilha de Clipperton");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "Cabo Verde");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "Ilha Christmas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CY", "Chipre");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "Tch\u00E9quia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "Alemanha");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DJ", "Djibuti");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "Dinamarca");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "Rep\u00FAblica Dominicana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "Arg\u00E9lia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "Ceuta e Melilla");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EC", "Equador");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "Est\u00F4nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EG", "Egito");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "Saara Ocidental");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ER", "Eritreia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "Espanha");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "Eti\u00F3pia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "Uni\u00E3o Europeia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "zona do euro");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "Finl\u00E2ndia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "Ilhas Malvinas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "Micron\u00E9sia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "Ilhas Faroe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "Fran\u00E7a");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GA", "Gab\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "Reino Unido");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GD", "Granada");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "Ge\u00F3rgia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "Guiana Francesa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GH", "Gana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "Groenl\u00E2ndia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GM", "G\u00E2mbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GN", "Guin\u00E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GP", "Guadalupe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "Guin\u00E9 Equatorial");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "Gr\u00E9cia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "Ilhas Ge\u00F3rgia do Sul e Sandwich do Sul");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GW", "Guin\u00E9-Bissau");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GY", "Guiana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "Hong Kong, RAE da China");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "Ilhas Heard e McDonald");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "Cro\u00E1cia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "Hungria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "Ilhas Can\u00E1rias");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "Indon\u00E9sia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "Irlanda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "Ilha de Man");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IN", "\u00CDndia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "Territ\u00F3rio Brit\u00E2nico do Oceano \u00CDndico");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "Iraque");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IR", "Ir\u00E3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "Isl\u00E2ndia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "It\u00E1lia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "Jord\u00E2nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JP", "Jap\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "Qu\u00EAnia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "Quirguist\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "Camboja");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KI", "Quiribati");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "Comores");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "S\u00E3o Crist\u00F3v\u00E3o e N\u00E9vis");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "Coreia do Norte");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "Coreia do Sul");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "Ilhas Cayman");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "Cazaquist\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "L\u00EDbano");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "Santa L\u00FAcia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LR", "Lib\u00E9ria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LS", "Lesoto");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "Litu\u00E2nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "Luxemburgo");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "Let\u00F4nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "L\u00EDbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "Marrocos");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MC", "M\u00F4naco");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "S\u00E3o Martinho");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "Ilhas Marshall");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "Maced\u00F4nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "Mianmar (Birm\u00E2nia)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "Mong\u00F3lia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "RAE de Macau (China)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "Ilhas Marianas do Norte");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MQ", "Martinica");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "Maurit\u00E2nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MU", "Maur\u00EDcio");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "Maldivas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MW", "Malaui");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MX", "M\u00E9xico");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "Mal\u00E1sia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "Mo\u00E7ambique");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "Nam\u00EDbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "Nova Caled\u00F4nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NE", "N\u00EDger");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "Ilha Norfolk");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NG", "Nig\u00E9ria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NI", "Nicar\u00E1gua");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "Pa\u00EDses Baixos");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "Noruega");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "Nova Zel\u00E2ndia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("OM", "Om\u00E3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PA", "Panam\u00E1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "Polin\u00E9sia Francesa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "Papua-Nova Guin\u00E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "Filipinas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PK", "Paquist\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "Pol\u00F4nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "S\u00E3o Pedro e Miquel\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "Ilhas Pitcairn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PR", "Porto Rico");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "Territ\u00F3rios palestinos");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PY", "Paraguai");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "Catar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "Oceania Remota");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RE", "Reuni\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "Rom\u00EAnia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "S\u00E9rvia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "R\u00FAssia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RW", "Ruanda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "Ar\u00E1bia Saudita");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "Ilhas Salom\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "Seicheles");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SD", "Sud\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SE", "Su\u00E9cia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SG", "Singapura");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "Santa Helena");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "Eslov\u00EAnia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "Svalbard e Jan Mayen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "Eslov\u00E1quia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SL", "Serra Leoa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "Som\u00E1lia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "Sud\u00E3o do Sul");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "S\u00E3o Tom\u00E9 e Pr\u00EDncipe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "S\u00EDria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "Suazil\u00E2ndia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TA", "Trist\u00E3o da Cunha");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "Ilhas Turcas e Caicos");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "Chade");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "Territ\u00F3rios Franceses do Sul");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TH", "Tail\u00E2ndia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "Tadjiquist\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TM", "Turcomenist\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "Tun\u00EDsia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "Turquia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "Trinidad e Tobago");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "Tanz\u00E2nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "Ucr\u00E2nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "Ilhas Menores Distantes dos EUA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "Na\u00E7\u00F5es Unidas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "Estados Unidos");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UY", "Uruguai");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "Uzbequist\u00E3o");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "Cidade do Vaticano");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "S\u00E3o Vicente e Granadinas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "Ilhas Virgens Brit\u00E2nicas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "Ilhas Virgens Americanas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VN", "Vietn\u00E3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "Wallis e Futuna");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "I\u00EAmen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "\u00C1frica do Sul");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZM", "Z\u00E2mbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "Zimb\u00E1bue");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "Regi\u00E3o desconhecida");
 }
 
 static $clinit() {
  LocalizedNamesImpl__pt.$clinit = () =>{};
  LocalizedNamesImpl__pt.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__pt;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__pt, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt');

exports = LocalizedNamesImpl__pt; 
//# sourceMappingURL=LocalizedNamesImpl_pt.js.map