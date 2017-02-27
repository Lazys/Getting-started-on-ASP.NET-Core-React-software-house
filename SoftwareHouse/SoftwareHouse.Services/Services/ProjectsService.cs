using System.Collections.Generic;
using SoftwareHouse.Services.DataContracts;
using SoftwareHouse.Services.Interfaces;
using SoftwareHouse.DataAccess.Interfaces;
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
            return _projectsRepository.GetAll()
                                      .Select(x => new ProjectDto
                                      {
                                          Id = x.Id,
                                          Name = x.Name,
                                          Description = x.Description,
                                          IsDeleted = x.IsDeleted,
                                          CreationDate = x.CreationDate
                                      })
                                      .ToList();
        }
    }
}