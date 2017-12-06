<template>
  <div class="text">
    <textarea placeholder="Enter 发送" v-model="content" @keydown="onKeyup"></textarea>
  </div>
</template>

<script>
import CHAT from '../../api/client'
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    onKeyup (e) {
      if (e.keyCode === 13) {
        let _info = {
            "channelId":this.$store.state.channelId,
            "type": "text",
            "content":this.content,
          }
        // 清空消息输入框
          this.axios({
            url:"/v1/origin/rpc/msg/send",
            method:"POST",
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            data:JSON.stringify(_info)
          }).then((e)=>{ 
            this.content = "";
            CHAT.submit(e.data);
          }).catch((e)=>{  })  
      }
    }
  }
}
</script>

<style lang="less" scoped>
.text {
  height: 160px;
  border-top: solid 1px #ddd;

  textarea {
    padding: 10px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
  }
}
</style>