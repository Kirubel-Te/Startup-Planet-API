import {startups} from '../data/data.js'

const DataByParams = (req,res) => {
    const {field,term} = req.params
    const validFields = ['industry', 'country', 'continent']
    if(!validFields.includes(field)){
        return res.status(400).json({error: 'Invalid search field'})
    }
    const filteredStartups = startups.filter(startup => startup[field].toLowerCase() === term.toLowerCase())
    res.json(filteredStartups)
}

export default DataByParams