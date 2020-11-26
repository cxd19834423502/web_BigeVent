$(function() {
    //1.  调用获取用户信息
    getUserInof()
})


// 2.退出
var layer = layui.layer
$('#logoout').on('click', function() {
    layer.confirm('是否确认退出?', { icon: 3, title: '提示' }, function(index) {
        //    清空本地token
        localStorage.removeItem('token')
            // 页面跳转
        location.href = '/login.html'
            // 关闭询问框
        layer.close(index)
    });
})


// 获取用户信息 (封装到入口函数外面)
// 原因：后面的函数要用
function getUserInof() {
    // 发送ajax
    $.ajax({
        url: '/my/userinfo',
        // header: {
        //     // 重新登录，因为token过期事件12小时
        //     Authorization: localStorage.getItem('token') || ""
        // },
        succecc: function(res) {
            // console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg(res.message)
            }
            // 请求成功渲染头像
            renderAvatar(res.data)
        }
    })
}

function renderAvatar(user) {
    //渲染名称（nickname优先，如果没有，就用username）
    var name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp' + name)
        // 渲染头像
    if (user.user_pic !== null) {
        // 有头像
        $('.layui-nav-img').show().attr('src', user.user_pic)
        $('text-avatar').hide()
    } else {
        // 没有头像
        $(".layui-nav-img").hide()
        var text = name[0].toUpperCase()
        $('.text-avatar').show().html(text)
    }
}