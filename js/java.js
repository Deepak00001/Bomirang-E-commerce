function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function searchcat() {
    var input = document.getElementById('search').value;
    if(input=='Mens'||input=='mens'||input=='shirt'||input=='Shirt'||input=='jeans'||input=='Jeans'||input=='lower'||input=='Lover'||input=='T-shirt'||input=='t-shirt'){
        location = "mens.html";
    }
    else if(input=='Women'||input=='women'||input=='saree'||input=='Saree'||input=='kurti'||input=='Kurti'||input=='laging'||input=='Laging'||input=='top'||input=='Top'){
        location = "women.html";
    }
    else if(input=='Kids'||input=='kids'||input=='pant'||input=='Pant'){
      location = "kids.html";
    }
    else if(input=='furniture'||input=='Furniture'){
      location = "furniture.html";
    }
    else if(input=='shoes'||input=='Shoes'){
      location = "shoes.html";
    }
    else if(input=='electronic'||input=='Electronic'||input=='electronics'||input=='tv'||input=='fridge'||input=='washing machine'||input=='ac'){
      location = "electronic.html";
    }
    else{
      alert('Search not found');
    }
  }