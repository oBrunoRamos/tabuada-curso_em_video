function contar(){
    var mlt = document.getElementById('mlt')
    var res = document.getElementById('tab')
    
    if(mlt.value == ''){
        window.alert('Ação não pode ser feita, não indetificamos operadores válidos.')
    } else {
        let m =Number(mlt.value)
        res.innerHTML = ''
       for(var i=0;i<=10;i++){
            let item = document.createElement('option')
            item.text = `${m} x ${i} = ${m*i}`
            item.value = `tab${i}`
            res.appendChild(item)
        }
    }
} 