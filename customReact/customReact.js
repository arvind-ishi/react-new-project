 function customRender(reactElement , container){

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement
    .Children  
    domElement.setAttribute('href',reactElement.props.href)
  
    domElement.setAttribute('target',reactElement.props.target)


    container.appendChild(domElement)




 }



 const reactElement = {

    type : 'a',
    props: {
         href : 'http://google.com',
         target: '_blank'
    },
    Children:'click the google '
 }



 const maincontainer = document.getElementById('root')

 customRender(reactElement, maincontainer)