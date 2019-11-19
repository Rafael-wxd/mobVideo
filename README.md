# H5视频全屏播放

## mobVideo

### 初始化：const video = new mobVideo(

### 	box,

### 	startVideoButton, 

### 	videoUrl,

### 	 loadingImg,

### 	 pause

### )

| 初始化参数说明   |                      |                      |
| ---------------- | -------------------- | -------------------- |
| 序号             | 说明                 | 参数类型             |
| box              | 元素id名             | 字符串               |
| startVideoButton | 播放按钮id名         | 字符串               |
| videoUrl         | 视频地址             | url字符串            |
| loadingImg       | 缓冲图片地址         | url字符串            |
| pause            | 是否点击视频播放暂停 | 布尔类型(true/false) |

box：用来创建外层的一个空的属性-必填

startVideoButton：设置播放按钮的id-不传默认为点击缓冲图片播放

videoUrl：用来设置播放视频的地址

loadingImg：播放前展示的图片或gif-默认为默认图片

pause：播放后点击视频播放暂停-默认为true，false关闭点击播放暂停视频

### 使用：video.init(canplayCallback, playCallback, endCallback)

| 使用参数说明    |                      |      |
| --------------- | -------------------- | ---- |
| 序号            | 说明                 | 类型 |
| canplayCallback | 视频缓冲完成回调函数 | 函数 |
| playCallback    | 视频开始播放回调函数 | 函数 |
| endCallback     | 视频播放完毕回调函数 | 函数 |

canplayCallback：视频缓冲弄后执行此函数

playCallback：点击播放后执行此函数

endCallback：视频播放完毕后执行次函数

------

[^]: 如有问题请联系QQ:760024412

