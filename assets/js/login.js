$(function() {
    // 点击去注册账号，隐藏登录区域，显示注册区域
    $('#link_reg').on('click', function() {
            $('.login-box').hide()
            $('.reg-box').show()
        })
        // 点击去登陆，显示登录区域，隐藏注册区域
    $('#link_login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })

})