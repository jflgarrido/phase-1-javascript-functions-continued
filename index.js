function saturdayFun(x) {
    return x ? "This Saturday, I want to " + x + "!": 'This Saturday, I want to roller-skate!';    
}

const mondayWork = y => {
    return y ? "This Monday, I will " + y + ".": "This Monday, I will go to the office."
}
function wrapAdjective(flair = '*') {
    return function(word = 'special') {
        return 'You are ' + flair + word + flair + '!';
    }
}
