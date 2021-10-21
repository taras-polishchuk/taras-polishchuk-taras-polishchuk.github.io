function firstNonConsecutive (arr) {
    let num;
    arr.forEach((item, i) => {
        // console.log(item, i);
        if(item != (arr[i+1] + 1)) {
            console.log('fuu');
            num = item;
        } else {
            num = item;
        }
    });
    console.log(num);
    return num;
}

firstNonConsecutive([1,2,3,4,6,7,8]);