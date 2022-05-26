<template>
  <header class="container justify-content-end">
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink 
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

 


<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: '홈',
          href: '/'
        },
        {
          name: '상세정보',
          href: '/movie'
        },
        {
          name: 'MadeBy',
          href: '/about'
        },
        {
          name: 'Recommendation',
          href: '/mbti'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  // justify-content: center;
  .logo {
    margin-right: 40px;
  }
}
</style>