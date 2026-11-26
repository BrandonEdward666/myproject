// 1. 按 id 找到按钮
const btn = document.getElementById('themeBtn');

// 2. 给它绑定"点击"事件
btn.addEventListener('click', function () {
  // 3. 在 <body> 上切换 dark 类（有就删，没有就加）
  document.body.classList.toggle('dark');

  // 4. 按钮文字跟着变
  if (document.body.classList.contains('dark')) {
    btn.textContent = '切换亮色';
  } else {
    btn.textContent = '切换暗色';
  }
});