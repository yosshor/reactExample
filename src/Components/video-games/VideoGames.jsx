

const  getGames = async () => {
    console.log(process.env.RAWG)
    const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG}`)
    if(!res.ok){
        throw new Error("failed to fetch")
    }
    const data = await res.json()
    return data.result
}



export default async function VideoGames(){
    const games = await getGames()
    console.log(getGames)
    return (<div>
        
    </div>)
}