<script setup>
import {
  computed,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
} from 'vue';

import qrcode from 'qrcode';
import {
  useRoute,
  useRouter,
} from 'vue-router';

import Counter from '../../components/counter.vue';
import StatusBar from '../../components/statusBar.vue';

const { proxy } = getCurrentInstance();
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
const route = useRoute();
// 详情页数据
const detailData = reactive({});
onMounted(async () => {
  const { data } = await proxy.$api.orderDetail({ oid: route.query.oid });
  
  Object.assign(detailData, data.data);
  console.log(data.data);
  
    qrcode.toDataURL(data.data.code_url).then((url) => {
    showCode.value = false;
    codeImg.value = url;
  });
});

const stateMap = {
  '待支付': 10,
  '带服务': 20,
  '已完成': 30,
  '已取消': 40,
};
// 数据的组装
// 订单 详情
const makeInfo={
  service_name:'预约服务',
  hospital_name:'就诊医院',
  starttime:'期望就诊时间',
  'client.name':'就诊人',
  receiveAddress:'就诊地址',
  demand:'其他需求'

}

// 订单需求
const orderInfo={
  tel:'就诊人电话',
  order_start_time:'下单时间',
  peice:'应付金额',
  out_trade_no:'订单编号'
}


const formatData = (key) => {
  if (key.indexOf(".") === -1) {
    if (key === "order_start_time") {
      return formatTimestamp(detailData[key]);
    }
    return detailData[key];
  }
  let arr = key.split(".").reduce((o, p) => {
    return (o || {})[p];
  }, detailData);
  return arr;
}
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份是从0开始的，所以需要+1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
// 计算倒计时
const second = computed(() => {
  return detailData.order_start_time
    ? detailData.order_start_time + 7200000 - Date.now()
    : 0;
});
const showCode=ref(false)
const codeImg=ref('')

const closeCode=() => {
  router.push('/detail')
  showCode.value=false

}

</script>
<template>
  <div class="container">
    <div class="header">
      <van-icon @click="goBack" name="arrow-left" class="header-left" size="30" />
      订单详情
    </div>
    <StatusBar :item="stateMap[detailData.trade_state]" />
    <div class="tips">
      <div class="dzf" v-if="detailData.trade_state === '待支付'">
        <div class="text1">订单待支付</div>
        <div class="text2">
          请在<Counter :second="second" /> 内完成支付，超时订单自动取消
        </div>
        <div class="text3">
          <van-button @click="showCode=true" type="success">立即支付(0.5元)</van-button>
        </div>
      </div>
      <div class="dzf" v-if="detailData.trade_state === '待服务'">
        <div >正在为您安排服务专员…………</div>
        <div>请手机保持畅通，稍后将有服务专员与您联系</div>

      </div>
      <div class="dzf" v-if="detailData.trade_state === '已完成'">
        <div >服务已完成</div>
        <div>感谢您的使用，如有售后问请联系客服</div>

      </div>
      <div class="dzf" v-if="detailData.trade_state === '已取消'">
        <div >订单已取消</div>
        <div>期待下次为您服务，如需帮助可咨询客服</div>

      </div>
    </div>
    <can-cell-group class="card">
      <div class="header-text">预约信息</div>
     <van-cell v-for="(item,key) in makeInfo" :key="key":title="item" :value="formatData(key)" /> 
    </can-cell-group>
    <can-cell-group class="card">
      <div class="header-text">订单信息</div>
     <van-cell v-for="(item,key) in orderInfo" :key="key":title="item" :value="formatData(key)" /> 
    </can-cell-group>

       <!-- 支付二维码弹窗 -->
       <van-dialog :show-confirm-button="false " v-model:show="showCode"  >
      <van-icon name="cross" class="close" @click="closeCode" />
      <div>微信支付</div>
      <van-image width="150" height="150" :src="codeImg"></van-image>
      <div>请使用本人微信扫描二维码</div>
    </van-dialog>
  </div>
</template>
<style scoped lang="less">
.container {
  background-color: #f0f0f0;
  height: 100vh;
}
.header {
  background-color: #fff;
  line-height: 40px;
  text-align: center;
  .header-left {
    float: left;
  }
}
.card {
  margin: 15px 0;
  padding: 10px;
  .header-text {
    padding-left: 5px;
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
    border-left: 4px solid red;
  }
}
.dzf {
  padding: 20px;
  .text1 {
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    color: #666;
  }
  .text2 {
    font-size: 14px;
    color: #666;
  }
  .text3 {
    text-align: center;
    .van-button {
      margin-top: 10px;
      margin-left: 10px;
      width: 80%;
      font-weight: bold;
    }
  }
}
::v-deep(.van-dialog__content) {
  text-align: center;
  padding: 20px;
  .close {
    position: absolute;
    left: 20px;
  }
}
</style>
