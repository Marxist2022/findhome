<template>
  <van-dropdown-item :title="title" ref="item">
    <template slot="default">
      <!--//2.1.1区域 联机选择器显示 -->
      <van-picker
        value-key="label"
        show-toolbar
        toolbar-position="bottom"
        :columns="columnsLits"
        @cancel="onCancel1"
        @confirm="onConfirm1"
        cancel
      />
    </template>
  </van-dropdown-item>
</template>

<script>
export default {
  props: {

    title: { // 标题
      type: String,
      require: true
    },
    columnsLits: { // 传入的数据
      type: Array,
      require: true
    },
    pickList: { // 用户选择的数据
      type: Array,
      require: true
    }
  },
  created () { },
  data () {
    return {
      midList: []
    }
  },
  methods: {
    onCancel1 () {
      this.$refs.item.toggle()
    },
    onConfirm1 (value, index) {
      this.$store.commit('setCityInfo')
      console.log(value, index)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
