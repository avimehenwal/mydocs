<template>
<div>
  <!-- Top Panel / Banner -->
  <div class="w3-panel w3-display-container w3-animate-top">
    <span onclick="this.parentElement.style.display='none'"
    class="w3-button w3-large w3-display-topright">&times;</span>
    <h3>
      <i class="fa fa-search"></i>
      {{ currentPath }}
    </h3>
    <p>
      Number of Articles in this section :
      <span class="w3-badge w3-green">{{ pageCount }}</span>
    </p>
  </div>

  <!-- Card Data -->
  <div class="w3-card w3-hover-shadow w3-animate-bottom" v-for="page in pages">
    <router-link  :to="page.path">
      <header class="w3-container">
        <h1> {{ page.title }} </h1>
      </header>
    </router-link>

    <!-- Possibly add an image -->
    <div class="w3-container">
      <p>
        <img src="/logo.png" alt="Avatar" class="w3-right" style="width:60px">
      </p>
      <p> {{ page.frontmatter.description }}
        <br>
        <router-link
          :to="{ path: `/tags.html#${tag}`}"
        >
          <span v-for="tag in page.frontmatter.tags" style="margin-right:5px;">
            <Badge type="warning" :text="tag"/>
          </span>
        </router-link>
      </p>
      <!-- <p> {{ page }} </p> -->
    </div>      <!-- End Card-conteiner -->
  </div> <!-- End Card -->
</div>
</template>

<script>
export default {
  data() {
    return {
      pages: [],
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.path !=this.currentPath && page.path.includes(this.currentPath)) {
        this.pages.push(page)
      }
    })
  },
  computed: {
    pageCount () {
      return this.pages.length
    },
    currentPath () {
      return this.$page.path
    }
  }
}
</script>

<style scoped>
</style>
