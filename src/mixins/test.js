import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap: function () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    },

  }
  events = {
    //组件或页面统一使用的双向绑定方法
    input: function (params) {
      if (params.key.indexOf('.') > -1) {
        var keys = params.key.split('.')
        switch (keys.length) {
          case 2:
            this[keys[0]][keys[1]] = params.val || '';
            break;
          case 3:
            this[keys[0]][keys[1]][keys[2]] = params.val || '';
            break;
          case 4:
            this[keys[0]][keys[1]][keys[2]][keys[3]] = params.val || '';
            break;
          case 5:
            this[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]] = params.val || '';
            break;
          case 6:
            this[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]][keys[5]] = params.val || '';
            break;
        }
      } else {
        this[params.key] = params.val || '';
      }
    }
  };

  //自定义校验方法
  /**
   * //校验规则 在页面内部定义即可
   * @param {vaildData} //待校验的数据
   */
  validate(vaildData) {
    var result = {
      msg: '校验通过',
      valid: true
    }

    //1.先校验是否为空
    for (var key in this.ruls) {
      var item = this.ruls[key];
      //1.1校验是否为空
      if (item.required) {
        if (vaildData[key] == '' || vaildData[key] == undefined) {
          result.msg = item.msg;
          result.valid = false;
          break;
        }
      }

      //1.2校验是否符合规则
      if (item.valid) {
        if (!item.valid.Regex.test(vaildData[key])) {
          //校验规则不通过
          result.msg = item.valid.errMsg;
          result.valid = false;
          break;
        }
      }
    }

    //某个校验不通过
    if (!result.valid) {
      wepy.showToast({
        title: result.msg,
        icon: 'none',
      });
      return result;
    }
    return result;
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }

}
