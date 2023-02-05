'use strict'

$(onInit)

function onInit() {
    $('.user-question').on('input', debounce(onGetAns, 500))
}

function onGetAns(ev) {
    console.log('getting')
    const quest = $('.user-question').val()
    if (quest.length >= 3 && quest.endsWith('?')) {
        getAns(renderAns)
    }
}

function renderAns({ answer, image }) {
    $('.answer').html(answer)
    $('.res-img').attr('src', image)
    checkAnswer(answer)
}

function checkAnswer(ans) {
    if (ans === 'yes') getJoke(renderJoke)
    else getDogImg(renderDogImg)
}

function renderJoke({ value: joke }) {
    $(".joke").html(joke) 
}

function renderDogImg({ message: dogImg }) {
    $('.dog-img').attr('src', dogImg)
}
