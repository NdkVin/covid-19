const positifglobal =() => {


    const getDataDied = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const meninggal = document.querySelector('.positif-global');
            meninggal.innerHTML = results.confirmed.value;
        })
        .catch(error => {
            console.log(error);
        });;


}
export default positifglobal;