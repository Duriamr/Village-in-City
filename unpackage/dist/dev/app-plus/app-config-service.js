
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabBar/home/home","pages/tabBar/release/release","pages/tabBar/my/my"],"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"城中村","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#8E8E8E","selectedColor":"#4B4948","borderStyle":"#F4F4F4","backgroundColor":"#F4F4F4","iconWidth":"20px","fontSize":"10.5px","list":[{"pagePath":"pages/tabBar/home/home","iconPath":"static/tabBar/home.png","selectedIconPath":"static/tabBar/home_selected.png","text":"首页"},{"pagePath":"pages/tabBar/release/release","iconPath":"static/tabBar/release.png","selectedIconPath":"static/tabBar/release_selected.png","text":"发布房源"},{"pagePath":"pages/tabBar/my/my","iconPath":"static/tabBar/my.png","selectedIconPath":"static/tabBar/my_selected.png","text":"研享"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ViC","compilerVersion":"2.9.8","entryPagePath":"pages/tabBar/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabBar/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"城中村","titleNView":false,"bounce":"none","scrollIndicator":"none"}},{"path":"/pages/tabBar/release/release","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"发布房源","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/tabBar/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"white","navigationBarTitleText":"我的","titleNView":false,"bounce":"none","scrollIndicator":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
