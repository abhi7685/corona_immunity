replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {

        if (element.textContent.match(/(coronavirus|corona virus|covid-19|covid19|covid|corona)/gi)) {

    // If you want to replace 'coronavirus' with a black bar:
                // const newElement = document.createElement('span')
                // newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
                // '<span style="background-color: black; color: black;">$1</span>')
               // element.replaceWith(newElement)

    // If you want to remove all mentions of coronavirus:
        element.parentElement.remove()

  
        }
    }
}







