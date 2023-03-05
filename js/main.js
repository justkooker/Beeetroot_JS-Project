'use strict';
// !---------------------------------slow scroll------------------------
function slowScroll(e) {
    e.preventDefault();
    let link = $(e.target);
    let dest = link.attr('href');
    if (link.attr('data-scroll') && $(dest) !== '' && $(dest).offset().top !== undefined) {
        $('html').animate({
            scrollTop: $(dest).offset().top - $('.header').height() + 1
        }, 700)
    }
}

$('.menu__list').click(slowScroll);
$('.banner__btn').click(slowScroll);
$('.up-btn').click(slowScroll);

// !----------------------------------show btn-top------------------------

function showBtnTop() {
    let scrolled = $(window).scrollTop();
    if (scrolled + $('.header').height() < $('.banner').offset().top + $('.banner').height()) {
        $('.up-btn').css('display', 'none');
    } else {
        $('.up-btn').css('display', 'block');
    }
}
$(window).scroll(showBtnTop);

// !------------------------------------menu dots-------------------------

function changeDotBg(e) {
    const targets = [];
    $('[data-target]').each((idx, el) => {
        let id = `#${$(el).attr('id')}`;
        let start = $(id).offset().top - $('.header').height();
        let end = $(id).offset().top + parseInt($(id).css('height')) - $('.header').height();
        const section = {
            id: id,
            start: start,
            end: end,
        };
        targets.push(section);
    });

    let scrolled = $(window).scrollTop();
    $('.menu__link').each((idx, link) => {
        let linkHref = link.attributes.href.value;
        let linkChecked = false;
        $(targets).each((idx, section) => {

            if (linkHref === section.id && scrolled > section.start && scrolled <= section.end) {
                if ($(link).hasClass('menu__link_checked')) {
                    linkChecked = true;
                    return;
                }
                else {
                    $(link).addClass('menu__link_checked')
                    linkChecked = true;
                    return;
                }
            } else if (!linkChecked) {
                $(link).removeClass('menu__link_checked');
            }
        })
    });
}

$(window).scroll(changeDotBg);

// !--------------------------------------burger menu------------------------------

$('.burger').click(() => {
    $('.burger').toggleClass('active-burger');
    $('.burger__line').toggleClass('hide');
    $('.menu').toggleClass('active-menu');
})

// !--------------------------------------shadow-----------------------------------
let windowWidth = $(window).width();
function shadowPosition() {
    $('.info__img').each((idx, el) => {
        if (windowWidth > 2500) {
            if (idx % 2 === 0) {
                $(el).find('.info__image-shadow').css('left', '-57px');
                $(el).find('.info__image-shadow').css('top', '-57px');
                $(el).find('.info__image-shadow').css('background', '#55B7FF');
            } else {
                $(el).find('.info__image-shadow').css('left', '57px');
                $(el).find('.info__image-shadow').css('top', '-57px');
                $(el).find('.info__image-shadow').css('background', '#55B7FF');
            }
        }
        else if (windowWidth < 1284) {
            $(el).find('.info__image-shadow').css('display', 'none');
            $(el).find('img').css('top', '0');
            $(el).find('img').css('left', 0);
        } else if (windowWidth >= 1284 && windowWidth <= 2500) {
            if (idx % 2 === 0) {
                let shadowXLeft = -($(el).offset().left);
                $(el).find('img').css('top', '-57px');
                $(el).find('img').css('left', shadowXLeft);
                $(el).find('.info__image-shadow').css('left', shadowXLeft);
                $(el).find('.info__image-shadow').css('top', '-57px');
                $(el).find('.info__image-shadow').css('background', '#55B7FF');

            } else {
                let shadowXRight = windowWidth - $(el).offset().left - $(el).width();
                $(el).find('img').css('top', '-57px');
                $(el).find('img').css('left', shadowXRight);
                $(el).find('.info__image-shadow').css('left', shadowXRight);
                $(el).find('.info__image-shadow').css('top', '-57px');
                $(el).find('.info__image-shadow').css('background', '#7E5AFF');
            }
        }
    })
}


function movePictureShadow() {
    let scrolled = $(window).scrollTop();
    $('.info__img').each((idx, el) => {
        if (windowWidth < 1284 || windowWidth > 2500) {
            $(el).css('left', 0);
            $(el).css('top', 0);
        } else if (windowWidth >= 1284 && windowWidth <= 1600) {
            if (idx % 2 === 0 && scrolled >= $(el).offset().top + $(el).height() - $(window).height()) {
                $(el).find('img').animate({
                    left: '0',
                    top: '0',
                }, 2000);
            } else if (idx % 2 !== 0 && scrolled >= $(el).offset().top + $(el).height() - $(window).height()) {
                $(el).find('img').animate({
                    left: 0,
                    top: '0',
                }, 2000);
            }
        } else if (windowWidth > 1600 && windowWidth <= 2500) {
            if (idx % 2 === 0 && scrolled >= $(el).offset().top + $(el).height() - $(window).height()) {
                $(el).find('img').animate({
                    left: '0',
                    top: '0',
                }, 2000);
                $(el).find('.info__image-shadow').animate({
                    left: '-57px',
                    top: '-57px',
                }, 4000);
            } else if (idx % 2 !== 0 && scrolled >= $(el).offset().top + $(el).height() - $(window).height()) {
                $(el).find('img').animate({
                    left: 0,
                    top: '0',
                }, 2000);
                $(el).find('.info__image-shadow').animate({
                    left: '57px',
                    top: '-57px',
                }, 4000);
            }
        }
    })
}
$(window).scroll(shadowPosition);
$(window).scroll(movePictureShadow);


