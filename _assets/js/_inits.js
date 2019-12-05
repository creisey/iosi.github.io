// ----------------------------------------------
// Imports
// ----------------------------------------------
import anime from 'animejs';
import AOS from 'aos';
import barba from '@barba/core';
import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import InfiniteScroll from './components/_infiniteScroll.js';
import { miscAnchor, miscCycle, miscNavigation } from './components/_miscellaneous.js';
import NavigationScroll from './components/_navigationScroll.js';
import OpacityScroll from './components/_opacityScroll.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
$(() => {

  // Barba
  barba.init({
    transitions: [{
      appear() {
        anime({
          targets: '.transition',
          translateY: '-100%',
          easing: 'easeOutQuart',
          duration: 600,
          delay: 400,
          complete() {
            $('.transition').removeClass('transition-in');
            $('.transition').css('transform', 'translateY(100%)');
          }
        });

        // AOS.init({
        //   duration: 1000,
        //   easing: 'ease',
        //   once: true
        // });

        // if ($('.rellax').length) {
        //   const rellax = new Rellax('.rellax');
        // }

        // const scroll = new SmoothScroll('a[href*="#"]');

        // NavigationScroll.init();
        // OpacityScroll.init();
        // miscAnchor();
        // miscCycle();
        // miscNavigation();

        // if ($('.posts').length && $('.posts__next').length) {
        //   InfiniteScroll.init();
        // }
      },
      leave({ current, next, trigger }) {
        $('.transition').addClass('transition-out');

        return new Promise(resolve => {
          anime({
            targets: '.transition',
            translateY: '-=100%',
            easing: 'easeInQuart',
            duration: 600,
            complete() {
              resolve();
            }
          });
        });
      },
      enter({ current, next, trigger }) {
        $('.transition').removeClass('transition-out').addClass('transition-in');

        window.scrollTo(0, 0);

        $('body').removeClass('js-scrolling-down js-scrolling-up');

        return new Promise(resolve => {
          anime({
            targets: '.transition',
            translateY: '-100%',
            easing: 'easeOutQuart',
            duration: 600,
            delay: 1200,
            complete() {
              $('.transition').removeClass('transition-in');
              $('.transition').css('transform', 'translateY(100%)');
              resolve();
            }
          });
        });
      }
    }],
    views: [{
      namespace: 'contact',
      beforeAppear() {
        console.log('beforeAppear');

        // $.ajax({
        //   url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3980752.1677ed0.62bb6a2ad3ef4dc0a6aad768ab8939ab&count=20&callback=?',
        //   method: 'GET',
        //   dataType: 'jsonp',
        //   success(json) {
        //     const targetEl = $('#instagram');
        //     let article;

        //     json.data.forEach((data, idx) => {
        //       let article = targetEl.children('article').eq(idx);
        //       article.find('a').attr('href', data.link);
        //       article.find('figure').addClass('scale-down').css('background-image', `url(${data.images.standard_resolution.url})`);
        //     });
        //   },
        //   error(error) {
        //     console.error(error);
        //   }
        // });
      },
      afterAppear() {
        console.log('afterAppear');
      },
      beforeLeave() {
        console.log('beforeLeave');
      },
      afterLeave() {
        console.log('afterLeave');
      },
      beforeEnter() {
        console.log('beforeEnter');
      },
      afterEnter() {
        console.log('afterEnter');
      }
    }]
  });

  // barba.hooks.after(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: 'ease',
  //     once: true
  //   });

  //   if ($('.rellax').length) {
  //     const rellax = new Rellax('.rellax');
  //   }

  //   const scroll = new SmoothScroll('a[href*="#"]');

  //   NavigationScroll.init();
  //   OpacityScroll.init();
  //   miscAnchor();
  //   miscCycle();
  //   miscNavigation();

  //   if ($('.posts').length && $('.posts__next').length) {
  //     InfiniteScroll.init();
  //   }
  // });

});
