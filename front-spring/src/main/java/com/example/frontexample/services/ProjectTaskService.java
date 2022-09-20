package com.example.frontexample.services;

import com.example.frontexample.domain.Backlog;
import com.example.frontexample.domain.ProjectTask;
import com.example.frontexample.repositories.BacklogRepository;
import com.example.frontexample.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask){
        //PTS to be added to sepecific project, project != null, BL exists
        Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);

        //set the bl to pt
        projectTask.setBacklog(backlog);

        //we want our project sequence to be like this IDPRO-1  IDPRO-2
        Integer BacklogSequence = backlog.getPTSequence();

        //Update the BL Sequence
        BacklogSequence++;

        //Add sequence to project Task
        projectTask.setProjectSequence(backlog.getProjectIdentifier()+"-"+BacklogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);
        //Initial priority when priority null
        if (projectTask.getPriority() ==0 || projectTask.getPriority() == null){
            projectTask.setPriority(3);
        }
        //Initial status when status is null
        if (projectTask.getStatus()=="" || projectTask.getStatus() == null){
            projectTask.setStatus("TO_DO");
        }
        return projectTaskRepository.save(projectTask);

    }
}
