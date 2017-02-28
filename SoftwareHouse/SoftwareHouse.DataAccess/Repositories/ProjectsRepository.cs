using SoftwareHouse.Contract.DataContracts;
using SoftwareHouse.Contract.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SoftwareHouse.DataAccess.Repositories
{
    public class ProjectsRepository : IProjectsRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ProjectsRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<ProjectDto> GetAll()
        {
            return _dbContext.Projects.Select(x => new ProjectDto
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