<template>
  <!-- //⬆⬆⬆⬆⬆ -->
  <div class="find-container">
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
    <van-dropdown-menu active-color="#21b97a" z-index>
      <!-- //3 ⬇⬇⬇⬇⬇ 区域  ⬇⬇⬇⬇⬇-->
      <van-dropdown-item title="区域" ref="item1">
        <template slot="default">
          <van-picker
            show-toolbar
            value-key="label"
            toolbar-position="bottom"
            :columns="areacolumns"
            :default-index="0"
            @confirm="onConfirm1"
            @cancel="$refs.item1.toggle()"
          />
        </template>
      </van-dropdown-item>
      <!-- //3 ⬆⬆⬆⬆⬆ 区域 ⬆⬆⬆⬆⬆ -->
      <!-- //4 ⬇⬇⬇⬇⬇ 方式  ⬇⬇⬇⬇⬇-->
      <van-dropdown-item title="方式" ref="item2">
        <template slot="default">
          <van-picker
            show-toolbar
            value-key="label"
            toolbar-position="bottom"
            :columns="rentTypecolumns"
            :default-index="0"
            @confirm="onConfirm2"
            @cancel="$refs.item2.toggle()"
          />
        </template>
      </van-dropdown-item>
      <!-- //4 ⬆⬆⬆⬆⬆ 方式 ⬆⬆⬆⬆⬆ -->
      <!-- //5 ⬇⬇⬇⬇⬇ 租金  ⬇⬇⬇⬇⬇-->
      <van-dropdown-item title="租金" ref="item3">
        <template slot="default">
          <van-picker
            show-toolbar
            value-key="label"
            toolbar-position="bottom"
            :columns="pricecolumns"
            @confirm="onConfirm3"
            @cancel="$refs.item3.toggle()"
            :default-index="0"
          />
        </template>
      </van-dropdown-item>
      <!-- //5 ⬆⬆⬆⬆⬆ 租金 ⬆⬆⬆⬆⬆ -->
      <!-- //6 ⬇⬇⬇⬇⬇ 筛选  ⬇⬇⬇⬇⬇-->
      <van-dropdown-item title="筛选" @open="isfilerShow = true" class="btn">
        <template slot="default">
          <van-popup
            class="ok"
            v-model="isfilerShow"
            position="right"
            :style="{ height: '100%', width: '80%' }"
          >
            <!-- // 7⬇⬇⬇⬇⬇⬇ 户型 ⬇⬇⬇⬇⬇⬇ -->
            <div class="mid">
              <p>户型</p>
              <div>
                <!-- 复选框组合 -->
                <van-checkbox-group
                  v-model="roomTypecolumns"
                  direction="horizontal"
                >
                  <!-- 选择框 -->
                  <van-checkbox
                    :name="item.value"
                    v-for="(item, index) in this.roomTypecolumns"
                    :key="index"
                    class="btn"
                  >
                    <template #icon="props">
                      <van-button :type="props.checked ? 'primary' : 'default'">
                        {{ item.label }}
                      </van-button>
                    </template>
                  </van-checkbox>
                </van-checkbox-group>
              </div>
            </div>
            <!-- 朝向 -->
            <!-- // 7⬇⬇⬇⬇⬇⬇ 朝向 ⬇⬇⬇⬇⬇⬇ -->
            <div class="mid">
              <p>朝向</p>
              <div>
                <!-- 复选框组合 -->
                <van-checkbox-group v-model="oriented" direction="horizontal">
                  <!-- 选择框 -->
                  <van-checkbox
                    :name="item.value"
                    v-for="(item, index) in this.oriented"
                    :key="index"
                    class="btn"
                  >
                    <template #icon="props">
                      <van-button :type="props.checked ? 'primary' : 'default'">
                        {{ item.label }}
                      </van-button>
                    </template>
                  </van-checkbox>
                </van-checkbox-group>
              </div>
            </div>
            <!-- 楼层 -->
            <!-- // 7⬇⬇⬇⬇⬇⬇ 楼层 ⬇⬇⬇⬇⬇⬇ -->
            <div class="mid">
              <p>楼层</p>
              <div>
                <!-- 复选框组合 -->
                <van-checkbox-group v-model="floor" direction="horizontal">
                  <!-- 选择框 -->
                  <van-checkbox
                    :name="item.value"
                    v-for="(item, index) in this.floor"
                    :key="index"
                    class="btn"
                  >
                    <template #icon="props">
                      <van-button :type="props.checked ? 'primary' : 'default'">
                        {{ item.label }}
                      </van-button>
                    </template>
                  </van-checkbox>
                </van-checkbox-group>
              </div>
            </div>
            <!-- 房屋亮点 -->
            <!-- // 7⬇⬇⬇⬇⬇⬇ 房屋亮点 ⬇⬇⬇⬇⬇⬇ -->
            <div class="mid">
              <p>房屋亮点</p>
              <div>
                <!-- 复选框组合 -->
                <van-checkbox-group
                  v-model="characteristic"
                  direction="horizontal"
                >
                  <!-- 选择框 -->
                  <van-checkbox
                    :name="item.value"
                    v-for="(item, index) in this.characteristic"
                    :key="index"
                    class="btn"
                  >
                    <template #icon="props">
                      <van-button :type="props.checked ? 'primary' : 'default'">
                        {{ item.label }}
                      </van-button>
                    </template>
                  </van-checkbox>
                </van-checkbox-group>
              </div>
            </div>
          </van-popup>
        </template>
      </van-dropdown-item>
      <!-- //6 ⬆⬆⬆⬆⬆ 筛选 ⬆⬆⬆⬆⬆ -->
    </van-dropdown-menu>
    <!--//2 ⬆⬆⬆⬆⬆  下拉菜单 ⬆⬆⬆⬆⬆ -->

    <van-cell-group>
      <van-cell v-for="(item, index) in houseList" :key="index">
        <div slot="icon">
          <img
            class="img"
            :src="'http://liufusong.top:8080' + item.houseImg"
            @click="GoItem(item.houseCode)"
          />
        </div>
        <div class="text">
          <div slot="title">{{ item.title }}</div>
          <div slot="label" class="tagList">
            <p class="desc">{{ item.desc }}</p>
            <div v-for="(tag, index) in item.tags" :key="index" class="tag">
              {{ tag }}
            </div>
            <p class="price">
              <span class="priceNum">{{ item.price }}</span> 元/月
            </p>
          </div>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import areacolumns from '@/utils/AreaColumns'
