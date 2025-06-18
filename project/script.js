// 密码验证部分
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否在密码页面
    if (document.getElementById('passwordForm')) {
        const form = document.getElementById('passwordForm');
        const passwordInput = document.getElementById('passwordInput');
        const errorMsg = document.getElementById('errorMsg');
        
        // 设置正确密码
        const correctPassword = "1"; // 修改为你想要的密码
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (passwordInput.value.trim() === '') {
                errorMsg.textContent = "请输入纪念日ʕง•ᴥ•ʔง";
                passwordInput.focus();
                return;
            }
            
            if (passwordInput.value === correctPassword) {
                // 添加加载效果
                const btn = form.querySelector('button');
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 验证中(◍•ᴗ•◍)...';
                btn.disabled = true;
                
                // 模拟验证过程
                setTimeout(() => {
                    // 密码正确，跳转到时间页面
                    window.location.href = "time.html";
                }, 1000);
            } else {
                // 密码错误，显示错误信息
                errorMsg.textContent = "密码错误，请重试";
                passwordInput.value = "";
                passwordInput.focus();
                
                // 添加震动效果
                form.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    form.style.animation = '';
                }, 500);
            }
        });
    }
    
    // 检查是否在时间页面
    if (document.getElementById('timeDisplay')) {
        // 目标日期：2024年4月15日
        const targetDate = new Date('2024-04-15T00:00:00');
        
        function updateTime() {
            const now = new Date();
            const diff = now - targetDate;
            
            // 计算天、小时、分钟、秒
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            // 更新显示
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
            
            // 添加数字变化动画
            animateNumber('days', days);
            animateNumber('hours', hours);
            animateNumber('minutes', minutes);
            animateNumber('seconds', seconds);
        }
        
        function animateNumber(id, newValue) {
            const element = document.getElementById(id);
            const oldValue = parseInt(element.textContent);
            
            if (oldValue !== newValue) {
                element.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 300);
            }
        }
        
        // 初始更新
        updateTime();
        
        // 每秒更新一次
        setInterval(updateTime, 1000);
        
        // 初始化粒子效果
        particlesJS.load('particles-js', 'particles.json', function() {
            console.log('粒子效果加载完成');
        });
    }
});

// 添加震动动画到样式表
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);