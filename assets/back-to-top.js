// 返回顶部按钮功能
document.addEventListener('DOMContentLoaded', function() {
  // 创建返回顶部按钮
  const button = document.createElement('div');
  button.className = 'back-to-top';
  button.innerHTML = '↑';
  button.style.display = 'none';
  document.body.appendChild(button);

  // 监听滚动事件
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      button.style.display = 'flex';
    } else {
      button.style.display = 'none';
    }
  });

  // 点击返回顶部
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});