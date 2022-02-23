/*
 * Adds a button to nav links with sub menus, when clicked shows the sub menu
 */
function mobileMenu() {
    var $menu = $('#mobile-menu'),
        $menuButton = '<button type="button" class="nav-sub-menu-button"><i class="fas fa-chevron-down"></i></button>';

    $menu.find('.menu-item-has-children').each(function () {
        $(this).append($menuButton);
    });

    var current = $(".current-menu-ancestor");
    current.addClass('nav-sub-menu-button--visible');
    current.find(".nav-sub-menu-button").addClass('nav-sub-menu-button--open');

    $('.nav-sub-menu-button').click(function () {
        $(this).parent().toggleClass('nav-sub-menu-button--visible');
        $(this).parent().siblings().removeClass('nav-sub-menu-button--visible');
        $(this).toggleClass('nav-sub-menu-button--open');
        $(this).parent().siblings().find('.nav-sub-menu-button--open').removeClass('nav-sub-menu-button--open');
    });

    var mobileMenuBtn = document.querySelector('.js__slideout-toggle');
    var blockFixed = $('.fixed-to-panel');
    var blockMain = document.querySelector('#panel');
    var blockSidebar = document.querySelector('.js__mobile-menu-slide');
    var blockSidebarWidth = 280;

    var slideoutSidebar = new Slideout({
        'panel': blockMain,
        'menu': blockSidebar,
        'padding': blockSidebarWidth,
        'tolerance': 70,
        'side': 'right', // move sidebar to right
        'touch': false,
        'duration': 200,
    });

    mobileMenuBtn.addEventListener('click', function () {
        console.log('here');
        slideoutSidebar.toggle();
        $('.btn--nav').toggleClass('is-active');
        // $('#mountainsHome').css('position', 'relative');
        window.dispatchEvent(new Event('resize'));
    });

    slideoutSidebar.on('beforeopen', function () {
        blockFixed.addClass('fixed-to-panel--open');
    });

    slideoutSidebar.on('beforeclose', function () {
        blockFixed.removeClass('fixed-to-panel--open');
    });

    function checkOpen(eve) {
        if (slideoutSidebar.isOpen()) {
            eve.preventDefault();
            slideoutSidebar.close();
            $('.btn--nav').toggleClass('is-active');
        }
    }

    function addClick() {
        document.querySelector('#panel').addEventListener('click', checkOpen);
    }

    function removeClick() {
        document.querySelector('#panel').removeEventListener('click', checkOpen);
        // $(window).trigger('resize');
    }

    slideoutSidebar.on('open', addClick);
    slideoutSidebar.on('close', removeClick);

}