
async function srf() {
    document.querySelector('.srf button').textContent =  'جاري التحديث'

    let res = await fetch('https://srflb.vercel.app/api/lb')
    let json = await res.json()
    console.log(json[0]);
    document.querySelector('#sell').textContent = json[0].sell
    document.querySelector('#buy').textContent = json[0].buy
    document.querySelector('.srf button').textContent = 'تم التحديث'
     
    setTimeout(() => {
        document.querySelector('.srf button').textContent =  ' تحديث'
    
},2000)
} 