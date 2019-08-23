console.log('>> showcasing global variable');

var topic = 'JavaScript'

if ( topic ) {
   var topic = 'React'
   console.log('block', topic) // block React
}

console.log('global', topic) // global React


console.log('>>> showcasing local variable');

var topic = 'JavaScript';

if ( topic ) {
    let topic = 'React'
    console.log('block', topic) // React
}

console.log('global', topic)

console.log('>>> showcasing local variable in loops');

var div, container = document.getElementById('container')

for ( var i = 0; i < 5; i++ ) {
    div = document.createElement('div')
    div.onclick = function() {
        alert('This is box #' + i)
    }
    container.appendChild(div)
}

var div, container = document.getElemntById('container')

for (let i = 0; i < 5; i++ ) {
    div = document.createElement('div'
        div.onclick = function(&i) {
            alert('This is box #: ' + i)
        }
        container.appendChild(div)
}
