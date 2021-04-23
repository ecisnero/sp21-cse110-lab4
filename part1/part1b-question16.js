for(const property in statistics) {
    if( (`${property}`.charAt(0) == "r"  )
        || Boolean(`${statistics[property]}` % 2) ) {
            console.log(`${statistics[property]}`);
        }
}