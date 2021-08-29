exports.appHome = (req, res) => res.render('index', {
    title: "Home"
})

exports.appNewProject = (req, res) => res.render('newProject', {
    title: "New Project"
})

exports.newProject = (req, res) => {
    const { name } = req.body
    let errors = []
    console.log(name)
    console.log(errors.length)

    if (!name) { errors.push({ 'text': 'Add name' }) }

    errors.length > 0 ?
        res.render('newProject', { title: 'New Project', errors })
        : console.log("hola")
}