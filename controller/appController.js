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
        name: 'New Project',
        listProjects
    })
}

exports.newProject = async (req, res) => {
    const listProjects = await Projects.findAll();
    const { name, url } = req.body
    let errors = []

    if (!name) { errors.push({ 'text': 'Add name' }) }

    if (errors.length > 0) {
        res.render('newProject', { title: 'New Project', title: 'New Project', errors, listProjects })
    } else {
        const proyecto = await Projects.create({ name, url, listProjects });
        res.redirect('/')
    }

}

exports.projectController = async (req, res, next) => {
    const listProjectsPromise = Projects.findAll();
    const projectPromise = Projects.findOne({
        where: {
            url: req.params.url
        }
    });

    const [listProjects, project] = await Promise.all([listProjectsPromise, projectPromise])
    if (!project) return next()

    //renderizamos la vista
    res.render('todoProjects', {
        name: "Lista de tareas",
        title: project.name,
        project,
        listProjects
    })
}

exports.editProject = async (req, res) => {
    const listProjectsPromise = Projects.findAll();
    const projectPromise = Projects.findOne({
        where: {
            id: req.params.id
        }
    });

    const [listProjects, project] = await Promise.all([listProjectsPromise, projectPromise])

    res.render('newProject', {
        name: "Edit Project",
        title: "Edit",
        listProjects,
        project
    })
}

exports.updateProject = async (req, res) => {
    const listProjects = await Projects.findAll();
    const { name, url } = req.body
    let errors = []

    if (!name) { errors.push({ 'text': 'Add name' }) }

    if (errors.length > 0) {
        res.render('newProject', { title: 'New Project', title: 'New Project', errors, listProjects })
    } else {
        await Projects.update({ name: name }, { where: { id: req.params.id } });
        res.redirect('/')
    }

}