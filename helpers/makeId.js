
function makeId(array) {
    let body = array.body
    let newId = array.params.id
    let result = []
    if (body.devId.length > 1) {
        body.devId.forEach(id => {
            result.push({
                devId: id,
                projectId: newId,
                position: body.position
            })
        })
    } else {
        result.push({
            devId: body.devId,
            projectId: newId,
            position: body.position
        })
    }
    return result
}

module.exports = makeId