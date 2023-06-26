$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });





const getSaveaccounts = () => {
    const accountsJSON = localStorage.getItem('accounts')
    try {
        return accountsJSON !== null ? JSON.parse(accountsJSON) : []
    } catch(e) {
        return []
    }
}

const saveaccounts = (accounts) => {
    localStorage.setItem('accounts', JSON.stringify(accounts))
}
let accounts = getSaveaccounts()


document.querySelector('#add-product-form').addEventListener('submit', (e) => {

    e.preventDefault()
    const id = uuidv4()
    const timestamp = moment().valueOf()
    accounts.push({
        id: id,
        name: e.target.elements.firstname.value,
        family: e.target.elements.lastname.value,
        email: e.target.elements.email.value,
        accpass: e.target.elements.username.value,
        exist: true,
        created: timestamp,
        updated: timestamp
    })
    saveaccounts(accounts)
 
    e.target.elements.firstname.value = ''
    e.target.elements.lastname.value = ''
    e.target.elements.email.value = ''
    e.target.elements.username.value = ''
})
window.addEventListener('storage', (e) => {
    if (e.key === 'accounts') {
        accounts = JSON.parse(e.newValue)
        
    }
})