const Projects = require('../models/Projects')

exports.appHome = async (req, res) => {
    const listProjects = await Projects.findAll();

    res.render('index', {
        title: "Home",
        listProjects
    })
}


exports.appNewProject = async (req, res) => {
    const listProjects = await Projects.findAll();
    res.render('newProject', {
        title: "New-Project",
        listProjects
    })
}

exports.newProject = async (req, res) => {
    const listProjects = await Projects.findAll();
    const { name, url } = req.body
    let errors = []

    if (!name) { errors.push({ 'text': 'Add name' }) }

    if (errors.length > 0) {
        res.render('newProject', { title: 'New Project', errors, listProjects })
    } else {
        const proyecto = await Projects.create({ name, url, listProjects });
        res.redirect('/')
    }

}