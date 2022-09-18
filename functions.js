const showVillageLocation = document.getElementById('show-village')
const villageMap = document.getElementById('village-map')

showVillageLocation.onclick = () => {
    villageMap.classList.toggle('d-block')
    if(villageMap.classList[6] === 'd-none') {
        villageMap.classList.remove('d-none')
    } else {
        villageMap.classList.add('d-none')
    }
}