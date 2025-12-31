[rewrite_local]
# 登录接口VIP响应重写（匹配目标POST接口）
^https:\/\/wu18\.cn\/cg\/zhanghao\/ALogOn\.php$ url script-response-body https://raw.githubusercontent.com/yshxqx/j/main/cgjs.js

[mitm]
hostname = wu18.cn


let obj = JSON.parse($response.body);
// 覆盖原响应核心字段，与示例结构一致
obj.data = "登录成功 永久VIP";
obj.time = "2099-12-31";
$done({ 
  body: JSON.stringify(obj),
  headers: { "Content-Type": "application/json; charset=utf-8" }
});