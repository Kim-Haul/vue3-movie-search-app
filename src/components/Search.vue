<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text" 
      placeholder="검색하고자 하는 영화를 입력하세요." 
      @keyup.enter="apply" />
      
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>

    <button
      class="btn btn-dark"
      @click="apply">
      검색
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode'] 
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear()
            for (let i = thisYear; i >= 1998; i -= 1) {
              years.push(i)
            }
            return years
          })()
        }
      ]
    }
  },
  methods: {
    async apply() {
      // Search movies..
      this.$store.dispatch('movie/searchMovies', {
        title: this.type,
        type: this.type, 
        number: this.number,
        year: this.year
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:list-child {
      margin-right: 0px;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
        &:list-child {
      margin-right: 0px;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
}
</style>