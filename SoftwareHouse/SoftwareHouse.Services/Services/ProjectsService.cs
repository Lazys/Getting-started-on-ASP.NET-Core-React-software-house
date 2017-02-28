using System.Collections.Generic;
using SoftwareHouse.Contract.Interfaces;
using SoftwareHouse.Contract.DataContracts;
using SoftwareHouse.Contract.Common;

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

        public CommonResult Add(ProjectDto project)
        {
            var nameExists = _projectsRepository.GetByName(project.Name) == null ? false : true;

            if (nameExists)
            {
                return CommonResult.Failure("Project name already exists");
            }

            _projectsRepository.Add(project);

            return CommonResult.Success();
        }
    }
}