<template>
  <div class="login-wrapper" transition="loginslide">
    <div class="login-header"></div>
    <div class="login-body">
      <div class="login-title">
        简单聊天
      </div>
      <div class="user-name">
        <label>手机号：</label>
        <input type="text" v-model="mobile" placeholder="13802880001">
      </div>
      <div class="wechat">
        <label>密 码：</label>
        <input type="text" v-model="password" placeholder="tester_a">
      </div>
      <div class="login-btn-wrap">
        <span class="login-btn" @click="login">登录</span>
      </div>
      <div class="foot">
        <span>@<a href="http://www.revan.me" target="_blank">个人博客</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import CHAT from './../api/client'
export default {
  data () {
    return {
      mobile: "13802880001",
      password: 'tester_a',
      state:this.$store.state,
    }
  },
  mounted () {

  },
  methods: {
    login () {
      if (this.mobile==""){
        alert('手机号不为空！')
        return false
      }
      if (this.password=="") {
        alert('密码不为空！')
        return false
      }
      let _para = {
        mobile:this.mobile,
        password:this.password
      }
      this.axios({
        method:"POST",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        url:'/v1/origin/login/validate',
        data:JSON.stringify(_para)
      }).then((e)=>{
       if(e.data.header.resultCode===1000){
         //保存登录uid
         this.$store.state.uid = "5ffe7952d3644ae5bb39a4db94726b34";
         localStorage.setItem("uid","5ffe7952d3644ae5bb39a4db94726b34");
         CHAT.login(this.$store.state.uid)
         this.$router.push('/wechat');
       }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login-wrapper {
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .login-header{
    width: 50%;
    margin: 100px auto 0 auto;
    height: 30%;
    max-height: 300px;
    background: url(/static/images/login-header.jpg);
  }
  .login-body {
    width: 50%;
    margin: 0 auto;
    .login-title {
      height: 80px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bolder;
      color: #999;
    }
    .user-name, .wechat {
      display: flex;
      height: 40px;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #999;
      border-top: solid 1px rgba(0,0,0,0.05);
      lable {
        color: #999;
      }
      input {
        box-sizing: border-box;
        height: 25px;
        border: none;
        outline: none;
        padding: 5px;
        color: #666;
        background-color: rgba(0,0,0,0.02);
      }
    }
    .login-btn-wrap {
      display: flex;
      height: 80px;
      align-items: center;
      font-size: 16px;
      color: #999;
      .login-btn {
        background-color: #3CAF36;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 40px;
        margin: 10px auto;
        color: #fff;
        font-weight: bolder;
      }
    }
  }
  .foot {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 13px;
    color: #999;
    span {
      display: inline-block;
    }
    span:first-child {
      font-size: 15px;
    }
  }
  a {
    color: #999;
  }
}
/* 必需 */
.loginslide-transition {
  transition: all .3s ease;
  transform: translate(100%, 0);
}

/* .loginslide-enter 定义进入的开始状态 */
/* .loginslide-leave 定义离开的结束状态 */
.loginslide-leave, .loginslide-enter {
  transform: translate(0%, 0);
}
</style>
