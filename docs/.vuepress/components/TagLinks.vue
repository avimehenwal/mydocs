<!-- .vuepress/components/TagLinks.vue -->
<template lang="html">
  <div>
    <router-link
      style="margin-right:3px;"
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}"
    >
      <Badge type="tip" :text="tag"/>
    </router-link>
    <div style="margin-top:3px;">
      <Badge type="warning" :text="$page.lastUpdated"/>
    </div>
  </div>
</template>