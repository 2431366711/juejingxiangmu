<template>
   <router-link :to="'/article/author/'+data.author_id+'/id/'+data.id" class="item">
    <div class="recommendation">
       <div class="left">
        <ul class="top">
        <li class="name">{{data.author.loginname}}</li>
        <li style="color:#eee">|</li>
        <li class="time">{{showtime}}</li>
        <li style="color:#eee">|</li>
        <li class="classifier">{{data.tab}}</li>
        
       </ul>
       <h3>{{data.title}}</h3>
       <p class="content">{{data.title}}</p>
       <ul class="bottom">
        <li>
            <el-icon :size="16" > <View color="#919192"></View> </el-icon>
            <a href="javascript:;">2065</a>
        </li>
        <li>
            <el-icon :size="16" > <Pointer color="#919192" /></el-icon>
            <a href="javascript:;">12</a>
        </li>
        <li>
            <el-icon :size="16"><ChatDotRound color="#919192"/> </el-icon>
            <a href="javascript:;">5</a>
        </li>
       </ul>
       </div> 
       <div class="right">
        <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3791/5070639578~300x300.image" alt="">
       </div>
    </div>
    </router-link>
</template>

<script>
import {computed,ref} from 'vue'
    export default {
        props:{
          data:{
            type:Array,
            default(){
               return []
            }
          }
        },
         
        setup(props){
           let date = new Date(props.data.create_at)
          
           let oldtimer = ref(date.getTime())
           let nowtimer = ref(new Date().getTime())
           let newtimer = ref(nowtimer.value-oldtimer.value)
           
           const time = computed(
               ()=>{
                return newtimer.value /(1000*3600*24)
               }
           )
           let showtime = ref("")
           if(time.value<1){
             showtime = "今天"
           }
           else if(time.value<31){
              showtime = `${time.value.toFixed(0)}天前`
           }
           else if(time.value<365){
            showtime = `${(time.value/30).toFixed(0)}月前`
           }
           else if(time.value>365){
            showtime = `${(time.value/356).toFixed(0)}年前`
           }
           return {
                time,showtime
           }
        }
    }
</script>

<style lang="less" scoped>
   .item {
    text-decoration: none;
    h3{
      color: #000;
    }
   }
   .recommendation{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 10px 10px 20px;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #eeee;
    cursor: pointer;
   }
   .left{
    width: 75%;
  
      .top{
        list-style: none;
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        li:first-child{
            padding-left: 0;
        }
        li{
           
           font-size: 12px;
           color: #919192;
           padding: 2px 5px;
        }
      }
      h3{
         margin-bottom: 12px;
         white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
      }
      p{
       
        color: #919192; 
        margin-bottom: 12px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .bottom{
       
        list-style: none;
        display: flex;
        align-items: center;
        li{
         
         cursor: pointer;
          display: flex;
          align-items: center;
          justify-content:center ;
          margin-right: 20px;
          a{
            margin-left: 3px;
            font-size: 12px;
            text-decoration: none;
            color: #919192;
          }
        }
      }
   }
   .right{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    img{
       margin-top: 15px;
       width: 95px;
       height: 75px;
       border-radius: 4px;
    }
   }
</style>