<template>
  <div>
    <!-- //1 ⬇⬇⬇⬇⬇ 搜索框 ⬇⬇⬇⬇⬇-->
    <van-search
      v-model="search_value"
      placeholder="请输入小区或地址"
      show-action
    >
      <!-- 左侧箭头 -->
      <i slot="left"> <van-icon name="arrow-left" @click="$router.back()" /></i>
      <!-- 右侧地图 -->
      <i slot="action"><van-icon name="aim" /> </i>
      <!-- 地址 -->
      <i slot="label" @click="$router.push('/citylist')"
        >{{ this.$store.state.findCity.cityname }}
        <!-- 小箭头图标 -->
        <svg
          t="1656938320013"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2866"
          width="12"
          height="12"
        >
          <path
            d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z"
            p-id="2867"
            fill="#8a8a8a"
          ></path></svg
      ></i>
    </van-search>
    <!-- //1 ⬆⬆⬆⬆⬆ 搜索框 ⬆⬆⬆⬆⬆ -->
    <!--//2 ⬇⬇⬇⬇⬇ 下拉菜单 ⬇⬇⬇⬇⬇-->
    <van-sticky>
      <van-dropdown-menu>
        <!-- //3 ⬇⬇⬇⬇⬇ 区域  ⬇⬇⬇⬇⬇-->
        <van-dropdown-item title="区域" ref="item1">
          <van-picker title="标题" :columns="columns" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block @click="$refs.item1.toggle()">取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block @click="onConfirm1"
                >确定</van-button
              >
            </van-col>
          </van-row>
        </van-dropdown-item>
        <!-- //3 ⬆⬆⬆⬆⬆ 区域 ⬆⬆⬆⬆⬆ -->
        <!-- //4 ⬇⬇⬇⬇⬇ 方式  ⬇⬇⬇⬇⬇-->
        <van-dropdown-item title="方式" ref="item2">
          <van-picker
            title="标题"
            :columns="columns1"
            value-key="label"
            @confirm="onConfirm"
          />
          <van-row>
            <van-col span="8">
              <van-button block @click="$refs.item2.toggle()">取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block @click="onConfirm2"
                >确定</van-button
              >
            </van-col>
          </van-row>
        </van-dropdown-item>
        <!-- //4 ⬆⬆⬆⬆⬆ 方式 ⬆⬆⬆⬆⬆ -->
        <!-- //5 ⬇⬇⬇⬇⬇ 租金  ⬇⬇⬇⬇⬇-->
        <van-dropdown-item title="租金" ref="item3">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block @click="$refs.item3.toggle()">取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block @click="onConfirm3"
                >确定</van-button
              >
            </van-col>
          </van-row>
        </van-dropdown-item>
        <!-- //5 ⬆⬆⬆⬆⬆ 租金 ⬆⬆⬆⬆⬆ -->
        <!-- //6 ⬇⬇⬇⬇⬇ 筛选 按钮 ⬇⬇⬇⬇⬇-->
        <van-dropdown-item title="筛选" @open="flag = true">
        </van-dropdown-item>
      </van-dropdown-menu>
      <!-- //6 ⬆⬆⬆⬆⬆ 筛选 按钮⬆⬆⬆⬆⬆ -->
    </van-sticky>
    <!--//2 ⬆⬆⬆⬆⬆  下拉菜单 ⬆⬆⬆⬆⬆ -->
    <!-- //7 ⬇⬇⬇⬇⬇  筛选弹出框 ⬇⬇⬇⬇⬇-->
    <van-popup
      position="right"
      style="height: 100%; width: 70%"
      v-model="flag"
      @click-overlay="overlay"
    >
      <div>
        <span>户型</span>
        <div>
          <van-button
            @click="btn1(btn.value, index)"
            v-for="(btn, index) in columns3.roomType"
            :type="
              findCityInfo.roomType.indexOf(btn.value) >= 0
                ? 'primary'
                : 'default'
            "
            :key="index"
            :value="btn.value"
            v-model="findCityInfo.roomType"
          >
            {{ btn.label }}
          </van-button>
        </div>
      </div>
      <div>
        <span>朝向</span>
        <div>
          <van-button
            @click="btn2(btn.value, index)"
            v-for="(btn, index) in columns3.oriented"
            :type="
              findCityInfo.oriented.indexOf(btn.value) >= 0
                ? 'primary'
                : 'default'
            "
            :key="index"
            :value="btn.value"
            v-model="findCityInfo.oriented"
          >
            {{ btn.label }}
          </van-button>
        </div>
      </div>
      <div>
        <span>楼层</span>
        <div>
          <van-button
            @click="btn3(btn.value, index)"
            v-for="(btn, index) in columns3.floor"
            :type="
              findCityInfo.floor.indexOf(btn.value) >= 0 ? 'primary' : 'default'
            "
            :key="index"
            :value="btn.value"
            v-model="findCityInfo.floor"
          >
            {{ btn.label }}
          </van-button>
        </div>
      </div>
      <div>
        <span>房屋亮点</span>
        <div>
          <van-button
            @click="btn4(btn.value, index)"
            v-for="(btn, index) in columns3.characteristic"
            :type="
              findCityInfo.characteristic.indexOf(btn.value) >= 0
                ? 'primary'
                : 'default'
            "
            :key="index"
            :value="btn.value"
            v-model="findCityInfo.characteristic"
          >
            {{ btn.label }}
          </van-button>
        </div>
      </div>
    </van-popup>
    <!-- //7 ⬆⬆⬆⬆⬆  筛选弹出框 ⬆⬆⬆⬆⬆-->

    <van-card
      v-for="(item, index) in houseList"
      :key="index"
      :tag="item.tags[0]"
      :price="item.price + '元/月'"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
      @click="GoItem(item.houseCode)"
    />
  </div>
