const cnv = document.querySelector('canvas');
const ctx = cnv.getContext('2d');

var filters = 
{
    opacity: 100,
    sepia: 0,
    blur: 0,
    contrast: 100,
    invert: 0,
    saturate: 100,
    brightness: 100,
    grayscale: 0,
    aut: 0
};

const image = new Image;

var upload = false;

function readImage() 
{
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) 
        {
            image.src = e.target.result;
            document.querySelector("#file").style.display='none';
            document.querySelector("#preview").style.display='block';
            document.querySelector("#preview").style.width = image.width + 'px';
            document.querySelector("#preview").style.height = image.height + 'px';
            document.querySelector("#preview").width = image.width;
            document.querySelector("#preview").height = image.height;
            upload = true;
            render();
        };       
        file.readAsDataURL(this.files[0]);
    }
}
document.getElementById("photo").addEventListener("change", readImage, false);

setInterval(() => {
    let change = document.querySelector('#change').value;
    document.querySelector('#inten').innerText = change + '%';
    if(filters.aut != 0)
    {
        switch(filters.aut)
        {
            case 1:
                filters.opacity = parseInt(change);
                break;
            case 2:
                filters.sepia = parseInt(change);
                break;
            case 3:
                filters.blur = parseInt(change);
                break;
            case 4:
                filters.contrast = parseInt(change);
                break;   
            case 5:
                filters.invert = parseInt(change);
                break;  
            case 6:
                filters.saturate = parseInt(change);
                break; 
            case 7:
                filters.brightness = parseInt(change);
                break;     
            case 8:
                filters.grayscale = parseInt(change);
                break;                                                               
        }
    }
    edit();
}, 50);

function apply(id)
{
    if(upload)
    {
        filters.aut = id;
        if(id == 1)
        {
            document.querySelector('#change').value = filters.opacity;
            document.querySelector('#usando').innerHTML = 'Filtro: Opacity';
        }
        if(id == 2)
        {
            document.querySelector('#change').value = filters.sepia;
            document.querySelector('#usando').innerHTML = 'Filtro: Sepia';
        }
        if(id == 3)
        {
            document.querySelector('#change').value = filters.blur;
            document.querySelector('#usando').innerHTML = 'Filtro: Blur';
        }
        if(id == 4)
        {
            document.querySelector('#change').value = filters.contrast;
            document.querySelector('#usando').innerHTML = 'Filtro: Contrast';
        }
        if(id == 5)
        {
            document.querySelector('#change').value = filters.invert;
            document.querySelector('#usando').innerHTML = 'Filtro: Invert';
        }
        if(id == 6)
        {
            document.querySelector('#change').value = filters.saturate;
            document.querySelector('#usando').innerHTML = 'Filtro: Saturate';
        }
        if(id == 7)
        {
            document.querySelector('#change').value = filters.brightness;
            document.querySelector('#usando').innerHTML = 'Filtro: Brightness';
        }
        if(id == 8)
        {
            document.querySelector('#change').value = filters.grayscale;
            document.querySelector('#usando').innerHTML = 'Filtro: Grayscale';
        }
    }else
    {
        alert('Faça o upload de uma imagem primeiro');
    }
}

function edit()
{
    if(filters.aut != 0 && upload)
    {
        switch(filters.aut)
        {
            case 1:
                ctx.filter = 'opacity('+filters.opacity+'%)';
                break;
            case 2:
                ctx.filter = 'sepia('+filters.sepia+'%)';
                break;
            case 3:
                ctx.filter = 'blur('+filters.blur+'px)';
                break;
            case 4:
                ctx.filter = 'contrast('+filters.contrast+'%)';
                break; 
            case 5:
                ctx.filter = 'invert('+filters.invert+'%)';
                break;  
            case 6:
                ctx.filter = 'saturate('+filters.saturate+'%)';
                break;  
            case 7:
                ctx.filter = 'brightness('+filters.brightness+'%)';
                break;  
            case 8:
                ctx.filter = 'grayscale('+filters.grayscale+'%)';
                break;                                                                                
        }
        render();
    }
}

function render()
{
    if(upload)
    {
        ctx.clearRect(0,0,cnv.width,cnv.height);
        ctx.drawImage(image,0,0,image.width,image.height,0,0,image.width,image.height);
    }
}

function effect()
{
    if(upload)
    {
        image.src = cnv.toDataURL();
        filters = 
        {
            opacity: 100,
            sepia: 0,
            blur: 0,
            contrast: 100,
            invert: 0,
            saturate: 100,
            brightness: 100,
            grayscale: 0,
            aut: 0
        };
    }
}

function save()
{
    if(upload)
    {
        document.querySelector('#savebtn').href = image.src;
    }else
    {
        alert('Faça o upload de uma imagem primeiro');
    }
}