/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


// For improved debugging and maintenance of your app, it is highly
// recommended that you separate your JavaScript from your HTML files.
// Use the addEventListener() method to associate events with DOM elements.

// For example:

// var el ;
// el = document.getElementById("id_myButton") ;
// el.addEventListener("click", myEventHandler, false) ;



// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
}
document.addEventListener("app.Ready", onAppReady, false) ;
// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;

// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.

// Bmob APPID:c5e280725d40401e2dec9f7dc6f21cb1
//      restAPI:a0c52975b5460baef3a13c0625b9bb3b


/*
apicloud 
    ID: A6974082591496
    appKey: 2E3474B8-52B8-5AC9-813E-1125753EB2FE
    https://d.apicloud.com/mcm/api/
*/

/*
    client_id:1129644
    client_secret:574bd5aa828794b9da99af5a09ee75cf

    重要  http://www.tngou.net/api/oauth2/reg 用户注册
    重要  http://www.tngou.net/api/oauth2/login   用户登录
    重要  http://www.tngou.net/api/oauth2/bind    第三方绑定登录
    一般  http://www.tngou.net/api/oauth2/authorize   authorize授权登录页面
    一般  http://www.tngou.net/api/oauth2/accesstoken accesstoken 取得授权AccessToken
    一般  http://www.tngou.net/api/oauth2/open    第三方登录认证

*/


//apicloud 认证
var now = Date.now();
var appKey = SHA1("A6974082591496"+"UZ"+"2E3474B8-52B8-5AC9-813E-1125753EB2FE"+"UZ"+now)+"."+now;
var baseUrl = 'https://d.apicloud.com/mcm/api/';
function toUser(){

    $.ajax({
        url: baseUrl+'batch',
        type: 'POST',
        cache: false,
        dataType: 'json',
        headers:{
            'X-APICloud-AppId':'A6974082591496',
            'X-APICloud-AppKey':appKey
        },
        data: {
            'requests':[
                {
                    'method': 'POST',
                    'path': baseUrl+'user2000w',
                    'body':{
"Name": "吕荣宇",
"CtfTp": "ID",
"CtfId": "110105198302020840",
"Gender": "0",
"Birthday": "19830202",
"Address": "北京市朝阳区松榆东里38楼801号",
"Mobile": "2147483647",
"Tel": "0",
"EMail": ""
                    }
                },
                {
                    'method': 'POST',
                    'path':baseUrl+'user2000w',
                    'body':{
"Name": "张晓伟",
"CtfTp": "ID",
"CtfId": "110105198405057136",
"Gender": "0",
"Birthday": "19840505",
"Address": "北京市朝阳区机场北平里19楼3门5层4至",
"Mobile": "2147483647",
"Tel": "0",
"EMail": ""
                    }
                }, 
                {
                    'method': 'POST',
                    'path':baseUrl+'user2000w',
                    'body':{
"Name": "马景林",
"CtfTp": "ID",
"CtfId": "110105196007210079",
"Gender": "0",
"Birthday": "19600721",
"Address": "北京市朝阳区延静里中街13楼2门503号",
"Mobile": "2147483647",
"Tel": "0",
"EMail": ""
                    }
                }, 
                {
                    'method': 'POST',
                    'path':baseUrl+'user2000w',
                    'body':{
"Name": "王世杰",
"CtfTp": "ID",
"CtfId": "110105195710200855",
"Gender": "0",
"Birthday": "19571020",
"Address": "北京市东城区沙滩后街59号13排",
"Mobile": "0",
"Tel": "0",
"EMail": ""
                    }
                },
                {
                    'method': 'POST',
                    'path':baseUrl+'user2000w',
                    'body':{
"Name": "李涛",
"CtfTp": "ID",
"CtfId": "110105196102277511",
"Gender": "0",
"Birthday": "19610227",
"Address": "北京市东城区胡家园3楼2单元302号",
"Mobile": "0",
"Tel": "0",
"EMail": ""
                    }
                },                                                                
            ]       
        }
    }).done(function() {
        console.log("success");
    })
}





$(document).ready(function(){
    $("#main").bind("panelbeforeload", startApp);
    // setup signin and signup button events
    $("#login").on("click", function(){
        signIn();
    });

    $("#register").on("click", function(){
        signUp();
    });

});

function signIn(){
    // SIGNIN SERVER CALL CODE GOES HERE
    valid_login = false;
    if(valid_login){
        $.afui.loadContent("#main", null, null, "fade");
    }else{
        //Example use of the error toast api
        $.afui.toast({
            message:"Invalid Login Combination",
            position:"tc",
            delay:2000,
            autoClose:true,
            type:"error"
        });
    }
}

function signUp(){
    //example client side validation
    if ($("#password").val() === $("#confirmpassword").val()){
        $.afui.loadContent("#main", null, null, "fade");
        $.afui.toast({
            message:"Account Created",
            position:"tc",
            delay:2000,
            autoClose:true,
            type:"success"
        });
    }else{
        $.afui.toast({
            message:"Passwords Don't Match",
            position:"tc",
            delay:2000,
            autoClose:true,
            type:"error"
        });
    }
}

function startApp(){
    // clears all back button history
    $.afui.clearHistory();

    // your app code here
}