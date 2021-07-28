function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById("txtano")
    var res=document.getElementById("res")
        if(fano.value.length==0||Number(fano.value)>ano){
            window.alert("Verifique os dados e tente novamente.")
        }
        else{
            var fsex=document.getElementsByName("radsex")
            var idade=ano-Number(fano.value)
            var genero=''
            var img=document.createElement('img')
            img.setAttribute('id','foto')
                if(fsex[0].checked){
                    genero="Homem"
                    if(idade>=0&&idade<=10){
                        //Criança
                        img.setAttribute('src','./Images/foto-bebe-m.png')
                    }
                    else if(idade<21){
                        //Jovem
                        img.setAttribute('src','./Images/foto-jovem-m.png')
                    }
                    else if(idade<50){
                        //Adulto
                        img.setAttribute('src','./Images/foto-adulto-m.png')
                    }
                    else {
                        //Idoso
                        img.setAttribute('src','./Images/foto-idoso-m.png')
                    }
                }
                else{
                    genero="Mulher"
                    if(idade>=0&&idade<=10){
                        //Criança
                        img.setAttribute('src','./Images/foto-bebe-f.png')
                    }
                    else if(idade<21){
                        //Jovem
                        img.setAttribute('src','./Images/foto-jovem-f.png')
                    }
                    else if(idade<50){
                        //Adulto
                        img.setAttribute('src','./Images/foto-adulto-f.png')
                    }
                    else {
                        //Idoso
                        img.setAttribute('src','./Images/foto-idoso-f.png')

                    }
                }
                res.style.textAlign='center'
                res.innerHTML=`Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
        }
}