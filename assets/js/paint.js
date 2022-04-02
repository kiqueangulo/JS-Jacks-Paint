function configureListeners() {
    let images = ['pn1', 'pn2', 'pn3', 'pn4', 'pn5', 'pn6', 'pn7', 'pn8', 'pn9'] // select img elements  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        let image = document.getElementById(images[i]);
        image.addEventListener('mouseover', addOpacity);
        image.addEventListener('mouseleave', removeOpacity);
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    this.style.opacity = '0.5';
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     this.style.opacity = '1';

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            price = '$14.99';
            colorName = 'Lime Green';
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            price = '$11.14';
            colorName = 'Medium Brown';
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '$22.99';
            colorName = 'Royal Blue';
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '$13.42';
            colorName = 'Solid Red';
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            price = '$21.98';
            colorName = 'Solid White';
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            price = '$4.99';
            colorName = 'Solid Black';
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$8.22';
            colorName = 'Solid Cyan';
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price = '$11.99';
            colorName = 'Solid Purple';
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99';
            colorName = 'Solid Yellow';
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price'); // select element with corresponding id
        colorPrice.textContent = price; // display price
        
        let color = document.getElementById('color-name'); // select element with corresponding id
        color.textContent = colorName; //display color name
    }
    updatePrice(colorName, price);
}
