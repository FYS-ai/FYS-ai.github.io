(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74e5efc1"],{"014f":function(t,e,s){t.exports=s.p+"img/loginleft.8dabd09c.png"},"52ff":function(t,e,s){"use strict";s("a0d2")},"776d":function(t,e,s){"use strict";s("a85f")},"8d85":function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){return l}));var r=s("1bab");function i(t,e){return Object(r["a"])({url:"/login_user",method:"post",data:{user_name:t,user_pwd:e}})}function o(t,e){return Object(r["a"])({url:"/user_wdlwjmm",method:"post",data:{user_tel:t,user_pwd:e}})}function a(t,e){return Object(r["a"])({url:"/up_usertel",method:"post",data:{uid:t,user_tel:e}})}function l(t){return Object(r["a"])({url:"/find_user",method:"get",params:{uid:t}})}},a0d2:function(t,e,s){},a5e9:function(t,e,s){t.exports=s.p+"img/user_photo.fd60406c.png"},a85f:function(t,e,s){},d6b0:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myLogin"},[s("div",{staticClass:"tp d1"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"tp d2"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"tp d3"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"tp d4"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"tp d5"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"tp d6"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"tp d7"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"tp d8"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"tp d9"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"tp d10"},[s("img",{attrs:{src:t.loginleft,alt:""}})]),s("div",{staticClass:"formUser"},[s("legend",{staticClass:"yhdl"},[t._v("用户登录")]),s("p",{staticClass:"zhuceP",on:{click:t.zhucexyh}},[s("span",[t._v("新用户")]),s("span",[t._v("注册")])]),s("label",{staticClass:"zlabel",attrs:{for:""}},[t._v("用户名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user_name,expression:"user_name"}],staticClass:"zinput",attrs:{type:"text",placeholder:"输入用户名"},domProps:{value:t.user_name},on:{blur:t.usernameblur,focus:t.usernamefocus,input:function(e){e.target.composing||(t.user_name=e.target.value)}}}),s("br"),s("p",{staticClass:"msgp",class:t.isuserActive?"":"msgpActive"},[t._v(" 用户名不能为空 ")]),s("label",{staticClass:"zlabel",attrs:{for:""}},[t._v("密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user_pwd,expression:"user_pwd"}],staticClass:"zinput",attrs:{type:"password",placeholder:"输入密码"},domProps:{value:t.user_pwd},on:{blur:t.userpwdblur,focus:t.userpwdfocus,input:function(e){e.target.composing||(t.user_pwd=e.target.value)}}}),s("br"),s("p",{staticClass:"msgp",class:t.ispwdActive?"":"msgpActive"},[t._v("密码不能为空")]),s("div",{staticClass:"myanniu"},[s("div",{staticClass:"zbutton",on:{click:t.submitClick}},[t._v("提交")]),s("div",{staticClass:"zbutton chongzhi",on:{click:t.chongzhiClick}},[t._v("重置")])]),s("p",{staticClass:"wjmm",on:{click:t.wjmmClick}},[t._v("忘记密码")])]),s("el-dialog",{attrs:{title:"忘记密码",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[s("forget-pwd",{on:{closeForm:t.closeFormClick}})],1)],1)},i=[],o=s("8d85"),a=s("d9ec"),l={name:"userlogin",data:function(){return{loginleft:s("014f"),user_photo:s("a5e9"),user_name:"",user_pwd:"",msg:"",isuserActive:!0,ispwdActive:!0,dialogFormVisible:!1}},components:{ForgetPwd:a["a"]},mounted:function(){},updated:function(){""!=this.user_name&&(this.isuserActive=!0),""!=this.user_pwd&&(this.ispwdActive=!0)},methods:{zhucexyh:function(){this.$router.push("/register")},_UserLogin:function(t,e){var s=this;Object(o["d"])(t,e).then((function(t){if(s.msg=t.msg,"用户名或密码错误！"==t.msg&&400==t.code&&alert(s.msg),200==t.code){null==t.data.user_photo?t.data.user_photo=s.user_photo:t.data.user_photo=t.data.user_photo,s.$store.commit("loginList",t.data);var e=s.$loading({lock:!0,text:"加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout((function(){e.close(),s.$socket.emit("online",s.$store.state.userList),s.$router.push("/home")}),2e3)}}))},submitClick:function(){this._UserLogin(this.user_name,this.user_pwd),""==this.user_name&&(this.isuserActive=!1),""==this.user_pwd&&(this.ispwdActive=!1)},usernameblur:function(){this.isuserActive=!1},userpwdblur:function(){this.ispwdActive=!1},usernamefocus:function(){this.isuserActive=!0},userpwdfocus:function(){this.ispwdActive=!0},chongzhiClick:function(){this.user_name="",this.user_pwd=""},wjmmClick:function(){console.log("----"),this.dialogFormVisible=!0},closeFormClick:function(t){this.dialogFormVisible=t}}},u=l,n=(s("776d"),s("2877")),c=Object(n["a"])(u,r,i,!1,null,"020fdf8e",null);e["default"]=c.exports},d9ec:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"手机号",prop:"mytel"}},[s("el-input",{staticClass:"inputpp",attrs:{type:"tel",autocomplete:"off"},model:{value:t.ruleForm.mytel,callback:function(e){t.$set(t.ruleForm,"mytel",e)},expression:"ruleForm.mytel"}})],1),s("el-form-item",{attrs:{label:"新密码",prop:"pass"}},[s("el-input",{staticClass:"inputpp",attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),s("el-form-item",{attrs:{label:"确认新密码",prop:"checkPass"}},[s("el-input",{staticClass:"inputpp",attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.checkPass,callback:function(e){t.$set(t.ruleForm,"checkPass",e)},expression:"ruleForm.checkPass"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("提交")]),s("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1)},i=[],o=s("8d85"),a={name:"forgetPwd",data:function(){var t=this,e=function(e,s,r){""===s?r(new Error("请输入手机号")):/^1[3456789]\d{9}$/.test(t.ruleForm.mytel)?(""!==t.ruleForm.mytel&&t.$refs.ruleForm.validateField("checkPass"),r()):r(new Error("手机号格式不正确"))},s=function(e,s,r){""===s?r(new Error("请输入密码")):s.length<6?r(new Error("密码长度必须大于6")):(""!==t.ruleForm.checkPass&&t.$refs.ruleForm.validateField("checkPass"),r())},r=function(e,s,r){""===s?r(new Error("请再次输入密码")):s!==t.ruleForm.pass?r(new Error("两次输入密码不一致!")):r()};return{ruleForm:{mytel:"",pass:"",checkPass:""},rules:{mytel:[{validator:e,trigger:"blur"}],pass:[{validator:s,trigger:"blur"}],checkPass:[{validator:r,trigger:"blur"}]},uid:""}},created:function(){this.uid=this.$store.state.userList.uid},methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return alert("修改失败"),!1;e._UpUser(e.ruleForm.mytel,e.ruleForm.pass)}))},resetForm:function(t){this.$refs[t].resetFields()},_UpUser:function(t,e){var s=this;Object(o["b"])(t,e).then((function(t){if(200==t.code&&t.data){alert("密码修改成功，请重新登录");var e={user_name:"",uid:"",user_photo:"",user_sex:"",user_tel:"",user_data:"",isLandlord:""};s.$store.commit("loginList",e),"/userlogin"==s.$route.fullPath&&s.$emit("closeForm",!1),"/pinformation"==s.$route.fullPath&&s.$router.push("/userlogin")}400==t.code&&"修改失败，请重新操作！"==t.msg&&alert("新的密码不能和近期的相同，请重新操作"),401==t.code&&"改手机号还未注册，请注册"==t.msg&&alert("改手机号还未注册，请注册"),console.log(t)}))}}},l=a,u=(s("52ff"),s("2877")),n=Object(u["a"])(l,r,i,!1,null,"05f77ad6",null);e["a"]=n.exports}}]);
//# sourceMappingURL=chunk-74e5efc1.16218109.js.map