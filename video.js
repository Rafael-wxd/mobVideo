/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/video.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/video.js":
/*!**********************!*\
  !*** ./app/video.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function (window) {\n\n  const isWindow = function (obj) {\n    return obj !== null && obj === obj.window;\n  };\n\n  if (!isWindow(window)) {\n    return false;\n  };\n\n  let inseart = true;\n\n  const mobVideo = function (id, btnId, videoSrc, image, play) {\n    this.pd = false; // 设置没有走通\n    // 验证id和视频地址不能为空\n    if (!id && document.getElementById(id) !== null && !videoSrc) {\n      throw new Error('MobVideo configuration id and videoSrc cannot be empty');\n      return false;\n    };\n    this.element = document.getElementById(id); // 主元素对象\n    this.btnElement = btnId == '' ? this.element : document.getElementById(btnId); // 点击播放按钮 默认为点击主元素\n    this.videoSrc = videoSrc; // 赋值视频的地址\n    this.image = image || ''; // 赋值默认展示的图片-可以为空\n    this.pd = true; // 设置已经走通\n    this.play = play === false ? false : true; // 设置是否点击视频播放暂停\n  };\n\n  const mobVideoFunction = {\n    setImage: function (image, context, width, height) {\n      if (image && image !== '') {\n        const imageObj = new Image(); // 创建image对象\n        imageObj.onload = () => {\n          // image对象创建完成之后绘制canvas\n          context.drawImage(imageObj, 0, 0, width, height);\n        };\n        imageObj.src = image; // 设置image对象的地址\n      };\n    },\n    setVideo: function (element, context, width, height, videoSrc, btnElement, startCallback, beCallback, endCallback, play) {\n      const video = document.createElement('video'); // 创建视频元素\n      video.setAttribute('src', videoSrc); // 配置视频地址\n      video.setAttribute('autoplay', 'autoplay');\n      video.setAttribute('webkit-playsinline', 'true');\n      video.setAttribute('playsinline', 'true');\n      video.setAttribute('x-webkit-airplay', 'true');\n      video.setAttribute('x5-video-player-type', 'h5');\n      video.setAttribute('x5-video-player-fullscreen', 'true');\n      video.setAttribute('x5-video-ignore-metadata', 'true');\n      video.style.objectFit = 'cover';\n      video.style.objectPosition = 'center';\n      video.style.width = '100%';\n      video.addEventListener('canplay', () => {\n        this.setClick(element, context, width, height, video, btnElement, true, beCallback, endCallback, play);\n        if (typeof startCallback === 'function') {\n          startCallback();\n        }\n      });\n    },\n    startVideo: function (context, width, height, video, element, eleClick, endCallback) {\n      video.play();\n      let time = '';\n      video.addEventListener('play', () => {\n        time = setInterval(() => {\n          context.drawImage(video, 0, 0, width, height); //绘制视频\n        }, 20);\n      });\n      video.addEventListener(\"timeupdate\", function () {\n        const time = video.currentTime;\n      }, false);\n      video.addEventListener('ended', () => {\n        clearInterval(time);\n        element.removeEventListener('click', eleClick);\n        if (typeof endCallback === 'function') {\n          endCallback();\n        }\n      });\n    },\n    setClick: function (element, context, width, height, video, btnElement, videoPlay, beCallback, endCallback, play) {\n      const eleClick = () => {\n        videoPlay = !videoPlay;\n        if (videoPlay) {\n          video.play();\n        } else {\n          video.pause();\n        }\n      };\n      const clickFun = () => {\n        this.startVideo(context, width, height, video, element, eleClick, endCallback);\n        btnElement.removeEventListener('click', clickFun);\n        if (typeof beCallback === 'function') {\n          beCallback();\n        }\n        if (play) {\n          element.addEventListener('click', eleClick);\n        }\n      };\n\n      btnElement.addEventListener('click', clickFun);\n    }\n  };\n\n  mobVideo.prototype.init = function (startCallback, beCallback, endCallback) {\n    if (!inseart) {\n      throw new Error('只能初始化一次');\n      return false;\n    }\n    inseart = false;\n    // 验证id和视频地址不能为空\n    if (!this.pd) {\n      throw new Error('MobVideo configuration id and videoSrc cannot be empty');\n      return false;\n    };\n    const canvas = document.createElement('canvas'); // 创建canvas元素\n    const context = canvas.getContext('2d'); // 创建canvas对象\n    canvas.width = this.element.offsetWidth; // 设置canva宽度为主元素宽度\n    canvas.height = this.element.offsetHeight; // 设置canva宽度为主元素高度\n    context.clearRect(0, 0, canvas.width, canvas.height);\n    canvas.style.width = '100%';\n    canvas.style.height = '100%';\n    if (this.image !== '') mobVideoFunction.setImage(this.image, context, canvas.width, canvas.height);\n    mobVideoFunction.setVideo(this.element, context, canvas.width, canvas.height, this.videoSrc, this.btnElement, startCallback, beCallback, endCallback, this.play);\n    this.element.appendChild(canvas); // 追加到主元素中\n  };\n\n  window.mobVideo = mobVideo;\n}(window);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdmlkZW8uanM/NjVhNCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJpc1dpbmRvdyIsIm9iaiIsImluc2VhcnQiLCJtb2JWaWRlbyIsImlkIiwiYnRuSWQiLCJ2aWRlb1NyYyIsImltYWdlIiwicGxheSIsInBkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkVycm9yIiwiZWxlbWVudCIsImJ0bkVsZW1lbnQiLCJtb2JWaWRlb0Z1bmN0aW9uIiwic2V0SW1hZ2UiLCJjb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZU9iaiIsIkltYWdlIiwib25sb2FkIiwiZHJhd0ltYWdlIiwic3JjIiwic2V0VmlkZW8iLCJzdGFydENhbGxiYWNrIiwiYmVDYWxsYmFjayIsImVuZENhbGxiYWNrIiwidmlkZW8iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRDbGljayIsInN0YXJ0VmlkZW8iLCJlbGVDbGljayIsInRpbWUiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ2aWRlb1BsYXkiLCJwYXVzZSIsImNsaWNrRnVuIiwicHJvdG90eXBlIiwiaW5pdCIsImNhbnZhcyIsImdldENvbnRleHQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImNsZWFyUmVjdCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFFLFVBQVVBLE1BQVYsRUFBa0I7O0FBRWxCLFFBQU1DLFdBQVcsVUFBVUMsR0FBVixFQUFlO0FBQzlCLFdBQU9BLFFBQVEsSUFBUixJQUFnQkEsUUFBUUEsSUFBSUYsTUFBbkM7QUFDRCxHQUZEOztBQUlBLE1BQUksQ0FBQ0MsU0FBU0QsTUFBVCxDQUFMLEVBQXVCO0FBQ3JCLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUlHLFVBQVUsSUFBZDs7QUFFQSxRQUFNQyxXQUFXLFVBQVVDLEVBQVYsRUFBY0MsS0FBZCxFQUFxQkMsUUFBckIsRUFBK0JDLEtBQS9CLEVBQXNDQyxJQUF0QyxFQUE0QztBQUMzRCxTQUFLQyxFQUFMLEdBQVUsS0FBVixDQUQyRCxDQUMxQztBQUNqQjtBQUNBLFFBQUksQ0FBQ0wsRUFBRCxJQUFPTSxTQUFTQyxjQUFULENBQXdCUCxFQUF4QixNQUFnQyxJQUF2QyxJQUErQyxDQUFDRSxRQUFwRCxFQUE4RDtBQUM1RCxZQUFNLElBQUlNLEtBQUosQ0FBVSx3REFBVixDQUFOO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7QUFDRCxTQUFLQyxPQUFMLEdBQWVILFNBQVNDLGNBQVQsQ0FBd0JQLEVBQXhCLENBQWYsQ0FQMkQsQ0FPZjtBQUM1QyxTQUFLVSxVQUFMLEdBQWtCVCxTQUFTLEVBQVQsR0FBYyxLQUFLUSxPQUFuQixHQUE2QkgsU0FBU0MsY0FBVCxDQUF3Qk4sS0FBeEIsQ0FBL0MsQ0FSMkQsQ0FRb0I7QUFDL0UsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEIsQ0FUMkQsQ0FTakM7QUFDMUIsU0FBS0MsS0FBTCxHQUFhQSxTQUFTLEVBQXRCLENBVjJELENBVWpDO0FBQzFCLFNBQUtFLEVBQUwsR0FBVSxJQUFWLENBWDJELENBVzNDO0FBQ2hCLFNBQUtELElBQUwsR0FBWUEsU0FBUyxLQUFULEdBQWlCLEtBQWpCLEdBQXlCLElBQXJDLENBWjJELENBWWhCO0FBQzVDLEdBYkQ7O0FBZUEsUUFBTU8sbUJBQW1CO0FBQ3ZCQyxjQUFVLFVBQVVULEtBQVYsRUFBaUJVLE9BQWpCLEVBQTBCQyxLQUExQixFQUFpQ0MsTUFBakMsRUFBeUM7QUFDakQsVUFBSVosU0FBU0EsVUFBVSxFQUF2QixFQUEyQjtBQUN6QixjQUFNYSxXQUFXLElBQUlDLEtBQUosRUFBakIsQ0FEeUIsQ0FDSztBQUM5QkQsaUJBQVNFLE1BQVQsR0FBbUIsTUFBTTtBQUFFO0FBQ3pCTCxrQkFBUU0sU0FBUixDQUFrQkgsUUFBbEIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0NGLEtBQWxDLEVBQXlDQyxNQUF6QztBQUNELFNBRkQ7QUFHQUMsaUJBQVNJLEdBQVQsR0FBZWpCLEtBQWYsQ0FMeUIsQ0FLSDtBQUN2QjtBQUNGLEtBVHNCO0FBVXZCa0IsY0FBVSxVQUFVWixPQUFWLEVBQW1CSSxPQUFuQixFQUE0QkMsS0FBNUIsRUFBbUNDLE1BQW5DLEVBQTJDYixRQUEzQyxFQUFxRFEsVUFBckQsRUFBaUVZLGFBQWpFLEVBQWdGQyxVQUFoRixFQUE0RkMsV0FBNUYsRUFBeUdwQixJQUF6RyxFQUErRztBQUN2SCxZQUFNcUIsUUFBUW5CLFNBQVNvQixhQUFULENBQXVCLE9BQXZCLENBQWQsQ0FEdUgsQ0FDeEU7QUFDL0NELFlBQU1FLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEJ6QixRQUExQixFQUZ1SCxDQUVsRjtBQUNyQ3VCLFlBQU1FLFlBQU4sQ0FBbUIsVUFBbkIsRUFBK0IsVUFBL0I7QUFDQUYsWUFBTUUsWUFBTixDQUFtQixvQkFBbkIsRUFBeUMsTUFBekM7QUFDQUYsWUFBTUUsWUFBTixDQUFtQixhQUFuQixFQUFrQyxNQUFsQztBQUNBRixZQUFNRSxZQUFOLENBQW1CLGtCQUFuQixFQUF1QyxNQUF2QztBQUNBRixZQUFNRSxZQUFOLENBQW1CLHNCQUFuQixFQUEyQyxJQUEzQztBQUNBRixZQUFNRSxZQUFOLENBQW1CLDRCQUFuQixFQUFpRCxNQUFqRDtBQUNBRixZQUFNRSxZQUFOLENBQW1CLDBCQUFuQixFQUErQyxNQUEvQztBQUNBRixZQUFNRyxLQUFOLENBQVlDLFNBQVosR0FBd0IsT0FBeEI7QUFDQUosWUFBTUcsS0FBTixDQUFZRSxjQUFaLEdBQTZCLFFBQTdCO0FBQ0FMLFlBQU1HLEtBQU4sQ0FBWWQsS0FBWixHQUFvQixNQUFwQjtBQUNBVyxZQUFNTSxnQkFBTixDQUF1QixTQUF2QixFQUFrQyxNQUFNO0FBQ3RDLGFBQUtDLFFBQUwsQ0FBY3ZCLE9BQWQsRUFBdUJJLE9BQXZCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsTUFBdkMsRUFBK0NVLEtBQS9DLEVBQXNEZixVQUF0RCxFQUFrRSxJQUFsRSxFQUF3RWEsVUFBeEUsRUFBb0ZDLFdBQXBGLEVBQWlHcEIsSUFBakc7QUFDQSxZQUFJLE9BQU9rQixhQUFQLEtBQXlCLFVBQTdCLEVBQXlDO0FBQ3ZDQTtBQUNEO0FBQ0YsT0FMRDtBQU1ELEtBN0JzQjtBQThCdkJXLGdCQUFZLFVBQVVwQixPQUFWLEVBQW1CQyxLQUFuQixFQUEwQkMsTUFBMUIsRUFBa0NVLEtBQWxDLEVBQXlDaEIsT0FBekMsRUFBa0R5QixRQUFsRCxFQUE0RFYsV0FBNUQsRUFBeUU7QUFDbkZDLFlBQU1yQixJQUFOO0FBQ0EsVUFBSStCLE9BQU8sRUFBWDtBQUNBVixZQUFNTSxnQkFBTixDQUF1QixNQUF2QixFQUErQixNQUFNO0FBQ25DSSxlQUFPQyxZQUFZLE1BQU07QUFDdkJ2QixrQkFBUU0sU0FBUixDQUFrQk0sS0FBbEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0JYLEtBQS9CLEVBQXNDQyxNQUF0QyxFQUR1QixDQUN3QjtBQUNoRCxTQUZNLEVBRUosRUFGSSxDQUFQO0FBR0QsT0FKRDtBQUtBVSxZQUFNTSxnQkFBTixDQUF1QixZQUF2QixFQUFvQyxZQUFVO0FBQzFDLGNBQU1JLE9BQU9WLE1BQU1ZLFdBQW5CO0FBQ0gsT0FGRCxFQUVFLEtBRkY7QUFHQVosWUFBTU0sZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsTUFBTTtBQUNwQ08sc0JBQWNILElBQWQ7QUFDQTFCLGdCQUFROEIsbUJBQVIsQ0FBNEIsT0FBNUIsRUFBcUNMLFFBQXJDO0FBQ0EsWUFBSSxPQUFPVixXQUFQLEtBQXVCLFVBQTNCLEVBQXVDO0FBQ3JDQTtBQUNEO0FBQ0YsT0FORDtBQU9ELEtBaERzQjtBQWlEdkJRLGNBQVUsVUFBVXZCLE9BQVYsRUFBbUJJLE9BQW5CLEVBQTRCQyxLQUE1QixFQUFtQ0MsTUFBbkMsRUFBMkNVLEtBQTNDLEVBQWtEZixVQUFsRCxFQUE4RDhCLFNBQTlELEVBQXlFakIsVUFBekUsRUFBcUZDLFdBQXJGLEVBQWtHcEIsSUFBbEcsRUFBd0c7QUFDaEgsWUFBTThCLFdBQVcsTUFBTTtBQUNyQk0sb0JBQVksQ0FBQ0EsU0FBYjtBQUNBLFlBQUlBLFNBQUosRUFBZTtBQUNiZixnQkFBTXJCLElBQU47QUFDRCxTQUZELE1BRU87QUFDTHFCLGdCQUFNZ0IsS0FBTjtBQUNEO0FBQ0YsT0FQRDtBQVFBLFlBQU1DLFdBQVcsTUFBTTtBQUNyQixhQUFLVCxVQUFMLENBQWdCcEIsT0FBaEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxNQUFoQyxFQUF3Q1UsS0FBeEMsRUFBK0NoQixPQUEvQyxFQUF3RHlCLFFBQXhELEVBQWtFVixXQUFsRTtBQUNBZCxtQkFBVzZCLG1CQUFYLENBQStCLE9BQS9CLEVBQXdDRyxRQUF4QztBQUNBLFlBQUksT0FBT25CLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDcENBO0FBQ0Q7QUFDRCxZQUFJbkIsSUFBSixFQUFVO0FBQ1JLLGtCQUFRc0IsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NHLFFBQWxDO0FBQ0Q7QUFDRixPQVREOztBQVdBeEIsaUJBQVdxQixnQkFBWCxDQUE0QixPQUE1QixFQUFxQ1csUUFBckM7QUFDRDtBQXRFc0IsR0FBekI7O0FBeUVBM0MsV0FBUzRDLFNBQVQsQ0FBbUJDLElBQW5CLEdBQTBCLFVBQVV0QixhQUFWLEVBQXlCQyxVQUF6QixFQUFxQ0MsV0FBckMsRUFBa0Q7QUFDMUUsUUFBSSxDQUFDMUIsT0FBTCxFQUFjO0FBQ1osWUFBTSxJQUFJVSxLQUFKLENBQVUsU0FBVixDQUFOO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7QUFDRFYsY0FBVSxLQUFWO0FBQ0E7QUFDQSxRQUFJLENBQUMsS0FBS08sRUFBVixFQUFjO0FBQ1osWUFBTSxJQUFJRyxLQUFKLENBQVUsd0RBQVYsQ0FBTjtBQUNBLGFBQU8sS0FBUDtBQUNEO0FBQ0QsVUFBTXFDLFNBQVN2QyxTQUFTb0IsYUFBVCxDQUF1QixRQUF2QixDQUFmLENBWDBFLENBV3pCO0FBQ2pELFVBQU1iLFVBQVVnQyxPQUFPQyxVQUFQLENBQWtCLElBQWxCLENBQWhCLENBWjBFLENBWWpDO0FBQ3pDRCxXQUFPL0IsS0FBUCxHQUFlLEtBQUtMLE9BQUwsQ0FBYXNDLFdBQTVCLENBYjBFLENBYWhDO0FBQzFDRixXQUFPOUIsTUFBUCxHQUFnQixLQUFLTixPQUFMLENBQWF1QyxZQUE3QixDQWQwRSxDQWMvQjtBQUMzQ25DLFlBQVFvQyxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCSixPQUFPL0IsS0FBL0IsRUFBc0MrQixPQUFPOUIsTUFBN0M7QUFDQThCLFdBQU9qQixLQUFQLENBQWFkLEtBQWIsR0FBcUIsTUFBckI7QUFDQStCLFdBQU9qQixLQUFQLENBQWFiLE1BQWIsR0FBc0IsTUFBdEI7QUFDQSxRQUFJLEtBQUtaLEtBQUwsS0FBZSxFQUFuQixFQUF1QlEsaUJBQWlCQyxRQUFqQixDQUEwQixLQUFLVCxLQUEvQixFQUFzQ1UsT0FBdEMsRUFBK0NnQyxPQUFPL0IsS0FBdEQsRUFBNkQrQixPQUFPOUIsTUFBcEU7QUFDdkJKLHFCQUFpQlUsUUFBakIsQ0FBMEIsS0FBS1osT0FBL0IsRUFBd0NJLE9BQXhDLEVBQWlEZ0MsT0FBTy9CLEtBQXhELEVBQStEK0IsT0FBTzlCLE1BQXRFLEVBQThFLEtBQUtiLFFBQW5GLEVBQTZGLEtBQUtRLFVBQWxHLEVBQThHWSxhQUE5RyxFQUE2SEMsVUFBN0gsRUFBeUlDLFdBQXpJLEVBQXNKLEtBQUtwQixJQUEzSjtBQUNBLFNBQUtLLE9BQUwsQ0FBYXlDLFdBQWIsQ0FBeUJMLE1BQXpCLEVBcEIwRSxDQW9CeEM7QUFDbkMsR0FyQkQ7O0FBdUJBbEQsU0FBT0ksUUFBUCxHQUFrQkEsUUFBbEI7QUFFRCxDQTdIQSxDQTZIRUosTUE3SEYsQ0FBRCIsImZpbGUiOiIuL2FwcC92aWRlby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiEoZnVuY3Rpb24gKHdpbmRvdykge1xyXG5cclxuICBjb25zdCBpc1dpbmRvdyA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xyXG4gIH07XHJcblxyXG4gIGlmICghaXNXaW5kb3cod2luZG93KSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGxldCBpbnNlYXJ0ID0gdHJ1ZTtcclxuXHJcbiAgY29uc3QgbW9iVmlkZW8gPSBmdW5jdGlvbiAoaWQsIGJ0bklkLCB2aWRlb1NyYywgaW1hZ2UsIHBsYXkpIHtcclxuICAgIHRoaXMucGQgPSBmYWxzZTsgLy8g6K6+572u5rKh5pyJ6LWw6YCaXHJcbiAgICAvLyDpqozor4FpZOWSjOinhumikeWcsOWdgOS4jeiDveS4uuepulxyXG4gICAgaWYgKCFpZCAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgIT09IG51bGwgJiYgIXZpZGVvU3JjKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTW9iVmlkZW8gY29uZmlndXJhdGlvbiBpZCBhbmQgdmlkZW9TcmMgY2Fubm90IGJlIGVtcHR5JylcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsgLy8g5Li75YWD57Sg5a+56LGhXHJcbiAgICB0aGlzLmJ0bkVsZW1lbnQgPSBidG5JZCA9PSAnJyA/IHRoaXMuZWxlbWVudCA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ0bklkKTsgLy8g54K55Ye75pKt5pS+5oyJ6ZKuIOm7mOiupOS4uueCueWHu+S4u+WFg+e0oFxyXG4gICAgdGhpcy52aWRlb1NyYyA9IHZpZGVvU3JjOyAvLyDotYvlgLzop4bpopHnmoTlnLDlnYBcclxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZSB8fCAnJzsgLy8g6LWL5YC86buY6K6k5bGV56S655qE5Zu+54mHLeWPr+S7peS4uuepulxyXG4gICAgdGhpcy5wZCA9IHRydWU7IC8vIOiuvue9ruW3sue7j+i1sOmAmlxyXG4gICAgdGhpcy5wbGF5ID0gcGxheSA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7IC8vIOiuvue9ruaYr+WQpueCueWHu+inhumikeaSreaUvuaaguWBnFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vYlZpZGVvRnVuY3Rpb24gPSB7XHJcbiAgICBzZXRJbWFnZTogZnVuY3Rpb24gKGltYWdlLCBjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIGlmIChpbWFnZSAmJiBpbWFnZSAhPT0gJycpIHtcclxuICAgICAgICBjb25zdCBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpOyAvLyDliJvlu7ppbWFnZeWvueixoVxyXG4gICAgICAgIGltYWdlT2JqLm9ubG9hZCA9ICAoKSA9PiB7IC8vIGltYWdl5a+56LGh5Yib5bu65a6M5oiQ5LmL5ZCO57uY5Yi2Y2FudmFzXHJcbiAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZU9iaiwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlT2JqLnNyYyA9IGltYWdlOyAvLyDorr7nva5pbWFnZeWvueixoeeahOWcsOWdgFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHNldFZpZGVvOiBmdW5jdGlvbiAoZWxlbWVudCwgY29udGV4dCwgd2lkdGgsIGhlaWdodCwgdmlkZW9TcmMsIGJ0bkVsZW1lbnQsIHN0YXJ0Q2FsbGJhY2ssIGJlQ2FsbGJhY2ssIGVuZENhbGxiYWNrLCBwbGF5KSB7XHJcbiAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTsgLy8g5Yib5bu66KeG6aKR5YWD57SgXHJcbiAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMpOyAvLyDphY3nva7op4bpopHlnLDlnYBcclxuICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICdhdXRvcGxheScpO1xyXG4gICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3dlYmtpdC1wbGF5c2lubGluZScsICd0cnVlJyk7XHJcbiAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpO1xyXG4gICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3gtd2Via2l0LWFpcnBsYXknLCAndHJ1ZScpO1xyXG4gICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3g1LXZpZGVvLXBsYXllci10eXBlJywgJ2g1Jyk7XHJcbiAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgneDUtdmlkZW8tcGxheWVyLWZ1bGxzY3JlZW4nLCAndHJ1ZScpO1xyXG4gICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3g1LXZpZGVvLWlnbm9yZS1tZXRhZGF0YScsICd0cnVlJyk7XHJcbiAgICAgIHZpZGVvLnN0eWxlLm9iamVjdEZpdCA9ICdjb3ZlcidcclxuICAgICAgdmlkZW8uc3R5bGUub2JqZWN0UG9zaXRpb24gPSAnY2VudGVyJ1xyXG4gICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldENsaWNrKGVsZW1lbnQsIGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIHZpZGVvLCBidG5FbGVtZW50LCB0cnVlLCBiZUNhbGxiYWNrLCBlbmRDYWxsYmFjaywgcGxheSlcclxuICAgICAgICBpZiAodHlwZW9mIHN0YXJ0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIHN0YXJ0Q2FsbGJhY2soKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3RhcnRWaWRlbzogZnVuY3Rpb24gKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIHZpZGVvLCBlbGVtZW50LCBlbGVDbGljaywgZW5kQ2FsbGJhY2spIHtcclxuICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICBsZXQgdGltZSA9ICcnO1xyXG4gICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgKCkgPT4ge1xyXG4gICAgICAgIHRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgd2lkdGgsIGhlaWdodCk7IC8v57uY5Yi26KeG6aKRXHJcbiAgICAgICAgfSwgMjApXHJcbiAgICAgIH0pXHJcbiAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGNvbnN0IHRpbWUgPSB2aWRlby5jdXJyZW50VGltZTtcclxuICAgICAgfSxmYWxzZSk7XHJcbiAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZSk7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVsZUNsaWNrKVxyXG4gICAgICAgIGlmICh0eXBlb2YgZW5kQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIGVuZENhbGxiYWNrKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2V0Q2xpY2s6IGZ1bmN0aW9uIChlbGVtZW50LCBjb250ZXh0LCB3aWR0aCwgaGVpZ2h0LCB2aWRlbywgYnRuRWxlbWVudCwgdmlkZW9QbGF5LCBiZUNhbGxiYWNrLCBlbmRDYWxsYmFjaywgcGxheSkge1xyXG4gICAgICBjb25zdCBlbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB2aWRlb1BsYXkgPSAhdmlkZW9QbGF5XHJcbiAgICAgICAgaWYgKHZpZGVvUGxheSkge1xyXG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY2xpY2tGdW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGFydFZpZGVvKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIHZpZGVvLCBlbGVtZW50LCBlbGVDbGljaywgZW5kQ2FsbGJhY2spXHJcbiAgICAgICAgYnRuRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRnVuKVxyXG4gICAgICAgIGlmICh0eXBlb2YgYmVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgYmVDYWxsYmFjaygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWxlQ2xpY2spXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBidG5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tGdW4pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb2JWaWRlby5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChzdGFydENhbGxiYWNrLCBiZUNhbGxiYWNrLCBlbmRDYWxsYmFjaykge1xyXG4gICAgaWYgKCFpbnNlYXJ0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcign5Y+q6IO95Yid5aeL5YyW5LiA5qyhJylcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaW5zZWFydCA9IGZhbHNlO1xyXG4gICAgLy8g6aqM6K+BaWTlkozop4bpopHlnLDlnYDkuI3og73kuLrnqbpcclxuICAgIGlmICghdGhpcy5wZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vYlZpZGVvIGNvbmZpZ3VyYXRpb24gaWQgYW5kIHZpZGVvU3JjIGNhbm5vdCBiZSBlbXB0eScpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgLy8g5Yib5bu6Y2FudmFz5YWD57SgXHJcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7IC8vIOWIm+W7umNhbnZhc+WvueixoVxyXG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoIDsgLy8g6K6+572uY2FudmHlrr3luqbkuLrkuLvlhYPntKDlrr3luqZcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0OyAvLyDorr7nva5jYW52YeWuveW6puS4uuS4u+WFg+e0oOmrmOW6plxyXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgIGlmICh0aGlzLmltYWdlICE9PSAnJykgbW9iVmlkZW9GdW5jdGlvbi5zZXRJbWFnZSh0aGlzLmltYWdlLCBjb250ZXh0LCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgbW9iVmlkZW9GdW5jdGlvbi5zZXRWaWRlbyh0aGlzLmVsZW1lbnQsIGNvbnRleHQsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgdGhpcy52aWRlb1NyYywgdGhpcy5idG5FbGVtZW50LCBzdGFydENhbGxiYWNrLCBiZUNhbGxiYWNrLCBlbmRDYWxsYmFjaywgdGhpcy5wbGF5KTtcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXMpOyAvLyDov73liqDliLDkuLvlhYPntKDkuK1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5tb2JWaWRlbyA9IG1vYlZpZGVvO1xyXG5cclxufSkod2luZG93KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/video.js\n");

/***/ })

/******/ });