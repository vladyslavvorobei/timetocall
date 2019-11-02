function faqDropDown() {
  const question = $('.faq__question');
  const questionClass = 'faq__question--active';
  const answer = $('.faq__answer');
  const answerClass = 'faq__answer--active';

  function firstChildActive() {
    question.slice(0,1).addClass(questionClass);
    answer.slice(0,1).addClass(answerClass);
  }

  function addClass() {
    if ($(this).hasClass(questionClass)) {
      $(this).removeClass(questionClass);
    }
    else {
      question.removeClass(questionClass);
      $(this).addClass(questionClass);
    }
    $(this).slice(0,1).addClass(answerClass);
    $(this).next().slideToggle();
    answer.not($(this).next()).slideUp();
  }

  firstChildActive();
  question.click(addClass);
}

module.exports = faqDropDown;
