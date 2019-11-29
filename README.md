# H5视频全屏播放

## mobVideo

### 初始化：const video = new mobVideo(object)

| object参数说明 |                    |          |           |
| -------------- | ------------------ | -------- | --------- |
| 序号           | 说明               | 是否必须 | 参数类型  |
| el             | 元素id名           | yes      | 字符串    |
| videoUrl       | 视频地址           | yes      | url字符串 |
| imageUrl       | 视频加载中图片地址 | yes      | url字符串 |
| audioUrl       | 音频地址           | no       | url字符串 |

el：页面的元素id，必须填写

videoUrl：视频地址，必须填写   注：如果设置音频后视频为静音

imageUrl：图片地址，必须填写，视频缓冲时显示的内容

audioUrl：音频地址，可不填写，填写后为整体音频并禁止视频自带音频

### 使用：video.init(canplayCallback, playCallback, updateCallback, endCallback)

| 初始化参数说明  |                      |                                            |          |
| --------------- | -------------------- | ------------------------------------------ | -------- |
| 序号            | 说明                 | 回调参数                                   | 类型     |
| canplayCallback | 视频缓冲完成回调函数 | 视频操作对象videoHandler                   | 回调函数 |
| playCallback    | 视频开始播放回调函数 | 视频操作对象videoHandler                   | 回调函数 |
| updateCallback  | 视频播放中回调函数   | 视频操作对象videoHandler, 视频当前秒数time | 回调函数 |
| endCallback     | 视频播放完毕回调函数 | 视频操作对象videoHandler                   | 回调函数 |

canplayCallback：视频缓冲弄后执行此函数

playCallback：点击播放后执行此函数

updateCallback：视频播放中回调函数

endCallback：视频播放完毕后执行次函数

| 视频操作对象videoHandler说明 |                  |                           |
| ---------------------------- | ---------------- | ------------------------- |
| 参数key                      | 参数说明         | 参数实例                  |
| play                         | 返回播放函数     | play()                    |
| pause                        | 返回暂停函数     | pause()                   |
| load                         | 返回重播函数     | load()                    |
| setAudio                     | 设置音频         | setAudio(音频URL)         |
| currentTime                  | 设置当前播放秒数 | currentTime(数字类型秒数) |

play：播放视频

pause：暂停视频

load：重新播放视频

setAudio：更换当前播放音频的地址

currentTime：设置当前播放的秒数

------

[^]: 如有问题请联系QQ:760024412

