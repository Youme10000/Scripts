
/***************************************

脚本功能：知乎 盐故事+知识+书刊+测评+去部分广告
下载地址：appstore 
软件版本：所有 
脚本作者：伟人
更新时间：2023-02-19
问题反馈：QQ+
作者QQ:
测试版本: 8.52.0
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
作者忠告: 如果你是大佬请不要盗用此包，创作不易谢谢各位，
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法


**************************************

[mitm]

hostname = 27.148.*.*,mqtt.zhihu.com,183.204.14.*,122.224.48.113,web-er.zhihu.com,60.188.72.179,120.220.198.*,120.222.234.*,103.41.167.*,www.zhihu.com, api.zhihu.com, zhuanlan.zhihu.com, appcloud2.zhihu.com, m-cloud.zhihu.com,116.136.170.105

[rewrite_local]

^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/(people\/self|unlimited\/go\/my_card).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/zhihu7.js
^http[s]?:\/\/.*zhihu\.(com|cn)\/(appview\/v2\/answer|sku\/reversion_sku_ext\?sku_id|remix-web\/paid_columns|km_player\/album|market\/paid_column|appview\/p|api\/v3\/books|books).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/shukan2.js
***************************************/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', nlena = '__0xf5850',  __0xf5850=['CsKabgjDrw==','EAPDiMKyw40=','CQJyH3s=','OsOawrzDsSU=','e8KFw6jDqsOc','DMKNNsOeBw==','FcO7QcOuwrE=','Xn02w6XCrQ==','wo8hRsK7w6Q=','AcK4NcObLR3DnA==','w6Rhw5IN','BcKmbMONwpRUGQ==','MD/Do8K6w7s=','wp8+RMKhw79WJQ==','Tys7w7VgdMOkZGI=','Cx1sAG3CkMOX','wqbCpBk=','YcKlw6fCu1nCiyM=','MSjDs8Kgw64=','w7DDrB1Zw71VLA==','D8OTTcO7wpE=','wpLDjMOTwrTDq8KPwoI=','XMO6wr/DsA==','NUnCl8OJw74=','csOtwp/Dsho=','w4rDpsO+ZQU=','DmDDosOFbQ==','GxxzBkU=','N8KZwoghwqY=','wqjDpxTDm8OI','DcKCGsOMKg==','G3jDsw==','wqXDtzE=','wq7DliZew4U=','E8K3O8ODw54=','OzfDl8Kmw4Q=','Y8Kgw6c=','wqhPw6s=','w5VowpTCucOf','wr56w7nDqMKe','K8KLdMOWwpA=','wpEJwobCqm4=','ZcKhw4zCgVw=','wqQ+RMKHw6Y=','wptHw6rDjMKx','w4fDlcOO','wqTDtMOz','JcO8BA==','bS9d','SmhKTQbCug==','wqnDhQ1ow5NB','WD1j','wofDsyM=','54my5p2E5Y6r7764WnLkvYrlrZnmnqTlvZ7nqL7vvrDov7nor6fmlbHmjavmi6jkuIjnmpvltILkvpE=','wrnCug/DuMOp','wp/DpihWw4E=','b8OSwpLDhhc=','AD7DlT3DgQ==','wqfDkMK5AGY=','BVvClA==','wqXDlsK1','w65nw6zCvsOAwpfDvcK7w4HCkWbDhMKjITLDtg==','YMOXw7LCrMKXw7MWVMKPwrHDpVJuwosdD8OFA1fCoyXDvcORa8KdesOMwoBsw6jDmnQEwq/DjsKdw5tdJRVHwqIpKsO0amjDjRDDki5zwp42JEFSwolCMMOHUw==','w512wo3CoQ==','w6nDtcKgCFs=','SzVcwoDCjw==','AGPDvMObaw==','HAzDgsKdw6A=','w7lYw4fCm8OD','bMKHw648Sg==','PMOLwojDmBI=','wrTDqwduw6Y=','w5wBcQh/','fcKuw5Am','w75yZUHClQ==','w6LDswR/w6g=','w6fDpgBe','XSwkw7BH','w6EIAMKUw5I=','XEc8w6LCoA==','TCTDtlrCrQ==','wrtUw77DvMK3','w5s4dR5z','IwPDkCLDsw==','fxU5CsOx','LW3DlsOVUA==','WSIpw7hy','FUjDgMOSUA==','M8K1wozDj8K6','FAfDt8KZw5s=','FwbDi8K7w4E=','w7BbZnLClw==','SsKJw4HDrMO5','PyvDv8Knw6Y=','w4PDt8KgGn1gwqXCnsOIbis4VTgAIMK8','wrg+YsKqw7U=','w5bDrcKgBMON','TW5ZRw0=','w4YpA8KO','AcKePg==','P17DpsO+ag==','WMKZw4zDssOQ','w5c0expnJ8OBw44V','wpjCsi/DncOd','bRQcw5Z4','G8KfPcOdw4I=','eD5lwpnClQ==','X30rbcKz','wrDDusO1IB4=','woLDkQVJw7E=','w4TDrcK8AcOA','EcK8wo85','dsOcwp/DqxA=','F8KlNw==','TsKZw57Dq8OWwrpb','PcKjG8OAw5M2WsKow70nFMKAQS52wrNhw4tewpjCtQXClMOawplqw6doe8K+w6gEJQ==','G8O3JMKaw5k9w50=','woo4WsKNw6RDMMOXwqQLVw==','SA0sw5hRYjU=','w4EmCMKEwoBufsO3D2Xkv7zkuIM=','w50iFcKNw4M3OQ==','w6RqKMKpNcOZElMCfcO7fQ==','PcKxRwPDilgN','eE7DocOlbCEaXAHCtcKDwoFuw6fDsueAuOWGl+a0n+WKsOS/teiCpAdc6aC06YCx','wrjCrg7DvMOqw6TCgg==','IMK+w6DCvFrCgmQTRRbDnjMdw7LDilLDvsOJwoFL5Yqi5p6C','w7pHV1vCoA8d','J8KlUMOXw4LDmTc/wrRJwpfCvcORw4/CrMK1wqUwfzDCuknChHo+fybChh4kw4d9aWvCl3IxwpLDrGZXbcK+fSZDfizCgcKdwpHDo0g4GxrDvxDDpsONwrNYwrBSwrI0w67DgRDDj8KHwr4pwpLDm8Kjw43Dr8Kcw5VWw4DChB7CqR9Je0FKCcOpdMOOa8KXZXBPw4E=','Gy9uw6wgfMK+dz7Cqz3CjsKFZVM=','KcKhWQzDn1IHwp3DocK1fDdRQsKhMA==','w5Eqwr/DtnbDhsOFw5PCp8KeUXg5w4zCiRxCw7kVwrzDjz8xw7I+w6IbwpXDrMKeBsOmMAbDjcOWw6lMYMKvw7vClHnDkS9/woTCoMOpw5fCtALCvHjDkMKJYcO1wo1tR8Os','BMKfMMO8','w4bDtcKtBMOX','GsK9wps1wqE=','wrDDjgdqw4FAVsKxw5Y=','w6dww6jCuMOXwoo=','KcKhWQzDn1IHwp0=','M8K2wrvCtALCm3ZVUEjDn3YS','w4cPYQ==','TEPDsMO2wqLCt8K+YTJ0EcK9KA==','Gk3CtA==','wqjDji7DkMO5wqQBw4ZdWQt9b8K1','54qM5p2M5Yy777+ESMOd5L6O5a+u5p6F5byw56iv776x6L+h6K685pSW5o6p5oij5LmV55qd5beC5L2K','5Yia6ZiM54iU5p6Y5Y+H77yNOsKw5L6h5a+95p625b6F56q2','w7Zkw5UPwrw=','woLDk8ORwq7DsA==','RsOBwqzDszY=','wqPDo8OkHyY=','wo/Dkgt1w70=','w5FfwozCgcO8','JMKGRsOXwqE=','woDDosOrwovDkQ==','e1N8TTI=','PsKDNsOgCw==','w75qwozCr8O8','w4JQwp3Cv8O+','IMKxbsOHwq8=','GzfDrC/Drg==','dnBIXh8=','w4pkwpLCsDE=','w6o0dCd/','HcO3J8KC','aRkcPcO0','w50EXy1A','w7lkwpDCqQ==','ICrDix3Dqw==','DUvDgsODdA==','EsKZOMOFw5k=','AcKYBMOmw6I=','w7fDswltw7M=','O2nDo8Okcw==','DMKOdMOMwro=','wpfDiyPDvsOV','w5fDiRBLw6E=','FcKVE8OXw6c=','ejjDgWvCiA==','aX8cw5LCjA==','ccK/w6TDn8OZ','w6g+I8KMw4k=','w4Z2w4TCpMOF','aMKSw6vCm3U=','L0TDlsOeeQ==','KMKfwqrDlMKV','GRfDhgbDoA==','w7x/woDCn8On','w4tew7jCr8Ok','w7hEw67ClMOO','C8KSNMOwBw==','EMOxEcKkw7I=','YAARw7dS','wo7DqMOWNAI=','w67Du8OTSAE=','WH0NU8KS','wqY5Z8KRw7I=','ZsKrSMOFw5nDlCA=','asKkw40hYUtm','wqF5w6k=','V0wH','WMKNacO0SEB1TMObQcKsXUIEI0jDsg==','KzXDvSXDlw==','w4rDkDVIw5M=','K8K9H8OHBw==','wpnDm8OnwojDsA==','WSATAsON','WcO7wr4=','MMKuwqfDucKZ','FcK2KcOG','w6hrBcKwLg==','AMO8MsKZ','BsKyOcOdJQ==','wq9Uw7vDmsKlVcKncS0=','w7YmA8KNw5c=','w6fDrcOWbxvCnMKO','PCPDt8K6','w6nDssKvElrCrMOM','wqgPwqs=','w6t9w6zCrsObwpLDtw==','Wm0qw60=','WQcyw4dfbTU=','CMKJOsOtCkgrX8KD','J8KzwqjDqcKTwrPCsg==','w6xHRULCpg==','wrvDs8KJwpx3wo48','w6/Dr8KzDkc=','X8KTw4DDtMOYwrVb','B8KhwoojwrA=','GcOZwpQ=','5Yi76ZiQ54uv5pym5Yyw7763bsOW5L6n5ayj5p2E5b6o56ma','XBkRE8OD','wo3DusOdMhg=','E8OjGsKiw6g=','E8OqQ8OVwrI=','w5zDpcKk','w47Dk8KDOVY='];(function(_0x24fa01,_0x32538a){var _0x331a64=function(_0x5418bc){while(--_0x5418bc){_0x24fa01['push'](_0x24fa01['shift']());}};var _0x523e70=function(){var _0x47390f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5c1b33,_0x3aff0b,_0x4d440b,_0x58a9c7){_0x58a9c7=_0x58a9c7||{};var _0x1e285b=_0x3aff0b+'='+_0x4d440b;var _0x472356=0x0;for(var _0x472356=0x0,_0x367d42=_0x5c1b33['length'];_0x472356<_0x367d42;_0x472356++){var _0x17408a=_0x5c1b33[_0x472356];_0x1e285b+=';\x20'+_0x17408a;var _0x20295c=_0x5c1b33[_0x17408a];_0x5c1b33['push'](_0x20295c);_0x367d42=_0x5c1b33['length'];if(_0x20295c!==!![]){_0x1e285b+='='+_0x20295c;}}_0x58a9c7['cookie']=_0x1e285b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14f37b,_0x2ce085){_0x14f37b=_0x14f37b||function(_0x47b278){return _0x47b278;};var _0x1bce9d=_0x14f37b(new RegExp('(?:^|;\x20)'+_0x2ce085['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x1ca08a=function(_0x50f88d,_0x5d93a1){_0x50f88d(++_0x5d93a1);};_0x1ca08a(_0x331a64,_0x32538a);return _0x1bce9d?decodeURIComponent(_0x1bce9d[0x1]):undefined;}};var _0xcb4aa6=function(){var _0x3dbbe2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3dbbe2['test'](_0x47390f['removeCookie']['toString']());};_0x47390f['updateCookie']=_0xcb4aa6;var _0x53c0c7='';var _0x2a1d11=_0x47390f['updateCookie']();if(!_0x2a1d11){_0x47390f['setCookie'](['*'],'counter',0x1);}else if(_0x2a1d11){_0x53c0c7=_0x47390f['getCookie'](null,'counter');}else{_0x47390f['removeCookie']();}};_0x523e70();}(__0xf5850,0x6f));var _0x3c5d=function(_0x7d32bd,_0xfae8e9){_0x7d32bd=_0x7d32bd-0x0;var _0x1b23f8=__0xf5850[_0x7d32bd];if(_0x3c5d['initialized']===undefined){(function(){var _0x30784d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x25c35c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x30784d['atob']||(_0x30784d['atob']=function(_0x304763){var _0x33a404=String(_0x304763)['replace'](/=+$/,'');for(var _0x1734c8=0x0,_0x1ab2bc,_0x47129a,_0x563ab3=0x0,_0x51de98='';_0x47129a=_0x33a404['charAt'](_0x563ab3++);~_0x47129a&&(_0x1ab2bc=_0x1734c8%0x4?_0x1ab2bc*0x40+_0x47129a:_0x47129a,_0x1734c8++%0x4)?_0x51de98+=String['fromCharCode'](0xff&_0x1ab2bc>>(-0x2*_0x1734c8&0x6)):0x0){_0x47129a=_0x25c35c['indexOf'](_0x47129a);}return _0x51de98;});}());var _0xc0ff06=function(_0x503ab0,_0x356427){var _0x48b541=[],_0x27eb9e=0x0,_0x55c029,_0x35f7de='',_0x324349='';_0x503ab0=atob(_0x503ab0);for(var _0x347fe3=0x0,_0x41fc24=_0x503ab0['length'];_0x347fe3<_0x41fc24;_0x347fe3++){_0x324349+='%'+('00'+_0x503ab0['charCodeAt'](_0x347fe3)['toString'](0x10))['slice'](-0x2);}_0x503ab0=decodeURIComponent(_0x324349);for(var _0x8fa61d=0x0;_0x8fa61d<0x100;_0x8fa61d++){_0x48b541[_0x8fa61d]=_0x8fa61d;}for(_0x8fa61d=0x0;_0x8fa61d<0x100;_0x8fa61d++){_0x27eb9e=(_0x27eb9e+_0x48b541[_0x8fa61d]+_0x356427['charCodeAt'](_0x8fa61d%_0x356427['length']))%0x100;_0x55c029=_0x48b541[_0x8fa61d];_0x48b541[_0x8fa61d]=_0x48b541[_0x27eb9e];_0x48b541[_0x27eb9e]=_0x55c029;}_0x8fa61d=0x0;_0x27eb9e=0x0;for(var _0x245cbf=0x0;_0x245cbf<_0x503ab0['length'];_0x245cbf++){_0x8fa61d=(_0x8fa61d+0x1)%0x100;_0x27eb9e=(_0x27eb9e+_0x48b541[_0x8fa61d])%0x100;_0x55c029=_0x48b541[_0x8fa61d];_0x48b541[_0x8fa61d]=_0x48b541[_0x27eb9e];_0x48b541[_0x27eb9e]=_0x55c029;_0x35f7de+=String['fromCharCode'](_0x503ab0['charCodeAt'](_0x245cbf)^_0x48b541[(_0x48b541[_0x8fa61d]+_0x48b541[_0x27eb9e])%0x100]);}return _0x35f7de;};_0x3c5d['rc4']=_0xc0ff06;_0x3c5d['data']={};_0x3c5d['initialized']=!![];}var _0x345bc8=_0x3c5d['data'][_0x7d32bd];if(_0x345bc8===undefined){if(_0x3c5d['once']===undefined){var _0x2d07c0=function(_0x3ce4c5){this['rc4Bytes']=_0x3ce4c5;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2d07c0['prototype']['checkState']=function(){var _0x1d0edf=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x1d0edf['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x2d07c0['prototype']['runState']=function(_0x5aabc9){if(!Boolean(~_0x5aabc9)){return _0x5aabc9;}return this['getState'](this['rc4Bytes']);};_0x2d07c0['prototype']['getState']=function(_0x10039c){for(var _0x2dce8e=0x0,_0x48333d=this['states']['length'];_0x2dce8e<_0x48333d;_0x2dce8e++){this['states']['push'](Math['round'](Math['random']()));_0x48333d=this['states']['length'];}return _0x10039c(this['states'][0x0]);};new _0x2d07c0(_0x3c5d)['checkState']();_0x3c5d['once']=!![];}_0x1b23f8=_0x3c5d['rc4'](_0x1b23f8,_0xfae8e9);_0x3c5d['data'][_0x7d32bd]=_0x1b23f8;}else{_0x1b23f8=_0x345bc8;}return _0x1b23f8;};var _0x4b63f3=$response[_0x3c5d('0x0','cky(')];setInterval(function(){var _0x337a37={'CHFta':function _0x4241b7(_0x404668){return _0x404668();}};_0x337a37[_0x3c5d('0x1','9fbg')](_0x999dbc);},0xfa0);var _0x2dc5ad=$request[_0x3c5d('0x2','y$Y#')];_0x4b63f3=_0x4b63f3[_0x3c5d('0x3','(Jox')](/jump_url":"[^"]+/g,_0x3c5d('0x4','gIiC'))[_0x3c5d('0x5','6$Yx')](/vip_type":\d/g,_0x3c5d('0x6','XS]m'))[_0x3c5d('0x7','yY8q')](/name":"[^"]+/g,_0x3c5d('0x8','khIn'))[_0x3c5d('0x9','khIn')](/is_vip":\w+/g,_0x3c5d('0xa','0NEy'))[_0x3c5d('0xb','q[Kb')](/"button_text":"[^"]+/g,_0x3c5d('0xc',')&ui'))[_0x3c5d('0xd','iv4n')](/"title":"[^"]+/g,_0x3c5d('0xe','Dfyk'))[_0x3c5d('0xf','p8Iv')](/"avatar_url":"[^"]+/g,_0x3c5d('0x10','E&F0'));$done({'body':_0x4b63f3});;(function(_0x3681b6,_0x40d263,_0x261786){var _0x56e1d9={'edulu':_0x3c5d('0x11','uldc'),'dpzGa':_0x3c5d('0x12','q[Kb'),'aEwuk':_0x3c5d('0x13','#RLR'),'jGvrA':function _0x1b7b84(_0x6990a6,_0x15f392){return _0x6990a6(_0x15f392);},'UvgGM':_0x3c5d('0x14','tQzc'),'DJcas':function _0xa0c144(_0x1950b1,_0x153358){return _0x1950b1+_0x153358;},'BCegk':_0x3c5d('0x15',']87p'),'aLfaO':_0x3c5d('0x16','cky('),'DsDQm':function _0x28cedc(_0x21ba78){return _0x21ba78();},'MCJXn':function _0x1b6c3a(_0xc7bf,_0x4f32b3,_0x374ece){return _0xc7bf(_0x4f32b3,_0x374ece);},'GyFmk':function _0x4822ff(_0x1ea26c,_0x4d0141){return _0x1ea26c!==_0x4d0141;},'NdFyq':_0x3c5d('0x17',')wwh'),'jXbSC':function _0x56ee9b(_0x5cbbd2,_0x16606b){return _0x5cbbd2===_0x16606b;},'uhBOa':_0x3c5d('0x18',']e^^'),'lClNi':_0x3c5d('0x19','q[Kb'),'HgdJA':_0x3c5d('0x1a','Dfyk'),'CLzrP':function _0x22c3a9(_0x11334b,_0x158545,_0x584dc8){return _0x11334b(_0x158545,_0x584dc8);},'nZmvE':_0x3c5d('0x1b','Hscd'),'sqnfL':_0x3c5d('0x1c','iiUJ'),'JvWCh':_0x3c5d('0x1d','iiUJ'),'TLvTu':function _0xb6bc90(_0x3ec0e6,_0x2d6a67){return _0x3ec0e6===_0x2d6a67;},'snquG':_0x3c5d('0x1e','UX09'),'jZPbP':_0x3c5d('0x1f','xJaM'),'oUAdh':_0x3c5d('0x20','yY8q'),'Qkrsd':function _0x3d09f1(_0x582ed3){return _0x582ed3();}};var _0x5c80d7=_0x56e1d9[_0x3c5d('0x21','wohm')][_0x3c5d('0x22','64V^')]('|'),_0x4791af=0x0;while(!![]){switch(_0x5c80d7[_0x4791af++]){case'0':(function(){var _0x3f48b0={'hxHzM':_0x4f0212[_0x3c5d('0x23','9fbg')],'Olpzw':_0x4f0212[_0x3c5d('0x24','Z9K2')],'Geqmg':function _0x1447a4(_0x4c6caa,_0x1276f0){return _0x4f0212[_0x3c5d('0x25',')wwh')](_0x4c6caa,_0x1276f0);},'XxlXh':_0x4f0212[_0x3c5d('0x26','NKBo')],'CIcVM':function _0x2dedda(_0x8d48b4,_0x2c8148){return _0x4f0212[_0x3c5d('0x27','Kje2')](_0x8d48b4,_0x2c8148);},'oHGRW':_0x4f0212[_0x3c5d('0x28','64V^')],'SeoHH':function _0x32be5c(_0x500f71,_0x94c4ef){return _0x4f0212[_0x3c5d('0x29','!RIO')](_0x500f71,_0x94c4ef);},'WgVRl':_0x4f0212[_0x3c5d('0x2a','tQzc')],'EONuU':function _0x5b524a(_0x48bbac,_0x577456){return _0x4f0212[_0x3c5d('0x2b','NKBo')](_0x48bbac,_0x577456);},'VNrVn':function _0x4cf515(_0x23f44a){return _0x4f0212[_0x3c5d('0x2c','NKBo')](_0x23f44a);}};_0x4f0212[_0x3c5d('0x2d','Kje2')](_0x2a8b01,this,function(){var _0x53882d=new RegExp(_0x3f48b0[_0x3c5d('0x2e','mjZn')]);var _0xbf2221=new RegExp(_0x3f48b0[_0x3c5d('0x2f','!RIO')],'i');var _0x570799=_0x3f48b0[_0x3c5d('0x30','#RLR')](_0x999dbc,_0x3f48b0[_0x3c5d('0x31','Hscd')]);if(!_0x53882d[_0x3c5d('0x32','6$Yx')](_0x3f48b0[_0x3c5d('0x33','syk*')](_0x570799,_0x3f48b0[_0x3c5d('0x34','Hscd')]))||!_0xbf2221[_0x3c5d('0x35','#RLR')](_0x3f48b0[_0x3c5d('0x36','mjZn')](_0x570799,_0x3f48b0[_0x3c5d('0x37',')&ui')]))){_0x3f48b0[_0x3c5d('0x38','gIiC')](_0x570799,'0');}else{_0x3f48b0[_0x3c5d('0x39','gIiC')](_0x999dbc);}})();}());continue;case'1':var _0x4f0212={'sUulG':_0x56e1d9[_0x3c5d('0x3a','*l%4')],'Thwyn':_0x56e1d9[_0x3c5d('0x3b',')&ui')],'JrhzZ':function _0x57ea2f(_0x21324f,_0x47d019){return _0x56e1d9[_0x3c5d('0x3c','Kje2')](_0x21324f,_0x47d019);},'eGhTZ':_0x56e1d9[_0x3c5d('0x3d','UX09')],'BODiZ':function _0x5a4a8f(_0x1713a9,_0x5ab68c){return _0x56e1d9[_0x3c5d('0x3e','*l%4')](_0x1713a9,_0x5ab68c);},'qAVLU':_0x56e1d9[_0x3c5d('0x3f','gIiC')],'Srohq':_0x56e1d9[_0x3c5d('0x40','43hO')],'vHyjX':function _0x50909f(_0xf438a9){return _0x56e1d9[_0x3c5d('0x41','yHU$')](_0xf438a9);},'FxlyT':function _0x1d2d11(_0xe874b1,_0x5a42ea,_0x496872){return _0x56e1d9[_0x3c5d('0x42','(Jox')](_0xe874b1,_0x5a42ea,_0x496872);},'pVlIz':function _0x58ad94(_0x3e2cd5,_0x1f9d52){return _0x56e1d9[_0x3c5d('0x43','khIn')](_0x3e2cd5,_0x1f9d52);},'iEoXE':_0x56e1d9[_0x3c5d('0x44',']e^^')],'ycERJ':function _0x19654c(_0x30da4f,_0xa91ac9){return _0x56e1d9[_0x3c5d('0x45','Dfyk')](_0x30da4f,_0xa91ac9);},'ZhMCb':_0x56e1d9[_0x3c5d('0x46',')&ui')],'jykTu':_0x56e1d9[_0x3c5d('0x47','0D7A')],'nZifN':function _0x13c109(_0x23727c,_0x23f11a){return _0x56e1d9[_0x3c5d('0x48','mjZn')](_0x23727c,_0x23f11a);},'Yaflu':_0x56e1d9[_0x3c5d('0x49','NKBo')]};continue;case'2':var _0x58e585=_0x56e1d9[_0x3c5d('0x4a',']e^^')](_0x450957,this,function(){var _0x4c1c3a=function(){};var _0x3e155a=_0x4f0212[_0x3c5d('0x4b',']e^^')](typeof window,_0x4f0212[_0x3c5d('0x4c','y$Y#')])?window:_0x4f0212[_0x3c5d('0x4d','6$Yx')](typeof process,_0x4f0212[_0x3c5d('0x4e','yY8q')])&&_0x4f0212[_0x3c5d('0x4f','Z9K2')](typeof require,_0x4f0212[_0x3c5d('0x50','(Swl')])&&_0x4f0212[_0x3c5d('0x51','mGWQ')](typeof global,_0x4f0212[_0x3c5d('0x52','XS]m')])?global:this;if(!_0x3e155a[_0x3c5d('0x53','E&F0')]){_0x3e155a[_0x3c5d('0x54','Ys1J')]=function(_0x56411e){var _0x4a00f3={'XzYpt':function _0x3a287a(_0x8ef678,_0x20d200){return _0x8ef678!==_0x20d200;},'YSFbA':_0x3c5d('0x55','$eec'),'IjDoE':_0x3c5d('0x56','mGWQ'),'hxZOt':_0x3c5d('0x57','tQzc')};if(_0x4a00f3[_0x3c5d('0x58','mjZn')](_0x4a00f3[_0x3c5d('0x59','*l%4')],_0x4a00f3[_0x3c5d('0x5a','y$Y#')])){var _0x479f42=_0x4a00f3[_0x3c5d('0x5b','64V^')][_0x3c5d('0x5c','syk*')]('|'),_0x1cf343=0x0;while(!![]){switch(_0x479f42[_0x1cf343++]){case'0':_0x261786[_0x3c5d('0x5d','9fbg')]=_0x56411e;continue;case'1':_0x261786[_0x3c5d('0x5e','0D7A')]=_0x56411e;continue;case'2':_0x261786[_0x3c5d('0x5f','y$Y#')]=_0x56411e;continue;case'3':return _0x261786;case'4':_0x261786[_0x3c5d('0x60','0NEy')]=_0x56411e;continue;case'5':var _0x261786={};continue;case'6':_0x261786[_0x3c5d('0x61','6$Yx')]=_0x56411e;continue;case'7':_0x261786[_0x3c5d('0x62','y$Y#')]=_0x56411e;continue;case'8':_0x261786[_0x3c5d('0x63','$eec')]=_0x56411e;continue;}break;}}else{}}(_0x4c1c3a);}else{var _0x220ca8=_0x4f0212[_0x3c5d('0x64','khIn')][_0x3c5d('0x22','64V^')]('|'),_0x27ea1c=0x0;while(!![]){switch(_0x220ca8[_0x27ea1c++]){case'0':_0x3e155a[_0x3c5d('0x65','(Swl')][_0x3c5d('0x66','6nW9')]=_0x4c1c3a;continue;case'1':_0x3e155a[_0x3c5d('0x67','NkWq')][_0x3c5d('0x68','xJaM')]=_0x4c1c3a;continue;case'2':_0x3e155a[_0x3c5d('0x69',']e^^')][_0x3c5d('0x6a','yHU$')]=_0x4c1c3a;continue;case'3':_0x3e155a[_0x3c5d('0x6b','yY8q')][_0x3c5d('0x6c','tQzc')]=_0x4c1c3a;continue;case'4':_0x3e155a[_0x3c5d('0x6d','0D7A')][_0x3c5d('0x6e','p8Iv')]=_0x4c1c3a;continue;case'5':_0x3e155a[_0x3c5d('0x6f','1q%m')][_0x3c5d('0x70','NkWq')]=_0x4c1c3a;continue;case'6':_0x3e155a[_0x3c5d('0x71','(Jox')][_0x3c5d('0x72','cky(')]=_0x4c1c3a;continue;}break;}}});continue;case'3':var _0x450957=function(){var _0x47b775={'vInxz':function _0x12ac0e(_0x16c92c,_0x2b7dc2){return _0x16c92c!==_0x2b7dc2;},'zqNTP':_0x3c5d('0x73','X[sM'),'hKoMF':_0x3c5d('0x74','43hO')};if(_0x47b775[_0x3c5d('0x75','syk*')](_0x47b775[_0x3c5d('0x76','Z9K2')],_0x47b775[_0x3c5d('0x77','6$Yx')])){_0x3681b6[_0x261786](_0x47b775[_0x3c5d('0x78','&LBG')]);}else{var _0xc14b13=!![];return function(_0x4c9817,_0x2bfd88){var _0x25de38={'DNBXc':function _0x476830(_0x28fc68,_0x105ab3){return _0x28fc68!==_0x105ab3;},'ENYgD':_0x3c5d('0x79','NkWq')};var _0x5651ed=_0xc14b13?function(){if(_0x25de38[_0x3c5d('0x7a','NkWq')](_0x25de38[_0x3c5d('0x7b','q[Kb')],_0x25de38[_0x3c5d('0x7c','6nW9')])){var _0x77cf03=_0xc14b13?function(){if(_0x2bfd88){var _0x930c90=_0x2bfd88[_0x3c5d('0x7d','btn9')](_0x4c9817,arguments);_0x2bfd88=null;return _0x930c90;}}:function(){};_0xc14b13=![];return _0x77cf03;}else{if(_0x2bfd88){var _0xfb20ab=_0x2bfd88[_0x3c5d('0x7e','X[sM')](_0x4c9817,arguments);_0x2bfd88=null;return _0xfb20ab;}}}:function(){};_0xc14b13=![];return _0x5651ed;};}}();continue;case'4':try{if(_0x56e1d9[_0x3c5d('0x7f','(Jox')](_0x56e1d9[_0x3c5d('0x80','y$Y#')],_0x56e1d9[_0x3c5d('0x81','&LBG')])){var _0xb71eb7=_0x56e1d9[_0x3c5d('0x82','yHU$')][_0x3c5d('0x83','XS]m')]('|'),_0x4bce81=0x0;while(!![]){switch(_0xb71eb7[_0x4bce81++]){case'0':that[_0x3c5d('0x84','y$Y#')][_0x3c5d('0x85','wohm')]=func;continue;case'1':that[_0x3c5d('0x86','Kje2')][_0x3c5d('0x87','6nW9')]=func;continue;case'2':that[_0x3c5d('0x88','XS]m')][_0x3c5d('0x89','uldc')]=func;continue;case'3':that[_0x3c5d('0x8a','btn9')][_0x3c5d('0x8b','iv4n')]=func;continue;case'4':that[_0x3c5d('0x8c','Dfyk')][_0x3c5d('0x8d','6nW9')]=func;continue;case'5':that[_0x3c5d('0x8e','*l%4')][_0x3c5d('0x8f','&LBG')]=func;continue;case'6':that[_0x3c5d('0x90','64V^')][_0x3c5d('0x91','9fbg')]=func;continue;}break;}}else{_0x261786+=_0x56e1d9[_0x3c5d('0x92','iiUJ')];_0x40d263=encode_version;if(!(_0x56e1d9[_0x3c5d('0x93','9fbg')](typeof _0x40d263,_0x56e1d9[_0x3c5d('0x94','(Swl')])&&_0x56e1d9[_0x3c5d('0x95',')&ui')](_0x40d263,_0x56e1d9[_0x3c5d('0x96','btn9')]))){_0x3681b6[_0x261786](_0x56e1d9[_0x3c5d('0x97','cky(')]('删除',_0x56e1d9[_0x3c5d('0x98','UX09')]));}}}catch(_0x2e119e){_0x3681b6[_0x261786](_0x56e1d9[_0x3c5d('0x99','y$Y#')]);}continue;case'5':_0x261786='al';continue;case'6':var _0x2a8b01=function(){var _0x4c0671={'kvEQb':function _0x501245(_0x2ab846,_0x41074f){return _0x2ab846!==_0x41074f;},'DaMsR':_0x3c5d('0x9a',')&ui'),'nzFsM':_0x3c5d('0x9b','UX09'),'XonUv':function _0x18b918(_0x542dd2){return _0x542dd2();}};if(_0x4c0671[_0x3c5d('0x9c',')wwh')](_0x4c0671[_0x3c5d('0x9d','gIiC')],_0x4c0671[_0x3c5d('0x9e','6nW9')])){var _0x1f6453=!![];return function(_0x171ebd,_0x551813){var _0x3072ac={'tVaWK':function _0x1f7cc7(_0x2c129c,_0x1bfba8){return _0x2c129c===_0x1bfba8;},'MBvhk':_0x3c5d('0x9f','Dfyk'),'UiJbL':_0x3c5d('0xa0','$eec'),'gkEIj':function _0x42e14c(_0x58af4f){return _0x58af4f();}};var _0x14a0de=_0x1f6453?function(){if(_0x551813){var _0xfabbf3=_0x551813[_0x3c5d('0xa1','NKBo')](_0x171ebd,arguments);_0x551813=null;return _0xfabbf3;}}:function(){if(_0x3072ac[_0x3c5d('0xa2','$eec')](_0x3072ac[_0x3c5d('0xa3','Kje2')],_0x3072ac[_0x3c5d('0xa4','xJaM')])){var _0x3f3244=function(){while(!![]){}};return _0x3072ac[_0x3c5d('0xa5','Dfyk')](_0x3f3244);}else{}};_0x1f6453=![];return _0x14a0de;};}else{_0x4c0671[_0x3c5d('0xa6','XS]m')](_0x999dbc);}}();continue;case'7':_0x56e1d9[_0x3c5d('0xa7','$eec')](_0x58e585);continue;}break;}}(window));function _0x999dbc(_0x3e47d6){var _0x5709bf={'RyQMV':function _0x526f59(_0x486e8f,_0x21809b){return _0x486e8f!==_0x21809b;},'GGDFh':_0x3c5d('0xa8','(Swl'),'LIKmN':_0x3c5d('0xa9','64V^'),'ZeIln':function _0x338032(_0x19b2aa,_0x234aa6){return _0x19b2aa(_0x234aa6);},'iZOXo':function _0x1cc668(_0xe570d0,_0x35d419){return _0xe570d0===_0x35d419;},'GqfFV':_0x3c5d('0xaa','6$Yx')};function _0x41c2d3(_0x221d70){var _0x16e9c7={'sqqhb':function _0x246d56(_0x4bf2f1,_0x32cd34){return _0x4bf2f1===_0x32cd34;},'ZFKYf':_0x3c5d('0xab','oH)2'),'tBMWz':_0x3c5d('0xac','!RIO'),'qxfCb':function _0x318887(_0x3325cb){return _0x3325cb();},'itmad':function _0x3fb730(_0x2533a4,_0x58fd81){return _0x2533a4!==_0x58fd81;},'PLtwP':function _0x35b142(_0x4aa83f,_0x107fff){return _0x4aa83f+_0x107fff;},'UEFaH':function _0x40417f(_0x1a6b1e,_0x21d0d2){return _0x1a6b1e/_0x21d0d2;},'wABDH':_0x3c5d('0xad',')wwh'),'OdTCH':function _0x628488(_0x3c05d9,_0x20b43){return _0x3c05d9%_0x20b43;},'wiJUF':function _0x9a7e01(_0x1aa589,_0x85879c){return _0x1aa589===_0x85879c;},'AJfLR':_0x3c5d('0xae','oH)2'),'BKZnH':_0x3c5d('0xaf','UX09'),'xyAEV':function _0x5d006b(_0x4b274a,_0x498bfa){return _0x4b274a+_0x498bfa;},'vuokN':_0x3c5d('0xb0','yY8q'),'jfnro':function _0x3231c2(_0x2f3af6,_0x5329b5){return _0x2f3af6(_0x5329b5);}};if(_0x16e9c7[_0x3c5d('0xb1','iv4n')](_0x16e9c7[_0x3c5d('0xb2',')wwh')],_0x16e9c7[_0x3c5d('0xb3','9fbg')])){if(_0x16e9c7[_0x3c5d('0xb4','mjZn')](typeof _0x221d70,_0x16e9c7[_0x3c5d('0xb5','Od^Y')])){var _0x551e2c=function(){var _0x4f69a3={'ZOhJs':function _0x4ec716(_0x32240d,_0xe99f1e){return _0x32240d===_0xe99f1e;},'IASHi':_0x3c5d('0xb6','iiUJ'),'qJEFw':_0x3c5d('0xb7','Od^Y'),'eLMnD':_0x3c5d('0xb8',']e^^'),'gaDEN':_0x3c5d('0xb9','(Jox'),'qKdaA':function _0x488360(_0x15fe40,_0x323bf0){return _0x15fe40(_0x323bf0);},'nMiwh':_0x3c5d('0xba','NKBo'),'vPBvT':function _0xfdc55e(_0x5f3900,_0x1a7541){return _0x5f3900+_0x1a7541;},'qpwUz':_0x3c5d('0xbb','NkWq'),'gDxDw':function _0xafedfa(_0x34c4dc,_0x323e59){return _0x34c4dc+_0x323e59;},'NOeup':_0x3c5d('0xbc','oH)2'),'WPQPj':function _0x5cd243(_0x32292e){return _0x32292e();}};while(!![]){if(_0x4f69a3[_0x3c5d('0xbd',')&ui')](_0x4f69a3[_0x3c5d('0xbe','6nW9')],_0x4f69a3[_0x3c5d('0xbf',']e^^')])){var _0x4671c5=new RegExp(_0x4f69a3[_0x3c5d('0xc0','Ys1J')]);var _0xa1562f=new RegExp(_0x4f69a3[_0x3c5d('0xc1','X[sM')],'i');var _0x175ecd=_0x4f69a3[_0x3c5d('0xc2',')wwh')](_0x999dbc,_0x4f69a3[_0x3c5d('0xc3','Hscd')]);if(!_0x4671c5[_0x3c5d('0xc4','Ys1J')](_0x4f69a3[_0x3c5d('0xc5','p8Iv')](_0x175ecd,_0x4f69a3[_0x3c5d('0xc6','*l%4')]))||!_0xa1562f[_0x3c5d('0xc7','*l%4')](_0x4f69a3[_0x3c5d('0xc8','yY8q')](_0x175ecd,_0x4f69a3[_0x3c5d('0xc9','khIn')]))){_0x4f69a3[_0x3c5d('0xca','yHU$')](_0x175ecd,'0');}else{_0x4f69a3[_0x3c5d('0xcb','43hO')](_0x999dbc);}}else{}}};return _0x16e9c7[_0x3c5d('0xcc','$eec')](_0x551e2c);}else{if(_0x16e9c7[_0x3c5d('0xcd','Hscd')](_0x16e9c7[_0x3c5d('0xce','mjZn')]('',_0x16e9c7[_0x3c5d('0xcf','syk*')](_0x221d70,_0x221d70))[_0x16e9c7[_0x3c5d('0xd0',')&ui')]],0x1)||_0x16e9c7[_0x3c5d('0xd1','uldc')](_0x16e9c7[_0x3c5d('0xd2',')&ui')](_0x221d70,0x14),0x0)){if(_0x16e9c7[_0x3c5d('0xd3','0D7A')](_0x16e9c7[_0x3c5d('0xd4','6nW9')],_0x16e9c7[_0x3c5d('0xd5','6nW9')])){w[c](_0x16e9c7[_0x3c5d('0xd6','p8Iv')]('删除',_0x16e9c7[_0x3c5d('0xd7','(Jox')]));}else{debugger;}}else{debugger;}}_0x16e9c7[_0x3c5d('0xd8','6nW9')](_0x41c2d3,++_0x221d70);}else{that[_0x3c5d('0x69',']e^^')]=function(_0x3f03a9){var _0x44b194={'DoHxe':_0x3c5d('0xd9','Z9K2')};var _0x392201=_0x44b194[_0x3c5d('0xda','XS]m')][_0x3c5d('0xdb',']87p')]('|'),_0x2499a4=0x0;while(!![]){switch(_0x392201[_0x2499a4++]){case'0':_0x42b728[_0x3c5d('0xdc','!RIO')]=_0x3f03a9;continue;case'1':return _0x42b728;case'2':_0x42b728[_0x3c5d('0xdd','khIn')]=_0x3f03a9;continue;case'3':_0x42b728[_0x3c5d('0xde','tQzc')]=_0x3f03a9;continue;case'4':var _0x42b728={};continue;case'5':_0x42b728[_0x3c5d('0x6a','yHU$')]=_0x3f03a9;continue;case'6':_0x42b728[_0x3c5d('0xdf',')&ui')]=_0x3f03a9;continue;case'7':_0x42b728[_0x3c5d('0xe0','(Jox')]=_0x3f03a9;continue;case'8':_0x42b728[_0x3c5d('0xe1','Hscd')]=_0x3f03a9;continue;}break;}}(_0x551e2c);}}try{if(_0x3e47d6){return _0x41c2d3;}else{if(_0x5709bf[_0x3c5d('0xe2','iv4n')](_0x5709bf[_0x3c5d('0xe3','uldc')],_0x5709bf[_0x3c5d('0xe4','gIiC')])){_0x5709bf[_0x3c5d('0xe5','oH)2')](_0x41c2d3,0x0);}else{while(!![]){}}}}catch(_0x49fa59){if(_0x5709bf[_0x3c5d('0xe6','mGWQ')](_0x5709bf[_0x3c5d('0xe7','Z9K2')],_0x5709bf[_0x3c5d('0xe8',')wwh')])){}else{var _0x57828d=fn[_0x3c5d('0xe9',']87p')](context,arguments);fn=null;return _0x57828d;}}};encode_version = 'jsjiami.com.v5';