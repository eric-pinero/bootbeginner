export const fetchProjects = () => {
    return( 
        $.ajax({
            method: 'GET',
            url: '/api/projects',
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

export const updateProject = (formData, id) => {
    return( 
        $.ajax({
            method: 'PATCH',
            url:`/api/projects/${id}`,
            data: formData,
            processData: false,
            contentType: false,

        })
    );
};

export const deleteProject = (id) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/projects/${id}`
        })
    );
};