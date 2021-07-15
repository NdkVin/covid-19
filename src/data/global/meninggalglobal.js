const meninggalglobal= () =>{


    const getDataDied = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const meninggal = document.querySelector('.meninggal-global');
            meninggal.innerHTML = results.deaths.value;
        })
        .catch(error => {
            console.log(error);
        });;


}
export default meninggalglobal;