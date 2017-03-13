using System.Collections.Generic;
using SoftwareHouse.Contract.Interfaces;
using SoftwareHouse.Contract.DataContracts;
using SoftwareHouse.Contract.Common;
using System;
using System.Linq;

namespace SoftwareHouse.Services.Services
{
    public class ProjectsService : IProjectsService
    {
        private readonly IProjectsRepository _projectsRepository;

        public ProjectsService(IProjectsRepository projectsRepository)
        {
            _projectsRepository = projectsRepository;
        }

        public List<ProjectDto> GetAll()
        {
            return _projectsRepository.GetAll();
        }

        public CommonResult Add(AddProjectDto project)
        {
            if (string.IsNullOrEmpty(project.Name))
            {
                return CommonResult.Failure("Cannot create project without name provided.");
            }

            if (string.IsNullOrEmpty(project.Description))
            {
                return CommonResult.Failure("Cannot create project without description provided.");
            }

            var existingProject = _projectsRepository.GetByName(project.Name);

            if (existingProject != null && !existingProject.IsDeleted && existingProject.Name == project.Name)
            {
                return CommonResult.Failure("Project name already exists.");
            }

            _projectsRepository.Add(project);

            return CommonResult.Success();
        }

        public void Delete(int id)
        {
            _projectsRepository.Delete(id);
        }

        public CommonResult<ProjectDto> GetById(int id)
        {
            var project = _projectsRepository.GetById(id);

            if (project == null || project.IsDeleted)
            {
                return CommonResult<ProjectDto>.Failure<ProjectDto>("Problem occured during fetching project with given id.");
            }
            else
            {
                return CommonResult<ProjectDto>.Success<ProjectDto>(project);
            }
        }
    }
}