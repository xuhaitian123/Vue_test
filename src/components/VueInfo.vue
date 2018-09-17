<template>
<div class="info">
  <router-link to="/"><button>返回主页面</button></router-link>
  <p>这是我的自我介绍</p>
  <ul>
    <li>{{name}}</li>
    <li>{{age}}</li>
    <li>{{sex}}</li>
  </ul>
  <p class="comment">{{comment}}</p>
  <template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username">
  </template>
  <template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address">c1
  </template>
  <template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username-input">
  </template>
  <template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address" key="email-input">
  </template>
  <ul id="v-for-object" class="demo">
    <li v-for="(value,key,index) in object">
    {{index}}- {{key}}: {{ value }}
    </li>
  </ul>
  <div>
    <span v-for="n in 100">{{ n }} </span>
  </div>
  <input v-model="message" placeholder="文本框">
  <p>Message is: {{ message }}</p>
  <span> message is:</span>
  <p style="white-space: pre-line;">{{ message }}</p>
  <br>
  <textarea v-model="message" placeholder="多行文本"></textarea>
  <p>复选框</p>
  <div id='example-3'>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
  <p>单独复选框，布尔值</p>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
  <p>单选按钮</p>
  <div id="example-4">
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
  </div>
  <p>单选下拉菜单</p>
  <div id="example-5">
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
      </div>
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
  <div style="width:30%;height:100px;margin-top: 5%">
  <div class='container'>
    <div class='left'>左边布局</div>
    <div class='main'>
      <div class="table">
        <div class="table-cell">
          中间布局
        </div>
      </div></div>
    <div class='right'>右边布局</div>
  </div>
  </div>
  <div class='container_1'>
    <div class='item'>
      <p>{{name}}</p>
      <p>{{age}}</p>
      <p>{{sex}}</p>
    </div>
    <div class='item'>
      <p>{{name}}</p>
      <p>{{age}}</p>
      <p>{{sex}}</p>
    </div>
    <div class='item'>
      <p>{{name}}</p>
      <p>{{age}}</p>
      <p>{{sex}}</p>
    </div>
    <div class='item'>
      <p>{{name}}</p>
      <p>{{age}}</p>
      <p>{{sex}}</p>
    </div><div class='item'>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <p>{{sex}}</p>
  </div>
    <div class='item'>
      <p>{{name}}</p>
      <p>{{age}}</p>
      <p>{{sex}}</p>
    </div>
  </div>
  <div style="display: flex;flex-direction:row;background-color:#FFB6C1;justify-content: center;color:#ffffff;margin-top: 5%">
    <div style="width: 20%;background-color: darkblue;">1</div>
    <div style="width: 20%;background-color: red">2</div>
    <div style="width: 20%;background-color: darkblue">3</div>
    <div style="width: 20%;background-color: yellow">4</div>
    <div style="width: 20%;background-color: black">5</div>


  </div>
</div>
</template>

<script>
  export default{
  name: 'vue-info',
  data () {
    return {
      name: '许海天',
      age: '23',
      sex: '男',
      Username:'123',
      comment:'vue',
      object:{
        type:'列表渲染 v-for',
        name:'许海天',
        age:'23',
      },
      checkedNames: [],
      picked:'',
      selected:'',
      count:0,
      checked:'',
      message:'',
      loginType:"username",
    }
  }
  }
</script>}
<style scoped>
.info{
  background-color: skyblue;
  height: 1800px;
  font-size: 20px;
}
.container{
  display: flex;
  width: 100%;
  height: 100%;
}
.right,
.left{
  flex-grow: 0;
  flex-shrink:0;
  background-color:blue;
  width: 30%;
}
.table{
  display: table;
  width: 100%;
  height: 100%;
}
.table-cell{
  display: table-cell;
  vertical-align: middle;
}
.main{
  flex-grow:1;
  flex-shrink:0;
  background-color:red;
}
.container_1{
  margin-top: 20px;
  display: flex;
  width: 50%;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid red;
}
.item{
  flex : 0 0 auto;
  width: 30%;
  height: 80px;
  border: 1px solid #e7e7e7;
  margin: 5px 0;
  line-height: 3px;
}
</style>
