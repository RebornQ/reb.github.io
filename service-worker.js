/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","365f7f5b2c0ea87f1aaf5a3509eff3a8"],["/about/index.html","7ea0608ed9e0062b3616c87455d72737"],["/archives/2018/07/index.html","6a4fec943d07b437d224e8a1374dddb4"],["/archives/2018/08/index.html","e23c93c0a393fd8f78f59593cbd3002e"],["/archives/2018/09/index.html","ac9df051b3c5050801a705544f6fdbf5"],["/archives/2018/10/index.html","d11076376931307ce2acc97d717d2f10"],["/archives/2018/index.html","e54046d629df796784cae2a6ba906288"],["/archives/2018/page/2/index.html","348240b5658ce777faaac6818dcceca7"],["/archives/2019/03/index.html","10ccba92d62f42a2b35c69af4a0b632f"],["/archives/2019/08/index.html","6e0fff92d828bc748c47763954c69143"],["/archives/2019/12/index.html","c27b49902b793084200b60bb762368e6"],["/archives/2019/index.html","11ba334cc9b48b8d2da958e80384bdee"],["/archives/2019/page/2/index.html","dd6821e327f4f9f29c800c7f31924e9a"],["/archives/index.html","5b821473933033cdf904133d22a55822"],["/archives/page/2/index.html","4ab127aaa16d317c86453bafdedb06ea"],["/archives/page/3/index.html","f849c32ea8daa838e742c7833bf7ed57"],["/categories/Android/index.html","095e05c912c78a62e52ca728a277ec16"],["/categories/Markdown/index.html","58e893fe70e52f050808ea2b088ef948"],["/categories/database/index.html","a8d859663b54576e5429cf8a5d5fa36b"],["/categories/frontend/index.html","135f1531b2652a36151f2f8e64d79200"],["/categories/hexo/index.html","6f023b756a466408e794b33a564a3d89"],["/categories/index.html","4445f5a5b22520a7aec2163eef297b7b"],["/categories/log-server/index.html","4a751c7f4ef6d62caecb0f21e02d1190"],["/categories/python/index.html","a3eae31758df6dbff63ba412412b0feb"],["/categories/reverse/index.html","2a504f89e6a53799bf32ad17fd51f84a"],["/categories/review/index.html","925290b82ecdb331a0234f1d482e946e"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","50cfd885fca408b63d45662c09ce2e58"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","f454454a87fefb5efd1d74a036a0fa00"],["/gallery/katekyo_hitman_reborn/index.html","ec6ea539e088b503646f599d6151fb1a"],["/googlea30d66d742672e8b.html","39609d1cc901909f9735ba890e245933"],["/images/15317408001743.jpg","5ed2833d2c6b4724cb2f4be8d49e53ef"],["/images/CET-ID-gray.png","b14f0edfd0073461db92b2abb8d44463"],["/images/CET-ID.png","062287fe598d3221a4aeafdb03131e4a"],["/images/Cloudflare-Api-1.jpg","0d34c71e563155ad9b01630c80681c9f"],["/images/Cloudflare-Api-2.jpg","ce55666a570a24fb49513b067f6033c8"],["/images/Java.png","03c0d6036953a4de51fa9f6681703dce"],["/images/MultiLanguageDemo-NoRestartToLauncher.gif","3756b2701e50a812fec6e7a7e75a7b30"],["/images/OS.png","09e73eaa3021c950b84d4dadcdeb1342"],["/images/SSL Lab Server Test.jpg","09d81899fbb822ae46a721c9e9943587"],["/images/android/android-new-logo-gray.png","ec5a5e09c63a02f27209c7bd68b2f442"],["/images/android/both match or 0dp.jpg","8df166f29a24df83d03857bae494db44"],["/images/android/bt1 0dp bt2  match.jpg","a549459550d55adf5b990a7f4a4e1208"],["/images/android/layout_weight analyse.png","c497417a3de732393200e4671513c52b"],["/images/avatar.png","00adc342950f28b4ce3901422c1512ec"],["/images/bug-MD+prism.png","5ae0b1e9b48b33daa4dfc2da5254fde3"],["/images/cloudflare config of starting https with nginx.png","dac485b469f54dbaf0a4e78730183c0b"],["/images/computer-network-1-p.png","71ca28092faf7414219f276b3f0f55b6"],["/images/covers/How to use Hexo in Server 1.jpg","d43db833b22ad3459b0410eb9e96d9b9"],["/images/covers/How to use Hexo in Server.jpg","9ae5d9d36cf6b2cedaa2253322e478e2"],["/images/covers/MySQL.jpg","a66b22319352ac4851407e2cfad1eff5"],["/images/covers/cover_reborn_2.png","5d2db20006e6e9bae774ae0e54edbf50"],["/images/covers/cover_reborn_3.png","fae93b42002185cb8ce482f0be1b6077"],["/images/covers/disqus.png","c2db2f7863998004804cecbe36a3cf83"],["/images/covers/disqus_1.png","2839933fe140c45b19b41fc6fd6487f3"],["/images/covers/technology.jpg","ba02595da0385e21455a82c25cb9d6b8"],["/images/cross-domain-error.png","657fd66e39234ab917eca77bad4120d9"],["/images/disqus-api-diagram.png","603545c63a88567454d7ca0375137a7f"],["/images/disqus-configure-differentname-short-website.png","329b27615cc73dd004bbb0c8f331cbd1"],["/images/disqus-php-api-no-permission.png","7c0c453eb3e534f1aea02b0814ed85c6"],["/images/disqus-php-api.gif","589936d2bd0e66773bf9acaaf95d3f72"],["/images/disqus-proxy.png","d15fad65cb926adfa4f1fc542f79da95"],["/images/disqus-step1-intent.png","dc853ac456468fb5598719f5d8f2bbb8"],["/images/disqus-step2-newsite.png","afca4ffce1e5c1616a23d784663ac93b"],["/images/disqus-step3-choose-plan.png","6beb163366d01146c0952eb0cc3e32e4"],["/images/disqus-step4-choose-platform.png","dc75f1adc34a964503b18a52193710a1"],["/images/disqus-step5-universalcode-install.png","6fd680c2fbcefcf5aef8d7e4cf1c6140"],["/images/disqus-step6-configure.png","e11e735b834bed59e4236a9b40a3cb1c"],["/images/document-md+code.png","67ba7ec14173e39035b9d4ff9c7fdcb7"],["/images/explain-padding.jpg","1987ce69761d3e78d5e39a05f9fca103"],["/images/gallery/Reborn.jpg","3056347ddb06930036d6f53ac9377268"],["/images/gallery/Reborn_1.png","c1ae2269b6f58c50daeea3f230a9157e"],["/images/gallery/Reborn_2.jpg","5aada57a95ea34cddaf90b409b4d1277"],["/images/gallery/Reborn_3.png","8dd52143454ae1b2285376b058d8d96b"],["/images/gallery/Reborn_3_p.png","30c6a05b2789126ed83de01dc5f731f3"],["/images/gallery/云雀恭弥.jpg","3525312699f0a5bb16cff2f7957e7c2a"],["/images/gallery/密鲁菲奥雷家族.jpg","aa916a860f5646f6a42e359db40825e8"],["/images/gallery/山本武未来篇.jpg","085d0fe8ed12ff23ebf11d9798aea470"],["/images/gallery/彭格列初代合照.jpg","680c8844303de75bc6592000cb5692e8"],["/images/gallery/彭格列十代合照.jpg","71ea3c2e33c10f3f306dd804675584f7"],["/images/gallery/彭格列暗杀部队巴利安合照.jpg","cc0df6ac2336d271f8838dd480b8ad03"],["/images/gallery/彭格列暗杀部队巴利安首领XANXUS.jpg","3abcecb88b47148a9d04a6d040d995c9"],["/images/gallery/成年彩虹七子.jpg","5eb3f042370214c5da3d8a2cf076de2f"],["/images/gallery/沢田纲吉-1.jpg","c7ccecd3e560c83b6d2469fff3b802a8"],["/images/gallery/沢田纲吉-2.jpg","ae98dcc228d5b52ec9591891d4b1af34"],["/images/gallery/沢田纲吉-3.jpg","f263b6d5d238f98e81a11efd2d842a51"],["/images/gallery/沢田纲吉.jpg","ab7ba89104bcae033a850aa2f86db67f"],["/images/gallery/黑曜中学合照.jpg","805ecb1333d1d90f0b2589c1df527ce0"],["/images/http browser show.jpg","039ea8916e6d27483778738452bf9e83"],["/images/https browser show.png","ac8b4adac9deda63f87ef558bd3e2c6f"],["/images/md-css-contentpre-nopadding.png","5775684fc24c66a73753a5adf80c20fa"],["/images/md-css-contentpre-padding.png","7bbc9c31f5ff146a13b541e855b70b79"],["/images/md-css-stylemin-padding-commented.png","23326fcf589bbad314b3f706299d764f"],["/images/md-css-stylemin.png","b4befca079116af95d62de8d6110d4f4"],["/images/nginx cannot found dhparam.pem-1.png","113a923a0a371589f00e2dcbce98429d"],["/images/nginx cannot found dhparam.pem-2.png","fbce16694f711c4425ff76ec918731df"],["/images/nginx cannot found dhparam.pem-3.png","758ff19edfdf89318d810d0f0063c933"],["/images/nginx cannot found dhparam.pem-4.png","158282a6aaa551d746df24da0ec9d040"],["/images/nginx cannot found dhparam.pem-5.png","4acdc090409b39adf5a2695a47dc67dd"],["/images/nginx cannot found dhparam.pem.png","dfbed60af1930bec9756b8ee8dcca3a9"],["/images/pwa/icons/icon-128x128.png","0da6e9a20eb8b3080415cda8f6a97b66"],["/images/pwa/icons/icon-144x144.png","22283dd7ab034ad39ce42cd28ccfa142"],["/images/pwa/icons/icon-152x152.png","f65d1e0c77101d7e3f9041e7ec174982"],["/images/pwa/icons/icon-192x192.png","47c8293140d3398b174c7ed6c84ce2cb"],["/images/pwa/icons/icon-384x384.png","286251e82e466d82e15dbae744d5d2cc"],["/images/pwa/icons/icon-512x512.png","e2cf7005b11a956212c731d53eaf7d1f"],["/images/pwa/icons/icon-72x72.png","f036a302da43a5efdc45c5f2f1fb3d36"],["/images/pwa/icons/icon-96x96.png","76460c851d566f5d8eec002ee77d566c"],["/images/reviews/Activity 生命周期.svg","c23599a0d1f1dcc4d8ddf8f525629a9b"],["/images/reviews/Handler工作流程-Handler.post-.png","e25d7a5ad81f582000b03fc17bb181a0"],["/images/reviews/Handler工作流程.svg","e06b22978bd5a1922a67997700e44cea"],["/images/reviews/TCP 数据包结构.jpg","8f684f1720daf2b9c630ae647dfc0ad4"],["/images/reviews/TCP三次握手图解.svg","b9f6228eea2a6c3b70480207a8585036"],["/images/reviews/TCP四次挥手图解.svg","e701676131b8063345597b6c521eb89f"],["/images/reviews/View 事件分发流程-View#dispatchTouchEvent.svg","5a4b13e004a89a8bf2947ffb4481b5de"],["/images/reviews/View 事件分发流程-View#onTouchEvent.svg","ae7edc951bc3c4ddc257e3d38b4e931f"],["/images/reviews/View 事件分发流程-归流程.svg","efb09e3fd33079dc00db4c527af20f7b"],["/images/reviews/View 事件分发流程-递归全流程.svg","dc463676c8a89cc02300e33c0c43bd3d"],["/images/reviews/View 事件分发流程-递流程.svg","378d887bf74422830df9488dcc0c7b56"],["/images/reviews/View 事件分发流程-递流程Advanced.svg","7ac15463805e9b198dce01d47aba535f"],["/images/reviews/例二整棵树的形状.png","d7ff149fb44cc53af80ae89a3314f113"],["/images/reviews/右子树的形状.jpg","8bae6dd1d14889cd9c489cb419c566a0"],["/images/reviews/左子树的形状.jpg","536e35ca13d970b8ee69fcdcd1803aae"],["/images/reviews/快速排序流程示例.png","bff38c97ccd6ca083094194a0871f7c9"],["/images/reviews/整棵树的形状.jpg","c8d73c76a37760f609c05e5b7b14fa12"],["/images/reviews/直接插入排序后移元素示例1.png","ebcc3d62581a7b688edcdccd4278ae19"],["/images/reviews/直接插入排序后移元素示例2.png","3c6647115563ec547e407af1a0bca717"],["/images/reviews/直接插入排序后移元素示例3.png","e8f31adc30ad6ef0996b15fc058377ba"],["/images/reviews/直接插入排序时间复杂度计算.png","b2e4d28234fbe1f8f63f615aaa0181af"],["/images/reviews/网络分层模型关系图.png","e31405b945623cda6b8ef478ba71a469"],["/images/staruml-about.png","cdde468da4666079ba6d1c6d2b9c2540"],["/images/staruml-officialwebsite.png","20aaa2d77abe72f36fd55fa63f019733"],["/images/tools/2md-preview.png","48b96169af7dcd72b6a65c853c152bcd"],["/images/tools/clipboard2markdown-preview.png","4394fdf4a22260a3df1c31eb5560e705"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Reborn_cut.jpg","65bcfa238847dc11174c97f34c5aaa08"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-192x192.png","1368ecce6047a31e6a114e4b1b749a0f"],["/img/android-chrome-384x384.png","2284c89d80ce300ddd9110a845dced76"],["/img/apple-touch-icon.png","9a78ef2c8454a860d3cc8cafd3676e64"],["/img/favicon-16x16.png","7362c3220b7d650adec4d86c31b2ff92"],["/img/favicon-32x32.png","50bf54bf8d77baba13b5d256f7a8778d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/mloading.gif","9514af199b84b1f690c845e854fac8a1"],["/img/mloading_1.gif","965cf1516155bae47f0be720e96dd9cf"],["/img/mstile-150x150.png","79b3efaacd42e886dc5d7c62cc8994b8"],["/img/safari-pinned-tab.svg","5a9ad78e31b2dded609eeeee482477e5"],["/index.html","727506d5722fee8b481887ceefe16384"],["/js/create-time-to-now.js","11dbf749be90f63d1df23e88f99ec502"],["/js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","a3d9719c8ccb535de98cc7c536707cc9"],["/links/index.html","c5c05c476fca9d4d5cb742adb3ceca66"],["/messageboard/index.html","1b754388a61bfb5a7cf368a7875da5e5"],["/page/2/index.html","f3d6cd2a1b580a21721fd4dc967e204b"],["/page/3/index.html","8f0236d4f47ec9d696d68ee44da4377d"],["/posts/1572acec.html","f017e05fa463d15553f1fd4b4a7e2165"],["/posts/2b453e2f.html","748ecf5382cf47114d3e73e6bc224486"],["/posts/2cb4e595.html","d56f6796f1c2f4035c6f4ec43a8b3b4e"],["/posts/357640ff.html","45c6c96e19868569c2334d29672a2751"],["/posts/41e1ea07.html","d4daf79076a27cfff32b2e5fedba633a"],["/posts/48ffa897.html","e4f0e55209ea0ccd3130cb214699d718"],["/posts/4d2729e2.html","1bd4cfc9e428b27307aa33f739bfba72"],["/posts/6965849b.html","73c977a0e179c67db5e943b526df5112"],["/posts/739f7ebe.html","674ffc191e49cbbba528f8c26a31edf3"],["/posts/73a11b2e.html","97adfa23295ab5024372c8b7deed54b1"],["/posts/7afcff16.html","018ab3dd846c30bc15758ac56b4cbf2e"],["/posts/832fa05b.html","817b355c766166698f524b9f4e90703b"],["/posts/8a9e22db.html","5cf4f9fc0ef1095e7467531b23264845"],["/posts/90d0bd8.html","df3bd4b13252bdb5bd075779ab9e98a0"],["/posts/a29672a0.html","3ec79708a208104a995941c73dad7959"],["/posts/a96dbfbe.html","2bd757475c16b0eb7e4ad5807004cda1"],["/posts/b05a5a01.html","61573b8a815ad43ace3063a2be67bf8a"],["/posts/b3fd4b52.html","c6502d313ff68492dd28f5f079b42bf3"],["/posts/b84ba97.html","9ee51478b3bcd0e0cec75a835a1c971f"],["/posts/bfc4a775.html","7dafab495892c799939118466974a2b0"],["/posts/cda82088.html","1c4825df7cbe8d3bb53bbc046d6d0fa0"],["/posts/d32fb564.html","e6065023e9cc6e56865c2436916f9485"],["/posts/d94bd648.html","9de367fa0c7f67b0a2621337cd5608e7"],["/posts/dce274cc.html","f9af3d6da34dc541996ea2f1eb696c92"],["/posts/e836c9c6.html","32f3f63308a6217a0808628eb750efcc"],["/posts/e87d9191.html","df315d388a80221d2997c6ae51799a7b"],["/posts/ee00472d.html","6209c87b017fe3dbc9f61e98124b4ca8"],["/posts/f0a8d55a.html","c1f32bd9a2e5569a34f9321331340feb"],["/tags/Android/index.html","2c7c3dc5b61e1035237fde490f07166d"],["/tags/CET/index.html","f1a4d7ea9d93fbc273f278487a7f200f"],["/tags/Disqus/index.html","8e3eed99b30ed92300d8d8b731c7b58b"],["/tags/Homebrew/index.html","b67d909af2b1ac066645c68c06e3be69"],["/tags/Java/index.html","aea5e139e7eae3908ed23ae7a425f14d"],["/tags/Linux/index.html","b2beedfcb63f28fc832756e878b61e39"],["/tags/Mac/index.html","3e3197b5894a6eaacfc574df103d8101"],["/tags/Markdown/index.html","177584f48f2599882560ed92cfde25ef"],["/tags/MySQL/index.html","4913118e66a25bd4d91eadb2dccc72b5"],["/tags/Nginx/index.html","633d90fa236b901a1789b05ba461877b"],["/tags/SSL/index.html","8e12a959f806378496eeb99cb4ea7885"],["/tags/UML/index.html","fb1d3d82a20382b54c93c77f72f86170"],["/tags/algorithm/index.html","5f791ac42c8733f37c457fa696aed2ef"],["/tags/campus-recruitment/index.html","0bf3a0d906f1e36112955bbdd05428bb"],["/tags/computer-networks/index.html","098573213361515a2d6d36e63273f50e"],["/tags/crack/index.html","98510ef9118c500c52e976f0d5c76b6f"],["/tags/daily-digging-pit/index.html","083f4c82b2a3875a2d36459db4848ab5"],["/tags/data-structure/index.html","93e9fb3a7c3f537ed350a211a4e60df5"],["/tags/database/index.html","3456c13a7b97308ff37e00964fb0de37"],["/tags/design-pattern/index.html","94bcba2e086693e289cede31af14ec19"],["/tags/dor-daily-learn/index.html","b46b3575b3e05c39386cf6704a2c79e6"],["/tags/experiences/index.html","3dad997505d4d212c01deb3fa577c78f"],["/tags/fall-career-fair/index.html","959dd62f8a3955c5d0bf24c972b29db5"],["/tags/frontend/index.html","48fdb1aa4e102de45181e87b39a27901"],["/tags/hexo/index.html","557c430708ee55997e713275e828a4bc"],["/tags/iframe/index.html","d030a5478718d551f07b4bd32ed7486e"],["/tags/index.html","86c58659bac8f293e69a94b7f5741580"],["/tags/learning/index.html","89c6c3c8f2a3c205c8b08dfa527357c7"],["/tags/opensource-library/index.html","65e6fab2c1c23c20d944ae92138a64b7"],["/tags/operation/index.html","fda23ea46c3ae733f4b48284d03b5491"],["/tags/os/index.html","0c094e1ede196f5b04ad17005e7c5fd7"],["/tags/python/index.html","62613caa14e8053d8e7f70410ebfa83c"],["/tags/reverse/index.html","1db83505f3015dd8246fba59bc05a47c"],["/tags/review/index.html","7ca092779d297ff6e303bbe977bd66c9"],["/tags/server/index.html","4b7500a6994234c65220b2db0ce14595"],["/tags/theme-hexo/index.html","99f95598131cebdbdaae3028f47921ed"],["/tags/tutorials/index.html","90aadf0c1a923bd98b4ac368433660ff"],["/tags/useful/index.html","f1d3101f98b59b375698bd7c9a5804fe"],["/timeline/index.html","23cf83c9e0340e0f45502b0bf51c6b06"],["/tools/index.html","ff4a0457bd232177b95c53cf0b055ac9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"reb.mallotec.com"});




