import scrollHeader from './lib/scrollHeader';
import burgerMenu from './lib/burgerMenu';
import scrollBtnDown from './lib/scrollBtnDown';
import faqDropDown from './lib/faq';
import './lib/swiperSlider';
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min'


import '../../node_modules/jquery-popup-overlay/jquery.popupoverlay';
import '../../node_modules/jquery-mask-plugin/dist/jquery.mask.min';
import '../../node_modules/jquery-validation/dist/jquery.validate.min';

$(document).scroll( scrollHeader);
$(document).ready(burgerMenu(), scrollBtnDown(), scrollHeader(), faqDropDown());


// MODAL
$('.modal').popup({
  transition: 'all 0.3s',
  outline: true,
  focusdelay: 400,
  vertical: 'top'
});


$('input[type="tel"]').mask('+7 (000) 000-00-00');

jQuery.validator.addMethod('phoneno', function (phoneNumber, element) {
  return this.optional(element) || phoneNumber.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
}, 'Введите Ваш телефон');


function ajaxSend(formName, data) {
  jQuery.ajax({
    type: 'POST',
    url: 'sendmail.php',
    data,
    success() {
      $('.modal').popup('hide');
      $('#thanks').popup('show');
      setTimeout(function () {
        $(formName).trigger('reset');
      }, 2000);
    }
  });
}

$('.form').each(function (index, el) {
  $(el).addClass(`form-${index}`);

  $(`.form-${index}`).validate({
    rules: {
      name: 'required',
      tel: {
        required: true,
        phoneno: true
      }
    },
    messages: {
      name: 'Введите Ваше имя',
      tel: 'Введите Ваш телефон',
    },
    submitHandler(form) {
      const t = $(`.form-${index}`).serialize();
      ajaxSend(`.form-${index}`, t);
    }
  });
});
