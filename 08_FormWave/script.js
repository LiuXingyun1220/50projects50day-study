const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  // 数组map方法将数组中的每一个元素处理后返回新的数组
  // 数组join方法将数组转换为字符串，小括号为元素之间添加的间隔符
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})