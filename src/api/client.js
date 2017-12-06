import io from 'socket.io-client'
import store from '../vuex/store'
import axios from 'axios'
import { create } from 'domain';
const Ws = {
  userId: null,
  socket: null,
  sessions:[],
  // 建立连接以及监听
  init() {
    this.socket = io.connect('http://192.168.72.115:2120')
    //心跳包，30s左右无数据浏览器会断开连接Heartbeat
    setInterval(() => {
      this.socket.emit('heartbeat', 1)
    }, 10000)

    // 监听新用户登录
    this.socket.on('connect',  ()=> {
      this.socket.emit('login', (this.userId ? this.userId : localStorage.getItem("uid")));
    });

    // 后端推送来消息时
    this.socket.on('new_msg',  (message)=> {
      
      var result = message.replace(new RegExp('&quot;', 'g'), '"')
      var object = JSON.parse(result);
      if (object.channelId != '5c3d3c7c8b1c421b92252bb687af35a9') {
        //此处可以增加对于其他频道消息的计数
        return;
      }
      ///todo:后续可以增加推与pushType判断，如果是评论、取消评论、点赞、取消点赞等需要更新已有的message数据
      axios.get(`v1/origin/rpc/msg/one?messageId=${object.messageId}`).then((e)=>{
        if(e.status=== 200){
          let body = e.data.body;
          store.state.sessions.push(body);
        }
      }).catch((e)=>{ })
    });
  },
  login(uid) {
    this.userId = uid;
  }
}

export default Ws