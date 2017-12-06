<template>
  <div class="message" id="message"  v-scroll-bottom="sessions" v-if="sessions.length>0">
    <ul>
      <li v-for="item in sessions">
       <p class="time">
          <span>{{item.createTime | time}}</span>
        </p>
        <div class="main" :class="item.channelId==channelId?'self':''">
          <img :src="item.createAvatar" class="avatar" width="30" height="30">
          <div class="text">{{ item.messageContent }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  directives: {
    // 发送消息后滚到底部
   'scroll-bottom'() {
      //document.getElementById('message').scrollTop = document.getElementById('message').scrollHeight;
      setTimeout(()=>{
        let msgDom = document.getElementById('message');
        if(!msgDom) return;
        msgDom.scrollTop = msgDom.scrollHeight;
      })
    }
  },
  data(){
    return{
      channelId: "5c3d3c7c8b1c421b92252bb687af35a9",
      sessions:[]
    }
  },
  filters: {
    // 将时间过滤为hour:minutes
    time (date) {
      if (typeof date === 'string') {
        date = new Date(date)
      }
      return (date.getHours()<10?'0'+date.getHours():date.getHours()) + ':' + (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())
    }
  },
  methods:{
    getSessions(channelId){
      if(!channelId) return;
      this.axios.get(`/v1/origin/rpc/msg/list?channelId=${channelId}`).then((e)=>{
        let _list = e.data.body;
           this.sessions = this.$store.state.sessions = _list;
      }).catch((e)=>{ })
    },
  },
  mounted(){
    this.getSessions(this.$store.state.channelId?this.$store.state.channelId:localStorage.getItem("uid"))
  }
}
</script>

<style lang="less" scoped>
.message {
  padding: 10px 15px;
  overflow-y: auto;

  li {
    margin-bottom: 15px;
  }
  .time {
    margin: 7px 0;
    text-align: center;

    > span {
      display: inline-block;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
  }
  .avatar {
    float: left;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }
  .text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: ~'calc(100% - 40px)';
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;

    &:before {
      content: " ";
      position: absolute;
      top: 9px;
      right: 100%;
      border: 6px solid transparent;
      border-right-color: #fafafa;
    }
  }

  .self {
    text-align: right;

    .avatar {
      float: right;
      margin: 0 0 0 10px;
    }
    .text {
      background-color: #b2e281;

      &:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #b2e281;
      }
    }
  }
}
</style>