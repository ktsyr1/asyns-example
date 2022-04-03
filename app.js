let URL = 'https://srflb.vercel.app/api/lb'
/*
    ui
    dom 
        
*/
function ui(json) {
    // display data
    document.querySelector('#sell').textContent = json.sell
    document.querySelector('#buy').textContent = json.buy

    // ui button
    document.querySelector('.srf button').textContent = 'تم التحديث'

    /*
        Waiting for a Timeout
        syntx setTimeout(handler, timeout)
    */
    setTimeout(() => {
        document.querySelector('.srf button').textContent = ' تحديث'
    }, 2000)
}

async function srf() {
    document.querySelector('.srf button').textContent = 'جاري التحديث'

    // fetch data 
    let res = await fetch('https://srflb.vercel.app/api/lb')
    let json = await res.json()

    // ui button and display data
    return ui(json[0])
}
function dark() {
    let body = document.querySelector('body').classList.toggle('dark')
    console.log(body);
}