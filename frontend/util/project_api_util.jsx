export const fetchProjects = () => {
    return( 
        $.ajax({
            method: 'GET',
            url: '/api/projects',
        })
    );
};

export const searchProjects = (criteria) => {
    return(
        $.ajax({
            method: 'GET',
            url: 'api/projects',
            data: criteria,
        })
    );
};

export const fetchProject = (id) => {
    return(
        $.ajax({
            method: 'GET',
            url: `/api/projects/${id}`
        })
    );
};

export const createProject = (project) => {
    return(
        $.ajax({
            method: 'POST',
            url:'/api/projects',
            data: { project },
        })
    );
};

export const updateProject = (project, id) => {
    if (project instanceof FormData) {
        return( 
            $.ajax({
                method: 'PATCH',
                url:`/api/projects/${id}`,
                data: project,
                processData: false,
                contentType: false,

            })
        );
    } else {
        return(
            $.ajax({
                method: 'PATCH',
                url:`/api/projects/${id}`,
                data: {project},
            })
        );
    }
};

export const deleteProject = (id) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/projects/${id}`
        })
    );
};