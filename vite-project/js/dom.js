import{normalCats, specialCats, rareCats, superRare, uberRare, legendCats, legendRares} from './units & rarities'
const allCats = [normalCats, specialCats, rareCats, superRare, uberRare, legendCats, legendRares]

function rarityFilter() {
    allCats.normalCats.addEventListener("click", rarityFilter){
        const normalFilter = allCats.filter((normal) => normal.name.includes("Normal"))
    }
}

function cardstyle() {
    
}