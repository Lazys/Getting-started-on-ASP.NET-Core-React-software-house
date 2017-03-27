using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoftwareHouse.Contract.Interfaces;

namespace SoftwareHouse.Web.Controllers.API
{
    [Route("api/[controller]")]
    [Authorize]
    public class ProjectsController : Controller
    {
        private IProjectsService _projectsService;

        public ProjectsController(IProjectsService projectsService)
        {
            _projectsService = projectsService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Json(_projectsService.GetAll());
        }
    }
}
