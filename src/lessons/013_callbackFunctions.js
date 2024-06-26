/**
 * Callback Functions
 */
function getAnswer(question, yes, no) {
    if (question) {
        yes();
    } else {
        no();
    }
}

function showYes() {
    console.log('TRUE');
}

function showNo() {
    console.log('FALSE');
}

getAnswer(true, showYes, showNo); // TRUE
getAnswer(false, showYes, showNo); // FALSE
getAnswer(12 > 10, showYes, showNo); // TRUE