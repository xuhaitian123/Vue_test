<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>

    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://www.baidu.com"
          target="_blank"
        >
          {{url}}
        </a>
      </li>
    </ul>
    <p>{{username}}</p>
    <button v-bind:onclick="doSomething()">点击变换文字</button>
    <div class="info">
      <router-link to="/info"><button>去介绍页面</button></router-link>
      <router-link to="/user"><button>去用户信息页面</button></router-link>
    </div>

    <div class="bottom">
      <div v-if="type === 'A'">
        A
      </div>
      <div v-else-if="type === 'B'">
        B
      </div>
      <div v-else-if="type === 'C'">
        C
      </div>
      <div v-else>
        Not A/B/C
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '这是我的第一个vue项目！',
      name: '许海天',
      url: '百度',
      username: 'xuahitian'
    }
  },
methods: {
    ss:function(){
      this.$router.push({path:'info'})
    },
  doSomething()
{
  var new_info =
    {
      msg: '这是我的第2个vue项目！',
      name: '王德宁',
      url: '百度',
      username: 'wangdening'
    };
  this.data = new_info;
  console.log(this.data)
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bottom{
    background-color: goldenrod;
    width: 100%;
    height: 300px;
  }
  .hello{
    background-color: skyblue;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
