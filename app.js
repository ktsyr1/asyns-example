/*
    1- theme
    2- button onclick of fatch data
        - dom load
        - fatch data for api
        - display data
        - alert dane
        - Waiting 2s 
        - finished and rest button
**/
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
