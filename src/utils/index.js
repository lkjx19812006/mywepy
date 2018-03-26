//工具类
export default {
  //对象转成参数拼接在地址栏后
  dataTransformParam: function (params) {
    if (params && typeof params === 'object') {
      var result = '?';
      for (var key in params) {
        result += key + '=' + params[key] + '&'
      }     
      return result.slice(0, -1);
    } else {
      return ''
    }
  }


}