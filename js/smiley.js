
    const bckgrd = document.getElementById('bckgrd')
    let isBlue = true
    bckgrd.addEventListener('click', () => {
        console.log("click")
      isBlue = !isBlue
      bckgrd.setAttribute('fill', isBlue ? 'blue' : 'red')
    })
    