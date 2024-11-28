const bcrypt = require('bcrypt')

async function pass() {

    const value = await bcrypt.hash('hcmutK241', 10)
    console.log(value)
    const isMatch = await bcrypt.compare('hcmutK241', '$2b$10$4TvqF.0q7GjPCR/sP.qylOzLhD6lWFdioqjmTsN5t0lLv./EgrGiq');
    console.log(isMatch)
}
pass()