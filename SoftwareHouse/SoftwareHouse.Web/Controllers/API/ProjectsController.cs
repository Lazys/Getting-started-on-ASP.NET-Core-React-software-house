using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoftwareHouse.Contract.DataContracts;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SoftwareHouse.Web.Controllers.API
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        [HttpGet]
        [Authorize]
        public IEnumerable<ProjectDto> Get()
        {
            return new List<ProjectDto>();


            //return new List<ProjectDto>
            //{
            //    new ProjectDto
            //    {
            //        Id = 1,
            //        Name = "Project 1",
            //        CreationDate = DateTime.Now,
            //        Description = "test desc 1",
            //        IsDeleted = false
            //    },
            //    new ProjectDto
            //    {
            //        Id = 2,
            //        Name = "Project 2",
            //        CreationDate = DateTime.Now,
            //        Description = "test desc 2",
            //        IsDeleted = false
            //    },
            //    new ProjectDto
            //    {
            //        Id = 3,
            //        Name = "Project 3",
            //        CreationDate = DateTime.Now,
            //        Description = "test desc 3",
            //        IsDeleted = false
            //    },
            //    new ProjectDto
            //    {
            //        Id = 4,
            //        Name = "Project 4",
            //        CreationDate = DateTime.Now,
            //        Description = "test desc 4",
            //        IsDeleted = false
            //    },
            //};
        }
    }
}
