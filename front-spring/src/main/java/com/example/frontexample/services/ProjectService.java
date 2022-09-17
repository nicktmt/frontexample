package com.example.frontexample.services;

import com.example.frontexample.domain.Backlog;
import com.example.frontexample.domain.Project;
import com.example.frontexample.exceptions.ProjectIdException;
import com.example.frontexample.repositories.BacklogRepository;
import com.example.frontexample.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private BacklogRepository backlogRepository;
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject (Project project){
        try{
            String projectID = project.getProjectIdentifier().toUpperCase();
            project.setProjectIdentifier(projectID);

            if(project.getId()==null){
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(projectID);
            }

            if (project.getId() != null){
                project.setBacklog(backlogRepository.findByProjectIdentifier(projectID));
            }

            return projectRepository.save(project);

        }catch (Exception e){
            throw new ProjectIdException("Project ID "+project.getProjectIdentifier().toUpperCase()+" already existed");
        }

    }

    public Project findProjectById(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {

            throw new ProjectIdException("Project ID "+projectId+" doesnot exist");

        }

        return project;
    }

    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    public void deleteProjectById(String projectId){

        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {

            throw new ProjectIdException("Project ID "+projectId+" doesnot exist");

        }

        projectRepository.delete(project);

    }
}
