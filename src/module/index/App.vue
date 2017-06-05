<template>
  <div id="app">
    <lc_header></lc_header>
    <div class="lc_slider">
      <a :href="banner_list.href_url">
        <img :src="banner_list.img" alt="">
      </a>
    </div>
    <div class="lc_main_container">
      <!--猜你喜欢-->
      <div class="lc_container">
        <p class="lc_title">
          <a href="javascript:void (0)">猜你喜欢</a>
        </p>
        <ul class="clear">
          <li v-for="(item,index) in like_list" v-if="index<4">
            <a :href="url.video_detail">
              <div class="lc_img">
                <!--<i></i>-->
                <img :src="item.video_imgs" alt="">
              </div>
              <div class="lc_detail">
                <p>{{item.video_title}}</p>
                <div class="clear">
                  <span class="lc_price lf">￥{{item.video_price}}</span>
                  <div class="lc_talk rt">
                    <span><i></i>{{item.video_msg}}</span>
                  </div>
                  <div class="lc_like rt">
                    <span><i></i>{{item.video_click}}万次</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li class="lc_notice">
            <p><i></i>系统公告</p>
            <ul>
              <li v-for="item in notice_list">
                <a :href="url.news">
                  {{item.index_msg}}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <lc_footer></lc_footer>
  </div>
</template>

<script>
  import mock from 'common/js/mock'
  import utils from 'common/js/utils'
  import $ from 'jquery'
  import lc_header from 'components/header/header'
  import lc_footer from 'components/footer/footer'
  export default {
    data(){
      return{
        url:utils.url,
        banner_list:[],
        like_list:[],
      }
    },
    components: {
      lc_header,
      lc_footer
    },
    created() {
      var $this=this;
      $.getJSON('http://stone.com/index/banner',function (list) {
        $this.banner_list=list.data[0];
        console.log($this.banner_list)
      });
      $.getJSON('http://stone.com/index/guess',function (list) {
        $this.like_list=list.data;
      });
    }
  }
</script>

<style lang="less" type="text/less">
  .lc_slider{
    width: 100%;
    min-width: 1200px;
    margin-bottom: 10px;
    img{
      width: 100%;
    }
  }
</style>
