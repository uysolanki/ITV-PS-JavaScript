        const headingElement1=document.querySelector('#one')
        headingElement1.innerHTML="Welcome to FSD"
        headingElement1.style.setProperty('background-color','yellow')
        headingElement1.style.setProperty('color','Red')
        headingElement1.style.setProperty('font-weight','bold')
        headingElement1.style.setProperty('padding','20px')
 
 
        const paraElement2=document.querySelector('#two')
        paraElement2.addEventListener('click',display);
 
 
        const paraElement3=document.querySelector('#three')
        paraElement3.addEventListener('mouseenter',display2)
 
        function display()
        {
         paraElement2.classList.add('heading')
        }
 
        function display2()
        {
        paraElement3.classList.add('heading')
        }
  