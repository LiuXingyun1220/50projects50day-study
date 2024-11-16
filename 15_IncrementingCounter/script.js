const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})


// const counters = document.querySelectorAll('.counter');

// counters.forEach(counter => {
//     counter.innerText = '0';

//     function updateCounter() {
//         const target = +counter.dataset.target;
//         let current = +counter.innerHTML; // current 需要用 let 声明

//         const intervalID = setInterval(() => {
//             if (current >= target) { // 检查是否达到目标值
//                 clearInterval(intervalID); // 停止定时器
//                 return; // 退出函数，防止后续代码执行
//             }

//             current += 100; // 递增当前值
//             counter.innerHTML = current; // 更新到页面
//         }, 0.000001);
//     }

//     updateCounter();
// });
