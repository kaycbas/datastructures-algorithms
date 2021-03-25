function flatten(multiArr) {
    return multiArr.reduce((flat, ele) => {
        return flat.concat((Array.isArray(ele)) ? flatten(ele) : ele );
    }, []);
}
