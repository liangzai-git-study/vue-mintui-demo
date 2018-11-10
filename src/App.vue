<template>
  <div id="app" class="app-container">
    <!-- Header区域 -->
    <mt-header fixed title="练习·Vue项目">
      <span slot="left" @click="goBack" v-if="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <router-view/>

    <!-- 底部的Tabbar区域 -->
    <!-- 为什么 启用了 滑动插件并导入mui.js 以后，tabbar 就不生效了呢？ -->
    <!-- 因为 mui.js 和 .mui-tab-item 类名有冲突 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-my" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-my" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-my" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-my" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: false // 默认不显示 后退按钮
    };
  },
}
</script>

<style scoped lang="less">


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow: hidden;
.mint-header {
  z-index: 99;
}
}


/*自定义 mui-tab-item-my 类名，解决 tabbar 和 mui.js 之间冲突的问题*/
   .mui-bar-tab .mui-tab-item-my.mui-active {
     color: #007aff;
   }

.mui-bar-tab .mui-tab-item-my {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-my .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-my .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
