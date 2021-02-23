$(function () {
    // 点击“去注册账号”的链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击“去登录”的链接
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    const form = layui.form;
    form.verify({
        pwd: [/^[\s]{6,12}$/, '密码不符合规则'],
        repwd: function (value) {
            const password = $('.reg-box[name=password]').val();
            if (password !== value) {
                return '两次输入不一致';
            }
        },
    });

    $.ajax({
        url: 'https://ajax.frontend.itheima.net/api/reguser',
        type: 'POST',
        data: {
            username: $('.reg-box [name=username]').val(),
            pasword: $('.reg-box [name=password]').val(),
        },
        success(res) {
            if (res.status !== 0) {
                return layer.msg('res.message');
            }
            layer.msg('注册成功');

            $('#link_login').click();
        },
    })
})
