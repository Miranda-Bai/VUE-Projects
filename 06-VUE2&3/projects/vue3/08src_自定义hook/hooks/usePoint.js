import { reactive, onMounted, onBeforeUnmount } from "vue";

// 暴露一个函数
export default function () {
  // 数据
  let point = reactive({
    x: 0,
    y: 0,
  });
  // 方法
  function savePoint(event) {
    console.log(event.pageX, event.pageY);
    point.x = event.pageX;
    point.y = event.pageY;
  }
  onMounted(() => {
    // 给window加事件监听
    window.addEventListener("click", savePoint);
  });
  // 组件销毁之前，移除给window添加的事件监听
  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });

  //   一定要有返回值
  return point;
}

// export default savePoint
