<template>
  <footer id="lc_footer" :class="is_booln?'footer_bottom':''">
    footer
  </footer>
</template>

<script>
  import utils from 'common/js/utils'
  export default {
    data() {
        return {
          url: utils.url,
          is_booln: false,
          bodyHeight: '',
          height: ''
        }
      },
      components: {

      },
      mounted() {
        const $this = this;
        var resizeHeight = () => {
          const footerHeight = parseInt(document.getElementById('lc_footer').clientHeight);
          $this.bodyHeight = document.body.clientHeight;
          $this.height = window.innerHeight-footerHeight;
          $this.bodyHeight <= $this.height ? $this.is_booln = true : $this.is_booln = false;
        }

        resizeHeight()
        window.onresize = function() {
          resizeHeight();
        }
      },
      watch: {
        height(val) {
          this.bodyHeight <= this.height ? this.is_booln = true : this.is_booln = false;
        }
      }
  }
</script>

<style type="text/less" lang="less">
  .footer_bottom{
    position:fixed;
    bottom:0;
    right:0;
    left:0;
  }
</style>
