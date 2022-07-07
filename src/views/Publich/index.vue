<template>
  <div class="publich-container">
    <TopNav title="发布房源" />
    <div class="content">
      <van-cell-group>
        <van-field label="房源信息" disabled />
        <van-field
          v-model="value"
          label="小区名称"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="value"
          label="租                    金"
          placeholder="请输入租金/月"
        />
        <van-field
          v-model="value"
          label="建筑面积"
          placeholder="请输入建筑面积"
        />
        <van-field v-model="value" label="户       型" />
        <van-field v-model="value" label="所在楼层" />
        <van-field v-model="value" label="朝       向" />
        <van-field label="房屋标题" disabled />
        <van-field
          v-model="value"
          placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
        />
        <van-field
          v-model="value"
          label="房屋图像"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="value"
          label="房屋配置"
          placeholder="请输入用户名"
        />
        <van-field label="房屋描述" disabled />
        <van-field v-model="value" placeholder="请输入房屋描述信息" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublichIndex',
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.content {
  padding-top: 45px;
}
</style>