// !-----------------------------------modal--------------------------------
const imgSrc = [
    {
        minImg: "./assets/img/gallery/1.webp",
        fullImgSrc: "./assets/img/gallery/full-image/1.webp"
    }, {
        minImg: "./assets/img/gallery/2.webp",
        fullImgSrc: "./assets/img/gallery/full-image/2.webp"
    }, {
        minImg: "./assets/img/gallery/3.webp",
        fullImgSrc: "./assets/img/gallery/full-image/3.webp"
    }, {
        minImg: "./assets/img/gallery/4.webp",
        fullImgSrc: "./assets/img/gallery/full-image/4.webp"
    }, {
        minImg: "./assets/img/gallery/5.webp",
        fullImgSrc: "./assets/img/gallery/full-image/5.webp"
    }, {
        minImg: "./assets/img/gallery/6.webp",
        fullImgSrc: "./assets/img/gallery/full-image/6.webp"
    }, {
        minImg: "./assets/img/gallery/7.webp",
        fullImgSrc: "./assets/img/gallery/full-image/7.webp"
    }, {
        minImg: "./assets/img/gallery/8.webp",
        fullImgSrc: "./assets/img/gallery/full-image/8.webp"
    }, {
        minImg: "./assets/img/gallery/9.webp",
        fullImgSrc: "./assets/img/gallery/full-image/9.webp"
    }, {
        minImg: "./assets/img/gallery/10.webp",
        fullImgSrc: "./assets/img/gallery/full-image/10.webp"
    },
    {
        minImg: "./assets/img/gallery/11.webp",
        fullImgSrc: "./assets/img/gallery/full-image/11.webp"
    }, {
        minImg: "./assets/img/gallery/12.webp",
        fullImgSrc: "./assets/img/gallery/full-image/12.webp"
    }, {
        minImg: "./assets/img/gallery/13.webp",
        fullImgSrc: "./assets/img/gallery/full-image/13.webp"
    }, {
        minImg: "./assets/img/gallery/14.webp",
        fullImgSrc: "./assets/img/gallery/full-image/14.webp"
    }, {
        minImg: "./assets/img/gallery/15.webp",
        fullImgSrc: "./assets/img/gallery/full-image/15.webp"
    }
]
function modal(e) {
    let target = e.target;
    let windowWidth = $(window).width();
    if ($(target).hasClass('gallery__item') && windowWidth > 980) {
        let minImgSrc = $(target).children()[0].currentSrc.split('/').slice(-1).join();
        imgSrc.forEach(el => {
            if (el.fullImgSrc.includes(minImgSrc)) {
                $('.modal__img').attr('src', el.fullImgSrc)
            }
        })
        $('.modal').css('display', 'block');
    }

}
function closeModal(e) {
    let target = e.target;
    if ($(target).hasClass('modal') || $(target).hasClass('modal__btn')) {
        $('.modal').css('display', 'none');
    }
}
function closeModalByEsc(e) {
    if (e.key === 'Escape') {
        $('.modal').css('display', 'none');
    }
}

$('.gallery__list').click(modal);
$('.modal').click(closeModal);
$(window).keydown(closeModalByEsc)

// !-------------------------------see more btn-------------------------------

function getMorePic() {
    let galleryLengthBeforeAdd = $('.gallery__item').length;
    let galleryLengthAfterAdd = $('.gallery__item').length + 5;
    const markup = `
    <div class="gallery__item ${galleryLengthAfterAdd % 2 !== 0 ? 'gallery__item_normal' : ''}">
        <img src="./assets/img/gallery/${galleryLengthBeforeAdd + 1}.webp" alt="" class="gallery__img">
    </div>
    <div class="gallery__item">
        <img src="./assets/img/gallery/${galleryLengthBeforeAdd + 2}.webp" alt="" class="gallery__img">
    </div>
    <div class="gallery__item ${galleryLengthAfterAdd % 2 === 0 ? 'gallery__item_reverse' : ''}">
        <img src="./assets/img/gallery/${galleryLengthBeforeAdd + 3}.webp" alt="" class="gallery__img">
    </div>
    <div class="gallery__item">
        <img src="./assets/img/gallery/${galleryLengthBeforeAdd + 4}.webp" alt="" class="gallery__img">
    </div>
    <div class="gallery__item ">
        <img src="./assets/img/gallery/${galleryLengthBeforeAdd + 5}.webp" alt="" class="gallery__img">
    </div>`
    if (imgSrc.length >= galleryLengthAfterAdd) {
        $(markup).appendTo($('.gallery__list'));
    } else {
        return;
    }

}
$('.gallery__btn').click(getMorePic)

// !---------------------------------Slide Map--------------------------------

let isOpenMap = false;
function toggleMap() {
    let formHeight = $('.form').css('height');
    $('.contact__map').css('height', formHeight)
    if (!isOpenMap) {
        $('.contact__map').animate({
            left: 0
        }, 1500);
        disableBtnMap(1500);
        isOpenMap = !isOpenMap;
        return;
    }
    $('.contact__map').animate({
        left: "-100%",
    }, 1500);
    isOpenMap = !isOpenMap;
    disableBtnMap(1500);
    return;
}

function disableBtnMap(duration) {
    $('.contact__btn').attr('disabled', true)
    setTimeout(() => {
        $('.contact__btn').attr('disabled', false)
    }, duration);
}

$('.contact__btn').click(toggleMap);