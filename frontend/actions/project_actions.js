import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveProjects = (projects) => {
    return {
        type: RECEIVE_PROJECTS,
        projects,
    };
};

const receiveProject = ({project, creator, category}) => {
    return {
        type: RECEIVE_PROJECT,
        project,
        creator,
        category,
    };
};

const removeProject = (project) => {
    const projectId = project.id;
    return {
        type: REMOVE_PROJECT,
        projectId,
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors,
    };
};

export const requestProjects = () => {
    return (dispatch) => {
        return APIUtil.fetchProjects().then(
            (projects) => dispatch(receiveProjects(projects)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const requestProject = (projectId) => {
    return (dispatch) => {
        return APIUtil.fetchProject(projectId).then(
            (payload) => dispatch(receiveProject(payload)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const createProject = (project) => {
    return (dispatch) => {
        return APIUtil.createProject(project).then(
            (newProject) => dispatch(receiveProject(newProject)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const updateProject = (formData, id) => {
    debugger
    return (dispatch) => {
        return APIUtil.updateProject(formData, id).then(
            (updatedProject) => dispatch(receiveProject(updatedProject)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const deleteProject = (projectId) => {
    return (dispatch) => {
        return APIUtil.deleteProject(projectId).then(
            (removedProject) => dispatch(removeProject(removedProject))
        );
    };
};
