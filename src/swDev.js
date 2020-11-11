//register sw that in public folder
//process.env is intersting it gives public url...public fi=older ka url
//what is respose.scope /////scope of the response

export default function swDev(){
    let swUrl=`${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((response)=>{
console.log('resposne',response)
    })
}