function add(){
    const size=parseInt(prompt("enter the size of the array"));

    function inputarr(){
        let array=[];
        for(let i=0;i<size;i++){
            let row=[];
            for (let j=0;j<size;j++){
                row.push(parseFloat(prompt("enter the elements of array:")));
            }
            array.push(row);
        }
        return array;
    }
    const array1=inputarr("enter the element of 1st array");
    const array2=inputarr("enter the element of 2nd array");

    const sumarr=[];
    for(let i=0;i<size;i++){
        const row=[];
        for(let j=0;j<size;j++){
            row.push(array1[i][j]+array2[i][j]);
        }
        sumarr.push(row);

    }
    document.write("<br>1st array: "+array1);
    document.write("<br>2nd array: "+array2);
    document.write("<br>sum of arrays: "+sumarr);


}