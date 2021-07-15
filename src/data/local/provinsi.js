const provinsi =()=> {
    const getDataProvIndo = fetch(`https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=Provinsi,Kasus_Posi,Kasus_Semb,Kasus_Meni&outSR=4326&f=json`)
        .then(results => results.json())
        .then(results => results.features)
        .then(data => {
            data.forEach(e => {
                const data = e.attributes;
                const tbProv = document.querySelector('.tb-prov');
                tbProv.innerHTML += showDataProv(data);
            });
        });

        function showDataProv(result) {
            return `
                <tr height="50px">
                    <td>${result.Provinsi}</td>
                    <td class="color-positif">${result.Kasus_Posi}</td>
                    <td class="color-sembuh">${result.Kasus_Semb}</td>
                    <td class="color-meninggal">${result.Kasus_Meni}</td>
                </tr>
            `
        }
}
export default provinsi;