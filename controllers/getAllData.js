import {startups} from '../data/data.js'

const getAllData = (req,res) => {
    const {industry,country,continent,has_mvp,is_seeking_funding} = req.query
    let filteredStartups = startups
    if(industry){
        filteredStartups = filteredStartups.filter(startup => startup.industry.toLowerCase() === industry.toLowerCase())
    }
    if(country){
        filteredStartups = filteredStartups.filter(startup => startup.country.toLowerCase() === country.toLowerCase())
    }
    if(continent){
        filteredStartups = filteredStartups.filter(startup => startup.continent.toLowerCase() === continent.toLowerCase())
    }
    if(has_mvp !== undefined){
        filteredStartups = filteredStartups.filter(startup => startup.has_mvp === JSON.parse(has_mvp.toLowerCase()))
    }
    if(is_seeking_funding !== undefined){
        filteredStartups = filteredStartups.filter(startup => startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase()))
    }
    res.json(filteredStartups)}

export default getAllData