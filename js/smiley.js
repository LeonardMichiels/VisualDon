
    const bckgrd = document.getElementById('bckgrd')
    let isBlue = true
    bckgrd.addEventListener('click', () => {
        console.log("click")
      isBlue = !isBlue
      bckgrd.setAttribute('fill', isBlue ? 'blue' : 'red')
    })
    

    // content d="M150,220 Q128,250 230,225"
    const smile = document.getElementById('smile')
    const text =document.getElementById('text')
    let sad="M150,230 Q128,128 230,225"
    let happy="M150,220 Q128,250 230,225"
    let isHappy=false
     face.addEventListener('mouseover', () => {
      isHappy = true

      smile.setAttribute('d',happy)
      text.innerHTML="Me gusta mucho !"
    })
 
    face.addEventListener('mouseout', () => {
      isHappy = false

      smile.setAttribute('d',sad)
      text.innerHTML="No me Gusta!"
    })
