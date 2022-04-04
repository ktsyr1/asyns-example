let URL = 'https://srflb.vercel.app/api/lb'
/*
    ui
    dom 
        
*/
function dark() {
    document.querySelector('body').classList.toggle('dark')
}

async function srf() {
    let btn = document.querySelector('.srf button')
    btn.textContent = 'Loading...'
    let res = await fetch(URL)
    let data = await res.json()

    document.querySelector('#sell').innerHTML = data[0].sell
    document.querySelector('#buy').textContent = data[0].buy
    // Waiting 
    btn.textContent = 'تم التحديث'
    setTimeout(()=>btn.textContent = 'Refresh', 3000)
}