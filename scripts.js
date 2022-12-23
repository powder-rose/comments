let textarea = document.querySelector('.textarea')
let btn = document.querySelector('.btn')
let commentWindow = document.querySelector('.textwindow')

let comment = ''

const newMessage = () => {
    
    let message = document.createElement('div');
    message.classList.add('message')
    commentWindow.append(message);

    const checkSpam = (str) => {
        comment = textarea.value + comment
        str = comment.toLowerCase()
    
     if (str.includes("xxx") || str.includes("viagra") === true) {
         str = str.replace("xxx", "***")
         str = str.replace("viagra", "***")
        message.innerHTML = str
     }
         
        message.innerHTML = str
     }
     checkSpam()

     comment = ''
    
    }



const resetValue = () => {
    textarea.value = ''
}


btn.addEventListener('click', newMessage)
btn.addEventListener('click', resetValue)

