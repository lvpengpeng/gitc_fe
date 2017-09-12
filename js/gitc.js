; (function (win, doc) {
    function change() {
        doc.documentElement.style.fontSize = 20 * doc.documentElement.clientWidth / 320 + 'px';
    }
    change();
    win.addEventListener('resize', change, false);
})(window, document);

$(function () {
    var toggle = true;
    $('.special-ul .special-li').on('click', function () {
        $('.special-show-font').stop(true, false).slideUp(600);
        $('.jt-icon').removeClass("z");
        if (toggle) {

            $(this).parent().find('.special-show-font').stop(true, false).slideDown(600);
            $(this).parent().find('.jt-icon').addClass("z");
            toggle = false;
        }
        else {

            $(this).parent().find('.special-show-font').stop(true, false).slideUp(600);
            $(this).parent().find('.jt-icon').removeClass("z");
            toggle = true
        }
    })
})

$(function () {
    function toggleBtn(thisBtn, targetBtn, styles) {
        $(thisBtn).on('click', function () {
            $(this).addClass(styles).siblings().removeClass(styles); //切换选中的按钮高亮状态
            var index = $(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
            $(targetBtn).eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
        });
    }
    toggleBtn('.time span', ".agenda-ul-box> .agenda-ul-toggle", "cat-btn")
    toggleBtn('.agenda-ul-btn1  li', ".agenda-pople-box-btn1>.agenda-pople", "toggle-bg")
    toggleBtn('.agenda-ul-btn2  li', ".agenda-pople-box-btn2>.agenda-pople", "toggle-bg")
})