using System.Collections.Generic;
using SoftwareHouse.Contract.Interfaces;
using SoftwareHouse.Contract.DataContracts;

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
    }
}