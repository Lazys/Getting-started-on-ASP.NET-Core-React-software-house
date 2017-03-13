using SoftwareHouse.Contract.DataContracts;
using SoftwareHouse.Contract.Interfaces;
using SoftwareHouse.DataAccess.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using SoftwareHouse.Contract.Common;

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
            return _dbContext.Projects
                .Where(x => x.IsDeleted == false)
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

        public ProjectDto GetByName(string projectName)
        {
            var existingProject = _dbContext.Projects.FirstOrDefault(x => x.Name.ToLower() == projectName.ToLower());

            if (existingProject != null)
            {
                return new ProjectDto
                {
                    Id = existingProject.Id,
                    Name = existingProject.Name,
                    Description = existingProject.Description,
                    IsDeleted = existingProject.IsDeleted,
                    CreationDate = existingProject.CreationDate
                };
            }

            return null;
        }

        public void Add(AddProjectDto project)
        {
            _dbContext.Projects.Add(new Project
            {
                Name = project.Name,
                Description = project.Description,
                IsDeleted = false,
                CreationDate = DateTime.Now
            });

            _dbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var project = _dbContext.Projects.First(x => x.Id == id);
            project.IsDeleted = true;

            _dbContext.SaveChanges();
        }

        public ProjectDto GetById(int id)
        {
            var project = _dbContext.Projects.First(x => x.Id == id);

            return new ProjectDto
            {
                Id = project.Id,
                Name = project.Name,
                Description = project.Description,
                CreationDate = project.CreationDate,
                IsDeleted = project.IsDeleted
            };
        }
    }
}