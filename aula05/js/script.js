//fazer referência aos controles html do formulário
const btn = document.getElementById("btnLogin");
const txtuser = document.getElementById("txtUser");
const txtpass = document.getElementById("txtPassword");

btn.onclick = ()=>{
    //validação dos campos usuario e senha
    if(txtuser.value.trim()=="" || txtpass.value.trim()==""){
        return alert("Nome de usuário ou senha obrigatório");
    }
    else{
        /*
        Vamos usar o comando fetch(buscar) para fazer uma
        requisão a nossa APIe, realizar o login. Passaremos
        o nome de usuário e senha.
        */
       fetch("http://127.0.0.1:30021/users/login",{
            method:"POST",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                nomeusuario:txtuser.value,
                senha:txtpass.value
            })
       }).then((response)=>response.json())
       .then((dados)=>{
        console.log(dados);
       }).catch((error)=>console.error(`Não foi possivel requisitar a API -> $(error)`))
    }
}