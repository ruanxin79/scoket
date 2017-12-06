<template>
  <div id="wechat">
    <div class="sidebar">
      <card></card>
      <list></list>
    </div>
    <div class="main">
      <message></message>
      <t-text></t-text>
    </div>
  </div>
</template>

<script>
import Card from './card'
import List from './list'
import tText from './text'
import Message from './message'
import CHAT from '../../api/client'
import { actions } from '../../vuex/store'

export default {
  components: {
    Card,
    List,
    tText,
    Message
  },
  data(){
    return {
      //sessions:this.$store.state.sessions,
    }
  },
  methods:{
    
  },
 mounted () {
   
    CHAT.init();
 }
}
</script>

<style lang="less" scoped>
#wechat {
  margin: 20px auto;
  width: 800px;
  height: 600px;

  overflow: hidden;
  border-radius: 3px;

  .sidebar, .main {
    height: 100%;
  }
  .sidebar {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
  }
  .main {
    position: relative;
    overflow: hidden;
    background-color: #eee;
  }
  .text {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .message {
    height: ~'calc(100% - 160px)';
  }
}
</style>
