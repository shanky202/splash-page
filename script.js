const { body } = document;

function changeBackground(number) {
    // If background is alredy exists
    let previousBackground ;
    if (body.className) {
        previousBackground = body.className;
    }
    // Reset CSS class for body
    body.className = '';
    switch (number){
        case '1' :
            return (previousBackground === 'background-1' ? false : body.className = 'background-1')
        case '2' :
            return (previousBackground === 'background-2' ? false : body.className = 'background-2')
        case '3' :
            return (previousBackground === 'background-3' ? false : body.className = 'background-3')
    }
}