import { getHousesCondition, getHouseInfo } from '@/api/find'
export default {
  name: 'videoIndex',
  created () {
    this.getHousesCondition()// 获取全部数据
    this.getHouseInfo()// 列表
    console.log(this.findCityInfo)
  },
  data () {
    return {
      local_place: this.$store.state.findCity.name,
      local_id: this.$store.state.findCity.id,
      search_value: '', // 搜索框内容
      // 下拉裤
      // 2 ⬇⬇⬇⬇⬇⬇ api接收的值 ⬇⬇⬇⬇⬇⬇
      areacolumns: [], // 3 区域列表
      waycolumns: [], // 4 方式列表
      pricecolumns: [], // 5 租金列表
      characteristic: [], // 6 房屋亮点
      floor: [], // 楼层
      oriented: [], // 朝向
      rentTypecolumns: [], // 方式  合租
      roomTypecolumns: [], // 几室
      // 2 ⬆⬆⬆⬆⬆⬆ api接收的值 ⬆⬆⬆⬆⬆⬆

      isShowArea: false,
      isfilerShow: false,

      // 4 ⬇⬇⬇⬇⬇⬇ 用户选的值 ⬇⬇⬇⬇⬇⬇
      findCityInfo: {
        cityId: this.$store.state.findCity.id, // 地区的id/
        area: '', // 地区 // 2.1 区域列表
        subway: '', // 地铁
        rentType: '', // 整租
        price: '', // 价格
        more: '', // 复合查询
        roomType: '', // 房屋类型
        oriented: '', // 朝向
        characteristic: '', // 标签
        floor: '', // 楼层
        start: '1', // 开始项
        end: '20'// 结束项
      },
      // 4 ⬆⬆⬆⬆⬆⬆ 用户选的值 ⬆⬆⬆⬆⬆⬆
      houseList: []
    }
  },
  methods: {
    GoItem (id) {
      this.$store.commit('setItemId', id)
      this.$router.push('/item')
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
    // 区域 确定键
    onConfirm1 (value, index) {
    },

    // 方式 确定键
    onConfirm2 (value, index) {
      // 传递 合租 还说不合租
      // this.findCityInfo.rentType = this.rentTypecolumns[index].value
    },

    // 租金 确定键
    onConfirm3 (value, index) {
      // this.findCityInfo.price = this.pricecolumns[index].value
    },
    // 筛选 确定键
    onConfirm4 (value, index) {
    },
    ok () {
      console.log(123)
    },
    // 得到房子的资讯
    async getHousesCondition () {
      try {
        const res = await getHousesCondition(this.$store.state.findCity.id)// 获取数据
        console.log('tiaojian', res)
        const area = res.data.body.area// 区域
        const subway = res.data.body.subway// 地铁
        this.characteristic = res.data.body.characteristic// 特点
        this.floor = res.data.body.floor// 楼层
        this.oriented = res.data.body.oriented// 朝向
        this.pricecolumns = res.data.body.price// 价格
        this.rentTypecolumns = res.data.body.rentType// 不限整租合租
        this.roomTypecolumns = res.data.body.roomType// 几室
        console.log('区域', area)
        console.log('地铁', subway)
        console.log('地铁', subway)
        // 2.1————————————区域联机选择器—————————————————
        this.areacolumns = areacolumns(area, subway)
        // 2。1————————————区域联机选择器—————————————————
      } catch (error) {
        console.log(error)
      }
    }

  },
  computed: {

  },
  watch: {

  },
  filters: {},
  components: {},
  mounted () {

  }
}
</script>

<style scoped lang='less'>
.find-container {
  .van-search,
  .van-search--show-action {
    background-color: #21b97a;
  }
}
// 筛选每个户型下面线
.mid > div {
  .btn {
    display: block;
    height: 60px;
    padding: 10px;
  }
}
.img {
  width: 106px;
  height: 80px;
}
.title {
  font-size: 15px;
  color: #394043;
  font-weight: 700;
}
.tagList {
  .desc {
    font-size: 12px;
    color: #afb2b3;
  }
  .tag {
    color: #39becd;
    background: #e1f5f8;
    padding: 0 5px;
    font-size: 12px;
    width: 50px;
  }
}
.text {
  padding-left: 12px;
}
.price {
  font-size: 12px;
  color: #fa5741;
  .priceNum {
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
