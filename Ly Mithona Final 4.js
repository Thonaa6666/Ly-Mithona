function fetchData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Data fetched! Student Name: Ly mithona');
        }, 1000);
    });
}

async function fetchAndProcessData() {
    try {
        console.log('Student Name: Ly Mithona');
        console.log('Using async/await:');
        const data = await fetchData();
        console.log(data);
        const processed = 'Processing data...';
        console.log(processed);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndProcessData();
