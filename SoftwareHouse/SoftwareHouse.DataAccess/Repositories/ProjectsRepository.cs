using SoftwareHouse.DataAccess.Interfaces;
using SoftwareHouse.DataAccess.Models;
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

        public List<Project> GetAll()
        {
            return _dbContext.Projects.ToList();
        }
    }
}