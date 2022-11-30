var arr=["Karthik","Bhavani","Sujith","Shivaram","Yuvaraj"]
const btn=document.getElementById("b")
btn.addEventListener('click',myfun,{once:true});
function myfun(){
    let k=1;
    const table=document.getElementById("table")
    for(var i=0;i<arr.length;i++){
        var r=table.insertRow(table.length)
        let c1=r.insertCell(0)
        var c2=r.insertCell(1)
        c1.innerHTML=k
        c2.innerHTML=arr[i]
        k+=1;
}
}