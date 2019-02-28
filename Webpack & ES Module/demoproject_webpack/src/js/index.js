// ES6语法：导入另一个js模块，且只能放最顶层——即当前模块依赖于另一个模块
import getCompanyName from './util';

// 导入另一个css模块(可写在上一个被引入的文件./util，递归的方式打包)
// import mybase from '../css/base.css'
import '../css/base.css';
import '../css/index.css';

function createDiv() {
  var div = document.createElement('div');
  div.classList.add('hello');
  div.innerHTML = '版权所有：'+getCompanyName();
  return div;
}
document.body.appendChild(createDiv());
