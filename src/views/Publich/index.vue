<template>
  <div class="publich-container">
    <TopNav title="发布房源" />
    <!--  -->
    <div class="content">
      <van-cell-group>
        <van-field label="房源信息" disabled />
        <van-field
          v-model="this.body.title"
          label="小区名称"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="this.body.price"
          label="租                    金"
          placeholder="请输入租金/月"
        />
        <van-field
          v-model="this.body.size"
          label="建筑面积"
          placeholder="请输入建筑面积"
        />
        <van-field v-model="this.body.roomType" label="户       型" />
        <van-field v-model="this.body.floor" label="所在楼层" />
        <van-field v-model="this.body.oriented" label="朝       向" />
        <van-field label="房屋标题" disabled />
        <van-field
          v-model="this.body.title"
          placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
        />
        <van-field
          v-model="this.body.houseImg"
          label="房屋图像"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="this.body.supporting"
          label="房屋配置"
          placeholder="请输入用户名"
        />
        <van-field label="房屋描述" disabled />
        <van-field
          v-model="this.body.description"
          placeholder="请输入房屋描述信息"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { publishHouses } from '@/api/publich'
export default {
  name: 'PublichIndex',
  created () { },
  data () {
    return {
      body: {
        title: '整租 · 豪华小区 精装修出租 小区环境幽静',
        description: '【装修描述】 装修简洁，家电配齐，通风采光效果良好，格局方正。',
        houseImg: 'img1|im2|img3',
        oriented: 'ORIEN|caa6f80b-b764-c2df',
        supporting: '空调|洗衣机',
        price: '1234',
        roomType: 'ROOM|ce2a5daa-811d-2f49',
        size: '123',
        floor: 'FLOOR|1',
        community: 'AREA|93cbbe43-741d-de54'
      }
    }
  },
  methods: {
    async publishHouses () {
      const res = await publishHouses(this.body)
      console.log(res)
    }
  },
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
