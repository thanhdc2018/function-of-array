    // let myColor = ["Red", "Green", "White", "Black"];
    // let a = "";
    // for ( let i = 0; i < myColor.length; i ++){
    //     a =  a + "," + a[i];
    // }
    // console.log(a);
    let str = "112366561223116";
    let arr = str.split("");
    //console.log (arr);
    let b = [];
    let c = "";
    for (let i = 0; i < arr.length; i ++){
        if ((arr[i] % 2 === 0) && (arr[i+1] % 2 === 0)){
            b.push(arr[i],'-');
        }else{
            b.push(arr[i]);
        }
    }
    b.toString();

    let str1 = "sâfasffaSAAAFASAFA";

