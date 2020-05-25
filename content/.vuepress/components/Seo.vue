<script>
  export default {
    created () {
      if (typeof this.$ssrContext !== 'undefined') {
        this.$ssrContext.userHeadTags+=`<link rel='canonical' href='${this.$page.path}'/>`;
        if (/^\/ru/.test(this.$page.path)) this.$ssrContext.userHeadTags+=`<link rel='manifest' href='/manifest.ru.json'/>`;
        else this.$ssrContext.userHeadTags+=`<link rel='manifest' href='/manifest.json'/>`;
      }
    }
  }
</script>