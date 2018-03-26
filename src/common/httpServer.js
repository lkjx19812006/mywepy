import wepy from 'wepy'
import utils from '../utils'
const pro = {
  env: 'dev',
};

const http = {
  config: {
    host: pro.env === 'dev' ? 'https://yinqian.natappvip.cc' : 'https://yinqian.natappvip.cc'
  },
  fetch(params) {
    if (!params || typeof params !== 'object') {
      return Promise.reject({ err: '数据格式错误，必须是一个对象' });
    };
    //根据环境 获取区别请求接口地址    
    return new Promise((resolve, reject) => {
      //开启loading
      if (params.loading) {
        wepy.showLoading({
          title: params.loadingMsg || '加载中...',//显示加载文案
          mask: params.mask || true//是否显示mask遮罩 默认显示
        })
      };
      //获取请求方式
      var method = (params.method && params.method.toUpperCase()) || 'GET';
      //发送请求
      wepy.request({
        url: this.config.host + params.url,
        header: params.header || {},
        dataType: 'json',
        method: method,
        data: params.data        
      }).then(res => {

        if (params.loading) {
          wepy.hideLoading()
        };

        resolve(res)
        
      }, err => {

        if (params.loading) {
          wepy.hideLoading()
        };

        if (err.statusCode === 401) {
          //没有权限
          reject(res)
        } else if (err.statusCode === 404) {
          //没找到
          reject(res)
        } else {
          reject(res)
        }

      })

    })
  },

}

export default http
