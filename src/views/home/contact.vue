<template>
  <div id="contact_us" class="contact_us_container">
    <div class="mask_container" :style="`background-image:url(${CDN_URL}/resource/images/form-bg.webp)`"></div>
    <div class="container_inner">
      <Result
        class="result-box"
        v-show="submitSucess"
        status="success"
        title="Successfully Submit Your Information!"
        sub-title="We will provide you with a dedicated solution right away."
      >
        <template #extra>
          <Button size="large" @click="back" >Input Information Again</Button>
        </template>
      </Result>
      <div class="form-container" v-show="!submitSucess">
        <div class="form-header">
          <div class="form-title">Leave your contact information</div>
          <div class="form-sub-title">We will provide you with a dedicated solution right away</div>
        </div>
        <div class="form-content">
          <Form
            ref="formRef"
            :model="formState"
            :rules="rules"
            :label-col="labelCol"
          >
            <Form.Item name="name" label="Name">
              <Input v-model:value="formState.name" placeholder="your name" size="large" />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input v-model:value="formState.email" placeholder="your email" size="large" />
            </Form.Item>
            <Row :gutter="[10,10]">
              <Col :span="14">
                <Form.Item name="country" label="Country">
                  <Select
                    allowClear
                    placeholder="select your country"
                    v-model:value="formState.country"
                    size="large"
                  >
                    <Select.Option style="width: 100%" :value="item.value" v-for="(item, index) in countries" :key="index">{{ item.label }}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col :span="10">
                <Form.Item name="city" label="City" :label-col="{ style: { width: '50px' } }">
                  <Input v-model:value="formState.city" placeholder="your city" size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="car" label="Interest Car" >
              <Select
                size="large"
                allowClear
                placeholder="select your interest car"
                v-model:value="formState.car"
              >
                <Select.Option style="width: 100%" :value="item.value" v-for="(item, index) in cars" :key="index">{{ item.label }}</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="message" label="Message">
              <TextArea v-model:value="formState.message" placeholder="your message" :rows="6" :maxlength="1000" showCount  size="large" />
            </Form.Item>
            <Button :loading="loading" class="w-full" size="large" type="primary" @click="handleSubmit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@/locales/useI18n';
import { getAppEnvConfig } from '@/utils/env';
import { reactive, ref, nextTick } from 'vue';
import { Input, Form, Row, Col, Select, Button, Result, Spin, message } from 'ant-design-vue';
import { GoogleFormSubmitter } from '@/utils';

const TextArea = Input.TextArea;

const { t } = useI18n();
const { CDN_URL } = getAppEnvConfig();

const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScvyebmXehzl_ZEe1Q_K0oh18NrickuudeUt-htYfehDStn6w/formResponse';

const formRef = ref(null);
const submitSucess = ref(false);
const loading = ref(false);
const countries = [
  {
    label: 'Hungary',
    value: 'Hungary',
  },
  {
    label: 'Greece',
    value: 'Greece',
  },
  {
    label: 'Romania',
    value: 'Romania',
  },
  {
    label: 'Poland',
    value: 'Poland',
  },
  {
    label: 'Others',
    value: 'Others',
  },
]
const cars = [
  {
    label: 'DongFeng E-star V9',
    value: 'DongFeng_V9',
  },
  {
    label: 'DongFeng E-star T',
    value: 'DongFeng_T',
  },
  {
    label: 'DongFeng E-star V5',
    value: 'DongFeng_V5',
  },
  {
    label: 'WULING LINXYS G050',
    value: 'wuling_G050',
  },
  {
    label: 'WULING LINXYS G105',
    value: 'wuling_G105',
  },
  {
    label: 'Others',
    value: 'Others',
  },
];
const rules: Record<string,[]> = {
  name: [
    { required: true, message: 'Please input your name' },
  ],
  email: [
    { required: true, message: 'Please input your email' },
    { 
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
      message: 'Please input a valid email' 
    }
  ],
  country: [
    { required: true, message: 'Please select your country' }
  ],
  city: [
    { required: true, message: 'Please input your city' },
  ],
};
const labelCol = { style: { width: '120px' } };
const formState = reactive({
  name: '',
  email: '',
  country: null,
  city: '',
  car: null,
  message: '',
})

async function back() {
  submitSucess.value = false;
  await nextTick();
  formRef.value.resetFields();
}
async function handleSubmit() {
  try {
    const data = await formRef.value.validate();
    const { name = '', email = '', country = '', city = '', car = '', message = '' } = data || {};
    loading.value = true;
    const GoogleFetch = new GoogleFormSubmitter(url);
    await GoogleFetch.submit({
      'entry.2119473521': name,
      'entry.138510968': email,
      'entry.757148958': country,
      'entry.1579728811': city,
      'entry.1103703097': car,
      'entry.729480911': message,
    })
    submitSucess.value = true;
  } catch (e) {
    if (e.toString().indexOf('请求异常') > -1) {
      message.error('There is some error with your network, please check up');
    }
  } finally {
    loading.value = false;
  }
}
</script>
<style lang="less" scoped>
.contact_us_container {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  position: relative;
  .mask_container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-size: cover;
    background-position: 100% center;
    transform: scaleX(-1);
  }
  :deep(.ant-form-item .ant-form-item-label >label) {
    // color: #fff;
    height: 40px;
    font-size: 16px;
  }
  :deep(.ant-result .ant-result-title) {
    // color: #fff;
  }
  :deep(.ant-result .ant-result-subtitle) {
    // color: #fff;
    font-size: 16px;
  }
  .container_inner {
    width: 50%;
    max-width: 900px;
    position: relative;
    padding: 80px 50px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, .5);
    backdrop-filter: blur(6px);
    // background: linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 100%);
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
    .result-box {
      // color: #fff;
    }
    .form-header {
      margin-bottom: 30px;
      // color: #fff;
      // padding-left:60px;
      text-align: center;
      .form-title {
        font-size: 32px;
      }
      .form-sub-title {
        font-size: 16px;
      }
    }
  }
}
@media screen and (max-width: 1080px) {
  .contact_us_container {
    .container_inner {
      width: 100%;
      max-width: 100%;
      padding-left: 120px;
      padding-right: 120px;
    }
  }
}
@media screen and (max-width: 768px) {
  .contact_us_container {
    .container_inner {
      width: 100%;
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
