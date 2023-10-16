function customRender() {
   /* const domElement = document.createElement(reactElement.type )
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)*/

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(let x in reactElement.props){
        if(x==='children')continue;
        domElement.setAttribute(x, reactElement.props[x])   
    }
    mainContainer.appendChild(domElement)
     

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target : '_blank'
    },
    children: 'Click me to visit google.com'
} 

const mainContainer = document.querySelector('#root')

customRender()