</template>

<script>
// getHouseInfo
import { getHousesCondition, getHouseInfo } from '@/api/find'

export default {
  created () {
    this.getHousesCondition()// 获取全部数据
    this.getHouseInfo()// 列表
  },
  data () {
    return {
      // ----------返回数据-------------
      search_value: '',
      columns: [], // 区域
      columns1: '', // 方式
      columns2: [], // 租金
      columns3: [], // 全部
      houseList: [], // 房屋信息列表

      // ---------开关量--------------
      flag: false,
      isroomTypeShow: false,
      // ---------提交数据--------------
      findCityInfo: {
        cityId: this.$store.state.findCity.id, // 地区的id/
        area: '', // 地区 // 2.1 区域列表
        subway: '', // 地铁
        rentType: '', // 整租
        price: '', // 价格
        more: '', // 复合查询
        roomType: [], // 房屋类型
        oriented: [], // 朝向
        characteristic: [], // 标签
        floor: [], // 楼层
        start: '1', // 开始项
        end: '20'// 结束项
      }
    }
  },
  methods: {
    overlay () {
      this.getHousesCondition()
    },
    onConfirm1 (value, index) { // 区域
      this.$refs.item1.toggle(false)
      this.getHouseInfo()// 列表
    },
    onConfirm2 (value, index) { // 方式
      this.findCityInfo.rentType = this.columns1[index]
      console.log(value, index)
      this.$refs.item2.toggle(false)
      this.getHouseInfo()// 列表
    },
    async onConfirm3 (value, index) { // 租金
      this.findCityInfo.rentType = this.columns2[index]
      console.log(value, index)
      this.$refs.item3.toggle(false)
      await this.getHouseInfo()// 列表
    },
    GoItem (id) {
      this.$store.commit('setItemId', id)
      this.$router.push('/item')
      this.getHousesCondition()
    },
    async getHouseInfo () {
      try {
        const res = await getHouseInfo(this.findCityInfo)
        console.log('list', res)
        this.houseList = res.data.body.list
      } catch (err) {
        console.log(err)
      }
    },
    async getHousesCondition () {
      try {
        const res = await getHousesCondition(this.$store.state.findCity.id)// 获取数据
        console.log(res)
        res.data.body.area.children[0].children = [{ label: '' }]
        res.data.body.subway.children[0].children = [{ label: '' }]
        // 区域⬇️
        this.columns = [res.data.body.area, res.data.body.subway]
        // 方式⬇️
        this.columns1 = res.data.body.rentType
        // 租金⬇️
        this.columns2 = res.data.body.price
        this.columns3 = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    btn1 (id) {
      console.log(id)
      const idIndex = this.findCityInfo.roomType.indexOf(id)
      console.log(idIndex)
      if (idIndex >= 0) {
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.findCityInfo.roomType.splice(idIndex, 1)
      } else {
        // 选中该checkbox
        this.findCityInfo.roomType.push(id)
      }
      console.log(this.findCityInfo.roomType)
    },
    btn2 (id) {
      console.log(id)
      const idIndex = this.findCityInfo.oriented.indexOf(id)
      console.log(idIndex)
      if (idIndex >= 0) {
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.findCityInfo.oriented.splice(idIndex, 1)
      } else {
        // 选中该checkbox
        this.findCityInfo.oriented.push(id)
      }
      console.log(this.findCityInfo.oriented)
    },
    btn3 (id) {
      console.log(id)
      const idIndex = this.findCityInfo.floor.indexOf(id)
      console.log(idIndex)
      if (idIndex >= 0) {
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.findCityInfo.floor.splice(idIndex, 1)
      } else {
        // 选中该checkbox
        this.findCityInfo.floor.push(id)
      }
      console.log(this.findCityInfo.floor)
    },
    btn4 (id) {
      console.log(id)
      const idIndex = this.findCityInfo.characteristic.indexOf(id)
      console.log(idIndex)
      if (idIndex >= 0) {
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.findCityInfo.characteristic.splice(idIndex, 1)
      } else {
        // 选中该checkbox
        this.findCityInfo.characteristic.push(id)
      }
      console.log(this.findCityInfo.characteristic)
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
.van-nav-bar {
  background-color: #21b97a;
}
.van-nav-bar__text {
  color: #fff;
}
.van-nav-bar .van-icon {
  color: #fff;
}

.van-search,
.van-search--show-action {
  background-color: #21b97a;
}
</style>
